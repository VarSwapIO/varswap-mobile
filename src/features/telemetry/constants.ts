/**
 * Event names that can occur in this application
 *
 * Subject to change as new features are added and new events are defined and logged.
 */

/**
 * Known sections to provide telemetry context.
 * Can help disambiguate low-level elements that may share a name.
 * For example, a `back` button in a modal will have the same
 * `elementName`, but a different `section`.
 */
export const enum SectionName {
  ZkSyncCollectionsActivityTab = "zk-collections-activity-tab",
  ZkSyncCollectionsItemsTab = "zk-collections-items-tab",
  CurrencyInputPanel = "currency-input-panel",
  CurrencyOutputPanel = "currency-output-panel",
  ExploreFavoriteTokensSection = "explore-favorite-tokens-section",
  ExploreSearch = "explore-search",
  ExploreTopTokensSection = "explore-top-tokens-section",
  ImportAccountForm = "import-account-form",
  ZkSyncLaunchpadAllTab = "zk-launchpad-featured-tab",
  ZkSyncLaunchpadInProgressTab = "zk-launchpad-upcoming-tab",
  ZkSyncLaunchpadCompletedTab = "zk-launchpad-ended-tab",
  ZkSyncNotificationAllTab = "zk-notification-all-tab",
  ZkSyncNotificationUnreadTab = "zk-notification-unread-tab",

  HomeFavoritesTab = "home-favorites-tab",
  HomeHotTab = "home-hot-tab",
  HomeGainersTab = "home-gainers-tab",
  HomeLosersTab = "home-losers-tab",
  HomeNewListingsTab = "home-new-listings-tab",

  MarketFavoritesTab = "market-favorites-tab",
  MarketPreTab = "market-pre-tab",
  MarketOTCTab = "market-OTC-tab",
  MarketPointTab = "market-point-tab",
  MarketNewListingsTab = "market-new-listings-tab",

  WalletOverviewTab = "wallet-overview-tab",
  WalletPreTab = "wallet-pre-tab",
  WalletOTCTab = "wallet-OTC-tab",
  WalletPointTab = "wallet-point-tab",

  WalletOverviewAccountTab = "wallet-overview-account-tab",
  WalletOverviewCryptoTab = "wallet-overview-crypto-tab",

  TradeConvertTab = "trade-convert-tab",
  TradePreTab = "trade-pre-tab",
  TradeOTCTab = "trade-OTC-tab",
  TradePointTab = "trade-point-tab",

  HistoryDepositsTab = "history-deposits-tab",
  HistoryWithdrawalsTab = "history-withdrawals-tab",
  HistoryTradesTab = "history-trades-tab",
  HistoryTransferTab = "history-transfer-tab",
  HistoryConvertTab = "history-convert-tab",
  HistoryReferralTab = "history-referral-tab",

  Sidebar = "sidebar",
  SwapForm = "swap-form",
  SwapPending = "swap-pending",
  SwapReview = "swap-review",
  ZkSyncStatRankingTab = "zk-stat-ranking-tab",
  ZkSyncStatTopTraderTab = "zk-stat-top-trader-tab",
  TokenSelector = "token-selector",
  TransferForm = "transfer-form",
  TransferPending = "transfer-pending",
  TransferReview = "transfer-review",
  ZkSyncWalletActivityTab = "zk-wallet-activity-tab",
  ZkSyncWalletTokensTab = "zk-wallet-tokens-tab",
  // alphabetize additional values.
}

/** Known modals for telemetry purposes. */
export const enum ModalName {
  AccountEdit = "account-edit-modal",
  AccountSwitcher = "account-switcher-modal",
  AddWallet = "add-wallet-modal",
  AuthenticatorPasscode = "authenticator-passcode-modal",
  BlockedAddress = "blocked-address",
  Buy = "buy-modal",
  ChangePrice = "change-price-modal",
  ChooseNetwork = "choose-network-modal",
  ChooseWithdrawNetwork = "choose-withdraw-network-modal",
  ChooseMethodWithdraw = "choose-method-withdraw-network-modal",
  Common = "common-modal",
  Experiments = "experiments",
  Explore = "explore-modal",
  FaceIDWarning = "face-id-warning",
  FiatOnRamp = "fiat-on-ramp",
  ForceUpgradeModal = "force-upgrade-modal",
  ICloudBackupInfo = "icloud-backup-info-modal",
  Login = "login-modal",
  Mint = "mint-modal",
  NetworkSelector = "network-selector-modal",
  NetworkSwitcher = "network-switcher-modal",
  NftCollection = "nft-collection",
  Offer = "offer-modal",
  RecoveryWarning = "recovery-warning",
  RemoveWallet = "remove-wallet-modal",
  RemoveSeedPhraseWarningModal = "remove-seed-phrase-warning-modal",
  ReimportUninstall = "reimport-uninstall-modal",
  ScreenshotWarning = "screenshot-warning",
  Send = "send-modal",
  SendWarning = "send-warning-modal",
  SlippageInfo = "slippage-info-modal",
  Swap = "swap-modal",
  SwapSettings = "swap-settings-modal",
  SwapWarning = "swap-warning-modal",
  Sell = "sell-modal",
  GasEstimateWarning = "gas-estimate-warning-modal",
  TokenWarningModal = "token-warning-modal",
  TooltipContent = "tooltip-content",
  TransactionActions = "transaction-actions",
  ViewSeedPhraseWarning = "view-seed-phrase-warning",
  ViewPrivateKeyWarning = "view-private-key-warning",
  WalletConnectScan = "wallet-connect-scan-modal",
  WCSignRequest = "wc-sign-request-modal",
  WCSwitchChainRequest = "wc-switch-chain-request-modal",
  WCViewOnlyWarning = "wc-view-only-warning-modal",
  // alphabetize additional values.
}

