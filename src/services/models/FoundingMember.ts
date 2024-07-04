// FoundingMember.ts

import { Person } from "@/services/models/Person";

export default class FoundingMember {
  id: string;
  personUuid: string;
  tier: number;
  person?: Person;

  constructor(
    id: string,
    personUuid: string,
    tier: number,
    person?: Person
  ) {
    this.id = id;
    this.personUuid = personUuid;
    this.tier = tier;
    this.person = person;
  }
}
