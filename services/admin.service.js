import axios from 'axios';
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import { useRouter } from 'next/router';
import { BehaviorSubject } from 'rxjs';

const api_url = process.env.api_url

const adminSubject = new BehaviorSubject(process.browser && getCookie("access-token"));

export const adminService = {   
    admin: adminSubject.asObservable(),
    get adminValue() { return adminSubject.value },
    login,
    signout,
    register,
    updateAdmin,
    getpermission,
    getAdminById,
    getAdminAll,
    resetPassword
};

async function getAdminAll() {
    return await axios.get(`${baseUrl}/getall`)
        .then(res => {
            console.log("Admin data : ", res)
            return res;
        })
}

async function getAdminById(adminId) {
    return await axios.get(`${baseUrl}/getAdminById/${adminId}`)
}

async function login(formLogin) {
    console.log(formLogin);
    return await axios.post(`${baseUrl}/login`, formLogin)
        .then(res => {
            console.log(res);
            if (res.data.message == "ok") {
                console.log(res.data.data.token)
                adminSubject.next(res.data.data.token)
                setCookies("access-token", res.data.data.token)
            }
            return res;
        })
}

async function resetPassword(formReset) {
    return await axios.post(`${baseUrl}/resetPassword`, formReset)
        .then(res => {
            console.log("Reset password", res);
            return res;
        })
}

async function signout() {
    removeCookies("access-token");

    location.reload()
    // return await axios.get(`${baseUrl}/signout`)
    // .then(res => {
    // })
}

async function register(formRegis) {
    return await axios.post(`${baseUrl}/create`, formRegis)
        .then(res => {
            console.log("register status : ", res)
        })
}

async function updateAdmin(formUpdate) {
    console.log(formUpdate)
    return await axios.post(`${baseUrl}/updateAdmin`, formUpdate)
        .then(res => {
            console.log("update data admin : ", res);
        })
}

async function getpermission() {
    return await axios.get(`${baseUrl}/getpermission`)
        .then(res => {
            console.log("permission : ", res)
        })
}