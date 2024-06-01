<script setup>

const number = '615 364 6262';
const numberDisplay = '(615) 364 - 6262';
</script>

<template>
  <q-header class="header wrap content-center justify-center" >
    <q-toolbar class="wrap">
      <div class="q-ma-sm">
        <q-img
          src="../assets/UmiyaDhamLogo.png"
          style="height: 100px; width: 100px;"
          class="wrap q-pa-md"
        />
      </div>
      <div class="title q-pl-md overflow-hidden" > SHREE UMIYA DHAM NASHVILLE, TN </div>
      <q-item class="phone-number"
              tag="a" :href="'tel:' + number " clickable v-ripple elevated>
        <q-icon class="q-pr-sm" name="mdi-phone" size="30px" />
        {{numberDisplay}}
      </q-item>

    </q-toolbar>
    <q-toolbar class="link-toolbar" elevated>
      <div>
        <q-btn flat label="Home" class="q-ma-sm"/>
        <q-btn flat label="About Us" class="q-ma-sm"/>
        <q-btn flat label="Upcoming Events" class="q-ma-sm"/>
        <q-btn flat label="Committee" class="q-ma-sm"/>
        <q-btn flat label="Book Event" class="q-ma-sm"/>
        <q-btn flat label="Contact Us" class="q-ma-sm"/>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.header {
  color: #b10a0a;
  background-color: white;
  align-content: center;
  flex-wrap: wrap;
}
.title {
  font-size: 40px;
  font-weight: bold;
  align-items: center !important;
  justify-content: center !important;
}
.phone-number {
  display: flex !important;
  justify-content: flex-end !important;
  align-items: center !important;
  font-size: 20px;
  border: 2px solid #b10a0a;
  border-radius: 15px;
  padding: 10px;
  margin-left: auto;
}
.link-toolbar {
  justify-content: center !important;
  background-color: #b10a0a;
  color: white;
}
</style>
