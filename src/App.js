
import './App.css';

import Header from './jsx/Header.jsx';
import LeftSideBar from './jsx/LeftSideBar';
import MidSection from './jsx/MidSection';

function App() {
  return (
   <>
   <Header/>
       <div className='container'>
         <LeftSideBar/>
         <MidSection/>
      </div>
   </>
  );
}

export default App;
