import type { FC } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import SiteMap from "./Modals/SiteMap";
import Authorization from "./Modals/Authorization";
import InProcessModal from "./Modals/inProcess";

const ModalVisibility: FC = () => {
  const {
    siteMapModalVisibility,
    authModalVisibility,
    inProcessModalVisibility,
  } = useReduxSelector((state) => state.modal);
  return (
    <>
      {/* Mobile Humburger menu */}
      {siteMapModalVisibility && <SiteMap />}
      {/* Auth based modal */}
      {authModalVisibility.open && <Authorization />}
      {/* InProcess modal */}
      {inProcessModalVisibility && <InProcessModal />}
    </>
  );
};

export default ModalVisibility;
