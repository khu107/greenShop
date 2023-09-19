import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootStore, DispatchType } from "../../redux";

// export const useReduxDispatch = () => useDispatch<DispatchType>();
export const useReduxDispatch = (): DispatchType => useDispatch<DispatchType>();
export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
