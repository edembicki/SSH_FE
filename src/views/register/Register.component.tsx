import React from 'react';
import { Typography } from "antd";
import {
  Card,
  Col,
  Form,
  Input,
  Row
} from 'antd';
import './Register.scss';

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <React.Fragment>
      <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
        >
          <Card style={{ width: 600, background: 'none', border: 'none' }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <svg width="46" height="64" viewBox="0 0 46 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_22_2442)">
                <path d="M45.6639 0.189209L31.5398 16.2018L14.4206 16.2302L0.233384 0.189209V32.3027C0.230888 32.3412 0.238245 32.4557 0.255453 32.6464C0.28305 32.8744 0.368817 33.0915 0.504517 33.2769L22.9455 63.7611L45.3676 33.2769C45.5033 33.0915 45.589 32.8744 45.6166 32.6464C45.6394 32.4891 45.6552 21.6701 45.6639 0.189209Z" fill="#4989C3"/>
                <path d="M25.6094 58.0035L24.6636 56.9221L31.8297 18.2731L44.2545 32.6368L25.6094 58.0035Z" fill="#FDFBF0"/>
                <path d="M20.2847 58.0036L1.6333 32.6463L14.0581 18.2826L21.2242 56.9348L20.2847 58.0036Z" fill="#FDFBF0"/>
                <path d="M36.8681 33.2516L30.5753 40.4871L29.5664 36.048L36.8681 33.2516Z" fill="#4989C3"/>
                </g>
                <defs>
                <clipPath id="clip0_22_2442">
                <rect width="45.7143" height="64" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>          
            <Title level={2}>Create an account</Title>
            </div>
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
            scrollToFirstError
            >
              <Row>
                <Col span={12} key={1}>
                  <Form.Item
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!', whitespace: true }]}
                  >
                    <Input placeholder='First name'/>
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                  >
                    <Input placeholder='Email'/>
                  </Form.Item>
                </Col>
                <Col span={12} key={2}>
                  <Form.Item
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!', whitespace: true }]}
                  >
                    <Input placeholder='Last name'/>
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                  >
                    <Input.Password autoComplete="new-password" placeholder='Password'/>
                  </Form.Item>
                </Col>
              </Row>

            

              {/* <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                  {
                      required: true,
                      message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                      validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                      },
                  }),
                  ]}
              >
                  <Input.Password />
              </Form.Item>

              <Form.Item
                  name="nickname"
                  label="Nickname"
                  tooltip="What do you want others to call you?"
                  rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
              >
                  <Input />
              </Form.Item>

              <Form.Item
                  name="residence"
                  label="Habitual Residence"
                  rules={[
                  { type: 'array', required: true, message: 'Please select your habitual residence!' },
                  ]}
              >
                  <Cascader options={residences} />
              </Form.Item>

              <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                  name="donation"
                  label="Donation"
                  rules={[{ required: true, message: 'Please input donation amount!' }]}
              >
                  <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                  name="website"
                  label="Website"
                  rules={[{ required: true, message: 'Please input website!' }]}
              >
                  <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                  <Input />
                  </AutoComplete>
              </Form.Item>

              <Form.Item
                  name="intro"
                  label="Intro"
                  rules={[{ required: true, message: 'Please input Intro' }]}
              >
                  <Input.TextArea showCount maxLength={100} />
              </Form.Item>

              <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[{ required: true, message: 'Please select gender!' }]}
              >
                  <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                  </Select>
              </Form.Item>

              <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                  <Row gutter={8}>
                  <Col span={12}>
                      <Form.Item
                      name="captcha"
                      noStyle
                      rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                      >
                      <Input />
                      </Form.Item>
                  </Col>
                  <Col span={12}>
                      <Button>Get captcha</Button>
                  </Col>
                  </Row>
              </Form.Item>

              <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                  {
                      validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                  },
                  ]}
                  {...tailFormItemLayout}
              >
                  <Checkbox>
                  I have read the <a href="/">agreement</a>
                  </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                  Register
                  </Button>
              </Form.Item> */}
            </Form>
          </Card>
      </div>
    </React.Fragment>
  );
};

export default Register;
