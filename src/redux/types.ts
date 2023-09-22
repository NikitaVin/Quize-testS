export interface ItemsTypes {
  id: string;
  title: string;
  variants: string[];
  correct: number | number[];
  dificulty: string;
}

export interface IfullOrders {
  questions: {
    items: ItemsTypes[];
    status: string;
  };
}

export interface IAnswer {
  variant: string;
}

export interface IAnswerSlice {
  answer: IAnswer[];
}
