import React, { Fragment, useEffect, useState } from "react";
import Styles from "./progress.module.scss"

const Progress = () => {

    const [scollTop, setScrollTop] = useState(0);

    const onScroll =() => {
        const winSroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = ( winSroll / height) * 100;

        setScrollTop(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    })

    return (
        <Fragment>
            <div className="App">
                <div className={Styles.progressMainWrapper}>
                    <div className={Styles.progressMainStyle} style={{ width: `${scollTop}%` }}>
                        
                    </div>    
                </div>
            </div>
        </Fragment>
    )
}


export default Progress;