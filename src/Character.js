const characterSize = 48;

const Character = props => <img src={props.src} alt={props.alt} style={{imageRendering: 'pixelated'}} />;

const characterMapping = {
  abigail:   <Character src='/images/character/Abigail.png' alt='Abigail' />,
  alex:      <Character src='/images/character/Alex.png' alt='Alex' />,
  caroline:  <Character src='/images/character/Caroline.png' alt='Caroline' />,
  clint:     <Character src='/images/character/Clint.png' alt='Clint' />,
  demetrius: <Character src='/images/character/Demetrius.png' alt='Demetrius' />,
  elliot:    <Character src='/images/character/Elliot.png' alt='Elliot' />,
  evelyn:    <Character src='/images/character/Evelyn.png' alt='Evelyn' />,
  george:    <Character src='/images/character/George.png' alt='George' />,
  gus:       <Character src='/images/character/Gus.png' alt='Gus' />,
  haley:     <Character src='/images/character/Haley.png' alt='Haley' />,
  harvey:    <Character src='/images/character/Harvey.png' alt='Harvey' />,
  jas:       <Character src='/images/character/Jas.png' alt='Jas' />,
  jodi:      <Character src='/images/character/Jodi.png' alt='Jodi' />,
  kent:      <Character src='/images/character/Kent.png' alt='Kent' />,
  leah:      <Character src='/images/character/Leah.png' alt='Leah' />,
  lewis:     <Character src='/images/character/Lewis.png' alt='Lewis' />,
  linus:     <Character src='/images/character/Linus.png' alt='Linus' />,
  marnie:    <Character src='/images/character/Marnie.png' alt='Marnie' />,
  maru:      <Character src='/images/character/Maru.png' alt='Maru' />,
  pam:       <Character src='/images/character/Pam.png' alt='Pam' />,
  penny:     <Character src='/images/character/Penny.png' alt='Penny' />,
  pierre:    <Character src='/images/character/Pierre.png' alt='Pierre' />,
  robin:     <Character src='/images/character/Robin.png' alt='Robin' />,
  sam:       <Character src='/images/character/Sam.png' alt='Sam' />,
  sebastian: <Character src='/images/character/Sebastian.png' alt='Sebastian' />,
  shane:     <Character src='/images/character/Shane.png' alt='Shane' />,
  vincent:   <Character src='/images/character/Vincent.png' alt='Vincent' />,
  willy:     <Character src='/images/character/Willy.png'   alt='Willy' />,
  wizard:    <Character src='/images/character/Wizard.png' alt='Wizard' />
}

export { characterMapping, characterSize };