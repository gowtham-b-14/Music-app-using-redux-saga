import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Name from './components/Name';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Form/> */}
     
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/name" element={<Name/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
