import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook from react-router-dom

const ProfilePage = () => {

    const location = useLocation();
    const state = location.state;

    const profileData = state ? state.profileData : null;
    

  // State variables to store profile data
  const [profilePicture, setProfilePicture] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  // Set profile data from location state
  useEffect(() => {
    if (profileData) {
      setProfilePicture(profileData.profilePicture);
      setUsername(profileData.userName);
      setBio(profileData.bio);
    }
  }, [profileData]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, send the data to the server
    // In this example, we are just logging the values
    console.log('Username:', username);
    console.log('Bio:', bio);
    console.log('Profile picture:', profilePicture);
  };

  return (
    <div className="profile-page">
    <br />
      {/* Display profile picture, username, and bio */}
      <div className="profile-info">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      </div>
      {/* Profile edit form */}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="input-field"
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
      <br />
      <a href="/">Back to Home</a>
    </div>
  );
};

export default ProfilePage;