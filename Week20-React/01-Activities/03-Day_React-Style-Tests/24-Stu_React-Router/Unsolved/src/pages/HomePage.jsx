import { useState, useEffect } from 'react';
// Todo: Bring in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
// anchor tag direct without causing redirect
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';

import API from '../utils/API';

export default function HomePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  const [users, setUsers] = useState([]);
  // creating variables
  const fetchData = async () => {
    const { data } = await API.getUsers();
    // call to get users data and setting to setUsers state
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {users.map((user) => ( // iterating over all the users
          <ListItem key={user.id}>
            <Profile user={user} />
            {/* passing whole user object */}
            {/* Todo: Update this link component's to prop so that the user can click to see a single user's profile */}
            {/* link is clickable and based on router, navigates to certain component, profile, user id */}
            <Link
              to={`/profile/${user.id}`}
              className="badge bg-primary rounded-pill"
            >
              See More
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
