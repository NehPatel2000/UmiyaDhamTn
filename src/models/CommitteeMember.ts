// CommitteeMember.ts

import {Person} from "./Person";

export interface  CommitteeMember {
  id: string;
  personUuid: string;
  position: string;
  hideContactInfo: boolean;
  person?: Person;
}
