import axios from 'axios';
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { BehaviorSubject } from 'rxjs';
import Router from 'next/router';

<<<<<<< HEAD
import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
// const baseUrl = 'https://192.168.1.51:3000/api';
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
=======
const api_url = process.env.api_url

>>>>>>> 159766ba485aa16e7011df89ab68c308cc2409f6
const adminSubject = new BehaviorSubject(process.browser && getCookie("access-token"));

export const adminService = {
    admin: adminSubject.asObservable(),
    get adminValue() { return adminSubject.value },
    login,
    signout,
    create,
    update,
    getpermission,
    getAdminById,
    getAdminAll,
    resetPassword
};


function login(formLogin) {
    console.log(baseUrl);
    console.log(formLogin);
    return fetchWrapper.post(`${baseUrl}/login`, formLogin)
        .then(res => {
            console.log(res);
            console.log(res.data.data.token)
            adminSubject.next(res)
            setCookies("access-token", res.data.data.token)
        })
}


function getAdminAll() {
    return fetchWrapper.get(`${baseUrl}/getall`)
        .then(res => {
            console.log("Admin data : ", res)
            return res;
        })
}

function getAdminById(adminId) {
    return fetchWrapper.get(`${baseUrl}/getById/${adminId}`)
}


function resetPassword(formReset) {
    return fetchWrapper.post(`${baseUrl}/resetPassword`, formReset)
        .then(res => {
            console.log("Reset password", res);
            return res;
        })
}

function signout() {
    removeCookies("access-token");
    adminSubject.next(null);
    // Router.push('/admin/login')
    // location.reload()
    // return await axios.get(`${baseUrl}/signout`)
    // .then(res => {
    // })
}

function create(formRegis) {
    return fetchWrapper.post(`${baseUrl}/create`, formRegis)
        .then(res => {
            console.log("register status : ", res)
        })
}

function update(id, formUpdate) {
    console.log(formUpdate)
    return fetchWrapper.post(`${apiUrl}/update`, formUpdate)
        .then(res => {
            if (id === adminService.value.id) {
                const admin = { ...adminService.value, ...formUpdate };
                setCookies('access-token', admin)
            }
            console.log("update data admin : ", res);
        })
}

function getpermission() {
    return fetchWrapper.get(`${apiUrl}/getpermission`)
        .then(res => {
            console.log("permission : ", res)
        })
}