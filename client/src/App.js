// eslint-disable-next-line
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import LoginPage from './screens/LoginPage/LoginPage';
import UserOperations from './screens/UserOperations/UserOperations';
//import UserCrud from './screens/UserPage/UserCrud';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} exact />
        <Route path='/login' element={<LoginPage />} exact />
        <Route path='/register' element={<RegisterPage />} exact />
        <Route path='/user' element={<UserOperations />} exact />
      </Routes>

      <Footer />
    </BrowserRouter>
  );

}

export default App;