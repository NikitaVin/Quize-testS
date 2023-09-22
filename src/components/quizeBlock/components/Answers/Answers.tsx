import React, { FC, useCallback } from 'react';
import { findId } from '../../../../utils/findId';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAnswer,
  addFewAnswers,
  clearAnswer,
  selectorAnswer,
} from '../../../../redux/slices/answerSlice';
import { Answer } from './Answers.styles';
import { Checkbox, FormControl, FormControlLabel, Radio } from '@mui/material';
import { ItemsTypes } from '../../../../redux/types';

interface IAnswers {
  text: string;
  question: ItemsTypes;
}

export const Answers: FC<IAnswers> = ({ text, question }) => {
  const { answer } = useSelector(selectorAnswer);
  const dispatch = useDispatch();
  const didChecked = findId(text, answer);

  const onClickVariant = useCallback(
    (text: string) => {
      if (findId(text, answer)) {
        dispatch(clearAnswer(text));
      }
      if (!findId(text, answer)) {
        const userAnswer = {
          variant: text,
        };
        !Array.isArray(question.correct)
          ? dispatch(addAnswer(userAnswer))
          : dispatch(addFewAnswers(userAnswer));
      }
    },
    [answer, question, dispatch]
  );

  return (
    <Answer key={text} data-testid="answers-test">
      <FormControl key={text} data-testid="answers-test">
        <FormControlLabel
          onChange={() => onClickVariant(text)}
          value={text}
          checked={didChecked}
          control={Array.isArray(question.correct) ? <Checkbox /> : <Radio />}
          label={text}
        />
      </FormControl>
    </Answer>
  );
};
