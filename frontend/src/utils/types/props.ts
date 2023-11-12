export interface ICard {
  url: string;
  header: string;
  text: string;
}

export interface IScore {
  user: string;
  score: number;
  name_level: string;
}

export interface IScores {
  scores: IScore[];
}
