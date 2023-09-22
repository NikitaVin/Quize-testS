import { IAnswer } from '../redux/types';

export const findId = (text: string, answer: IAnswer[]) => {
  let isTrueAnswer = false;
  for (let i = 0; i < answer.length; i++) {
    if (answer.length >= 1 && answer[i].variant === text) {
      isTrueAnswer = true;
    }
  }
  return isTrueAnswer;
};
