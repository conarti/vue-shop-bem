<template>
  <div
    v-if="hasProducts"
    class="products-list__group"
  >
    <button
      class="products-list__group-name"
      :class="{ 'products-list__group-name--active': isGroupExpanded }"
      @click="toggleProductsVisibility"
    >
      {{ name }}
      <span class="products-list__group-name-icon">
        {{ groupNameButtonIcon }}
      </span>
    </button>
    <div
      v-if="isGroupExpanded"
      class="products-list__group-products"
    >
      <ProductsListGroupProduct
        v-for="product in groupProducts"
        :id="product.id"
        :key="product.id"
        :count="product.count"
        :name="product.name"
        :price="product.price.toString()"
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
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      groupExpanded: false,
    };
  },
  computed: {
    ...mapGetters('products', ['getGroupProducts']),
    groupNameButtonIcon() {
      return this.groupExpanded ? '–' : '+';
    },
    groupProducts() {
      return this.getGroupProducts(this.id);
    },
    isGroupExpanded() {
      return this.groupExpanded;
    },
    hasProducts() {
      return this.groupProducts.length > 0;
    },
  },
  methods: {
    toggleProductsVisibility() {
      this.groupExpanded = !this.groupExpanded;
    },
  },
};
</script>
