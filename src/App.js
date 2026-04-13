import styled from 'styled-components';
import theme from 'styled-theming';
import './App.css';
import DarkThemeProvider from './DarkThemeProvider';
import DarkThemeToggle from './DarkThemeToggle';

const backgroundColor = theme('theme', {
  light: '#f6f7fb',
  dark: '#151a23',
});

const foregroundColor = theme('theme', {
  light: '#ffffff',
  dark: '#1f2733',
});

const textColor = theme('theme', {
  light: '#1b1f2b',
  dark: '#f2f4f8',
});

const mutedColor = theme('theme', {
  light: '#4f566b',
  dark: '#c5ced8',
});

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${backgroundColor};
  color: ${textColor};
  display: grid;
  place-items: center;
  padding: 24px;
  transition: background-color 0.2s linear, color 0.2s linear;
`;

const Panel = styled.main`
  width: min(640px, 100%);
  background: ${foregroundColor};
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 12px 36px rgba(12, 17, 29, 0.14);
  transition: background-color 0.2s linear;
`;

const Title = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(1.5rem, 3vw, 2rem);
`;

const Description = styled.p`
  margin: 0 0 20px;
  color: ${mutedColor};
  line-height: 1.6;
`;

function App() {
  return (
    <DarkThemeProvider>
      <Wrapper>
        <Panel>
          <Title>Theme Based React Redux App</Title>
          <Description>
            Toggle the checkbox to switch between light and dark themes. The current theme
            selection is stored in Redux and applied through a custom provider.
          </Description>
          <DarkThemeToggle />
        </Panel>
      </Wrapper>
    </DarkThemeProvider>
  );
}

export default App;
