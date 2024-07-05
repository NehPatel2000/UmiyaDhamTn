<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { CommitteeMemberService } from "@/services/CommitteeMemberService";
import MemberCard from "@/components/MemberCard.vue";
import { CommitteeMember } from "@/models/CommitteeMember";

const committeeList = ref<CommitteeMember[]>([]); // Specify the type explicitly
const committeeMemberService = new CommitteeMemberService();
onBeforeMount(async () => {
  try {
    // Fetch committee members data
    committeeList.value = await committeeMemberService.getCommitteeMembers();
    console.log(committeeList.value); // Verify fetched data
  } catch (error) {
    console.error("Error fetching committee members:", error);
  }
});
</script>

<template>
  <q-page class="flex q-pa-none q-ma-md q-gutter-sm">
    <q-toolbar>
      <q-toolbar-title> Executive Committee:</q-toolbar-title>
    </q-toolbar>

    <member-card
      v-for="member in committeeList"
      :key="member.id"
      :person="member.person"
      :position="member.position"
    />
  </q-page>
</template>

<style scoped></style>
