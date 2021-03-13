import React from 'react'
import Logo from './../../assets/graphics/logo.png';
import './styles.scss'

const index = () => {
    return (
        <header data-test="headerComponent">
            <div data-test="wrap">
                <div data-test="logoIMG">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default index
