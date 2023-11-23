import { useRouteError } from "react-router-dom";
const Error =()=>{
    const err=useRouteError();
    const{data,status,statusText}=err;
    console.log(err)
    return(
        <div>
            <h1>{status}</h1>
            <p >{statusText}</p>
            <p>{data}</p>
        </div>
    )
}

export default Error;