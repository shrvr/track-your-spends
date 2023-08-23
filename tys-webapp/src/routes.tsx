import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';

const AppRouter = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
