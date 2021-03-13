import React from 'react'
import Logo from './../../assets/graphics/logo.png';

const index = () => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default index
