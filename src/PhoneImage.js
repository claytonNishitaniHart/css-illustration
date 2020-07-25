import React from 'react';
import './PhoneImage.scss';

import { FaChevronLeft, FaChevronRight, FaEllipsisV } from 'react-icons/fa';
import avatar from './images/avatar.jpg';
import dog_image_1 from './images/dog-image-1.jpg';
import dog_image_2 from './images/dog-image-2.jpg';
import dog_image_3 from './images/dog-image-3.jpg';

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
        <div id={"phone-inside-chat"}>
          <div className={"Chat Left"}>
            That sounds great. I'd be happy to discuss more.
          </div>
          <div className={"Chat Left"}>
            Could you send over some pictures of your dog, please?
          </div>
          <div id={"dogs"}>
            <img src={dog_image_1} className={"Dog-Image"} alt={"dog1"}/>
            <img src={dog_image_2} className={"Dog-Image"} alt={"dog2"}/>
            <img src={dog_image_3} className={"Dog-Image"} alt={"dog3"}/>
          </div>
          <div className={"Chat Right"}>
            Here are a few pictures. She's a happy girl!
          </div>
          <div className={"Chat Right"} id={"small"}>
            Can you make it?
          </div>
          <div className={"Chat Left"} id={"start"}>
            She looks so happy! The time we discussed works. How long shall I take her out for?
          </div>
          <div className={"Price-box"}>
            <div className={"Price-circle"}/>
            30 minute walk
            <span className={"Price-text"}>$29</span>
          </div>
          <div className={"Price-box"}>
            <div className={"Price-circle"}/>
            1 hour walk
            <span className={"Price-text"}>$49</span>
          </div>
          <div id={"text-box"}>
            Type a message...
            <div id={"submit-button"}>
              <FaChevronRight id={"submit-button-icon"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneImage;