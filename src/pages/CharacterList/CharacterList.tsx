import { Loader, PageWrapper } from '@shared';
import { TitleImg } from '@static';
import './CharacterList.css';

export function CharacterList() {
  return (
    <PageWrapper>
      <div className='CharacterListWrapper'>
        <TitleImg />
        <Loader size='s' />
        <Loader
          size='b'
          text='Loading characters...'
        />
      </div>
    </PageWrapper>
  );
}
