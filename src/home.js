import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/JuanPabloUni/202122707-parcial1/master/data.json'); // Fetch JSON file
        if (response.ok) {
          const data = await response.json();
          const randomIndex = Math.floor(Math.random() * data.length); // Generate random index
          setProfileData(data[randomIndex]);
        } else {
          console.error('Failed to fetch profile data');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  const { userName, bio, posts, followers, following } = profileData;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <h2 className="username">{userName}</h2>
          <p className="bio">{bio}</p>
          <div className="counts">
            <div className="count">
              <span className="number">{posts}</span>
              <span className="label"> Posts</span>
            </div>
            <div className="count">
              <span className="number">{followers}</span>
              <span className="label"> Followers</span>
            </div>
            <div className="count">
              <span className="number">{following}</span>
              <span className="label"> Following</span>
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