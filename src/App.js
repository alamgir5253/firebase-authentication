
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
// import Footer from '../'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import SignUP from './components/SignUp/SignUp';
import RequireAuth from './components/Auth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About></About>
          </RequireAuth>
        }></Route>
        <Route></Route>
        </Routes>
        {/* <Footer></Footer>     */}
    </div>
  );
}

export default App;
