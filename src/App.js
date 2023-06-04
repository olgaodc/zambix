import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import ArtWorks from './pages/artWorks/ArtWorks';
import Contacts from './pages/contacts/Contacts';

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/artWorks" element={<ArtWorks/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes> 
      </BrowserRouter>
      {/* <Navbar/>
      <Content/>
      <Footer/> */}
    </div>
  );
}

export default App;

