import type { FC } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import SiteMap from "./Modals/SiteMap";

const ModalVisibility: FC = () => {
  const { siteMapModalVisibility } = useReduxSelector((state) => state.modal);
  return <>{siteMapModalVisibility && <SiteMap />}</>;
};

export default ModalVisibility;
