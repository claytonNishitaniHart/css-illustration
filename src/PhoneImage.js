import React from 'react';
import './PhoneImage.scss';

import { FaChevronLeft, FaEllipsisV } from 'react-icons/fa';
import avatar from './images/avatar.jpg';

const PhoneImage = () => {
  return (
    <div id={"phone-base"}>
      <div id={"phone-notch"}/>
      <div id={"phone-inside"}>
        <div id={"phone-inside-UI-Header"}>
          <FaChevronLeft id={"phone-inside-UI-Back"}/>
          <img id={"phone-inside-UI-Avatar"} src={avatar} alt={"avatar"}/>
          <span id={"phone-inside-UI-Name"}>Samuel Green</span>
          <span id={"phone-inside-UI-Availability"}>Available to Walk</span>
          <FaEllipsisV id={"phone-inside-UI-Menu"}/>
        </div>
      </div>
    </div>
  );
}

export default PhoneImage;