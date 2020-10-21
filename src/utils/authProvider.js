import React from 'react'

export default function AuthProvider({userManager:manager, store, children}){
    return(
        React.Children.only(children)
    )
}