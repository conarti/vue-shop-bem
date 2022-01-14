<template>
  <app-card :title="$t('section.products.title')">
    <AppLoading v-if="isProductsNotLoaded" />
    <div
      v-else
      class="products-list"
    >
      {{ products }}
      <ProductsListGroup />
    </div>
  </app-card>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import AppLoading from '@/components/AppLoading.vue';
import ProductsListGroup from '@/components/ProductsListGroup.vue';

export default {
  name: 'ProductsList',
  components: {
    AppCard,
    AppLoading,
    ProductsListGroup,
  },
  computed: {
    isProductsNotLoaded() {
      return !this.$store.getters['products/isLoaded'];
    },
    products() {
      return this.$store.getters['products/all'];
    },
  },
  created() {
    if (this.isProductsNotLoaded) {
      this.$store.dispatch('products/fetchProducts');
    }
  },
};
</script>
