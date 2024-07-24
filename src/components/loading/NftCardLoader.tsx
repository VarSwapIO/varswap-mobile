import React from "react";
import { Box, BoxProps } from "components/layout";

export function NftCardLoader({ ...props }: BoxProps): JSX.Element {
  return (
    <Box flex={1} justifyContent="flex-start" m="spacing4" {...props}>
      <Box
        aspectRatio={1}
        backgroundColor="background"
        borderRadius="rounded12"
        width="100%"
      />
    </Box>
  );
}
