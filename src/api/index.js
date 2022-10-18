import request from '../utils/request';
import { userList } from './mock.js';

const dashboardUrl = 'http://localhost:3001/api';
const opsToolUrl = 'http://localhost:9003/api';


// 根据用户名，密码获取用户信息、Token
export async function getToken(params) {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res({token:'fadfasga'})
        },3000)
    })
}

export async function getUserInfo(params) {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res({user:'Jiang cui', age:23, other:'test_Info'})
        },3000)
    })
}

export async function fetchTimeoutData(data) {
    console.log('调用TimeoutData');
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res({token:'fadfasga'})
        },13000)
    })
}

export async function fetchPermissionMenu() {
    console.log('获取数据库中的角色菜单权限');
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res([
                // {
                //     path:'home',
                // },
            ])
        },5000)
    })
}

export async function login(data) {
    return request(`${dashboardUrl}/login`, {
        method: 'POST',
        data,
    })
}

export async function getSessions() {
    return request(`${opsToolUrl}/users/sessions`, {
        method: 'GET',
    })
}

export async function getSearchMerchant(params) {
    return request(`${opsToolUrl}/merchants/`, {
        method: 'GET',
        params,
    })
}

export async function getUserList() {
    return {
        data: userList,
    }
}