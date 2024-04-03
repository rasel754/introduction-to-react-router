import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>this is Users : {users.length}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia illum. Sint rem voluptatibus animi adipisci. Placeat aperiam ut deleniti.</p>
            <div className="users">
                {
                    users.map(user => <User key={users.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;