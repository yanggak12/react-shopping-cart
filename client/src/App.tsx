import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" Component={Products} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
