import { useEffect, useState } from 'react';
import { Button } from './ThemeButton.styles';

import { KEY_LS, setTheme } from 'components/helpers/themtoggle';

export const ThemeButton = () => {
  const [togClass, setTogClass] = useState('dark');
  let theme = localStorage.getItem(KEY_LS);

  const handleOnClick = () => {
    if (localStorage.getItem(KEY_LS) === 'theme-dark') {
      setTheme('theme-light');
      setTogClass(true);
    } else {
      setTheme('theme-dark');
      setTogClass(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(KEY_LS) === 'theme-dark') {
      setTogClass(false);
    } else if (localStorage.getItem(KEY_LS) === 'theme-light') {
      setTogClass(true);
    }
  }, [theme]);
  return (
    <div className="App" style={{ transition: `all 300ms ease` }}>
      <Button checked={togClass}>
        <input type="checkbox" checked={togClass} onChange={handleOnClick} />

        <span />
      </Button>
    </div>
  );
};
