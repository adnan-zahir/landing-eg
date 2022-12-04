import { FC } from "react";
import { Form, Input, Button } from "antd";

const { Item } = Form;

const ContactForm: FC = () => {
  return (
    <Form
      name="contact"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      autoComplete="off"
    >
      <Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Where should we contact you?" }]}
      >
        <Input />
      </Item>
      <Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "What should we call you?" }]}
      >
        <Input />
      </Item>
      <Item label="Message" name="message" rules={[{ required: true }]}>
        <Input.TextArea />
      </Item>
      <Item label=" " colon={false}>
        <Button type="primary" htmlType="submit" danger>
          Send
        </Button>
      </Item>
    </Form>
  );
};

export default ContactForm;
