import { iUser } from '@domain/auth/interfaces/user.interface';

import { eParticipantVote } from '../enums/participant-vote.enum';
import { eParticipantRole } from '../enums/participant-role.enum';

export interface iParticipant {
  role: eParticipantRole;
  vote: eParticipantVote;
  user: iUser;
}
