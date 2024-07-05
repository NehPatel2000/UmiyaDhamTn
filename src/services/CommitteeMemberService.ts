import { CommitteeMember } from "@/models/CommitteeMember";
import { api } from "@/boot/axios"; // Ensure the default export is imported correctly

export class CommitteeMemberService {
  private readonly successStatus = 200;
  private readonly baseUrl = "/CommitteeMember";

  // Fetch all committee members
  getCommitteeMembers = async (): Promise<CommitteeMember[]> => {
    try {
      console.log("Fetching committee members");
      const response = await api.get<CommitteeMember[]>(this.baseUrl);

      if (response.status !== this.successStatus) {
        console.error("Error retrieving committee members");
        return []; // Return an empty array on error
      }

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching committee members:", error);
      return []; // Return an empty array on error
    }
  };
}
