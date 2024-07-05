import { PersonImage } from "@/models/PersonImage";

export interface Person {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  spouseName?: string | null;
  nativeVillage: string;
  city: string;
  state: string;
  nickname?: string;
  email?: string;
  cellPhone?: string;
  homePhone?: string;
  image?: PersonImage;
}
