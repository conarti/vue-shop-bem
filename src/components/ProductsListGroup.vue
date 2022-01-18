<template>
  <div
    v-if="hasProducts"
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
    <div
      v-if="isShowed"
      class="products-list__group-products"
    >
      <ProductsListGroupProduct
        v-for="product in groupProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductsListGroupProduct from './ProductsListGroupProduct.vue';

export default {
  name: 'ProductsListGroup',
  components: {
    ProductsListGroupProduct,
  },
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showed: false,
    };
  },
  computed: {
    ...mapGetters('products', ['getGroupProducts']),
    buttonIconSymbol() {
      return this.showed ? '–' : '+';
    },
    groupProducts() {
      return this.getGroupProducts(this.group.id);
    },
    isShowed() {
      return this.showed;
    },
    hasProducts() {
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
