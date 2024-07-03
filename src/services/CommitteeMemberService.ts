import axios from "axios";
import CommitteeMember from "@/services/models/CommitteeMember";

export class CommitteeMemberService {
  private static readonly BASE_URL = "/api/CommitteeMember";

  // Fetch all committee members
  static async getCommitteeMembers(): Promise<CommitteeMember[]> {
    try {
      const response = await axios.get<CommitteeMember[]>(this.BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching committee members:", error);
      throw error;
    }
  }

  // Fetch a single committee member by ID
  static async getCommitteeMemberById(
    id: string
  ): Promise<CommitteeMember | null> {
    try {
      const response = await axios.get<CommitteeMember>(
        `${this.BASE_URL}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching committee member with ID ${id}:`, error);
      throw error;
    }
  }

  // Example: Fetch person details for a committee member
  // static async fetchPersonDetails(committeeMember: CommitteeMember): Promise<void> {
  //   if (committeeMember.personUuid && !committeeMember.person) {
  //     try {
  //       const person = await PersonService.getPersonByUuid(committeeMember.personUuid);
  //       committeeMember.person = person;
  //     } catch (error) {
  //       console.error(`Error fetching person details for committee member ${committeeMember.id}:`, error);
  //       throw error;
  //     }
  //   }
  // }
}
