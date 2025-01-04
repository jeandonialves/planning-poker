export type PlayerInRoom = {
  id: string;
  name: string;
  estimated: string;
  spectatorMode: boolean
};

export type Room = {
  createByPlayer: string;
  displayEstimates: boolean;
  players: any;
};
