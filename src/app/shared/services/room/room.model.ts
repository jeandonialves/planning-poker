export type PlayerInRoom = {
  name: string;
  estimated: string;
};

export type Room = {
  createByPlayer: string;
  displayEstimates: boolean;
  players: any;
};
