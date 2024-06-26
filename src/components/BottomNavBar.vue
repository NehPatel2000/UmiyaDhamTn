<script setup>
const number = "615 364 6262";
const numberDisplay = "(615) 364 - 6262";
</script>

<template>
  <q-toolbar
    class="wrap content-end brand-secondary align-items"
    style="flex-wrap: wrap"
  >
    <div class="q-ma-sm bolded-2 q-pr-md q-ma-auto">
      <q-list dense padding>
        <q-item>
          <q-toolbar-title class="bolded-1 !important">
            Arti Times
          </q-toolbar-title>
        </q-item>
        <q-item>
          <q-item-section> Morning: 9:00 AM </q-item-section>
        </q-item>
        <q-item>
          <q-item-section> Evening: 7:00 PM (Summer) </q-item-section>
        </q-item>
        <q-item>
          <q-item-section> Evening: 6:00 PM (Winter) </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="q-ma-sm bolded-2 q-pr-md q-ma-auto">
      <q-list dense padding>
        <q-item>
          <q-toolbar-title class="bolded-1 !important">
            Contact Us
          </q-toolbar-title>
        </q-item>
        <q-item
          class="item-list-2"
          tag="a"
          :href="'tel:' + number"
          clickable
          v-ripple
          rounded
          elevated
        >
          <q-icon class="q-pr-sm" name="mdi-phone" size="20px" />
          {{ numberDisplay }}
        </q-item>
        <q-item
          class="item-list-2"
          tag="a"
          :href="'mailto:' + 'umiyadhamtn@gmail.com'"
          clickable
          v-ripple
          rounded
          elevated
        >
          <q-icon class="q-pr-sm" name="mdi-email-outline" size="20px" />
          umiyadhamtn@gmail.com
        </q-item>
        <q-item
          class="item-list-2"
          tag="a"
          :href="
            'https://www.google.com/maps/place/' +
            encodeURIComponent('2241 Hobson Pike, Antioch, TN 37013')
          "
          clickable
          v-ripple
          rounded
          elevated
        >
          <q-icon class="q-pr-sm" name="mdi-map-marker-outline" size="20px" />
          2241 Hobson Pike, Antioch, TN 37013
        </q-item>
      </q-list>
    </div>
    <div class="q-ma-sm bolded-2 q-pr-md q-ma-auto">
      <q-list dense padding>
        <q-item>
          <q-toolbar-title class="bolded-1 !important">
            Follow Us On
          </q-toolbar-title>
        </q-item>
        <q-item
          class="item-list-2"
          tag="a"
          :href="'https://www.facebook.com/umiyadhamtn/'"
          clickable
          v-ripple
          rounded
          elevated
        >
          <q-icon class="q-pr-sm" name="mdi-facebook" size="20px" />
          Facebook
        </q-item>
        <q-item
          class="item-list-2"
          tag="a"
          :href="'https://www.youtube.com/'"
          clickable
          v-ripple
          rounded
          elevated
        >
          <q-icon class="q-pr-sm" name="mdi-youtube" size="20px" />
          Youtube
        </q-item>
        <q-item
          class="item-list-2"
          tag="a"
          :href="'https://www.instagram.com/'"
          clickable
          v-ripple
          rounded
          elevated
        >
          <q-icon class="q-pr-sm" name="mdi-instagram" size="20px" />
          Instagram
        </q-item>
      </q-list>
    </div>
  </q-toolbar>
  <q-separator color="white" size="2px"></q-separator>
  <q-toolbar class="brand-secondary justify-center">
    <q-item>Designed & Developed by Neh Ashokkumar (Mantri) Patel</q-item>
    <q-item>© 2024 SHREE UMIYA DHAM. All rights reserved.</q-item>
  </q-toolbar>
</template>

<style>
.info-container {
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Align groups to each end of the container */
}

.separator-horizontal {
  margin: 20px 0; /* Add spacing above and below separator */
}
.bolded-1 {
  font-size: 30px;
  font-weight: bold;
  align-items: center !important;
  justify-content: center !important;
  color: #fec256;
}
.bolded-2 {
  font-size: 15px;
  font-weight: bold;
  align-items: center !important;
  justify-content: center !important;
}
.item-list-2 {
  display: flex !important;
  justify-content: flex-start !important;
  align-items: center !important;
  padding: 10px;
  margin-left: auto;
}
.align-items {
  align-items: center !important;
  justify-content: space-between !important;
}
</style>
