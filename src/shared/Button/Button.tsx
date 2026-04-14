import type { JSX } from 'react';

type ButtonProps = {
  children?: JSX.Element;
  onClick: () => void;
  className?: string;
};

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
