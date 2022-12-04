import { FC } from "react";
import { Space, Button } from "antd";

const Discount: FC = () => {
  return (
    <div className="discount container">
      <Space direction="vertical" size="small">
        <div className="title">
          <h2>Save up to $2 per T-Shirt now!</h2>
        </div>
        <Button type="primary" size="large" danger>
          Get now
        </Button>
      </Space>
    </div>
  );
};

export default Discount;
