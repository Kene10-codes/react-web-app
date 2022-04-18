import { Routes, Route } from 'react-router-dom'
import CreateAccount from 'pages/create-account';
import { Layout } from 'components/Layout/Layout';
import AddBill from 'pages/add-bill';


function App() {  
  return (
     <Routes>
       <Route path='/' element={ <CreateAccount />}/>
       <Route element={<Layout />}>
         <Route path="/add-bill" element={<AddBill />} />
       </Route>
     </Routes>
  );
}

export default App;
