import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {website ,company , id}=user;

    const navigate = useNavigate();

    const userDetailsStyle = {
        border : '4px solid red',
        padding : '10px',
        borderRadius : '10px',
    }
    const handleNavigate =()=> {
        navigate(-1);
    }

    return (
        <div style={userDetailsStyle}>
            <h2>user details here : user no {id}</h2>
            <p>user website : {website}</p>
            <p>user company : {company.name}</p>
            <button onClick={handleNavigate}>go back </button>
        </div>
    );
};

export default UserDetails;