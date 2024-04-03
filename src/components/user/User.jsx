import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {name , id , email ,phone} = user;

    const navigate = useNavigate();


    const userStyle = {
        border : '4px solid red',
        padding : '10px',
        borderRadius : '10px',
    }
    const handleClick = () => {
        navigate(`/user/${id}`);
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>phone:{phone}</p>
            <p>email:{email}</p>
            <Link to={`/user/${id}`}>user details</Link>
            <button onClick={handleClick}>go to user details</button>

        </div>
    );
};

export default User;