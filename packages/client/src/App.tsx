import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopNav } from './components/Layouts';
import { Products } from './pages';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/products" Component={Products} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
