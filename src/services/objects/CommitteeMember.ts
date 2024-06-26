import Person from "./Person";

export default class CommitteeMember {
  id: string | null;
  position: string;
  hideContactInfo: boolean;
  hasImage: boolean;
  image: string | null; // Assuming image field is optional
  person: Person | null;

  constructor(
    data: {
      id?: string;
      position?: string;
      hideContactInfo?: boolean;
      hasImage?: boolean;
      image?: string | null;
      person?: Person | null;
    } = {}
  ) {
    this.id = data.id || null;
    this.position = data.position || "";
    this.hideContactInfo = data.hideContactInfo ?? true;
    this.hasImage = data.hasImage ?? false;
    this.image = data.image || null;
    this.person = data.person ? new Person(data.person) : null;
  }

  static fromJson(json: any): CommitteeMember {
    return new CommitteeMember({
      id: json.id,
      position: json.position,
      hideContactInfo: json.hideContactInfo ?? true,
      hasImage: json.hasImage ?? false,
      image: json.image,
      person: json.person ? Person.fromJson(json.person) : null,
    });
  }

  toJson(): any {
    return {
      id: this.id,
      position: this.position,
      hideContactInfo: this.hideContactInfo,
      hasImage: this.hasImage,
      image: this.image,
      person: this.person ? this.person.toJson() : null,
    };
  }
}
