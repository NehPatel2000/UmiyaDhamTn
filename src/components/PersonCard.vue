<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { Person } from "src/models/Person";

const defaultProfileIcon = "src/assets/defaultProfileIcon.png";

const props = defineProps<{ person: Person }>();

const fullName = computed(() => {
  let fullName = props.person.firstName;
  if (props.person.nickname) {
    fullName += ` (${props.person.nickname}) ${props.person.lastName}`;
  } else {
    fullName += ` ${props.person.lastName}`;
  }
  return fullName;
});

const profileItems = computed(() => {
  const items = [
    { label: "Name", value: fullName.value, iconClass: "mdi-account" },
    {
      label: "Native Village",
      value: props.person.nativeVillage,
      iconClass: "mdi-archive-marker",
    },
    {
      label: "USA Location",
      value: `${props.person.city}, ${props.person.state}`,
      iconClass: "mdi-map-marker-radius",
    },
    {
      label: "Spouse",
      value: props.person.spouseName,
      iconClass: "mdi-cards-heart",
    },
    { label: "Email", value: props.person.email, iconClass: "mdi-email" },
    {
      label: "Cell Phone",
      value: props.person.cellPhone,
      iconClass: "mdi-cellphone",
    },
    {
      label: "Home Phone",
      value: props.person.homePhone,
      iconClass: "mdi-phone",
    },
  ];

  return items.filter((item) => !!item.value); // Remove items with falsy values
});
</script>
<template>
  <q-card class="personCard hide-scrollbar">
    <q-card-section class="image-section">
      <q-img
        :alt="props.person.firstName"
        :src="defaultProfileIcon"
        class="image"
      />
    </q-card-section>
    <q-list class="profile-info">
      <q-item
        v-for="(item, index) in profileItems"
        :key="index"
        :class="{
          'profile-item': true,
          'no-bottom-border': index === profileItems.length - 1,
        }"
      >
        <q-icon
          :name="item.iconClass"
          class="icon"
          size="50px"
        />
        <q-item-section class="label">
          <strong>{{ item.label }}</strong>
        </q-item-section>
        <q-item-section class="description">
          {{ item.value }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<style lang="scss" scoped>
.personCard {
  width: 450px;
  align-content: center;
  border-radius: 10px;
  padding: 20px;
  background: $brand-yellow;
  font-size: large;
  box-shadow: 0 10px 55px $brand-red;
  overflow-x: hidden; /* Hide horizontal overflow */
}

.image-section {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.profile-item {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap */
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2px; /* Adjust the margin for spacing between items */
  border-bottom: 1px solid $brand-red; /* Add bottom border */
}

.profile-item.no-bottom-border {
  border-bottom: none; /* Remove bottom border for the last visible item */
}

.label {
  flex: 0 0 80px; /* Adjust width for label */
  text-align: left;
  color: $brand-red;
}

.description {
  flex-wrap: wrap;
  //flex: 1; /* Allow description to take remaining space */
  text-align: left; /* Align text to the left */
  //white-space: normal; /* Allow text to wrap */
  scrollbar-width: none;
  word-wrap: break-word;
}

.icon {
  color: $brand-red;
  margin-right: 1px;
}
</style>
