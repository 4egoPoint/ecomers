
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import './app.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
