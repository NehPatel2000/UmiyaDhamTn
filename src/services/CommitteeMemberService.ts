import axios from "axios";
import CommitteeMember from "./CommitteeMember"; // Assuming CommitteeMember class is defined

const API_URL = "http://api.example.com"; // Replace with your API base URL

export default class CommitteeMemberService {
  // Fetch all committee members
  async getCommitteeMembers(): Promise<CommitteeMember[]> {
    try {
      const response = await axios.get(`${API_URL}/api/CommitteeMember`);
      return response.data.map((json: any) => CommitteeMember.fromJson(json));
    } catch (error) {
      console.error("Error fetching committee members:", error);
      throw error;
    }
  }

  // Fetch a single committee member by ID
  async getCommitteeMember(id: string): Promise<CommitteeMember | null> {
    try {
      const response = await axios.get(`${API_URL}/api/CommitteeMember/${id}`);
      return CommitteeMember.fromJson(response.data);
    } catch (error) {
      console.error(`Error fetching committee member with ID ${id}:`, error);
      throw error;
    }
  }

  // Add a new committee member
  async addCommitteeMember(
    committeeMember: CommitteeMember
  ): Promise<CommitteeMember> {
    try {
      const response = await axios.post(
        `${API_URL}/api/CommitteeMember`,
        committeeMember.toJson()
      );
      return CommitteeMember.fromJson(response.data);
    } catch (error) {
      console.error("Error adding committee member:", error);
      throw error;
    }
  }

  // Update an existing committee member
  async updateCommitteeMember(
    committeeMember: CommitteeMember
  ): Promise<CommitteeMember> {
    try {
      const response = await axios.put(
        `${API_URL}/api/CommitteeMember/${committeeMember.id}`,
        committeeMember.toJson()
      );
      return CommitteeMember.fromJson(response.data);
    } catch (error) {
      console.error(
        `Error updating committee member with ID ${committeeMember.id}:`,
        error
      );
      throw error;
    }
  }

  // Delete a committee member by ID
  async deleteCommitteeMember(id: string): Promise<void> {
    try {
      await axios.delete(`${API_URL}/api/CommitteeMember/${id}`);
    } catch (error) {
      console.error(`Error deleting committee member with ID ${id}:`, error);
      throw error;
    }
  }
}
