// TODO(MOB-204): reduce file length
// consider splitting into multiple files
/* eslint-disable max-lines */
import React from "react";
import { useAppDispatch, useAppSelector, useAppTheme } from "app/hooks";
// import {store} from 'app/store';
// import {
//   DappLogoWithTxStatus,
//   LogoWithTxStatus,
// } from "components/CurrencyLogo/LogoWithTxStatus";
// import { NetworkLogo } from "components/CurrencyLogo/NetworkLogo";
// import {SplitLogo} from 'components/CurrencyLogo/SplitLogo';
// import { ScannerModalState } from "components/QRCodeScanner/constants";
// import { AssetType } from "entity/assets";
// import { modalsActions } from "reducer/modalsReducer";
// import {useNFT} from 'features/nfts/hooks';
import { NotificationToast } from "features/notifications/NotificationToast";
import {
  AppErrorNotification,
  AppNotificationDefault,
  ApproveTxNotification,
  AppSuccessNotification,
  ChangeNFTVisibilityNotification,
  CopyNotification,
  CopyNotificationType,
  SwapNetworkNotification as SwapNetworkNotificationType,
  SwapTxNotification,
  TransactionNotificationBase,
  TransferCurrencyTxNotification,
  TransferNFTTxNotification,
  WalletConnectNotification,
  WrapTxNotification,
} from "features/notifications/types";
// import {
//   formApproveNotificationTitle,
//   formSwapNotificationTitle,
//   formTransferCurrencyNotificationTitle,
//   formTransferNFTNotificationTitle,
//   formUnknownTxTitle,
//   formWCNotificationTitle,
//   formWrapNotificationTitle,
// } from 'features/notifications/utils';
// import { ModalName } from "features/telemetry/constants";
// import {
//   useCurrencyInfo,
//   useNativeCurrencyInfo,
//   useWrappedNativeCurrencyInfo,
// } from "features/tokens/useCurrencyInfo";
// import {
//   useCreateSwapFormState,
//   useCreateWrapFormState,
// } from 'features/transactions/hooks';
// import {
//   TransactionStatus,
//   TransactionType,
// } from "features/transactions/types";
// import { selectActiveAccountAddress } from "features/wallet/selectors";
// import {WalletConnectEvent} from 'features/walletConnect/saga';
import CheckCircle from "assets/icons/check-right.svg";
import ErrorIcon from "assets/icons/close.svg";

// import EyeOffIcon from "assets/icons/eye-off.svg";
// import EyeIcon from "assets/icons/eye.svg";
import { iconSizes } from "styles/sizing";
// import {CHAIN_INFO} from 'wallet/constants/chains';
// import {toSupportedChainId} from 'wallet/utils/chainId';
// import {buildCurrencyId} from 'wallet/utils/currencyId';

export const NOTIFICATION_ICON_SIZE = iconSizes.icon36;

// Helpers to preload profile data, and dismiss modals and navigate
// const useNavigateToProfileTab = (
//   address: string | undefined,
// ): {
//   onPressIn: () => void;
//   onPress: () => void;
// } => {
//   const {preload, navigate} = useEagerActivityNavigation();

//   const onPressIn = (): void => {
//     if (!address) return;
//     preload(address);
//   };

//   const onPress = (): void => {
//     if (!address) return;
//     navigate();
//     store.dispatch(closeAllModals());
//   };

//   return {
//     onPressIn,
//     onPress,
//   };
// };

// export function WCNotification({
//   notification,
// }: {
//   notification: WalletConnectNotification;
// }): JSX.Element {
//   const {imageUrl, chainId, address, event, hideDelay, dappName} = notification;
//   const dispatch = useAppDispatch();
//   const validChainId = toSupportedChainId(chainId);
//   const title = formWCNotificationTitle(notification);

//   const useSmallDisplayEvents = [
//     WalletConnectEvent.Connected,
//     WalletConnectEvent.Disconnected,
//     WalletConnectEvent.NetworkChanged,
//   ];
//   const useSmallDisplay = useSmallDisplayEvents.includes(event);

//   const icon = (
//     <DappLogoWithTxStatus
//       chainId={validChainId}
//       dappImageUrl={imageUrl}
//       dappName={dappName}
//       event={event}
//       size={useSmallDisplay ? iconSizes.icon24 : NOTIFICATION_ICON_SIZE}
//     />
//   );

//   const onPressNotification = (): void => {
//     dispatch(
//       openModal({
//         name: ModalName.WalletConnectScan,
//         initialState: ScannerModalState.ConnectedDapps,
//       }),
//     );
//   };

