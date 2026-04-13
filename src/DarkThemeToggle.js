import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkTheme } from './redux/actions';

function DarkThemeToggle() {
  const darkTheme = useSelector((state) => state.darkTheme);
  const dispatch = useDispatch();

  return (
    <label className="toggle-wrap" htmlFor="dark-theme-toggle">
      <input
        id="dark-theme-toggle"
        type="checkbox"
        checked={darkTheme}
        onChange={() => dispatch(toggleDarkTheme())}
      />
      Use dark theme
    </label>
  );
}

export default DarkThemeToggle;