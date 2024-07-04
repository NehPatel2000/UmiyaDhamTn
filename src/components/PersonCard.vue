<script setup>
import {onMounted, ref} from 'vue';

import {Person} from '@/models/Person';

const props = defineProps<{
  person: Person,
}>();
const person = ref<Person>();

onMounted(() => {
  person.value = props['person'];
});
</script>

<template>
  <q-card>
    <q-card-section>
      <p><strong>Native Village:</strong> {{ person.nativeVillage }}</p>
      <p><strong>City:</strong> {{ person.city }}</p>
      <p><strong>State:</strong> {{ person.state }}</p>
      <p><strong>Email:</strong> {{ person.email }}</p>
      <p><strong>Cell Phone:</strong> {{ person.cellPhone }}</p>
      <p><strong>Home Phone:</strong> {{ person.homePhone }}</p>
    </q-card-section>
  </q-card>
</template>

<style scoped></style>
