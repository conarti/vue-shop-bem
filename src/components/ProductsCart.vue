<template>
  <app-card :title="$t('sections.cart.title')">
    <AppLoading v-if="!isProductsLoaded" />
    <AppEmpty
      v-else-if="isEmpty"
      :message="$t('sections.cart.emptyMessage')"
    />
    <app-table
      v-else
      :header-cells="columnTitles"
    >
      <template #tbody>
        <ProductsCartProduct
          v-for="product in cartProducts"
          :id="product.id"
          :key="product.id"
          :cart-count="product.count"
        />
      </template>
      <template #tfoot>
        <ProductsCartTotal />
      </template>
    </app-table>
  </app-card>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCard from './AppCard.vue';
import AppEmpty from './AppEmpty.vue';
import AppLoading from './AppLoading.vue';
import AppTable from './AppTable.vue';
import ProductsCartProduct from './ProductsCartProduct.vue';
import ProductsCartTotal from './ProductsCartTotal.vue';

export default {
  name: 'ProductsCart',
  components: {
    AppCard,
    AppEmpty,
    AppLoading,
    AppTable,
    ProductsCartProduct,
    ProductsCartTotal,
  },
  data() {
    return {
      columnTitles: [
        this.$t('sections.cart.columnTitles.product'),
        this.$t('sections.cart.columnTitles.count'),
        this.$t('sections.cart.columnTitles.price'),
      ],
    };
  },
  computed: {
    ...mapGetters('cart', {
      cartProducts: 'products',
    }),
    ...mapGetters('products', {
      isProductsLoaded: 'isLoaded',
    }),
    isEmpty() {
      return this.cartProducts.length === 0;
    },
  },
};
</script>
