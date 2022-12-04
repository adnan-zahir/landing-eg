import { FC } from "react";
import { Typography, Image, Row, Col, Button } from "antd";

import ProfileImage from "../assets/profile.jpeg";

const { Paragraph } = Typography;

const Profile: FC = () => {
  return (
    <div className="profile container">
      <Row justify="space-around" align="middle" gutter={12}>
        <Col span={16}>
          <h2 className="profile-title">What is Mischerade?</h2>
          <Paragraph>
            Adipisicing est molestias obcaecati impedit qui. Accusantium aliquam
            at dolor alias minima perferendis magni? Reiciendis corporis labore
            provident ipsa debitis fugiat odit. Reiciendis ad quae cupiditate
            ipsum consequatur Architecto amet? Elit voluptates illum
            consequuntur exercitationem nulla nisi. Earum fugiat consequatur
            voluptate odit ipsam? Accusantium vitae magni omnis sapiente tenetur
            placeat, error quae. Aliquam dolorum omnis deleniti vero voluptatem?
            Nemo perferendis perspiciatis quasi velit eos! Fugit animi repellat
            non quibusdam numquam Vitae obcaecati repellat unde rem quasi
            debitis Est beatae magni.
          </Paragraph>
          <Button type="default" danger>
            Learn More
          </Button>
        </Col>
        <Col span={8}>
          <Image src={ProfileImage} />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
