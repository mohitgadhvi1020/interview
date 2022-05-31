



const Login = "LOGIN";
export const LoginSuccess = "LOGIN_SUCCESS";
export const LoginFailure = "LOGIN_FAILURE";

// action
const init_state = {
  data:{},
  loading: true,
  isError: false,
  error_details: {},
}
export const LoginAction = (payload) => {
    return {
        type: Login,
        payload,
    } 
}
export const LoginSuccessAction = (payload) => {
    return {
        type: LoginSuccess,
        payload,
    } 
}
export const LoginFailureAction = (payload) => {
    return {
        type: LoginFailure,
        payload,
    } 
}

// Reducer

 export default function LoginReducer ( state = init_state, action = null ){
    switch(action.type){
        case Login : {
            return state;
        }
        case LoginSuccess: {
            console.log("Login success reducer invoked")
            return {...state , data: action.payload, loading : false};
        }
        case LoginFailure: {
            return {...state , data: {}, loading : true, isError : true, error_details : action.payload};
        }
        default:{
            return {...state};
        }
    }
}


