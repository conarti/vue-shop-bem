<template>
  <app-card :title="$t('sections.products.title')">
    <div
      v-if="isProductsLoaded"
      class="products-list"
    >
      <ProductsListGroup
        v-for="group in groups"
        :key="group.id"
        :group="group"
      />
    </div>
    <AppLoading
      v-else
      height="380px"
    />
  </app-card>
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters('products', {
      isProductsLoaded: 'isLoaded',
      groups: 'groups',
    }),
  },
  mounted() {
    if (!this.isProductsLoaded) {
      this.$store.dispatch('products/fetchAll');
    }
  },
};
</script>
