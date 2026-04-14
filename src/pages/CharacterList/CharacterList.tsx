import { Loader } from '@shared';
import { TitleImg } from '@static';
import './CharacterList.css';

export function CharacterList() {
  return (
    <div className='CharacterListWrapper'>
      <TitleImg />
      <Loader size='small' />
      <Loader
        size='big'
        text='Loading characters...'
      />
    </div>
  );
}
