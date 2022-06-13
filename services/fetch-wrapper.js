import { getCookie } from 'cookies-next';
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
    console.log(requestOptions);
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url), },
        credentials: 'include',
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
    const access_token = getCookie("access_token");
    const refresh_token = getCookie("refresh_token");
    const isLoggedIn = !adminService.adminValue;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl); // url.startsWith =>  return boolean
    console.log(isLoggedIn);
    console.log(isApiUrl);
    if (isLoggedIn && isApiUrl) {
        console.log('aaaaa',token);
        return { Authorization: `Bearer ${token}`, RefreshToken: `Bearer ${refresh_token}` };
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