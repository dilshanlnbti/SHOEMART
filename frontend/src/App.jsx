import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import AdminPage from './admin/adminpage';






function App() {

  return (
    <>
    
      <Router>

        <Toaster position='top-center'/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client-page/*" element={<ClientPage />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/register" element={<Register  />} />
          <Route path="/admin-page/*" element={<AdminPage />} />
          
        </Routes>
      </Router>


     
    </>
  )
}

export default App