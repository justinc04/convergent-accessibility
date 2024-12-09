import React from 'react';
import InstallationPage from './InstallationPage.js';
import Popup from './Popup.js';
import {useEffect, useState} from "react"; 

function App() {

  // Add this code for the toggling
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode');

  if(mode == 'install') {
    return (
      <InstallationPage></InstallationPage>
    )
  } else {

    return (
      <Popup></Popup>
    )

  }
}

export default App;