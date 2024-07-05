<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Person } from "@/models/Person";
import PersonCard from "@/components/PersonCard.vue";

const defaultProfileIcon = "src/assets/defaultProfileIcon.png";
const props = defineProps<{ person: Person; position: string }>();
const showProfile = ref(false);
onMounted(() => {
  console.log("personProfile.value");
});
</script>

<template>
  <q-card
    class="custom-card"
    @click.stop="showProfile = true"
  >
    <q-card-section class="image-section">
      <q-img
        :alt="props.person.firstName"
        :src="defaultProfileIcon"
        class="image"
      />
    </q-card-section>
    <q-card-section>
      <div class="q-pa-sm text-center">
        <div class="name">
          {{ props.person.firstName + " " + props.person.lastName }}
        </div>
        <q-separator color="red" />
        <div class="position">
          {{ position }}
        </div>
      </div>
    </q-card-section>
  </q-card>
  <q-dialog v-model="showProfile">
    <person-card :person="props.person" />
  </q-dialog>
</template>

<style scoped>
.custom-card {
  width: 250px;
  height: 250px;
  border: 2px solid #a10c10;
  box-shadow: 0 0 10px transparent;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.custom-card:hover {
  box-shadow: 0 0 20px #e3861c;
  background-color: #fec256;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding-bottom: 0;
}

.image,
.icon {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.name {
}

.position {
}

.text-center {
  text-align: center;
}
</style>
