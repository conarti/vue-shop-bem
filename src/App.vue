<template>
  <div class="main-layout">
    <section class="main-layout__shop">
      <div class="main-layout__products">
        <ProductsList />
      </div>
      <div class="main-layout__cart"></div>
    </section>
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';

export default {
  name: 'App',
  components: {
    ProductsList,
  },
};
</script>
