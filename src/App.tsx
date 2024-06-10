import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Loader from './components/common/Loader';
import PageRoutes from './routes/PageRoutes.js';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? <Loader /> : <PageRoutes />;
}

export default App;
