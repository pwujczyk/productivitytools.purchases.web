import {UserManager} from 'oidc-client'

const config={
    authority:"https://localhost:5001/",
    client_id:"purchase",
    redirect_uri:"http://localhost:3000/signin-oidc",
    response_type:"id_token token",
    scope:"openid profile purchase.api",
    post_logout_redirect_uri:"http://localhost:3000/"
}

const userManager=new UserManager(config)

export function signinRedirect(){
    return userManager.signinRedirect();
}