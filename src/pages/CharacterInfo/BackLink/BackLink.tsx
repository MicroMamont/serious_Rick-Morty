import { PATHS } from '@paths';
import { ArrowBack24 } from '@static';
import { Link } from 'react-router';
import { BACK_BUTTON_TEXT } from '../constants';

export function BackButton() {
  return (
    <Link
      to={PATHS.charactersList}
      className='BackNavLink'
    >
      <ArrowBack24 />
      <h3>{BACK_BUTTON_TEXT}</h3>
    </Link>
  );
}
