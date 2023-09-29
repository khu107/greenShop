import { Modal, Spin } from "antd";
import type { FC } from "react";
import { useReduxSelector } from "../../../../hooks/useRedux";

const InProcessModal: FC = () => {
  const { inProcessModalVisibility } = useReduxSelector((state) => state.modal);
  return (
    <Modal
      open={inProcessModalVisibility}
      footer={false}
      title="Authorization"
      closable={false}
    >
      <div className="flex w-full flex-col items-center">
        <Spin size="large" />
        <h3 className="mt-[15px] font-bold">
          Authentication is in the process...
        </h3>
      </div>
    </Modal>
  );
};

export default InProcessModal;
