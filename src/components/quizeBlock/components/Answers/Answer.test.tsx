import { screen, render, waitFor } from '@testing-library/react';
import { Answers } from './Answers';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

const question = {
  id: '0',
  correct: 0,
  dificulty: 'easy',
  title: 'Кто создал платформу цифровой дистрибуции Steam?',
  variants: ['Valve', 'Pixeltail Games', 'Ubisoft', 'Electronic Arts'],
};

describe('Answers component', () => {
  it('Answers shoud be render', () => {
    render(
      <Provider store={store}>
        <Answers text="1668" question={question} />
      </Provider>
    );
    const answersElement = screen.getAllByTestId('answers-test');
    waitFor(() => expect(answersElement).toBeInTheDocument());
    waitFor(() => expect(answersElement).toHaveTextContent('1668'));
  });
});
