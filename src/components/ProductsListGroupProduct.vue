<template>
  <app-card
    title-component="h4"
    :title="product.name"
  >
    <p class="mb-3">
      {{ $t('productsList.product.balance') }}:
      <span class="text-white">{{ product.count }}</span>
      <br>
      {{ $t('productsList.product.price') }}
      <span class="text-white">{{ product.price }}</span>
    </p>
    <AppButton
      color="pink"
      is-fill
      :text="$t('productsList.product.buyBtn')"
    />
  </app-card>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import AppCard from '@/components/AppCard.vue';

export default {
  name: 'ProductsListGroupProduct',
  components: {
    AppButton,
    AppCard,
  },
  props: {
    product: {
      type: Array,
      required: true,
    },
  },
};
</script>
