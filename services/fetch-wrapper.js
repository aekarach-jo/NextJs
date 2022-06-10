import { getCookie } from 'cookies-next';
import getConfig from "next/config";
import { adminService } from "services";

const { publicRuntimeConfig } = getConfig();



export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};
function get(url) {
    console.log(url)
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
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


function authHeader(url) {
    const refresh = adminService.adminRefresh_token;
    const token = getCookie('access_token')
    console.log("tokensssss  ", token);
    const isLoggedIn = token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl); // url.startsWith =>  return boolean
    console.log("isApiUrl   ", isApiUrl);
    console.log("isLoggedIn   ", isLoggedIn);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${token}`, RefreshToken: `Bearer ${refresh}` };
    } else {
        return {};
    }
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].includes(response.status) && adminService.adminValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                // console.log(response.status);
                adminService.signout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}