import { Person } from "@/models/Person";

export interface CommitteeMember {
  id: string;
  personUuid: string;
  position: string;
  hideContactInfo: boolean;
  person: Person;
}
