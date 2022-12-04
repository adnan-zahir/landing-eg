import { FC } from "react";
import { Carousel, Image, Button, Space } from "antd";

import Caro1 from "../assets/carousel1_l.jpeg";
import Caro2 from "../assets/carousel2_l.jpeg";
import Caro3 from "../assets/carousel3_l.jpeg";

const Jumbotron: FC = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-overlay">
        <Space direction="vertical" size="large">
          <div className="title">
            <h3>ALMIGHTY NEW YEAR</h3>
            <h1>Get one with just 80% the price.</h1>
            <h2>Become a god</h2>
          </div>
          <Button type="primary" size="large" danger>
            Shop Now
          </Button>
        </Space>
        <div>
          <div>
            <h2>One</h2>
            <p>Example sentence one is here</p>
          </div>
          <div>
            <h2>Two</h2>
            <p>Example sentence one is here</p>
          </div>
          <div>
            <h2>Three</h2>
            <p>Example sentence three is here</p>
          </div>
        </div>
      </div>
      <Carousel autoplay>
        <div>
          <Image
            src={Caro1}
            width="100%"
            height={600}
            style={{ objectFit: "cover" }}
            preview={false}
          />
        </div>
        <div>
          <Image
            src={Caro2}
            width="100%"
            height={600}
            style={{ objectFit: "cover" }}
            preview={false}
          />
        </div>
        <div>
          <Image
            src={Caro3}
            width="100%"
            height={600}
            style={{ objectFit: "cover" }}
            preview={false}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Jumbotron;
