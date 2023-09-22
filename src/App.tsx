import { FC, useState, useEffect, useCallback } from 'react';
import { GlobalStyles } from './styles/global.styles';
import { DivApp } from './App.styles';
import { useAppDispatch } from './redux/store';
import { getAsyncQuestions, questinosSelector } from './redux/slices/questionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Finish } from './components/finishBlock/Finish';
import { Quize } from './components/quizeBlock/Quize';
import { clearFullAnswer } from './redux/slices/answerSlice';
import { Download } from './components/Download/Download';
import { IAnswer } from './redux/types';

const App: FC = () => {
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    appDispatch(getAsyncQuestions());
  }, [appDispatch]);

  const { questions } = useSelector(questinosSelector);

  const [step, setStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const question = questions.items[step];
  const [answers, setAnswers] = useState<string[]>([]);

  const onClickAnswer = useCallback(
    (userVariants: IAnswer[]) => () => {
      if (userVariants.length === 1 && typeof question.correct === 'number') {
        if (userVariants[0].variant === question.variants[question.correct]) {
          setTotalScore(totalScore + 1);
        }
        setAnswers([...answers, userVariants[0].variant]);
      }
      if (userVariants.length > 1 && Array.isArray(question.correct)) {
        if (
          (userVariants[0].variant === question.variants[question.correct[0]] &&
            userVariants[1].variant === question.variants[question.correct[1]]) ||
          (userVariants[0].variant === question.variants[question.correct[1]] &&
            userVariants[1].variant === question.variants[question.correct[0]])
        ) {
          setTotalScore(totalScore + 1);
        }
        const multiVariants = userVariants.map((el) => ((el as unknown) = el.variant));
        setAnswers([...answers, multiVariants.join(', ')]);
      }
      dispatch(clearFullAnswer());
      setStep(step + 1);
    },
    [answers, dispatch, question, step, totalScore]
  );

  const [openFullResult, setOpenFullResult] = useState(false);

  const onClickRestart = useCallback(() => {
    setAnswers([]);
    setStep(0);
    setTotalScore(0);
    setOpenFullResult(false);
  }, []);

  const onClickOpenFullResult = useCallback(() => {
    setOpenFullResult(!openFullResult);
  }, [openFullResult]);

  return (
    <DivApp openFullResult={openFullResult} data-testid="app-test1">
      <GlobalStyles />
      {questions.status === 'loaded' ? (
        step !== questions.items.length ? (
          <Quize data-testid="Quize-elem" step={step} onClick={onClickAnswer} question={question} />
        ) : (
          <Finish
            answers={answers}
            openFullResult={openFullResult}
            onClickOpenFullResult={onClickOpenFullResult}
            onClickRestart={onClickRestart}
            totalScore={totalScore}
          />
        )
      ) : (
        <Download />
      )}
    </DivApp>
  );
};

export default App;
