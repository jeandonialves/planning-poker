export type PlayerInRoom = {
  id: string;
  name: string;
  estimated: string;
};

export type Room = {
  createByPlayer: string;
  displayEstimates: boolean;
  players: any;
};
