// CommitteeMember.ts

import { Person } from "@/services/models/Person";

export default class CommitteeMember {
  id: string;
  personUuid: string;
  position: string;
  hideContactInfo: boolean;
  person?: Person;

  constructor(
    id: string,
    personUuid: string,
    position: string,
    hideContactInfo: boolean,
    person?: Person
  ) {
    this.id = id;
    this.personUuid = personUuid;
    this.position = position;
    this.hideContactInfo = hideContactInfo;
    this.person = person;
  }
}
