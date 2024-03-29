'use client'
import MainLayout from '@/components/layouts/MainLaoyout'
import type {AppProps} from "next/app";
import {FormEvent, useState} from "react";
import {message} from 'antd'
import AUTH_API from '@/services/api/auth'
import {useMutation} from '@tanstack/react-query'
import './styles.css'
import {RecoilRoot, useSetRecoilState} from 'recoil'
import {useRouter} from "next/navigation";
import PAGE_ROUTES from 'src/utils/constants/routes'
import {useEffect} from "react";
import { userState } from '@/services/recoil/user'

type userLoginTypeProps = {
    email: string
    password: string
}

const Login = () => {
    const router = useRouter()
    const setUserData = useSetRecoilState(userState)
    const [messageApi, contextHolder] = message.useMessage()
    const { isPending, mutate, isSuccess, isError } = useMutation(
        {
            mutationFn: AUTH_API.login,
            onSuccess: async (values: any) => {
                if (values.data.user.role === 'admin') {
                    localStorage.setItem('accessToken', values.data.accessToken)
                    localStorage.setItem('refreshToken', values.data.refreshToken)

                    setUserData({
                        avatar: '',
                        email: values.data.user.email,
                        firstName: values.data.user.firstName,
                        id: values.data.user.id,
                        lastName: values.data.user.lastName,
                        role: values.data.user.role,
                    })

                    //Move page
                    await router.push(PAGE_ROUTES.GENERAL.DASHBOARD)
                } else {
                    messageApi.open({
                        type: 'error',
                        content: '',
                    })
                }
            },

            onError: (error: any) => {
                const errorType = error.response.data.errors[0]
                messageApi.open({
                    type: 'error',
                    content: 't(`errorMessages.${errorType}`)',
                })
            },
        }
    )

    // const onFinish = (values: userLoginTypeProps) => {
    //     mutate(values)
    // }

    async function login(formData: FormData){

        const email = formData.get('email');
        const password = formData.get('password');
        const rawFormData  = {email: email ? email.toString() : '', password: password ? password.toString() : ''}
        console.log(JSON.stringify(rawFormData))
        // mutate({email: email ? email.toString() : '', password: password ? password.toString() : ''});
        mutate(rawFormData)


    }
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        console.log(JSON.stringify(formData));
        const response = await fetch('http://localhost:3001/api/v1/auth/login', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        // const data = await response.json()
        // ...
        // mutate(formData)
    }
    // useEffect(() => {
    //     router.push('/admin/general')
    // }, [router])
    return (
                <body style={{background: '#555863'}}>
                <div>
                    <div style={{
                        width: '100%',
                        height: '100px',
                        background: '#fff',
                        marginBottom: '15px',
                        paddingTop: '15px',
                        textAlign: 'center'
                    }}>
                <span style={{fontSize: '20px', paddingTop: '10px'}}>
                    환영합니다!<br/>
                    더센2 에 로그인하기
                </span>
                    </div>

                    <div className="member_login_wrap">
                        <div className="floating">

                            <div className="cm_member_login">

                                <form name="frm_login_page" action={login}>
                                    <input type="hidden" name="userType" value="com"/>
                                    <div className="form_box">
                                        <ul>
                                            <li className="login_id">
                                                <input type="text" name="email" className="input_design" placeholder="User ID"/>
                                            </li>
                                            <li className="login_pw">
                                                <input type="password" name="password" className="input_design " placeholder="Password"/>
                                            </li>
                                        </ul>
                                        <input type="submit" name="" className="btn_login" value="LOGIN"/>
                                    </div>
                                </form>

                                <br/>
                                <a href="/?_mobilemode=chk&pn=member.join.agree"
                                   className="btn_login"
                                   style={{display: 'block', paddingTop: '15px', background: '#999'}}>
                                    회원가입
                                </a>
                                <div className="copyright">
                                    <dl>
                                        <dt>
                                        </dt>
                                    </dl>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                </body>



    );
}
export default Login;