import { RouterProvider } from 'react-router';
import router from '../router/router';
import './App.css';

function App() {
  return (
    <div className='appWrapper'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
