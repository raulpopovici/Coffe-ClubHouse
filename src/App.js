import Routes from './Routes';
import {useState, React,useEffect} from 'react';
import AuthContext from './context/auth'




function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
    },[]);
  return (


    <AuthContext.Provider value={{user,setUser}}>
        <Routes />
    </AuthContext.Provider>
        
  
  );
}

export default App;
