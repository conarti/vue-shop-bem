<template>
  <tr class="table__row">
    <td class="table__cell">
      {{ productData.name }}
    </td>
    <td class="table__cell">
      <AppInput
        class="maxw-50px text-center"
        type="number"
        :value="product.count"
        @value-changed="updateProductCountInCart($event)"
      />
    </td>
    <td class="table__cell">
      {{ productData.price }}
    </td>
    <td class="table__cell">
      <button class="button button--pink button--icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fill-rule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </button>
    </td>
  </tr>
</template>

<script>
import AppInput from '@/components/AppInput.vue';

export default {
  name: 'ProductsCartItem',
  components: {
    AppInput,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productData() {
      const productId = this.product.id;
      return this.$store.getters['products/getProductById'](productId);
    },
  },
  methods: {
    updateProductCountInCart(count) {
      this.$store.commit('cart/setProductCount', {
        id: this.product.id,
        count,
      });
    },
  },
};
</script>
