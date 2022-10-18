import React, { useEffect, useRef } from 'react';
import Auth from '../../router/Auth';
// import { getToken } from '../../api/index';
import { Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { getSession } = Auth();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  // console.log(Auth(), 'Auth()');

  const jump = async () => {
    // await login({
    //   email: "cui.jiang@citcon.cn",
    //   password: "Citcon@123"
    // });
    await getSession();
    // console.log(res, 'login---res');
    navigate('/')
  }

  useEffect(()=>{
    notification.warning({message:'2222'})
    console.log(inputRef.current, 'inputRef')
  },[])

  return (
    <div>Login page
      <Input ref={inputRef} />
      <button onClick={()=>jump()}>Login and goto Home</button>
    </div>
  )
}
