import Lottie from 'react-lottie';
import flower1 from './assets/Animation - 1718611127268.json';
import hand1 from './assets/Animation - 1718616549580.json';
import grass1 from './assets/Animation - 1718694891435.json';
import view1 from './assets/Animation - 1718696612666.json';
import daynight from "./assets/Animation - 1718770153423.json";
import heart from "./assets/Animation - 1718770540784.json";
import { useState, useRef, useEffect } from 'react';

function Flower() {
  const [isHeartStopped, setIsHeartStopped] = useState(true);
  const [heartName, setHeartName] = useState("heart_element_disappear")
  const handleClick = () => {
    setHeartName("heart_element_appear");
    setIsHeartStopped(false);
  };

  const Heart = {
    loop: true,
    autoplay: false,
    animationData: heart,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const DayNight = {
    loop: true,
    autoplay: true,
    animationData: daynight,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Flower1 = {
    loop: true,
    autoplay: true,
    animationData: flower1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Hand1 = {
    loop: false,
    autoplay: false,
    animationData: hand1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Grass1 = {
    loop: true,
    autoplay: true,
    animationData: grass1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const View1 = {
    loop: true,
    autoplay: true,
    animationData: view1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [inputValue, setInputValue] = useState('');
  const [passwordPageName, setPasswordPageName] = useState('password_page_appear');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const correctPassword = 'test';

    if(inputValue === correctPassword) {
      setPasswordPageName('password_page_disappear');
    }
  };

  return(
    <>
      <div className='view_element'>
        <Lottie 
          options={View1} 
          isClickToPauseDisabled={true}
        />
      </div>
      {/* <div className='view_element'>
        <Lottie 
          options={DayNight} 
          isClickToPauseDisabled={true}
        />
      </div> */}
      <div className={heartName}>
        <Lottie 
          options={Heart} 
          isStopped={isHeartStopped}
          isClickToPauseDisabled={true}
        />
      </div>
      <div className='hand_flower' onClick={handleClick}>
        <Lottie options={Hand1} />
      </div>
      <div className='flower_element'>
        <Lottie 
          options={Flower1} 
          isClickToPauseDisabled={true}
        />
      </div>
      <div className='flower_element_2'>
        <Lottie 
          options={Flower1} 
          isClickToPauseDisabled={true}
        />
      </div>
      <div className={passwordPageName}>
        <div className='password'>
          <label>Enter Password  </label>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="submit" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  );
}
export default Flower;