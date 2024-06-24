import './Calendar.css';

const Calendar = props => {
  const dayButtons = [];

  for (let i = 0; i < 4; i++) {
    const row = [];

    for (let j = 0; j < 7; j++) {
      const value = (i * 7) + j + 1;

      row.push(
        <div key={j} className='calendar-button c-pointer' onClick={() => props.onDaySet(value)}>
          <img src={value === props.day ? './images/misc/CalendarDayActiveFrame.png' : './images/misc/CalendarDayFrame.png'} alt='day-frame' />
          <div className='w-100 d-flex position-relative justify-content-center' style={{bottom: '50%'}}>
            <span style={{lineHeight: 0}}>{value}</span>
          </div>
        </div>
      );
    }

    dayButtons.push(<div key={i} className='d-flex flex-row'>{row}</div>);
  }

  return (
    <div>
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <div className='d-flex flex-column'>
          <div className='d-flex flex-row'>
            <img className='calendar-button c-pointer' src='/images/season/Spring.png' alt='spring' style={{border: '12px solid transparent', borderImage: props.season === 'spring' ? 'url(images/misc/FrameBorder.png) 12 round' : undefined, imageRendering: 'pixelated'}} onClick={() => props.onSeasonSet('spring')} />
            <img className='calendar-button c-pointer' src='/images/season/Summer.png' alt='summer' style={{border: '12px solid transparent', borderImage: props.season === 'summer' ? 'url(images/misc/FrameBorder.png) 12 round' : undefined, imageRendering: 'pixelated'}} onClick={() => props.onSeasonSet('summer')} />
          </div>
          <div className='d-flex flex-row'>
            <img className='calendar-button c-pointer' src='/images/season/Fall.png' alt='fall' style={{border: '12px solid transparent', borderImage: props.season === 'fall' ? 'url(images/misc/FrameBorder.png) 12 round' : undefined, imageRendering: 'pixelated'}} onClick={() => props.onSeasonSet('fall')} />
            <img className='calendar-button c-pointer' src='/images/season/Winter.png' alt='winter' style={{border: '12px solid transparent', borderImage: props.season === 'winter' ? 'url(images/misc/FrameBorder.png) 12 round' : undefined, imageRendering: 'pixelated'}} onClick={() => props.onSeasonSet('winter')} />
          </div>
        </div>
      </div>
      <div className='d-flex flex-column'>
        {dayButtons}
      </div>
    </div>
  );
};

export default Calendar;
