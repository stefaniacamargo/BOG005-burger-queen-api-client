import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';

// Components
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPanel/AdminPage';
import AdminProductsPage from './pages/AdminPanel/AdminProductsPage';
import WaiterPage from './pages/WaiterPage';
import ChefPage from './pages/ChefPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        >
          <Route path="products" element={<AdminProductsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="waiter" element={<WaiterPage />} />
        <Route path="chef" element={<ChefPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
