import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

// import {TabIndex} from 'screens/HomeScreen';
import { Screens } from "screens/Screens";

export type AppStackParamList = {
  [Screens.Tabs]?: {};
  [Screens.Home]?: {};
  [Screens.Markets]?: {};
  [Screens.Trade]?: {};
  [Screens.OTC]?: {};
  [Screens.Wallet]?: {};
  [Screens.SettingsScreen]?: {};
  [Screens.ProfileScreen]?: {};
  [Screens.DepositScreen]?: {};
  [Screens.DepositDetailScreen]: {
    symbol: string;
    uri: string;
    id: number;
  };
  [Screens.WithdrawScreen]?: {};
  [Screens.WithdrawDetailScreen]: {
    symbol: string;
    uri: string;
    id: number;
  };
  [Screens.NotificationsScreen]?: {};
  [Screens.SecurityScreen]?: {};
  [Screens.AuthenticatorScreen]?: {};
  [Screens.AuthenticatorConfirmOTPScreen]?: {};
  [Screens.AuthenticatorConfirmPasscodeScreen]?: {};
  [Screens.AuthenticatorGenerationScreen]: {
    url: string;
    otp_secret?: string;
  };
  [Screens.TransactionHistoryScreen]?: {};
};

export type OnboardingStackParamList = {
  [Screens.LoginSocialScreen]?: {};
  [Screens.LoginScreen]?: {};
  [Screens.SignUpIntro]?: {};
  [Screens.SignUp]?: {};
  [Screens.ConfirmEmail]: {
    emailAddress: string;
    type?: string;
  };
  [Screens.ConfirmOTP]: {
    emailAddress: string;
    type?: string;
  };
  [Screens.CreatePassword]: {
    otp: string;
    type?: string;
  };
  [Screens.SignUpOutro]: {
    type?: string;
  };
  [Screens.ResetPassword]?: {};
  [Screens.OnboardingScreen]?: {};
};

export type MainAppStackParamList = {
  [Screens.OnboardingStack]?: {};
  [Screens.AppStack]?: {};
};

export type AppStackNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;
export type AppStackScreenProps = NativeStackScreenProps<AppStackParamList>;
export type AppStackScreenProp<Screen extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, Screen>;

export type OnboardingStackNavigationProp =
  NativeStackNavigationProp<OnboardingStackParamList>;
export type OnboardingStackScreenProps =
  NativeStackScreenProps<AppStackParamList>;
export type OnboardingStackScreenProp<
  Screen extends keyof OnboardingStackParamList
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;

export type RootParamList = AppStackParamList & OnboardingStackParamList;

export const useAppStackNavigation = (): AppStackNavigationProp =>
  useNavigation<AppStackNavigationProp>();

export const useOnboardingStackNavigation = (): OnboardingStackNavigationProp =>
  useNavigation<OnboardingStackNavigationProp>();
