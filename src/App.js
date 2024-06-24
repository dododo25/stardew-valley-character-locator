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
    <div className='wv-100 vh-100 d-flex justify-content-center align-items-center'>
      <Map />
      <Clock hour={Math.floor(time / 60)} minute={time % 60} onHourChange={v => changeTime(v * 60)} onMinuteChange={v => changeTime(v)} />
    </div>
  );
}

export default App;
