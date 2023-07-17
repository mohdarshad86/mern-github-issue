import { Route, Routes } from 'react-router-dom';
import IssuePage from './pages/IssuePage';
import { HomePage } from './pages/HomePage';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Routes >
        <Route exact path="/" element={<HomePage />} />
        <Route path="/issue/:issueNumber" element={<IssuePage />} />
      </Routes>
    </div>
  );
};

export default App;
