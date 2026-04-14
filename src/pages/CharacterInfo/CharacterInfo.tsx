import { BackButton } from './BackLink/BackLink';
import './CharacterInfo.css';

export function CharacterInfo() {
  return (
    <>
      <BackButton />
      <div className='CharacterInfoWrapper'>
        <h1> Card </h1>
      </div>
    </>
  );
}
