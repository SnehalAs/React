import React from 'react';
import jobDetails from "./JobDetails";
import userProfile from "./UserProfile";
import jobAlerts from "./JobAlerts";

import './styles.css';

const App = () => {
  return (
    <div>
      <jobDetails />
      <userProfile />
      <jobAlerts />
    </div>
  );
};

export default App;
