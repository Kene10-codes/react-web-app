import { Routes, Route } from 'react-router-dom'
import CreateAccount from 'pages/create-account';
import { Layout } from 'Layout/Layout';
import AddBill from 'pages/add-bill';
import ViewReport from 'pages/view-report';


function App() {  
  return (
     <Routes>
       <Route path='/' element={ <CreateAccount />}/>
       <Route element={<Layout />}>
         <Route path="/add-bill" element={<AddBill />} />
         <Route path='/view-report' element={<ViewReport />}/>
       </Route>
     </Routes>
  );
}

export default App;
