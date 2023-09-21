'use client'

import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';

import { toast } from 'react-toastify';

const Login = ({ setIsAuth, isAuth }) => {

    const users = [
        {
            username: "userOne", password
                : "123456"
        }
        , {
            username: "userTwo", password
                : "12345"
        }
    ]

    const onFinish = (values) => {
        let { username, password } = values;

        const usersData = users.find((user) => user.username === username)




        if (usersData?.username === username && usersData?.password === password) {
            setIsAuth(true)
            localStorage.setItem('Auth', isAuth);

            toast.success('You Are logged in successfully')
        } else {
            // setIsError(true)

            toast.error('username or password incorrect')
        }




    };



    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}

            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },

                    // {
                    //     validator: validateUsername,
                    // },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    // {
                    //     validator: validatePassword,
                    // },
                    { whitespace: true, message: 'Whitespace is not allowed!' }
                ]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            {/* {isError && <p>  there is an error</p>} */}

        </Form>
    )
};
export default Login;