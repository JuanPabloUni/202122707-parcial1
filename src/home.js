
import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await fetch('https://picsum.photos/350');
        if (response.ok) {
          const blob = await response.blob();
          setProfilePicture(URL.createObjectURL(blob));
        } else {
          console.error('Failed to fetch profile picture');
        }
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <h2 className="username">Username</h2>
          <p className="bio">Bio</p>
          <div className="counts">
            <div className="count">
              <span className="number">Posts Count</span>
              <span className="label">Posts</span>
            </div>
            <div className="count">
              <span className="number">Followers Count</span>
              <span className="label">Followers</span>
            </div>
            <div className="count">
              <span className="number">Following Count</span>
              <span className="label">Following</span>
            </div>
          </div>
        </div>
      </div>
      <div className="posts-grid">
        {/* We'll map over the posts array and render each post */}
        {/* {posts.map((post, index) => (
          <div key={index} className="post">
            <img src={post.imageUrl} alt={post.description} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ProfilePage;