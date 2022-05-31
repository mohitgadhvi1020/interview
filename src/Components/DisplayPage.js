import React from "react";
import { useSelector } from "react-redux";

const DisplayComponent = () => {
    const storevalues = useSelector(state => state);
    console.log("value of store", storevalues.Login);
    return (
        <div>
            {!storevalues.Login.loading ? (
              <div>
                username Displayed from redux
                <h1>{storevalues.Login.data.username}</h1>
                Password Displayed from redux
                <h3>{storevalues.Login.data.password}</h3>
             </div>
            ) : storevalues.Login.isError ? (<div>
                <h1>error msg : {storevalues.Login.error_details}</h1>
            </div>):<div>Loading....</div>}   
        </div>
    )
}

export default DisplayComponent;