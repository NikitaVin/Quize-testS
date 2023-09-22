import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { IfullOrders } from '../types';

export const getAsyncQuestions = createAsyncThunk('questions/getAsyncQuestions', async () => {
  const { data } = await axios.get('https://650860cf56db83a34d9c3e6e.mockapi.io/quize/questions');
  return data;
});

const initialState: IfullOrders = {
  questions: {
    items: [],
    status: 'loading',
  },
};

const questionsSlice = createSlice({
  name: 'fullOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsyncQuestions.pending, (state) => {
      state.questions.status = 'loading';
    });

    builder.addCase(getAsyncQuestions.fulfilled, (state, action) => {
      state.questions.items = action.payload;
      state.questions.status = 'loaded';
    });

    builder.addCase(getAsyncQuestions.rejected, (state) => {
      console.log('err', state);
      alert('Произошла ошибка, попробуйте обновить страницу');
      state.questions.status = 'loaded';
    });
  },
});

export const questinosSelector = (state: RootState) => state.questions;

export default questionsSlice.reducer;