//   return (
//     <NotificationToast
//       address={address}
//       hideDelay={hideDelay}
//       icon={icon}
//       title={title}
//       useSmallDisplay={useSmallDisplay}
//       onPress={onPressNotification}
//     />
//   );
// }

// export function ApproveNotification({
//   notification: {
//     address,
//     chainId,
//     tokenAddress,
//     spender,
//     txStatus,
//     txType,
//     hideDelay,
//   },
// }: {
//   notification: ApproveTxNotification;
// }): JSX.Element {
//   const {onPress, onPressIn} = useNavigateToProfileTab(address);

//   const currencyInfo = useCurrencyInfo(buildCurrencyId(chainId, tokenAddress));
//   const title = formApproveNotificationTitle(
//     txStatus,
//     currencyInfo?.currency,
//     tokenAddress,
//     spender,
//   );
//   const icon = (
//     <LogoWithTxStatus
//       assetType={AssetType.Currency}
//       chainId={chainId}
//       currencyInfo={currencyInfo}
//       size={NOTIFICATION_ICON_SIZE}
//       txStatus={txStatus}
//       txType={txType}
//     />
//   );

//   return (
//     <NotificationToast
//       address={address}
//       hideDelay={hideDelay}
//       icon={icon}
//       title={title}
//       onPress={onPress}
//       onPressIn={onPressIn}
//     />
//   );
// }

// export function SwapNotification({
//   notification: {
//     chainId,
//     txId,
//     txStatus,
//     inputCurrencyId,
//     inputCurrencyAmountRaw,
//     outputCurrencyId,
//     outputCurrencyAmountRaw,
//     tradeType,
//     address,
//     hideDelay,
//   },
// }: {
//   notification: SwapTxNotification;
// }): JSX.Element {
//   const inputCurrencyInfo = useCurrencyInfo(inputCurrencyId);
//   const outputCurrencyInfo = useCurrencyInfo(outputCurrencyId);
//   const title = formSwapNotificationTitle(
//     txStatus,
//     tradeType,
//     inputCurrencyInfo?.currency,
//     outputCurrencyInfo?.currency,
//     inputCurrencyId,
//     outputCurrencyId,
//     inputCurrencyAmountRaw,
//     outputCurrencyAmountRaw,
//   );

//   const swapFormState = useCreateSwapFormState(address, chainId, txId);
//   const dispatch = useAppDispatch();
//   const {t} = useTranslation();
//   const retryButton =
//     txStatus === TransactionStatus.Failed
//       ? {
//           title: t('Retry'),
//           onPress: (): void => {
//             dispatch(closeModal({name: ModalName.Swap}));
//             dispatch(
//               openModal({
//                 name: ModalName.Swap,
//                 initialState: swapFormState ?? undefined,
//               }),
//             );
//           },
//         }
//       : undefined;

//   const {onPress, onPressIn} = useNavigateToProfileTab(address);

//   const icon = (
//     <SplitLogo
//       chainId={chainId}
//       inputCurrencyInfo={inputCurrencyInfo}
//       outputCurrencyInfo={outputCurrencyInfo}
//       size={NOTIFICATION_ICON_SIZE}
//     />
//   );

//   return (
//     <NotificationToast
//       actionButton={retryButton}
//       address={address}
//       hideDelay={hideDelay}
//       icon={icon}
//       title={title}
//       onPress={onPress}
//       onPressIn={onPressIn}
//     />
//   );
// }

// export function WrapNotification({
//   notification: {
//     txId,
//     txStatus,
//     currencyAmountRaw,
//     address,
//     hideDelay,
//     unwrapped,
//     chainId,
//   },
// }: {
//   notification: WrapTxNotification;
// }): JSX.Element {
//   const nativeCurrencyInfo = useNativeCurrencyInfo(chainId);
//   const wrappedCurrencyInfo = useWrappedNativeCurrencyInfo(chainId);
//   const inputCurrencyInfo = unwrapped
//     ? wrappedCurrencyInfo
//     : nativeCurrencyInfo;
//   const outputCurrencyInfo = unwrapped
//     ? nativeCurrencyInfo
//     : wrappedCurrencyInfo;

//   const title = formWrapNotificationTitle(
//     txStatus,
//     inputCurrencyInfo?.currency,
//     outputCurrencyInfo?.currency,
//     currencyAmountRaw,
//     unwrapped,
//   );

