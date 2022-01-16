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
