import React from 'react'
import Contacts from './contacts/Contacts'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'

const Index = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route path="/" element={<Contacts />} />
            </Routes>
        </AuthLayout>
    )
}

export default Index