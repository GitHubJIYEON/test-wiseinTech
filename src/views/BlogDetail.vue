<template>
  <HeaderComponent />
  <DetailComponent />
  <FooterComponent />
</template>

<script>
import DetailComponent from "../components/DetailComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    DetailComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style></style>
