import {useEffect, useState} from "react";
import UserData from "./components/UserData";

const url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        fetchData(url);
    }, [])
    return <div>
        <table>
            <thead>
            <tr>
                <th id="id">ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Website</th>
                {/* <th>Long & Latitude</th> */}
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </div>
}

export default App;

