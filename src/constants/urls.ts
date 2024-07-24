// import {config} from 'wallet/src/config';

const config = {
  uniswapApiBaseUrl: "",
};

export const uniswapUrls = {
  helpUrl: "https://support.uniswap.org",
  apiBaseUrl: getUniswapApiBaseUrl(),
  appBaseUrl: "https://uniswap.org/app",
  gasServiceUrl: getUniswapGasServiceUrl(),
  routingApiUrl: getUniswapRoutingApiUrl(),
  graphQLUrl: getUniswapGraphQLUrl(),
  trmUrl: getUniswapTrmUrl(),
  amplitudeProxyUrl: getUniswapAmplitudeProxyUrl(),
  termsOfServiceUrl: "https://uniswap.org/terms-of-service",
  privacyPolicyUrl: "https://uniswap.org/privacy-policy",
  nftUrl: "https://app.uniswap.org/#/nfts",
};

function getUniswapApiBaseUrl(): string {
  return config.uniswapApiBaseUrl;
}

function getUniswapRoutingApiUrl(): string {
  return `${config.uniswapApiBaseUrl}/v1`;
}

function getUniswapGasServiceUrl(): string {
  return `${config.uniswapApiBaseUrl}/v1/gas-fee`;
}

function getUniswapGraphQLUrl(): string {
  return `${config.uniswapApiBaseUrl}/v1/graphql`;
}

function getUniswapTrmUrl(): string {
  return `${config.uniswapApiBaseUrl}/v1/screen`;
}

function getUniswapAmplitudeProxyUrl(): string {
  return `${config.uniswapApiBaseUrl}/v1/amplitude-proxy`;
}

export const TOKEN_WARNING_HELP_PAGE_URL = `${uniswapUrls.helpUrl}/hc/en-us/articles/8723118437133-What-are-token-warnings-`;

export const SWAP_SLIPPAGE_HELP_PAGE_URL = `${uniswapUrls.helpUrl}/hc/en-us/articles/8643879653261-What-is-Price-Slippage-`;

export const APP_STORE_LINK =
  "https://apps.apple.com/us/app/bluemove-nft-marketplace/id6444072927";

export const APP_FEEDBACK_LINK = "https://bluemove.net/contact";

export const RECOVERY_PHRASE_HELP_URL = `${uniswapUrls.helpUrl}/hc/en-us/articles/11380692567949-How-to-import-my-recovery-phrase-`;

export const UNISWAP_HELP_CENTER_WALLET_URL = `${uniswapUrls.helpUrl}/hc/en-us/categories/11301970439565-Uniswap-Wallet`;
