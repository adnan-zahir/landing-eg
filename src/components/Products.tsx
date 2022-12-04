import { FC } from "react";
import { Divider, Row, Col, Image } from "antd";

import Placeholder from "../assets/placeholder.jpeg";

const Products: FC = () => {
  const productList = [
    { name: "Product Name", image: Placeholder },
    { name: "Product Name", image: Placeholder },
    { name: "Product Name", image: Placeholder },
    { name: "Product Name", image: Placeholder },
    { name: "Product Name", image: Placeholder },
    { name: "Product Name", image: Placeholder },
  ];

  return (
    <div className="products container">
      <Divider>
        <h2 className="products-title">Products</h2>
      </Divider>
      <Row gutter={[16, 16]}>
        {productList.map(({ name, image }, index) => (
          <Col span={8}>
            <div className="product-item">
              <div className="product-overlay">{name}</div>
              <Image
                src={image}
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
