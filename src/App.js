import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import NavigationMenu from './JS files/NavigationMenu';
import Navigation from './JS files/TopNavigation';
import LoginPage from './JS files/LoginPage';
import Firmware from './JS files/Firmware';
import Pushfota from './JS files/Pushfota';

function App() {

  const items=[
    { id: 1, version: '1.0', filename: 'file1.txt'},
    { id: 2, version: '1.0', filename: 'file2.txt'},
    { id: 3, version: '1.0', filename: 'file3.txt'},
    { id: 4, version: '1.0', filename: 'file3.txt'},
    { id: 5, version: '1.0', filename: 'file3.txt'},
    { id: 6, version: '1.0', filename: 'file3.txt'},
  ];

  const items2 = [
    { id: 1, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
    { id: 2, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
    { id: 3, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
    { id: 4, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
    { id: 5, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
    { id: 6, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
  ];
  



  return (
   
      <div>
        <Routes>
          <Route exact path='/' element={<Navigation />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<NavigationMenu />} />
          <Route path="/firmware" element={<Firmware items={items}/>}/>
          <Route path="/pushfota" element={<Pushfota items={items2}/>}/>
        </Routes>
      </div>
   
  );
}

export default App;
