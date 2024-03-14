import React, { useState, useEffect } from 'react';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt="Enlarged" />
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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
    }

    const fetchImages = async () => {
      try {
        const imagePromises = [];
        for (let i = 0; i < 12; i++) {
          const response = await fetch('https://picsum.photos/350');
          if (response.ok) {
            const imageUrl = response.url;
            imagePromises.push(imageUrl);
          } else {
            console.error('Failed to fetch image', i);
          }
        }
        const resolvedImages = await Promise.all(imagePromises);
        setImages(resolvedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/JuanPabloUni/202122707-parcial1/master/data.json');
        if (response.ok) {
          const data = await response.json();
          const randomIndex = Math.floor(Math.random() * data.length);
          setProfileData(data[randomIndex]);
        } else {
          console.error('Failed to fetch profile data');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }

    fetchProfilePicture();
    fetchImages();
    fetchProfileData();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  }

  const closeModal = () => {
    setSelectedImage(null);
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        {profileData && (
          <div className="profile-info">
            <h2 className="username">{profileData.userName}</h2>
            <p className="bio">{profileData.bio}</p>
            <div className="counts">
              <div className="count">
                <span className="number">{profileData.posts}</span>
                <span className="label"> Posts</span>
              </div>
              <div className="count">
                <span className="number">{profileData.followers}</span>
                <span className="label"> Followers</span>
              </div>
              <div className="count">
                <span className="number">{profileData.following}</span>
                <span className="label"> Following</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index + 1}`}
            className="image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ProfilePage;