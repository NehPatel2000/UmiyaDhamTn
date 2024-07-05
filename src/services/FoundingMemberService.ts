import axios from "axios";
import { FoundingMember } from "@/models/FoundingMember";

export class FoundingMemberService {
  private static readonly BASE_URL = "/api/FoundingMember";

  // Fetch all founding members
  static async getFoundingMembers(): Promise<FoundingMember[]> {
    try {
      const response = await axios.get<FoundingMember[]>(this.BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching founding members:", error);
      throw error;
    }
  }

  // Fetch a single founding member by ID
  static async getFoundingMemberById(
    id: string
  ): Promise<FoundingMember | null> {
    try {
      const response = await axios.get<FoundingMember>(
        `${this.BASE_URL}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching founding member with ID ${id}:`, error);
      throw error;
    }
  }
}