/**
 * Known element names for telemetry purposes.
 * Use to identify low-level components given a TraceContext
 */

export const enum ElementName {
  AcceptNewRate = "accept-new-rate",
  AccountCard = "account-card",
  AddManualBackup = "add-manual-backup",
  AddViewOnlyWallet = "add-view-only-wallet",
  AddiCloudBackup = "add-icloud-backup",
  AddBackupNone = "add-backup-none",
  Back = "back",
  Buy = "buy",
  Cancel = "cancel",
  Confirm = "confirm",
  Continue = "continue",
  Copy = "copy",
  CreateAccount = "create-account",
  Disconnect = "disconnect",
  Edit = "edit",
  EmptyStateBuy = "empty-state-buy",
  EmptyStateGetStarted = "empty-state-get-started",
  EmptyStateImport = "empty-state-get-import",
  EmptyStateReceive = "empty-state-receive",
  Enable = "enable",
  EtherscanView = "etherscan-view",
  Favorite = "favorite",
  FiatOnRampTokenSelector = "fiat-on-ramp-token-selector",
  FiatOnRampWidgetButton = "fiat-on-ramp-widget-button",
  GetHelp = "get-help",
  GetStarted = "get-started",
  ImportAccount = "import",
  Manage = "manage",
  ManageConnections = "manage-connections",
  MakeOffer = "make-offer",
  Mint = "mint",
  MoonpayExplorerView = "moonpay-explorer-view",
  NetworkButton = "network-button",
  Next = "next",
  Notifications = "notifications",
  OK = "ok",
  OnboardingCreateWallet = "onboarding-create-wallet",
  OnboardingImportBackup = "onboarding-import-backup",
  OnboardingImportSeedPhrase = "onboarding-import-seed-phrase",
  OnboardingImportWallet = "onboarding-import-wallet",
  OnboardingImportWatchedAccount = "onboarding-import-watched-account",
  OpenSettingsButton = "open-settings-button",
  QRCodeModalToggle = "qr-code-modal-toggle",
  Receive = "receive",
  Remove = "remove",
  RestoreFromICloud = "restore-from-icloud",
  ReviewSwap = "review-swap",
  ReviewTransfer = "review-transfer",
  SearchEtherscanItem = "search-etherscan-item",
  SearchNFTCollectionItem = "search-nft-collection-item",
  SearchTokenItem = "search-token-item",
  SearchWalletItem = "search-wallet-item",
  SelectColor = "select-color",
  SelectRecipient = "select-recipient",
  Send = "send",
  SetMax = "set-max",
  Settings = "settings",
  Skip = "skip",
  Submit = "submit",
  Swap = "swap",
  SwapSettings = "swap-settings",
  SwitchCurrenciesButton = "switch-currencies-button",
  TimeFrame1H = "time-frame-1H",
  TimeFrame1D = "time-frame-1D",
  TimeFrame1W = "time-frame-1W",
  TimeFrame1M = "time-frame-1M",
  TimeFrame1Y = "time-frame-1Y",
  TokenInputSelector = "token-input-selector",
  TokenLinkEtherscan = "token-link-etherscan",
  TokenLinkTwitter = "token-link-twitter",
  TokenLinkWebsite = "token-link-website",
  TokenOutputSelector = "token-output-selector",
  TokenSelectorToggle = "token-selector-toggle",
  TokenWarningAccept = "token-warning-accept",
  Unwrap = "unwrap",
  WCDappSwitchAccount = "wc-dapp-switch-account",
  WCDappSwitchNetwork = "wc-dapp-switch-network",
  WCOpenDapp = "wc-open-dapp",
  WalletCard = "wallet-card",
  WalletConnectScan = "wallet-connect-scan",
  WalletQRCode = "wallet-qr-code",
  WalletSettings = "WalletSettings",
  Wrap = "wrap",
  // alphabetize additional values.
}

export const enum MarkNames {}

export enum UserPropertyName {
  ActiveWalletAddress = "active_wallet_address",
  ActiveWalletType = "active_wallet_type",
  AppOpenAuthMethod = "app_open_auth_method",
  AppVersion = "app_version",
  DarkMode = "is_dark_mode",
  IsCloudBackedUp = "is_cloud_backed_up",
  IsHideSmallBalancesEnabled = "is_hide_small_balances_enabled",
  IsHideSpamTokensEnabled = "is_hide_spam_tokens_enabled",
  IsPushEnabled = "is_push_enabled",
  TransactionAuthMethod = "transaction_auth_method",
  WalletSignerAccounts = `wallet_signer_accounts`,
  WalletSignerCount = "wallet_signer_count",
  WalletViewOnlyCount = "wallet_view_only_count",
  // alphabetize additional values.
}

// could add PIN in the future
export enum AuthMethod {
  FaceId = "FaceId",
  None = "None",
  TouchId = "TouchId",
  // alphabetize additional values.
}

/**
 * Known components' events that trigger callbacks.
 *
 * e.g OnFocus, OnLongPress, OnSubmit, etc.
 *
 * @example
 *  <TraceEvent events={[ReactNativeEvent.onPress]} element={name}>
 */
export enum ReactNativeEvent {
  OnPress = "onPress",
  // alphabetize additional values.
}
