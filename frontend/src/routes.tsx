import React from 'react';
import { Routes as XRoutes ,Route } from 'react-router-dom';
import ListContainer from './components/ListContainer'; // Import the necessary view components
// Import other view components here

const Routes: React.FC = () => {
  return (
        <XRoutes>
        <Route path="/" element={<ListContainer />} />
      </XRoutes>
  );
};

export default Routes;
