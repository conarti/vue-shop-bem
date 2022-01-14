<template>
  <div
    v-if="isHaveProducts"
    class="products-list__group"
  >
    <button
      class="products-list__group-name"
      :class="{ 'products-list__group-name--active': isShowed }"
      @click="toggleVisibility"
    >
      {{ group.name }}
      <span class="products-list__group-name-icon">
        {{ buttonIconSymbol }}
      </span>
    </button>
    <transition name="fade">
      <div
        v-if="isShowed"
        class="products-list__group-items"
      >
        {{ groupProducts }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProductsListGroup',
  props: {
    group: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showed: false,
    };
  },
  computed: {
    buttonIconSymbol() {
      return this.showed ? '–' : '+';
    },
    groupProducts() {
      return this.$store.getters['products/getGroupProducts'](this.group.id);
    },
    isShowed() {
      return this.showed;
    },
    isHaveProducts() {
      return this.groupProducts.length > 0;
    },
  },
  methods: {
    toggleVisibility() {
      this.showed = !this.showed;
    },
  },
};
</script>
