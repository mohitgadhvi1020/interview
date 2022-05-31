import React, {useState} from "react";
import axios from "axios";
import reducer from "../reducer";
import { LoginFailureAction, LoginSuccessAction } from "./logic/logic";
import { useNavigate } from 'react-router-dom';
import { createStore } from 'redux';
import { useDispatch, useSelector } from "react-redux";

const store = createStore(
  reducer,
)





function Login() {
    const storevalues = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const baseUrl = "https://petstore.swagger.io/v2";
    const [username , changeUsername] = useState("");
    const [password , changePassWord] = useState("");
    const loginClicked =  () => {

        const params = {
            username,
            password
        }

        axios.post(`${baseUrl}/user`, params).then((respo) => {
            if (respo.status === 200){ // success
               dispatch(LoginSuccessAction(params));
               navigate("/stateOuputDisplay")
            } else {
                
            }
        }).catch( (error) => {
              console.log('Show error notification!')
              dispatch(LoginFailureAction(error.message? error.message : error));
              navigate("/stateOuputDisplay")
            }
          )
        


    }
    const cancelClicked =  () => {
        changeUsername("");
        changePassWord("");
    }
    console.log("store", storevalues);
    return (
      <div className="login-page">
          <div>
              <div>Input your Username</div>
              <input type="text" onChange={(e) => changeUsername(e.target.value)} value={username} placeholder="Username" />
          </div>
          <div>
              <div>Input your Password</div>
              <input type="password" onChange={(e) => changePassWord(e.target.value)} value={password}  placeholder="Password" />
          </div>
          <div>
              <button onClick={() => loginClicked()}> Login  </button>
              <button onClick={() => cancelClicked()}> cancel  </button>
          </div>
        
      </div>
    );
  }
  
  export default Login;