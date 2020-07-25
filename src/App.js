import React from 'react';
import PhoneImage from "./PhoneImage";
import './App.scss';

const App = () => {
  return (
    <div className={"App"}>
      <div id={"bg-container"}>
        <div id={"bg-element1"}/>
        <div id={"bg-element2"}/>
      </div>
      <div id={"phone-image"}>
        <PhoneImage />
      </div>
      <h1>Simple booking</h1>
      <p>Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
    </div>
  );
}

export default App;
