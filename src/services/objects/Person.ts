export default class Person {
  id: string | null;
  firstName: string;
  middleName: string;
  lastName: string;
  spouseName: string | null;
  nativeVillage: string;
  city: string;
  state: string;
  nickname: string | null;
  email: string | null;
  cellPhone: string | null;
  homePhone: string | null;

  constructor(
    data: {
      id?: string;
      firstName?: string;
      middleName?: string;
      lastName?: string;
      spouseName?: string | null;
      nativeVillage?: string;
      city?: string;
      state?: string;
      nickname?: string | null;
      email?: string | null;
      cellPhone?: string | null;
      homePhone?: string | null;
    } = {}
  ) {
    this.id = data.id || null;
    this.firstName = data.firstName || "";
    this.middleName = data.middleName || "";
    this.lastName = data.lastName || "";
    this.spouseName = data.spouseName || null;
    this.nativeVillage = data.nativeVillage || "";
    this.city = data.city || "";
    this.state = data.state || "";
    this.nickname = data.nickname || null;
    this.email = data.email || null;
    this.cellPhone = data.cellPhone || null;
    this.homePhone = data.homePhone || null;
  }

  static fromJson(json: any): Person {
    return new Person({
      id: json.id,
      firstName: json.firstName,
      middleName: json.middleName,
      lastName: json.lastName,
      spouseName: json.spouseName,
      nativeVillage: json.nativeVillage,
      city: json.city,
      state: json.state,
      nickname: json.nickname,
      email: json.email,
      cellPhone: json.cellPhone,
      homePhone: json.homePhone,
    });
  }

  toJson(): any {
    return {
      id: this.id,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      spouseName: this.spouseName,
      nativeVillage: this.nativeVillage,
      city: this.city,
      state: this.state,
      nickname: this.nickname,
      email: this.email,
      cellPhone: this.cellPhone,
      homePhone: this.homePhone,
    };
  }
}
