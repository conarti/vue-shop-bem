<template>
  <table class="table">
    <app-table-header v-if="headerCells">
      <app-table-row>
        <app-table-row-cell
          v-for="(cell, idx) in headerCells"
          :key="idx"
          is-header-cell
        >
          {{ cell }}
        </app-table-row-cell>
      </app-table-row>
    </app-table-header>
    <tbody>
      <slot name="tbody" />
    </tbody>
    <app-table-footer>
      <slot name="tfoot" />
    </app-table-footer>
  </table>
</template>

<script>
import AppTableFooter from '@/components/AppTableFooter.vue';
import AppTableHeader from '@/components/AppTableHeader.vue';
import AppTableRow from '@/components/AppTableRow.vue';
import AppTableRowCell from '@/components/AppTableRowCell.vue';

export default {
  name: 'AppTable',
  components: {
    AppTableFooter,
    AppTableHeader,
    AppTableRow,
    AppTableRowCell,
  },
  props: {
    headerCells: {
      type: Array,
      required: false,
      default: null,
    },
  },
};
</script>
