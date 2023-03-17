import { NavLink } from 'react-router-dom';
import './Homepage.css';
function Homepage() {
    const auth = { currentUser: 'doron' }
    return (
        <>
            <h1>Welcome to PetPlace</h1>
            <h3>PetPlace is an online, searchable database of pets who need homes.</h3>
            <NavLink to="/Search">Start your search today.</NavLink>
        </>
    );
}
export default Homepage;