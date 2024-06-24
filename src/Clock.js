import './Clock.css';

const Clock = props => {
  const preparedHour = (props.hour < 10 ? '0' : '') + props.hour;
  const preparedMinute = (props.minute < 10 ? '0' : '') + props.minute;

  return (
    <div className='m-2 px-1 py-2' style={{background: '#FF0000'}}>
      <div className='d-flex flex-row'>
        <div>
          <img src='/images/misc/ClockFrame.png' alt='frame' />
          <div className='position-relative d-flex justify-content-center' style={{bottom: '50%'}}>
            <span className='clock-content' style={{lineHeight: 0}}>{preparedHour + ':' + preparedMinute}</span>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <div className='d-flex flex-row m-1'>
          <div className='clock-button c-pointer me-1' onClick={() => props.onHourChange(-1)}>
            <img src='/images/misc/ButtonFrame.png' alt='hour-minus-one' />
            <div className='position-relative d-flex justify-content-center' style={{bottom: '50%'}}>
              <span style={{lineHeight: 0}}>-1 h</span>
            </div>
          </div>
          <div className='clock-button c-pointer' onClick={() => props.onHourChange(1)}>
            <img src='/images/misc/ButtonFrame.png' alt='hour-plus-one' />
            <div className='position-relative d-flex justify-content-center' style={{bottom: '50%'}}>
              <span style={{lineHeight: 0}}>+1 h</span>
            </div>
          </div>
        </div>
        <div className='d-flex flex-row mx-1'>
          <div className='clock-button c-pointer me-1' onClick={() => props.onMinuteChange(-10)}>
            <img src='/images/misc/ButtonFrame.png' alt='minute-minus-one' />
            <div className='position-relative d-flex justify-content-center' style={{bottom: '50%'}}>
              <span style={{lineHeight: 0}}>-10 m</span>
            </div>
          </div>
          <div className='clock-button c-pointer' onClick={() => props.onMinuteChange(10)}>
            <img src='/images/misc/ButtonFrame.png' alt='minute-plus-one' />
            <div className='position-relative d-flex justify-content-center' style={{bottom: '50%'}}>
              <span style={{lineHeight: 0}}>+10 m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
