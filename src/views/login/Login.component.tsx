import { Form, Input, Button, Card, Divider } from "antd";
import { Typography } from "antd";
import './Login.scss'
import { Content, Footer } from "antd/es/layout/layout";
import React from "react";
const { Title } = Typography;

const LoginForm = () => {
  const onFinish = (values: { remember: any; username: string; password: string; }) => {
    console.log("Received values of form: ", values);
    if (values.remember) {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
    }
  };

  const handleForgotPassword = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Handle password recovery logic here");
  };

  const handleRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Handle registration logic here");
  };

  return (
    <React.Fragment>
      <Content style={{ margin: '0 16px' }}>  
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
        >
        <Card style={{ width: 500, background: 'none', border: 'none' }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <svg width="46" height="64" viewBox="0 0 46 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_22_2442)">
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
            <Title level={2}>Login</Title>
            </div>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your Username!" }]}
            >
                <Input
                placeholder="Username"
                style={{height: '40px'}}
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
            >
                <Input
                type="password"
                placeholder="Password"
                style={{height: '40px'}}
                />            
            </Form.Item>
            <Form.Item>
                <a
                style={{ float: "right", color: 'black', fontWeight: 600 }}
                className="login-form-forgot"
                href="/"
                onClick={handleForgotPassword}
                >
                Forgot your password?
                </a>
            </Form.Item>
            <Form.Item>
                <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
                >
                Login
                </Button>
            </Form.Item>
            <Form.Item>
                <Divider dashed>OR</Divider>
            </Form.Item>
            <Form.Item>
                <a href="/" onClick={handleRegister}>
                <Button className="login-register-button">Create an account</Button>
                </a>
            </Form.Item>
            </Form>
        </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>EDEMBICKI ©2023 Created by Eduardo Dembicki</Footer>
    </React.Fragment>
  );
};

export default LoginForm;
