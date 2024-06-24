import { useState } from 'react';

import Clock from './Clock.js';
import Calendar from './Calendar.js';
import Map from './Map.js';
import PickWeather from './PickWeather.js';

const floorMod = (v, mod) => {
  return (mod + v % mod) % mod;
};

const App = () => {
  const [season, setSeason] = useState('spring');
  const [weather, setWeather] = useState('sun');
  const [day, setDay] = useState(1);
  const [time, setTime] = useState(0);

  const changeTime = v => {
    setTime(floorMod(time + v, 1440));
  };

  return (
    <div className='vh-100 overflow-hidden'>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Map />
      </div>
      <div className='vh-100 d-flex justify-content-end align-items-center position-relative pe-none' style={{bottom: '100vh'}}>
        <div className='h-100 d-flex justify-content-center py-4' style={{width: '16%', backgroundImage: 'url(images/misc/MapBackground.png)', borderLeft: '12px solid black', borderImage: 'url(images/misc/LeftBorder.png) 16 round'}}>
          <div className='d-flex flex-column justify-content-center pe-auto'>
            <div className='d-flex flex-column align-items-center'>
              <h2>Clock</h2>
              <Clock hour={Math.floor(time / 60)} minute={time % 60} onHourChange={v => changeTime(v * 60)} onMinuteChange={v => changeTime(v)} />
            </div>
            <div className='d-flex flex-column align-items-center'>
              <h2>Calendar</h2>
              <Calendar season={season} day={day} onSeasonSet={setSeason} onDaySet={setDay} />
            </div>
            <div className='d-flex flex-column align-items-center'>
              <h2>Weather</h2>
              <PickWeather weather={weather} onWeatherSet={setWeather} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
