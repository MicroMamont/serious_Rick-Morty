import { Button } from '@shared';
import { ThemeSwitcher } from '@static';
import { useState } from 'react';
import { LANGS, THEMES } from './constants';

export function NavBar() {
  const [theme, setTheme] = useState<string>(THEMES.light);
  const [lang, setLang] = useState<string>(LANGS.RU);

  const onThemeSwitcherClick = () => {
    setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light);
  };

  const onLangSwitcherClick = () => {
    setLang(lang === LANGS.RU ? LANGS.EN : LANGS.RU);
  };

  return (
    <div className='NavBarWrapper'>
      <Button
        onClick={onThemeSwitcherClick}
        className='NavButton'
      >
        <ThemeSwitcher />
      </Button>
      <Button
        onClick={onLangSwitcherClick}
        className='NavButton'
      >
        <span className='NavButtonLang'>{lang}</span>
      </Button>
    </div>
  );
}
