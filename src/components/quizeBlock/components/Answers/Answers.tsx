import React, { FC } from 'react';
import { Answer } from './Answers.styles';
import { findId } from '../../../../utils/findId';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAnswer,
  addFewAnswers,
  clearAnswer,
  selectorAnswer,
} from '../../../../redux/slices/answerSlice';
import { IItems } from '../../../../redux/slices/questionSlice';
import { Checkbox, FormControl, FormControlLabel, Radio } from '@mui/material';

interface IAnswers {
  text: string;
  question: IItems;
}

export const Answers: FC<IAnswers> = ({ text, question }) => {
  const { answer } = useSelector(selectorAnswer);
  const dispatch = useDispatch();
  console.log(answer);
  const didChecked = findId(text, answer);

  const onClickVariant = (text: string) => {
    if (findId(text, answer)) {
      dispatch(clearAnswer(text));
    }
    if (!findId(text, answer)) {
      const userAnswer = {
        variant: text,
      };
      dispatch(addAnswer(userAnswer));
    }
  };

  const onClickFewVariants = (text: string) => {
    if (findId(text, answer)) {
      dispatch(clearAnswer(text));
    }
    if (!findId(text, answer)) {
      const userAnswer = {
        variant: text,
      };
      dispatch(addFewAnswers(userAnswer));
    }
  };

  return (
    <Answer key={text} data-testid="answers-test">
      <FormControl key={text} data-testid="answers-test">
        <FormControlLabel
          onChange={
            Array.isArray(question.correct)
              ? () => onClickFewVariants(text)
              : () => onClickVariant(text)
          }
          value={text}
          checked={didChecked}
          control={Array.isArray(question.correct) ? <Checkbox /> : <Radio />}
          label={text}
        />
      </FormControl>
    </Answer>
  );
};
