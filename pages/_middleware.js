import { NextRequest, NextResponse } from "next/server";
import getConfig from "next/config";


// const { publicRuntimeConfig } = getConfig();
// const baseUrl = `${publicRuntimeConfig.apiUrl}`;
// console.log("----------",process.env.api_url);

export async function middleware(req = NextRequest, res = NextResponse) {

    // console.log(req.headers);
    const cookie = req.cookies
    const access_token = cookie.access_token
    const refresh_token = cookie.refresh_token
    // console.log(access_token)

    if (access_token && refresh_token) {
        const checkExpire = await fetch(`${process.env.api_url}/checkTokenExpire/${access_token}`)
        const check = await checkExpire.json()
        console.log("Check : ", check);
        if (!check.status) {
            const genToken = await fetch(`${process.env.api_url}/generateToken/${refresh_token}`)
            const gen = await genToken.json()
            console.log("Generate", gen)
            return NextResponse.next().cookie("access_token", gen.data)
        } else {
            return NextResponse.next();
        }
    } else {
        return NextResponse.next();
    }
}