import { screen, render } from '@testing-library/react';
import { Quize } from './Quize';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const question = {
  id: '0',
  correct: 0,
  dificulty: 'easy',
  title: 'Кто создал платформу цифровой дистрибуции Steam?',
  variants: ['Valve', 'Pixeltail Games', 'Ubisoft', 'Electronic Arts'],
};

describe('Quize component', () => {
  it('Quize shoud be render', () => {
    render(
      <Provider store={store}>
        <Quize question={question} step={0} onClick={jest.fn()} />
      </Provider>
    );
    const quizeElement = screen.getByTestId('quize-test');
    expect(quizeElement).toBeInTheDocument();
    expect(quizeElement).toHaveTextContent('Ответить');
  });
});
