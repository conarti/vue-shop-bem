<template>
  <app-card :title="$t('sections.products.title')">
    <AppLoading
      v-if="isProductsNotLoaded"
      height="380px"
    />
    <div
      v-else
      class="products-list"
    >
      <ProductsListGroup
        v-for="group in groups"
        :key="group.id"
        :group="group"
      />
    </div>
  </app-card>
</template>

<script>
import AppCard from './AppCard.vue';
import AppLoading from './AppLoading.vue';
import ProductsListGroup from './ProductsListGroup.vue';

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
    groups() {
      return this.$store.getters['products/groups'];
    },
  },
  mounted() {
    if (this.isProductsNotLoaded) {
      this.$store.dispatch('products/fetchAll');
    }
  },
};
</script>
