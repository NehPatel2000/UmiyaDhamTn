<script setup>
import MemberCard from "components/MemberCard.vue";
import CommitteeMemberService from "path/to/CommitteeMemberService"; // Adjust path accordingly
import { ref, onMounted } from "vue";

// Initialize an empty array to hold committee members
const committeeList = ref([]);

// Fetch committee members data on component mount
onMounted(async () => {
  try {
    const service = new CommitteeMemberService();
    const members = await service.getCommitteeMembers();
    committeeList.value = members.map((member) => ({
      name: member.person.fullName, // Adjust according to your Person structure
      imageUrl: member.hasImage ? member.image.url : "", // Assuming image handling logic
      position: member.position,
    }));
  } catch (error) {
    console.error("Error fetching committee members:", error);
    // Handle error as needed (e.g., show error message)
  }
});
</script>

<template>
  <q-page class="flex flex-center flex-wrap">
    <div class="cards-container">
      <member-card
        v-for="member in committeeList"
        :key="member.name + member.position"
        :name="member.name"
        :img-link="member.imageUrl"
        :position="member.position"
        class="q-ma-sm"
      />
    </div>
  </q-page>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
