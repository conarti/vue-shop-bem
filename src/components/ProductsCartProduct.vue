<template>
  <tr class="table__row">
    <td class="table__cell">
      {{ productData.name }}
    </td>
    <td class="table__cell">
      <AppInput
        class="maxw-50px text-center"
        type="number"
        :min="1"
        :max="productMaxCount"
        :value="product.count"
        @value-changed="updateProductCountInCart($event)"
      />
    </td>
    <td class="table__cell">
      {{ productData.price }}
    </td>
    <td class="table__cell">
      <AppButton
        color="pink"
        icon="close"
        @click="removeProductFromCart"
      />
    </td>
  </tr>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';

export default {
  name: 'ProductsCartProduct',
  components: {
    AppButton,
    AppInput,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productId() {
      return this.product.id;
    },
    productData() {
      return this.$store.getters['products/getProductById'](this.productId);
    },
    productMaxCount() {
      return this.productData.count;
    },
  },
  methods: {
    updateProductCountInCart(count) {
      this.$store.commit('cart/setProductCount', {
        id: this.productId,
        count,
      });
    },
    removeProductFromCart() {
      this.$store.commit('cart/removeProduct', this.productId);
    },
  },
};
</script>
