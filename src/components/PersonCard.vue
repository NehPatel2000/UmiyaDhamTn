<script lang="ts" setup>
import { onMounted } from "vue";
import { Person } from "src/models/Person";

const props = defineProps<{ person: Person }>();

onMounted(() => {
  console.log("personProfile.value");
});
</script>

<template>
  <q-card>
    <q-card-section>
      <p><strong>Native Village:</strong> {{ props.person.nativeVillage }}</p>
      <p><strong>City:</strong> {{ props.person.city }}</p>
      <p><strong>State:</strong> {{ props.person.state }}</p>
      <p><strong>Email:</strong> {{ props.person.email }}</p>
      <p><strong>Cell Phone:</strong> {{ props.person.cellPhone }}</p>
      <p><strong>Home Phone:</strong> {{ props.person.homePhone }}</p>
    </q-card-section>
  </q-card>
</template>

<style scoped></style>