//   const wrapFormState = useCreateWrapFormState(
//     address,
//     chainId,
//     txId,
//     inputCurrencyInfo?.currency,
//     outputCurrencyInfo?.currency,
//   );

//   const dispatch = useAppDispatch();
//   const {t} = useTranslation();
//   const retryButton =
//     txStatus === TransactionStatus.Failed
//       ? {
//           title: t('Retry'),
//           onPress: (): void => {
//             dispatch(closeModal({name: ModalName.Swap}));
//             dispatch(
//               openModal({
//                 name: ModalName.Swap,
//                 initialState: wrapFormState ?? undefined,
//               }),
//             );
//           },
//         }
//       : undefined;

//   const {onPress, onPressIn} = useNavigateToProfileTab(address);

//   const icon = (
//     <SplitLogo
//       chainId={chainId}
//       inputCurrencyInfo={inputCurrencyInfo}
//       outputCurrencyInfo={outputCurrencyInfo}
//       size={NOTIFICATION_ICON_SIZE}
//     />
//   );

//   return (
//     <NotificationToast
//       actionButton={retryButton}
//       address={address}
//       hideDelay={hideDelay}
//       icon={icon}
//       title={title}
//       onPress={onPress}
//       onPressIn={onPressIn}
//     />
//   );
// }

// export function TransferCurrencyNotification({
//   notification,
// }: {
//   notification: TransferCurrencyTxNotification;
// }): JSX.Element {
//   const {
//     address,
//     assetType,
//     chainId,
//     tokenAddress,
//     currencyAmountRaw,
//     txType,
//     txStatus,
//     hideDelay,
//   } = notification;
//   const senderOrRecipient =
//     txType === TransactionType.Send
//       ? notification.recipient
//       : notification.sender;
//   const {name: ensName} = useENS(chainId, senderOrRecipient);
//   const currencyInfo = useCurrencyInfo(buildCurrencyId(chainId, tokenAddress));

//   const title = formTransferCurrencyNotificationTitle(
//     txType,
//     txStatus,
//     currencyInfo?.currency,
//     tokenAddress,
//     currencyAmountRaw,
//     ensName ?? senderOrRecipient,
//   );

//   const {onPress, onPressIn} = useNavigateToProfileTab(address);

//   const icon = (
//     <LogoWithTxStatus
//       assetType={assetType}
//       chainId={chainId}
//       currencyInfo={currencyInfo}
//       size={NOTIFICATION_ICON_SIZE}
//       txStatus={txStatus}
//       txType={txType}
//     />
//   );

//   return (
//     <NotificationToast
//       address={address}
//       hideDelay={hideDelay}
//       icon={icon}
//       title={title}
//       onPress={onPress}
//       onPressIn={onPressIn}
//     />
//   );
// }

// export function TransferNFTNotification({
//   notification,
// }: {
//   notification: TransferNFTTxNotification;
// }): JSX.Element {
//   const {
//     address,
//     assetType,
//     chainId,
//     tokenAddress,
//     tokenId,
//     txType,
//     txStatus,
//     hideDelay,
//   } = notification;
//   const userAddress = useAppSelector(selectActiveAccountAddress) || '';
//   const senderOrRecipient =
//     txType === TransactionType.Send
//       ? notification.recipient
//       : notification.sender;
//   const nftOwner =
//     txType === TransactionType.Send ? notification.recipient : userAddress;
//   const {data: nft} = useNFT(nftOwner, tokenAddress, tokenId);
//   const {name: ensName} = useENS(chainId, senderOrRecipient);
//   const title = formTransferNFTNotificationTitle(
//     txType,
//     txStatus,
//     nft,
//     tokenAddress,
//     tokenId,
//     ensName ?? senderOrRecipient,
//   );

//   const {onPress, onPressIn} = useNavigateToProfileTab(address);

//   const icon = (
//     <LogoWithTxStatus
//       assetType={assetType}
//       chainId={chainId}
//       nftImageUrl={nft?.thumbnail?.url ?? undefined}
//       size={NOTIFICATION_ICON_SIZE}
//       txStatus={txStatus}
//       txType={txType}
//     />
//   );

//   return (
//     <NotificationToast
//       address={address}
//       hideDelay={hideDelay}
//       icon={icon}
//       title={title}
//       onPress={onPress}
//       onPressIn={onPressIn}
//     />
//   );
// }

