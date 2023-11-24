
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from "./components/home/Home";
import './app.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
