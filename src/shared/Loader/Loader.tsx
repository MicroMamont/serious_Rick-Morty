import { LoaderImg } from '@static';
import { SIZE } from './constants';
import './Loader.css';

type LoaderProps = {
  size: 'small' | 'big';
  text?: string;
};

export function Loader({ size, text }: LoaderProps) {
  const { height, width } =
    size === 'small' ? { ...SIZE.small } : { ...SIZE.big };

  return (
    <div className='LoaderWrapper'>
      <LoaderImg
        className='LoaderRotation'
        height={height}
        width={width}
      />
      {text && <h3>{text}</h3>}
    </div>
  );
}
