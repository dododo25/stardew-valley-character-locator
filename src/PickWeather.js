import './Weather.css';

const PickWeather = props => {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <img className='calendar-button c-pointer' src='/images/weather/Sun.png' alt='sun' style={{border: '12px solid transparent', borderImage: props.weather === 'sun' ? 'url(images/misc/FrameBorder.png) 12 round' : undefined, imageRendering: 'pixelated'}} onClick={() => props.onWeatherSet('sun')} />
      <img className='calendar-button c-pointer' src='/images/weather/Rain.png' alt='rain' style={{border: '12px solid transparent', borderImage: props.weather === 'rain' ? 'url(images/misc/FrameBorder.png) 12 round' : undefined, imageRendering: 'pixelated'}} onClick={() => props.onWeatherSet('rain')} />
      <img className='calendar-button c-pointer' src='/images/weather/WindFall.png' alt='wind-fall' style={{border: '12px solid transparent', borderImage: props.weather === 'wind' ? 'url(images/misc/FrameBorder.png) 12 round' : undefined, imageRendering: 'pixelated'}} onClick={() => props.onWeatherSet('wind')} />
      <img className='calendar-button c-pointer' src='/images/weather/Snow.png' alt='snow' style={{border: '12px solid transparent', borderImage: props.weather === 'snow' ? 'url(images/misc/FrameBorder.png) 12 round' : undefined, imageRendering: 'pixelated'}} onClick={() => props.onWeatherSet('snow')} />
    </div>
  );
};

export default PickWeather;
