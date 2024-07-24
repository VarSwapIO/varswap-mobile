import React from "react";
// import {AccountSwitcherModal} from 'app/modals/AccountSwitcherModal';
// import {ExperimentsModal} from 'app/modals/ExperimentsModal';
// import {ExploreModal} from 'app/modals/ExploreModal';
// import {SwapModal} from 'app/modals/SwapModal';
// import ChooseNetworkModal from "app/modals/ChooseNetworkModal";
import { LazyModalRenderer } from "app/modals/utils";
// import {ForceUpgradeModal} from 'components/forceUpgrade/ForceUpgradeModal';
// import {WalletConnectModals} from 'components/walletConnect/WalletConnectModals';
// import {LockScreenModal} from 'features/authentication/LockScreenModal';
// import {FiatOnRampModal} from 'features/fiatOnRamp/FiatOnRampModal';

import { ModalName } from "features/telemetry/constants";
// import AuthenticatorPasscodeModal from "./AuthenticatorPasscodeModal";
// import ChooseWithdrawNetworkModal from "./ChooseWithdrawNetworkModal";
// import ChooseMethodWithdrawModal from "./ChooseMethodWithdrawModal";

export function AppModals(): JSX.Element {
  return (
    <>
      {/* <LazyModalRenderer name={ModalName.Experiments}>
        <ExperimentsModal />
      </LazyModalRenderer> */}

      {/* <LazyModalRenderer name={ModalName.FiatOnRamp}>
        <FiatOnRampModal />
      </LazyModalRenderer> */}

      {/* <LazyModalRenderer name={ModalName.Explore}>
        <ExploreModal />
      </LazyModalRenderer> */}

      {/* <ForceUpgradeModal /> */}

      {/* <LockScreenModal /> */}

      {/* <LazyModalRenderer name={ModalName.Swap}>
        <SwapModal />
      </LazyModalRenderer> */}

      {/* <LazyModalRenderer name={ModalName.Send}>
        <TransferTokenModal />
      </LazyModalRenderer> */}

      {/* <WalletConnectModals /> */}
      {/* 
      <LazyModalRenderer name={ModalName.AccountSwitcher}>
        <AccountSwitcherModal />
      </LazyModalRenderer> */}

      {/* <LazyModalRenderer name={ModalName.Common}>
        <CommonModal />
      </LazyModalRenderer> */}
      {/* <LazyModalRenderer name={ModalName.ChooseNetwork}>
        <ChooseNetworkModal />
      </LazyModalRenderer>
      <LazyModalRenderer name={ModalName.ChooseWithdrawNetwork}>
        <ChooseWithdrawNetworkModal />
      </LazyModalRenderer>
      <LazyModalRenderer name={ModalName.ChooseMethodWithdraw}>
        <ChooseMethodWithdrawModal />
      </LazyModalRenderer> */}
      {/* <LazyModalRenderer name={ModalName.AuthenticatorPasscode}>
        <AuthenticatorPasscodeModal />
      </LazyModalRenderer> */}
    </>
  );
}
