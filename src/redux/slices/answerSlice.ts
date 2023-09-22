import { IAnswer, IAnswerSlice } from '../types';
import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IAnswerSlice = {
  answer: [],
};

const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IAnswer>) => {
      state.answer = [];
      state.answer.push({ ...action.payload });
    },
    addFewAnswers: (state, action: PayloadAction<IAnswer>) => {
      state.answer.push({ ...action.payload });
    },
    clearAnswer: (state, action: PayloadAction<string>) => {
      state.answer = state.answer.filter((el) => el.variant !== action.payload);
    },
    clearFullAnswer: (state) => {
      state.answer = [];
    },
  },
});

export const selectorAnswer = (state: RootState) => state.answer;

export const { addAnswer, clearAnswer, addFewAnswers, clearFullAnswer } = answerSlice.actions;
export default answerSlice.reducer;
