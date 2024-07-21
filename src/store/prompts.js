import {createSlice} from '@reduxjs/toolkit';

const promptSlice = createSlice({
  name: 'Prompts',
  initialState: {
    questions: [],
    answers: [],
  },
  reducers: {
    getQuestions: state => {
      return state.questions;
    },
    setQuestions: (state, action) => {
      return {
        questions: action.payload,
        answers: state.answers,
      };
    },
    getAnswers: () => {
      return state.answers;
    },
    addAnswers: (state, action) => {
      return {
        questions: state.questions,
        answers: [...state.item, {...action.payload.answer}],
      };
    },
  },
});

export const getQuestions = promptSlice.actions.getQuestions;
export const setQuestions = promptSlice.actions.setQuestions;
export const getAnswers = promptSlice.actions.getAnswers;
export const addAnswers = promptSlice.actions.addAnswers;

export default promptSlice.reducer;
