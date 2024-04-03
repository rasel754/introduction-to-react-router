
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =useRouteError();
    console.log(error)
    return (
        <div>
            <h1>OoPsssssss........</h1>
            <p>{error.data ||error.status}</p>
            {
                error.status === 404 && <div>
                    <h2>page not found </h2>
                    <p>go back where you come </p>
                    <Link to='/'><button>Home</button></Link>
                </div>
            }
            
        </div>
    );
};

export default ErrorPage;