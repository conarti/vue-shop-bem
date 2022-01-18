<template>
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

<script>
import { mapGetters } from 'vuex';
import AppTableRow from './AppTableRow.vue';
import AppTableRowCell from './AppTableRowCell.vue';

export default {
  name: 'ProductsCartTotal',
  components: {
    AppTableRow,
    AppTableRowCell,
  },
  computed: {
    ...mapGetters('cart', ['totalCount']),
  },
};
</script>
