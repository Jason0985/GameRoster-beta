export interface PaddlePlayer {
  id: string;
  name: string;
  wins: number;
  losses: number;
  balance: number;
}

export interface PaddleDebtEntry {
  id: string;
  winnerIds: string[];
  loserIds: string[];
}
