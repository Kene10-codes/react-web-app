import { Routes, Route } from 'react-router-dom'
import CreateAccount from 'pages/create-account';


function App() {  
  return (
     <Routes>
       <Route path='/' element={ <CreateAccount />}/>
     </Routes>
  );
}

export default App;
