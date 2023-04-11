import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopNav } from './components/Layouts';
import { Detail, Products } from './pages';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/products" Component={Products} />
        <Route path="/detail" Component={Detail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
