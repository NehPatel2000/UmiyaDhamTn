// FoundingMember.ts

import { Person } from "./Person";

export interface FoundingMember {
  id: string;
  personUuid: string;
  tier: number;
  person?: Person;
}
