import AbigailSchedule   from './schedule/Abigail.json';
import AlexSchedule      from './schedule/Alex.json';
import CarolineSchedule  from './schedule/Caroline.json';
import ClintSchedule     from './schedule/Clint.json';
import DemetriusSchedule from './schedule/Demetrius.json';
import ElliotSchedule    from './schedule/Elliot.json';
import EvelynSchedule    from './schedule/Evelyn.json';
import GeorgeSchedule    from './schedule/George.json';
import GusSchedule       from './schedule/Gus.json';
import HaleySchedule     from './schedule/Haley.json';
import HarveySchedule    from './schedule/Harvey.json';
import JasSchedule       from './schedule/Jas.json';
import JodiSchedule      from './schedule/Jodi.json';
import KentSchedule      from './schedule/Kent.json';
import LeahSchedule      from './schedule/Leah.json';
import LewisSchedule     from './schedule/Lewis.json';
import LinusSchedule     from './schedule/Linus.json';
import MarnieSchedule    from './schedule/Marnie.json';
import MaruSchedule      from './schedule/Maru.json';
import PamSchedule       from './schedule/Pam.json';
import PennySchedule     from './schedule/Penny.json';
import PierreSchedule    from './schedule/Pierre.json';
import RobinSchedule     from './schedule/Robin.json';
import SamSchedule       from './schedule/Sam.json';
import SebastianSchedule from './schedule/Sebastian.json';
import ShaneSchedule     from './schedule/Shane.json';
import VincentSchedule   from './schedule/Vincent.json';
import WillySchedule     from './schedule/Willy.json';
import WizardSchedule    from './schedule/Wizard.json';

const Character = props => <img src={props.src} alt={props.alt} style={{imageRendering: 'pixelated'}} />;

const characterMapping = {
  abigail: {
    schedule: AbigailSchedule, 
    component: <Character src='/images/character/Abigail.png' alt='Abigail' />
  },
  alex: {
    schedule: AlexSchedule, 
    component: <Character src='/images/character/Alex.png' alt='Alex' />
  },
  caroline: {
    schedule: CarolineSchedule, 
    component: <Character src='/images/character/Caroline.png' alt='Caroline' />
  },
  clint: {
    schedule: ClintSchedule, 
    component: <Character src='/images/character/Clint.png' alt='Clint' />
  },
  demetrius: {
    schedule: DemetriusSchedule, 
    component: <Character src='/images/character/Demetrius.png' alt='Demetrius' />
  },
  elliot: {
    schedule: ElliotSchedule, 
    component: <Character src='/images/character/Elliot.png' alt='Elliot' />
  },
  evelyn: {
    schedule: EvelynSchedule, 
    component: <Character src='/images/character/Evelyn.png' alt='Evelyn' />
  },
  george: {
    schedule: GeorgeSchedule, 
    component: <Character src='/images/character/George.png' alt='George' />
  },
  gus: {
    schedule: GusSchedule, 
    component: <Character src='/images/character/Gus.png' alt='Gus' />
  },
  haley: {
    schedule: HaleySchedule, 
    component: <Character src='/images/character/Haley.png' alt='Haley' />
  },
  harvey: {
    schedule: HarveySchedule, 
    component: <Character src='/images/character/Harvey.png' alt='Harvey' />
  },
  jas: {
    schedule: JasSchedule, 
    component: <Character src='/images/character/Jas.png' alt='Jas' />
  },
  jodi: {
    schedule: JodiSchedule, 
    component: <Character src='/images/character/Jodi.png' alt='Jodi' />
  },
  kent: {
    schedule: KentSchedule, 
    component: <Character src='/images/character/Kent.png' alt='Kent' />
  },
  leah: {
    schedule: LeahSchedule, 
    component: <Character src='/images/character/Leah.png' alt='Leah' />
  },
  lewis: {
    schedule: LewisSchedule, 
    component: <Character src='/images/character/Lewis.png' alt='Lewis' />
  },
  linus: {
    schedule: LinusSchedule, 
    component: <Character src='/images/character/Linus.png' alt='Linus' />
  },
  marnie: {
    schedule: MarnieSchedule, 
    component: <Character src='/images/character/Marnie.png' alt='Marnie' />
  },
  maru: {
    schedule: MaruSchedule, 
    component: <Character src='/images/character/Maru.png' alt='Maru' />
  },
  pam: {
    schedule: PamSchedule, 
    component: <Character src='/images/character/Pam.png' alt='Pam' />
  },
  penny: {
    schedule: PennySchedule, 
    component: <Character src='/images/character/Penny.png' alt='Penny' />
  },
  pierre: {
    schedule: PierreSchedule, 
    component: <Character src='/images/character/Pierre.png' alt='Pierre' />
  },
  robin: {
    schedule: RobinSchedule, 
    component: <Character src='/images/character/Robin.png' alt='Robin' />
  },
  sam: {
    schedule: SamSchedule, 
    component: <Character src='/images/character/Sam.png' alt='Sam' />
  },
  sebastian: {
    schedule: SebastianSchedule, 
    component: <Character src='/images/character/Sebastian.png' alt='Sebastian' />
  },
  shane: {
    schedule: ShaneSchedule, 
    component: <Character src='/images/character/Shane.png' alt='Shane' />
  },
  vincent: {
    schedule: VincentSchedule, 
    component: <Character src='/images/character/Vincent.png' alt='Vincent' />
  },
  willy: {
    schedule: WillySchedule, 
    component: <Character src='/images/character/Willy.png' alt='Willy' />
  },
  wizard: {
    schedule: WizardSchedule, 
    component: <Character src='/images/character/Wizard.png' alt='Wizard' />
  }
}

export default characterMapping;