import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import NavMenu from '../../components/AdminPanel/NavMenu';

function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('products', { relative: true, replace: true });
  }, []);

  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
}

export default AdminPage;
