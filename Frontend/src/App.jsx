import Todoinput from './component/todoinput'
import { useEffect } from "react";
import Login from './component/login';
import Signup from './component/signup';
import { Outlet } from 'react-router-dom';

function App() {

 

  useEffect(() => {
    document.body.style.background = "linear-gradient(120deg, #182848, #4b6cb7)";
    return () => {
      document.body.style.background = ""; // Reset on unmount
    };
  }, []);





  return (
    <>
    <div className=' text-white '> 
      <div className="main ">
      
          <Outlet/>
        </div>
        </div>
    </>
  )
}

export default App
