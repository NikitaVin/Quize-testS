import React, { FC, useMemo } from 'react';
import { ResultsList, ResultsWrapper, ResultsContainer } from './FulInfoResults.styles';
import { useSelector } from 'react-redux';
import { questinosSelector } from '../../../../redux/slices/questionSlice';
import { BallQuantity, IFullInfoResults } from './types';

export const FullInfoResults: FC<IFullInfoResults> = ({ answers }) => {
  const { questions } = useSelector(questinosSelector);

  const finishResults = useMemo(() => {
    return questions.items.map((el, ind) => {
      const correctVariantForMulti: string[] = [];
      let isTrueAnswer = false;
      if (Array.isArray(el.correct)) {
        for (let j = 0; j < el.correct.length; j++) {
          correctVariantForMulti.push(el.variants[el.correct[j]]);
        }

        if (correctVariantForMulti.join(', ') === answers[ind]) {
          isTrueAnswer = true;
        } else {
          isTrueAnswer = false;
        }
      } else {
        if (el.variants[el.correct] === answers[ind]) {
          isTrueAnswer = true;
        } else {
          isTrueAnswer = false;
        }
      }

      const arr = {
        ...el,
        userAnswer: answers[ind],
        correctVariantString: correctVariantForMulti.join(', '),
        isTrueAnswer,
      };
      return arr;
    });
  }, [questions, answers]);

  return (
    <ResultsWrapper data-testid="fulInfoResults-test">
      <ResultsList>
        {finishResults.map((el, i) => {
          return (
            <ResultsContainer key={el.title} correct={el.isTrueAnswer}>
              <h3>Вопрос: {i + 1}</h3>
              <h4>Сложность: {el.dificulty}</h4>
              <h4>Ваш ответ: {el.userAnswer}</h4>
              <h4>Правильный ответ:</h4>
              {!Array.isArray(el.correct) ? el.variants[el.correct] : el.correctVariantString}
              <h4>Количество баллов:</h4>
              {el.isTrueAnswer ? (
                <p>
                  {el.dificulty === 'easy'
                    ? BallQuantity.EASY
                    : el.dificulty === 'medium'
                    ? BallQuantity.MEDIUM
                    : BallQuantity.HARD}
                </p>
              ) : (
                <p>0</p>
              )}
            </ResultsContainer>
          );
        })}
      </ResultsList>
    </ResultsWrapper>
  );
};
