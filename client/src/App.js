// eslint-disable-next-line
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import Posts from './screens/Posts/Posts'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import LoginPage from './screens/LoginPage/LoginPage';


function App() {

  return (
    <BrowserRouter>
      <Header />
     
        <Routes>
          <Route path='/' element={<LandingPage />} exact />
          <Route path='/login' element={<LoginPage />} exact />
          <Route path='/register' element={<RegisterPage />} exact />
          <Route path='/posts' element={ <Posts/>} exact/>
        </Routes>
      
      <Footer />
    </BrowserRouter>
  );

}

export default App;