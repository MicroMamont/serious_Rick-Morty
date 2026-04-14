import { PageWrapper } from '@shared';
import { RouterProvider } from 'react-router';
import router from '../router/router';
import './App.css';

function App() {
  return (
    <div className='appWrapper'>
      <PageWrapper>
        <RouterProvider router={router} />
      </PageWrapper>
    </div>
  );
}

export default App;
