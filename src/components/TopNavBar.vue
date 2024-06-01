<script setup>
import { useQuasar } from "quasar";
import { computed } from "vue";

const number = "615 364 6262";
const numberDisplay = "(615) 364 - 6262";

const $q = useQuasar();
const smallWindow = computed(() => $q.screen.lt.sm);
const mediumWindow = computed(() => $q.screen.lt.md);

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Upcoming Events", href: "#upcoming-events" },
  { label: "Committee", href: "#committee" },
  { label: "Book Event", href: "#book-event" },
  { label: "Contact Us", href: "#contact-us" },
];
</script>

<template>
  <q-header class="header brand-primary wrap content-center justify-center">
    <q-toolbar class="wrap">
      <div class="q-ma-sm">
        <q-img
          src="../assets/UmiyaDhamLogo.png"
          style="height: 100px; width: 100px"
          class="wrap q-pa-md"
        />
      </div>
      <div v-if="!smallWindow" class="q-pl-md overflow-hidden">
        <q-item-label class="title">SHREE UMIYA DHAM</q-item-label>
        <q-item-label class="subtitle brand-accent"
          >Nashville, Tennessee</q-item-label
        >
      </div>
      <q-item
        v-if="!mediumWindow"
        class="phone-number"
        tag="a"
        :href="'tel:' + number"
        clickable
        v-ripple
        elevated
      >
        <q-icon class="q-pr-sm" name="mdi-phone" size="30px" />
        {{ numberDisplay }}
      </q-item>
      <q-item v-else class="menu-dropdown">
        <q-btn flat icon="mdi-menu" class="q-ma-xs" size="20px">
          <template v-slot:default="props">
            <q-menu v-bind="props">
              <q-list>
                <q-item
                  class="red-separator"
                  v-for="(item, index) in menuItems"
                  :key="index"
                  clickable
                  v-ripple
                  tag="a"
                  :href="item.href"
                  s
                >
                  <q-item-section>
                    {{ item.label }}
                  </q-item-section>
                </q-item>
                <q-item
                  class="phone-number2 brand-primary red-separator"
                  tag="a"
                  :href="'tel:' + number"
                  clickable
                  v-ripple
                  elevated
                >
                  <q-icon class="q-pr-sm" name="mdi-phone" size="20px" />
                  {{ numberDisplay }}
                </q-item>
              </q-list>
            </q-menu>
          </template>
        </q-btn>
      </q-item>
      <q-separator
        style="border-color: #a10c10; border-width: 2px"
      ></q-separator>
    </q-toolbar>
    <q-toolbar
      class="brand-secondary justify-center !important"
      elevated
      v-if="!mediumWindow"
    >
      <div>
        <q-btn
          v-for="(item, index) in menuItems"
          :key="index"
          flat
          :label="item.label"
          class="q-ma-sm"
          :href="item.href"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.header {
  align-content: center;
  flex-wrap: wrap;
}
.title {
  font-size: 40px;
  font-weight: bold;
  align-items: center !important;
  justify-content: center !important;
}
.subtitle {
  font-size: 20px;
  font-weight: bold;
  align-items: center !important;
  justify-content: center !important;
}
.phone-number {
  display: flex !important;
  justify-content: flex-end !important;
  align-items: center !important;
  border: 2px solid #a10c10;
  border-radius: 15px;
  padding: 10px;
  margin-left: auto;
}
.phone-number2 {
  display: flex !important;
  justify-content: flex-end !important;
  align-items: center !important;
  padding: 10px;
  margin-left: auto;
}
.menu-dropdown {
  display: flex !important;
  justify-content: flex-end !important;
  align-items: center !important;
  border: 2px solid #a10c10;
  border-radius: 15px;
  margin-left: auto;
}
.red-separator {
  border: 2px solid #a10c10;
  color: #a10c10;
}
</style>
