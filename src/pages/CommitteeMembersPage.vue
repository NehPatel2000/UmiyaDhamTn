<script setup>
import { onBeforeMount, ref } from "vue";
import { CommitteeMemberService } from "../services/CommitteeMemberService";
import MemberCard from "../components/MemberCard.vue";
import CommitteeMember from "../services/models/CommitteeMember"; // Adjust path as needed

const committeeList = ref([]);

onBeforeMount(async () => {
  try {
    // Fetch committee members data
    committeeList.value = await CommitteeMemberService.getCommitteeMembers();
    console.log(committeeList.value); // Verify fetched data
  } catch (error) {
    console.error("Error fetching committee members:", error);
  }
});
</script>

<template>
  <q-page class="flex flex-wrap">
    <q-toolbar>
      <q-toolbar-title> Executive Committee:</q-toolbar-title>
    </q-toolbar>

    <member-card
      v-for="member in committeeList"
      :key="member.person.name + member.position"
      :name="member.person.firstName + ' ' + member.person.lastName"
      :position="member.position"
      class="q-ma-sm"
    />
  </q-page>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
