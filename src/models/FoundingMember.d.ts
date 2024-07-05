// FoundingMember.ts

import { Person } from "@/models/Person";

export interface FoundingMember {
  id: string;
  personUuid: string;
  tier: number;
  person?: Person;
}
