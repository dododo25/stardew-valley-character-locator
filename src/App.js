import { useState } from 'react';

import Clock from './Clock.js';
import Calendar from './Calendar.js';
import Map from './Map.js';
import PickWeather from './PickWeather.js';

import characterMapping from './Character.js';

const floorMod = (v, mod) => {
  return (mod + v % mod) % mod;
};

const prepareCharacter = (name, mapping, season, day, weather, time) => {
  const checkRequirements = requirements => {
    for (let key in requirements) {
      const value = requirements[key];

      if (key === 'season' && value !== season) {
        return false;
      } else if (key === 'day' && value !== day) {
        return false;
      } else if (key === 'weather' && value !== weather) {
        return false;
      }
    }

    return true;
  };

  const selectValidOption = () => {
    if (!mapping.schedule) {
      return undefined;
    }

    for (let i = 0; i < mapping.schedule.length; i++) {
      const option = mapping.schedule[i];
  
      if (checkRequirements(option.requirements)) {
        return option;
      }
    }

    return undefined;
  };

  const selectValidOptionSeqPart = option => {
    for (let seqPart of option.sequence) {
      if (seqPart.when <= time) {
        return seqPart;
      }
    }

    return option.sequence[option.sequence.length - 1];
  };

  const validOption = selectValidOption();

  if (!validOption) {
    return undefined;
  }

  const seqPart = selectValidOptionSeqPart(validOption);

  return {
    name: name, 
    component: mapping.component, 
    x: seqPart.x, 
    y: seqPart.y
  };
};

const App = () => {
  const [season, setSeason] = useState('spring');
  const [weather, setWeather] = useState('sun');
  const [day, setDay] = useState(1);
  const [time, setTime] = useState(0);

  const changeTime = v => {
    setTime(floorMod(time + v, 1440));
  };

  const characters = [];

  for (const key in characterMapping) {
    const c = prepareCharacter(key, characterMapping[key], season, day, weather, time);

    if (c) {
      characters.push(c);
    }
  }

  return (
    <div className='vh-100 overflow-hidden'>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Map characters={characters} />
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
