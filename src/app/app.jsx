import React from 'react';
import Main from '../main/main.jsx';


const App = (props) => {
  const {filmDetails} = props;
  return (
    <Main filmDetails={filmDetails} />
  );
};

export default App;
