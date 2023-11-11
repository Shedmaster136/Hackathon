export interface ICard {
  url: string;
  header: string;
  text: string;
}

export interface IScore {
  username: string;
  score: number;
  id: string;
}

export interface IScores {
  scores: IScore[];
}
