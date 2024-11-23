export type Player = {
  id: string;
  name: string;
  roomId: string;
};

export type Room = {
  createByPlayer: string;
  players: {};
};
