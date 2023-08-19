import logo from './logo.svg';
import './App.css';
import { AllTrains } from './Components/AllTrains';
import { Route, Routes } from 'react-router-dom';
import { SingleTrain } from './Components/SingleTrain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllTrains />} />
        <Route path="/:TrainId" element={<SingleTrain />} />
      </Routes>
    </div>
  );
}

export default App;
