import { Button } from 'antd';
import React from 'react'

const NavBar = ({ isAuth, setIsAuth }) => {
    return (
        <div style={{ textAlign: "right" }}>
            <Button type="primary" size={'small'} onClick={() => setIsAuth(!isAuth)}>
                Log out
            </Button>
        </div>
    )
}

export default NavBar