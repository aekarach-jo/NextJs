import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { adminService } from 'services';
import ReactDOM from "react-dom";
import {io} from 'socket.io-client';


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  
  useEffect(() => {
    const socket = io("http://192.168.1.51:5000",{transports:['websocket']});
    socket.on('connect',data => {
        socket.emit('test','start')
        console.log('connected');
    });
    // ตอนเปิดเข้ามาครั้งแรก จะมาเช็ค auth ก่อน
    authCheck(router.asPath);
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);
    router.events.on('routeChangeComplete', authCheck)
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }
  }, []);



  function authCheck(url) {
    // ถ้าไม่มี access-token จะ redirect ไปที่หน้า login
    setAdmin(adminService.adminValue);
    const publicPaths = ['/admin/login', '/admin/register'];
    const path = url.split('?')[0];
    if (!adminService.adminValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/admin/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true)
    }
  }

  return (
    <>
      <Head>
    // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    //  bootstrap CDN
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>

      <Script
      
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
        
        />

      {authorized &&
        <Component {...pageProps} />
      }

    </>
  )
}

export default MyApp
