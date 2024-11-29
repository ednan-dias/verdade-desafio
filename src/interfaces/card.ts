export type Type = "TRUTH" | "CHALLENGE";

export interface CreateCard {
  type: Type;
  message: string;
}

export interface Card {
  id: string;
  type: Type;
  message: string;
}
