
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Headersection from './components/Headersection';
import Footersection from './components/Footersection';
import Whoaresection from './components/Whoaresection';
import Oursection from './components/Oursection';
import Studentsection from './components/Studentsection';
import Areyousection from './components/Areyousection';
import Softwaresection from './components/Softwaresection';
import Whatissection from './components/Whatissection';
import Backtop from './components/Backtop';
import { Instagram, Linkedin2, Telegram, Twitter } from './components/Icon';
import LoaderSec from './components/LoaderSec';

function App() {
  return (
    <div className='bg-black overflow-x-hidden '>
      <div className=' d-flex flex-column socialmedia bg-white position-fixed'>
        <a href='https://twitter.com/login?lang=en' target='_blank'><Twitter /></a>
        <a href='https://www.instagram.com/' target='_blank'><Instagram /></a>
        <a href='https://telegram.org/' target='_blank'><Telegram /></a>
        <a href='https://www.linkedin.com/feed/' target='_blank'><Linkedin2 /></a>
      </div>
      <Headersection />
      <LoaderSec />
      <Whatissection />
      <Softwaresection />
      <Areyousection />
      <Studentsection />
      <Oursection />
      <Whoaresection />
      <Footersection />
      <Backtop />
    </div>
  );
}

export default App;
