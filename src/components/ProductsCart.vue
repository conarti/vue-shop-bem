<template>
  <app-card :title="$t('sections.cart.title')">
    <AppLoading v-if="isProductsNotLoaded" />
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
        <app-table-row>
          <app-table-row-cell
            is-footer-cell
            colspan="1"
          >
            {{ $t('sections.cart.total') }}
          </app-table-row-cell>
          <app-table-row-cell
            class="text-end"
            is-footer-cell
            colspan="3"
          >
            {{ totalCount }}
          </app-table-row-cell>
        </app-table-row>
      </template>
    </app-table>
  </app-card>
</template>

<script>
import AppCard from './AppCard.vue';
import AppEmpty from './AppEmpty.vue';
import AppLoading from './AppLoading.vue';
import AppTable from './AppTable.vue';
import AppTableRow from './AppTableRow.vue';
import AppTableRowCell from './AppTableRowCell.vue';
import ProductsCartProduct from './ProductsCartProduct.vue';

export default {
  name: 'ProductsCart',
  components: {
    AppCard,
    AppEmpty,
    AppLoading,
    AppTable,
    AppTableRow,
    AppTableRowCell,
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
    isProductsNotLoaded() {
      return !this.$store.getters['products/isLoaded'];
    },
    totalCount() {
      return this.$store.getters['cart/totalCount'];
    },
    cartProducts() {
      return this.$store.getters['cart/products'];
    },
    isEmpty() {
      return this.cartProducts.length === 0;
    },
  },
};
</script>
