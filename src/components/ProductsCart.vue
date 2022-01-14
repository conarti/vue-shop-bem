<template>
  <app-card :title="$t('sections.cart.title')">
    <table class="table">
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
        <ProductsCartItem
          v-for="product in [1, 2, 3]"
          :key="product"
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
            472.65 руб.
          </td>
        </tr>
      </tfoot>
    </table>
  </app-card>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import ProductsCartItem from '@/components/ProductsCartItem.vue';

export default {
  name: 'ProductsCart',
  components: {
    AppCard,
    ProductsCartItem,
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
};
</script>
