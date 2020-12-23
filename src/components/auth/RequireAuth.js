import React from 'react'
import {Redirect} from 'react-router-dom'

export default function RequireAuth({Component}){
    if(!window.localStorage.getItem("auth-token")){
        return <Redirect to="/login" />
    }
    return <Component />
}