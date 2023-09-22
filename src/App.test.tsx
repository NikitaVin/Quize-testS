import { screen, render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('App component', () => {
  it('App loading res', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const appElement = screen.getByTestId('app-test1');
    expect(appElement).toBeInTheDocument();
  });
});
