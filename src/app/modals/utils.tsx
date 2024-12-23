import { useAppSelector } from "app/hooks";
import { ModalsState, selectModalState } from "reducer/modalsReducer";

/**
 * Delays evaluating `children` until modal is open
 * @param modalName name of the modal for which to track open state
 * @param WrappedComponent react node to render once modal opens
 */
export function LazyModalRenderer({
  name,
  children,
}: {
  name: keyof ModalsState;
  children: JSX.Element;
}): JSX.Element | null {
  const modalState = useAppSelector(selectModalState(name));
  if (!modalState.isOpen) {
    // avoid doing any work until the modal needs to be open
    return null;
  }

  return children;
}
