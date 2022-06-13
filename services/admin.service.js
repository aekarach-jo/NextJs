import axios from 'axios';
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { BehaviorSubject } from 'rxjs';
import Router from 'next/router';
import { fetchWrapper } from './fetch-wrapper';


// const baseUrl = 'https://192.168.1.51:3000/api';
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const adminSubject = new BehaviorSubject(process.browser && getCookie("access_token"));
const adminRefresh = new BehaviorSubject(process.browser && getCookie("refresh_token"));


export const adminService = {
    admin: adminSubject.asObservable(),
    get adminRefresh_token() { return adminRefresh.value},
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


async function login(formLogin) {
    return await axios.post(`${baseUrl}/login`, formLogin)
        .then(res => {
            // console.log(res);
            adminSubject.next(res)    

            setCookies("access_token", res.data.data.access_token)
            setCookies("refresh_token", res.data.data.refresh_token)

            // localStorage.setItem("access_token", res.data.data.access_token )
            // localStorage.setItem("refresh_token", res.data.data.refresh_token )
            return res;
        }).catch((error) => {
            console.log(error)
          })
}



function getAdminAll() {
    return fetchWrapper.get(`${baseUrl}/getall`)
        .then(res => {
            // console.log("Admin data : ", res)
            return res;
        })
}

function getAdminById(adminId,token) {
    return fetchWrapper.get(`${baseUrl}/getById/${adminId}`,token)
    .then(res => {
        return res;
    })
}


function resetPassword(formReset) {
    return fetchWrapper.post(`${baseUrl}/resetPassword`, formReset)
        .then(res => {
            // console.log("Reset password", res);
            return res;
        })
}

function signout() {
    removeCookies("access_token");
    removeCookies("refresh_token");
    adminSubject.next(null);
    // Router.push('/admin/login')
    location.reload()
    // return await axios.get(`${baseUrl}/signout`)
    // .then(res => {
    // })
}

function create(formRegis) {
    return fetchWrapper.post_regis(`${baseUrl}/create`, formRegis)
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
                setCookies('access_token', admin)
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