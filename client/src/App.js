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
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
        contentLabel="Login"
      >
        <h2>Login</h2>
        <form>
          Email
          <input type="email" />
          Password
          <input type="password" />
          <button>Login</button>
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
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/MyPets' element={<MyPets />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
