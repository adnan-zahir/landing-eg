import { FC } from "react";
import { Row, Col, Empty, Typography } from "antd";
import ContactForm from "./ContactForm";

const { Text } = Typography;

const Contact: FC = () => {
  return (
    <div className="contact container">
      <Row justify="space-around" align="middle" gutter={12}>
        <Col span={8}>
          <div
            style={{
              height: "100%",
              padding: "3em 1em",
              backgroundColor: "#BC412C",
            }}
          >
            <h2 className="contact-title">Contact</h2>
            <Empty
              description={
                <Text style={{ color: "#fff" }} italic>
                  Let us know what you think!
                </Text>
              }
            />
          </div>
        </Col>
        <Col span={16}>
          <ContactForm />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
