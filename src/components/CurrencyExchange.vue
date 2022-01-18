<template>
  <app-card :title="$t('sections.currency.title')">
    <AppSelect
      v-if="isProductsLoaded"
      :options="optionsOfSelect"
      @update-value="setCurrency($event)"
    />
    <AppLoading
      v-else
      height="35px"
    />
  </app-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppCard from './AppCard.vue';
import AppLoading from './AppLoading.vue';
import AppSelect from './AppSelect.vue';

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
    ...mapGetters('products', {
      isProductsLoaded: 'isLoaded',
    }),
    optionsOfSelect() {
      return this.currencies.map((currency) => ({ text: currency.toUpperCase(), value: currency }));
    },
  },
  created() {
    this.currencies = this.$store.getters['currency/currencies'];
  },
  methods: {
    ...mapActions('currency', {
      setCurrency: 'change',
    }),
  },
};
</script>
