import type { JSX } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import './PageWrapper.css';

type PageWrapperProps = {
  children: JSX.Element;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className='PageWrapper'>
      <Header />
      <div className='PageContent'>{children}</div>
      <Footer />
    </div>
  );
}
