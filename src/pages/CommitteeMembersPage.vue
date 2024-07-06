<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { CommitteeMemberService } from "@/services/CommitteeMemberService";
import MemberCard from "@/components/MemberCard.vue";
import { CommitteeMember } from "@/models/CommitteeMember";

const committeeList = ref<CommitteeMember[]>([]);
const committeeMemberService = new CommitteeMemberService();
onBeforeMount(async () => {
  try {
    committeeList.value = await committeeMemberService.getCommitteeMembers();
  } catch (error) {
    console.error("Error fetching committee members:", error);
  }
});
</script>

<template>
  <q-page class="q-ma-md q-gutter-lg">
    <label>
      <q-toolbar-title>Executive Committee:</q-toolbar-title>
    </label>
    <q-card-section class="flex wrap q-ma-none q-gutter-sm">
      <member-card
        v-for="member in committeeList"
        :key="member.id"
        :person="member.person"
        :position="member.position"
      />
    </q-card-section>
  </q-page>
</template>

<style scoped></style>
