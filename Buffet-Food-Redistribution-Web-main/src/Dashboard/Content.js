

import React from 'react';
import ProfileApp from './profileApp';
import UserProfile from './UserProfile';
import Historie from './Historie';
import DefaultImage from '../components/FoodShareNetwork.jpeg'; // Import the default image
import Reviewfeedback from './Reviewfeedback';
import ProfileSettings from './ProfileSettings';

const Content = ({ page }) => {
  let content = null;

  switch (page) {
    case '':
      content = (
        <div>
          <h1 className="text-center">FoodShare Network</h1>
          <div className="text-center">
            <img src={DefaultImage} alt="Food Share Network" className="img-fluid img-thumbnail" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      );
      break;
    case 'profileApp':
      content = (
        <div>
          <h1 className="text-center"></h1>
          <ProfileApp />
        </div>
      );
      break;
    case 'Reviewfeedback':
      content = (
        <div>
          <h1 className="text-center"></h1>
          <Reviewfeedback />
        </div>
      );
      break;
    case 'ProfileSettings':
      content = (
        <div>
          <h1 className="text-center">Settings</h1>
          <ProfileSettings />
        </div>
      );
      break;
    case 'histories':
      content = (
        <div>
          <h1 className="text-center"></h1>
          <Historie />
        </div>
      );
      break;
    case 'userProfile':
      content = (
        <div>
          <UserProfile
            userData={{
              name: 'John Doe',
              email: 'john@example.com',
              telephone: '123-456-7890',
              address: '123 Main St',
              password: 'password123'
            }}
          />
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h1 className="text-center">FoodShare Network</h1>
          <img src={DefaultImage} alt="Food Share Network" className="img-fluid img-thumbnail" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      );
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-8">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Content;
