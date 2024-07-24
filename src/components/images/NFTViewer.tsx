import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { ImageUri } from "components/images/ImageUri";
import { WebSvgUri } from "components/images/WebSvgUri";
import { Box } from "components/layout";
import { Text } from "components/Text";
import { uriToHttp } from "utils/uriToHttp";
import axios from "axios";

type Props = {
  uri: string | undefined;
  autoplay?: boolean;
  squareGridView?: boolean;
  maxHeight?: number;
  limitGIFSize?: number; // for certain Opensea assets, reduce the GIF size to boost animation grid layout performance
  placeholderContent?: string;
  imageDimensions?: { width: number; height: number } | undefined;
};

/**
 * Renders a remote NFT image or SVG and automatically expands to fill parent container
 */
export function NFTViewer({
  uri,
  autoplay = false,
  squareGridView = false,
  maxHeight,
  limitGIFSize,
  placeholderContent,
  imageDimensions,
}: Props): JSX.Element {
  const [imageUri, setImageUri] = useState(uri);

  const imageHttpUri = useMemo(
    () => (imageUri ? uriToHttp(imageUri)[0] : undefined),
    [imageUri]
  );

  const fallback = useMemo(
    () => (
      <Box
        alignItems="center"
        aspectRatio={1}
        bg="background"
        justifyContent="center"
        maxHeight={maxHeight ?? "100%"}
        width="100%"
      >
        <Text color="textSecondary" variant="small">
          {placeholderContent || "Content not available"}
        </Text>
      </Box>
    ),
    [placeholderContent, maxHeight]
  );

  if (!imageHttpUri) {
    // Sometimes Opensea does not return any asset, show placeholder
    return fallback;
  }

  if (imageHttpUri.endsWith(".svg")) {
    return squareGridView ? (
      <WebSvgUri autoplay={autoplay} uri={imageHttpUri} />
    ) : (
      <WebSvgUri autoplay={autoplay} maxHeight={maxHeight} uri={imageHttpUri} />
    );
  }

  /**
   * This is a hack to reduce the image size for certain gifs to improve performance (based on URL schema that most
   * animated NFTs on Opensea use).
   *
   * TODO: Ideally we need to find a way to get compressed images without having to change
   * source in data response.
   */
  const isGif = imageHttpUri.includes(".gif");

  const formattedUri =
    isGif && limitGIFSize
      ? convertGIFUriToSmallImageFormat(imageHttpUri, limitGIFSize)
      : imageHttpUri;

  // TODO(MOB-954):  handle more asset types (video, audio, etc.)

  const getMetadata = async () => {
    if (uri?.includes(".json")) {
      const { data } = await axios.get(uri);
      if (data?.image) setImageUri(data?.image);
    }
  };

  useEffect(() => {
    getMetadata();
  }, [uri]);

  return squareGridView ? (
    <ImageUri
      fallback={fallback}
      imageDimensions={imageDimensions}
      imageStyle={style.squareImageStyle}
      resizeMode="cover"
      // render as Blitmap to help GIFs recycle on scroll
      shouldRasterizeIOS={isGif && Boolean(limitGIFSize)}
      uri={formattedUri}
    />
  ) : (
    <ImageUri
      fallback={fallback}
      imageDimensions={imageDimensions}
      maxHeight={maxHeight}
      shouldRasterizeIOS={isGif && Boolean(limitGIFSize)}
      uri={formattedUri}
    />
  );
}

const style = StyleSheet.create({
  squareImageStyle: {
    height: "100%",
    width: "100%",
  },
});

// Query parameter used to set size of requested Opensea image source, 500 is the default size on
// many animated Opensea asset source uris
const OPENSEA_IMAGE_SIZE_QUERY_PARAM = "w=500";

function convertGIFUriToSmallImageFormat(
  uri: string,
  limitGIFSize: number
): string {
  if (uri.includes(OPENSEA_IMAGE_SIZE_QUERY_PARAM)) {
    return uri.replace(OPENSEA_IMAGE_SIZE_QUERY_PARAM, `w=${limitGIFSize}`);
  }
  return uri;
}
