import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

test('renders theme app heading', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const headingElement = screen.getByText(/theme based react redux app/i);
  expect(headingElement).toBeInTheDocument();
});
