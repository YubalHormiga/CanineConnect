<script setup>
import AboutSectionView from "./AboutSectionView.vue";
import InspiringStoriesSectionView from "./InspiringStoriesSectionView.vue";
import CallToActionSection from "./CallToActionSection.vue";
import MissingDogView from "./MissingDogView.vue";
</script>

<template>
  <main class="main">
      <MissingDogView />
      <AboutSectionView />
    <InspiringStoriesSectionView />
    <CallToActionSection />
  </main>
</template>
<style scoped>
.main{
  padding: 1rem
}

</style>
