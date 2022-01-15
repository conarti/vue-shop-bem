<template>
  <app-card :title="$t('sections.cart.title')">
    <AppLoading v-if="!isProductsLoaded" />
    <table
      v-else
      class="table"
    >
      <thead class="table__header">
        <tr class="table__row">
          <th
            v-for="(columnTitle, idx) in columnTitles"
            :key="idx"
            class="table__cell table__cell--header"
          >
            {{ columnTitle }}
          </th>
        </tr>
      </thead>
      <tbody>
        <ProductsCartProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </tbody>
      <tfoot class="table__footer">
        <tr class="table__row">
          <td
            class="table__cell table__cell--footer"
            colspan="1"
          >
            {{ $t('sections.cart.total') }}
          </td>
          <td
            class="table__cell table__cell--footer text-end"
            colspan="3"
          >
            {{ totalCount }}
          </td>
        </tr>
      </tfoot>
    </table>
  </app-card>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import AppLoading from '@/components/AppLoading.vue';
import ProductsCartProduct from '@/components/ProductsCartProduct.vue';

export default {
  name: 'ProductsCart',
  components: {
    AppCard,
    AppLoading,
    ProductsCartProduct,
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
    isProductsLoaded() {
      return this.$store.getters['products/isLoaded'];
    },
    totalCount() {
      return this.$store.getters['cart/totalCount'];
    },
    products() {
      return this.$store.getters['cart/products'];
    },
  },
};
</script>
