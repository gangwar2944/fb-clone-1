
import './App.css';

import Header from './jsx/Header.jsx';
import LeftSideBar from './jsx/LeftSideBar';
import MidSection from './jsx/MidSection';
import RightContainer from './jsx/RightContainer';

function App() {
  return (
   <>
   <Header/>
       <div className='container'>
         <LeftSideBar/>
         <MidSection/>
         <RightContainer/>
      </div>
   </>
  );
}

export default App;
