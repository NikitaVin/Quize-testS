import React, { FC } from 'react';
import { FullInfoResults } from './components/FullInfoResults/FullInfoResults';
import { ButtonBlock, FinishBlockText, FinishImg, WrapperFinish } from './Finish.styles';
import { useSelector } from 'react-redux';
import { questinosSelector } from '../../redux/slices/questionSlice';
import { imgUrl } from '../../assets/img/restart';
import { MyButton } from '../Button/Button';

interface IFinish {
  totalScore: number;
  onClickRestart: () => void;
  onClickOpenFullResult: () => void;
  openFullResult: boolean;
  yourAnswersArr: string[];
}

export const Finish: FC<IFinish> = ({
  totalScore,
  onClickRestart,
  onClickOpenFullResult,
  openFullResult,
  yourAnswersArr,
}) => {
  const { questions } = useSelector(questinosSelector);

  return (
    <WrapperFinish>
      <FinishImg src={imgUrl} alt="Финиш" />
      <FinishBlockText>
        Правильных ответов {totalScore} из {questions.items.length}
      </FinishBlockText>
      <ButtonBlock>
        <MyButton onClick={onClickRestart} text="Пройти еще раз" />
        <MyButton onClick={onClickOpenFullResult} text="Cтатистика" />
      </ButtonBlock>
      {openFullResult && <FullInfoResults yourAnswersArr={yourAnswersArr} />}
    </WrapperFinish>
  );
};
