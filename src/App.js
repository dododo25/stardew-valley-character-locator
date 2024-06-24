import { useState } from 'react';
import Clock from './Clock.js';
import Map from './Map.js';

const floorMod = (v, mod) => {
  return (mod + v % mod) % mod;
};

const App = () => {
  const [time, setTime] = useState(0);

  const changeTime = v => {
    setTime(floorMod(time + v, 1440));
  };

  return (
    <div className='vh-100 overflow-hidden'>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Map />
      </div>
      <div className='vh-100 d-flex justify-content-end align-items-center position-relative' style={{bottom: '100vh'}}>
        <div className='h-100 d-flex justify-content-center' style={{width: '16%', backgroundImage: 'url(images/misc/MapBackground.png)', borderLeft: '12px solid black', borderImage: 'url(images/misc/LeftBorder.png) 16 round'}}>
          <div className='d-flex align-items-center'>
            <div className='d-flex flex-column align-items-center'>
              <h2>Clock</h2>
              <Clock hour={Math.floor(time / 60)} minute={time % 60} onHourChange={v => changeTime(v * 60)} onMinuteChange={v => changeTime(v)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
