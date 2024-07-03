<script setup>
import { defineProps } from "vue";
const defaultProfileIcon = "src/assets/defaultProfileIcon.png";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  imgLink: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <q-card class="custom-card">
    <q-card-section class="image-section">
      <q-img
        :src="imgLink ? imgLink : defaultProfileIcon"
        :alt="name"
        class="image"
      />
    </q-card-section>
    <q-card-section>
      <div class="q-pa-sm text-center">
        <div class="name">
          {{ name }}
        </div>
        <q-separator color="red" />
        <div class="position">
          {{ position }}
        </div>
      </div>
    </q-card-section>
  </q-card>
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
