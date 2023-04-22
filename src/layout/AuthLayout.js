import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <>
            <div className='children__main'>
                {children}
            </div>
        </>
    )
}

export default AuthLayout