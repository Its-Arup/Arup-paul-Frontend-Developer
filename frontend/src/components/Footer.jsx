import React from 'react'
import style from "../styles/footer.module.css"
import { FooterLogo, SocialOne, SocialThree, SocialTwo } from '../assets/image_exporter'

function Footer() {
  return (
    <div className={style.container}>
        <div className={style.top}>
            <div>
                <h4>Join our</h4>
                <h5>Community</h5>
            </div>
            <div className={style.top_child}>
                <div>
                    <img src={SocialOne} alt="social" />
                </div>
                <div>
                    <img src={SocialTwo} alt="social" />
                </div>
                <div>
                    <img src={SocialThree} alt="social" />
                </div>
            </div>
        </div>
        <div className={style.bottom}>
            <img src={FooterLogo} alt="logo" />
            <p>2023 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
