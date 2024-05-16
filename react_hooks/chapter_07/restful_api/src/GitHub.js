import React, { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading';
import { Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function GitHub() {
    // Declare the sate variable
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    // Set loading to true
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        getData();
    }
    useEffect(() => {
        getData();
        /**Use an empty array to make sure that it is rendered once
         * to prevent an infinite loop
         */
        // Add search term to render what's displayed
    }, []);
    const getData = async () => {
        const res = await
            axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
        setData(res.data.items);
        setIsLoading(false);
    }
    // map to repeat the media object for each user data we get from GitHub.
    const listUsers = data.map((user) =>
        <Media key={user.id}>
            <a href={user.html_url}>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={user.avatar_url}
                    alt="Generic placeholder"
                />
            </a>
            <Media.Body>
                <h5>Login: {user.login}</h5>
                <p>Id: {user.id}</p>
            </Media.Body>
        </Media>
    );
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={event => setSearchTerm(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {/* Display data */}
            <h3>GitHub Users Results</h3>
            {isLoading &&
                <ReactLoading type="spinningBubbles" color="#444" />
            }
            {listUsers}
        </div>
    );
}
export default GitHub;