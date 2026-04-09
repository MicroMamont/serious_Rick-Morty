import { PageWrapper } from '@shared';
import { BackButton } from './BackLink/BackLink.tsx';
import './CharacterInfo.css';

export function CharacterInfo() {
  return (
    <PageWrapper>
      <>
        <BackButton />
        <div className='CharacterInfoWrapper'>
          <h1> Card </h1>
        </div>
      </>
    </PageWrapper>
  );
}
