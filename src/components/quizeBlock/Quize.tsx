import React, { FC, useEffect, useState } from 'react';
import { Answers } from './components/Answers/Answers';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { Wrapper, Question } from './Quize.styles';
import { useSelector } from 'react-redux';
import { selectorAnswer } from '../../redux/slices/answerSlice';
import { MyButton } from '../Button/MyButton';
import { IAnswer, ItemsTypes } from '../../redux/types';

interface IQuize {
  question: ItemsTypes;
  onClick: (userVariants: IAnswer[]) => () => void;
  step: number;
}

export const Quize: FC<IQuize> = ({ question, onClick, step }) => {
  const { answer } = useSelector(selectorAnswer);
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (Array.isArray(question.correct) && answer.length >= 2) {
      setDisabled(false);
    } else if (!Array.isArray(question.correct) && answer.length === 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [answer, question]);

  return (
    <Wrapper data-testid="quize-test">
      <ProgressBar step={step} />
      <Question>{question.title}</Question>
      {question.variants.map((text) => {
        return <Answers key={text} text={text} question={question} />;
      })}
      <MyButton onClick={onClick(answer)} text="Ответить" disabled={disabled} />
    </Wrapper>
  );
};
