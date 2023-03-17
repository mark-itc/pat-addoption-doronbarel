import { Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import Homepage from "./Pages/Homepage";
import Search from "./Pages/Search";
import MyPets from "./Pages/MyPets";
import Profile from "./Pages/Profile";
import './App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('body');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  function openModal() {
    setIsOpen(true);
    setIsSigningUp(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function switchIsSigningUp() {
    setIsSigningUp(!isSigningUp);
  }

  const state = { authUser: null }
  const handleSignout = () => console.log('sign out');
  const handleSignin = () => openModal();
  return (
    <div className="App">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={isSigningUp ? 'Signup' : 'Login'}
      >
        <form>
          { isSigningUp ? (
            <>
              <h2>Signup</h2>
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required/>
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required/>
            </>
          ) : <h2>Login</h2> }
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required/>
          { isSigningUp ? (
            <>
              <label for="repeatPassword">Repeat Password</label>
              <input type="password" id="repeatPassword" name="repeatPassword" required/>
              <button>Signup</button>
            </>
          ) : ( 
            <>
              <button>Login</button>
            </>)
          }
          <p onClick={switchIsSigningUp}>Don't have an account? Click here to { isSigningUp ? 'log in' : 'sign up'}.</p>
        </form>
      </Modal>
      <div className="navbar">
        <div className="links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
          <NavLink to="/Search" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Search</NavLink>
          <NavLink to="/MyPets" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Pets</NavLink>
          <NavLink to="/Profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Profile</NavLink>
          {state.authUser !== null ? (
            <>
              <NavLink onClick={handleSignout} className="logoutBtn">Logout</NavLink>
            </>
          ) : (
            <NavLink onClick={handleSignin} className="logoutBtn">Login</NavLink>
          )}
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/MyPets' element={<MyPets />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
