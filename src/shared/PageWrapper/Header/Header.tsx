import { HeaderLogo } from '@static';
import { NavBar } from './NavBar/NavBar';

export function Header() {
  return (
    <div className='PageStaticElemWrapper HeaderWrapper'>
      <HeaderLogo />
      <NavBar />
    </div>
  );
}
