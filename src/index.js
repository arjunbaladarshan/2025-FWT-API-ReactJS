import ReactDOM from 'react-dom/client';
import Faculties from './Faculties';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import Home from './Home';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/faculties' element={<Faculties/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
