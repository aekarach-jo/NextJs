import getConfig from "next/config";
import { adminService } from "services";

const { publicRuntimeConfig } = getConfig();


export const fetchWrapper = {
    get,
    post,
    post_regis,
    put,
    delete: _delete
};
function get(url, token) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url, token)
    };
    // console.log(requestOptions);
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body, token) {
    console.log(token);
    const requestOptions = {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json', ...authHeader(url,token) },
        // credentials: 'include',
        body: JSON.stringify(body)
    };
    console.log(requestOptions);
    return fetch(url, requestOptions).then(handleResponse);
}

async function post_regis(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // credentials: 'include',
        body: JSON.stringify(body)
    };
    console.log(requestOptions);
    return await fetch(url, requestOptions)
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url), },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    return fetch(url, requestOptions).then(handleResponse);
}


function authHeader(url, token) {
    const isLoggedIn = !adminService.adminValue; //ตอนนี้ value ที่ได้เป็น false ถึงแม้จะมี token แล้ว หาวิธีแก้ ตอนรับมาที่ Service
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl); // url.startsWith =>  return boolean
    console.log("isLogin",isLoggedIn);
    console.log("isApi",isApiUrl);
    // if (isLoggedIn && isApiUrl) {
    if (isApiUrl) {
        console.log('Token',token);
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].includes(response.status) && adminService.adminValue) {
                // adminService.signout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}