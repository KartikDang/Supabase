export const LoginStart = (usercredentials) = ({
    type: "LOGIN_START"
})
export const LoginSuccess = (user) = ({
    type: 1,
    payload: user
})
export const LoginFailure = (error) = ({
    type: 0,
    payload: error
})