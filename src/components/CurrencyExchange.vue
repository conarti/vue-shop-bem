<template>
  <app-card :title="$t('sections.currency.title')">
    <AppSelect
      v-if="isProductsLoaded"
      :options="selectOptions"
      @update-value="setCurrency($event)"
    />
    <AppLoading v-else />
  </app-card>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import AppLoading from '@/components/AppLoading.vue';
import AppSelect from '@/components/AppSelect.vue';

export default {
  name: 'CurrencyExchange',
  components: {
    AppCard,
    AppLoading,
    AppSelect,
  },
  data() {
    return {
      currencies: null,
    };
  },
  computed: {
    selectOptions() {
      return this.currencies.map((currency) => ({ text: currency.toUpperCase(), value: currency }));
    },
    isProductsLoaded() {
      return this.$store.getters['products/isLoaded'];
    },
  },
  created() {
    this.currencies = this.$store.getters['currency/currencies'];
  },
  methods: {
    setCurrency(currency) {
      this.$store.dispatch('currency/change', currency);
    },
  },
};
</script>
