<template>
  <th
    v-if="isHeaderCell"
    class="table__cell table__cell--header"
  >
    <slot />
  </th>
  <td
    v-else
    class="table__cell"
    :class="{ 'table__cell--footer': isFooterCell }"
  >
    <slot />
  </td>
</template>

<script>
export default {
  name: 'AppTableRowCell',
  props: {
    isHeaderCell: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFooterCell: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