// export function UnknownTxNotification({
//   notification: {address, chainId, tokenAddress, txStatus, txType, hideDelay},
// }: {
//   notification: TransactionNotificationBase;
// }): JSX.Element {
//   const {name: ensName} = useENS(chainId, tokenAddress);
//   const currencyInfo = useCurrencyInfo(
//     tokenAddress ? buildCurrencyId(chainId, tokenAddress) : undefined,
//   );
//   const title = formUnknownTxTitle(txStatus, tokenAddress, ensName);
//   const icon = (
//     <LogoWithTxStatus
//       assetType={AssetType.Currency}
//       chainId={chainId}
//       currencyInfo={currencyInfo}
//       size={NOTIFICATION_ICON_SIZE}
//       txStatus={txStatus}
//       txType={txType}
//     />
//   );

//   const {onPress, onPressIn} = useNavigateToProfileTab(address);

//   return (
//     <NotificationToast
//       address={address}
//       hideDelay={hideDelay}
//       icon={icon}
//       title={title}
//       onPress={onPress}
//       onPressIn={onPressIn}
//     />
//   );
// }

export function ErrorNotification({
  notification: { address, errorMessage, hideDelay },
}: {
  notification: AppErrorNotification;
}): JSX.Element {
  const theme = useAppTheme();
  return (
    <NotificationToast
      address={address}
      hideDelay={hideDelay}
      title={errorMessage}
      icon={
        <ErrorIcon
          color={theme.colors.error}
          height={iconSizes.icon24}
          strokeWidth={1.5}
          width={iconSizes.icon24}
        />
      }
    />
  );
}

export function SuccessNotification({
  notification: { address, message, hideDelay },
}: {
  notification: AppSuccessNotification;
}): JSX.Element {
  const theme = useAppTheme();
  return (
    <NotificationToast
      address={address}
      hideDelay={hideDelay}
      title={message}
      icon={
        <CheckCircle
          color={theme.colors.up}
          height={iconSizes.icon24}
          strokeWidth={1.5}
          width={iconSizes.icon24}
        />
      }
    />
  );
}

export function DefaultNotification({
  notification: { address, title, hideDelay },
}: {
  notification: AppNotificationDefault;
}): JSX.Element {
  return (
    <NotificationToast address={address} hideDelay={hideDelay} title={title} />
  );
}

export function CopiedNotification({
  notification: { hideDelay = 2000, copyType },
}: {
  notification: CopyNotification;
}): JSX.Element | null {
  const theme = useAppTheme();

  let title;
  switch (copyType) {
    case CopyNotificationType.Address:
      title = "Address copied";
      break;
    case CopyNotificationType.TransactionId:
      title = "Transaction ID copied";
      break;
    case CopyNotificationType.Image:
      title = "Image copied";
      break;
    case CopyNotificationType.UID:
      title = "UID copied";
      break;
  }

  return (
    <NotificationToast
      useSmallDisplay
      hideDelay={hideDelay}
      icon={
        <CheckCircle
          color={theme.colors.up}
          height={iconSizes.icon24}
          strokeWidth={1.5}
          width={iconSizes.icon24}
        />
      }
      title={title}
    />
  );
}

// export function SwapNetworkNotification({
//   notification: {chainId, hideDelay},
// }: {
//   notification: SwapNetworkNotificationType;
// }): JSX.Element {
//   const {t} = useTranslation();
//   const network = CHAIN_INFO[chainId].label;

//   return (
//     <NotificationToast
//       useSmallDisplay
//       hideDelay={hideDelay}
//       icon={<NetworkLogo chainId={chainId} size={iconSizes.icon24} />}
//       title={t('Swapping on {{ network }}', {network})}
//     />
//   );
// }

// export function NftVisibilityChangeNotification({
//   notification: {visible, hideDelay},
// }: {
//   notification: ChangeNFTVisibilityNotification;
// }): JSX.Element {
//   const {t} = useTranslation();
//   const theme = useAppTheme();

//   return (
//     <NotificationToast
//       useSmallDisplay
//       hideDelay={hideDelay}
//       icon={
//         visible ? (
//           <EyeOffIcon
//             color={theme.colors.textPrimary}
//             height={theme.iconSizes.icon24}
//             width={theme.iconSizes.icon24}
//           />
//         ) : (
//           <EyeIcon
//             color={theme.colors.textPrimary}
//             height={theme.iconSizes.icon24}
//             width={theme.iconSizes.icon24}
//           />
//         )
//       }
//       title={visible ? t('NFT hidden') : t('NFT unhidden')}
//     />
//   );
// }
