<template>
  <div class="proxy-filter">
    <span class="custom-title">Country:</span>
    <country-select class="custom-select" v-model="country" :country="country" :white-list="countryList" />
    <span class="custom-title">Proxy type:</span>
    <b-form-checkbox-group
      id="checkbox-group-1"
      v-model="selectedProxyTypes"
      :options="options"
      stacked
    >
    </b-form-checkbox-group>
    <span class="custom-title"></span>
    <b-form-checkbox
      v-model="alive"
      name="checkbox-1"
      value="true"
      unchecked-value="false"
    >
      Alive
    </b-form-checkbox>
  </div>
</template>

<script>
import CountrySelect from 'vue-country-region-select/src/components/country-select'

export default {
  name: 'ProxyFilter',
  components: { CountrySelect },
  data: () => ({
    country: '',
    alive: false,
    selectedProxyTypes: [],
    options: [
      { text: 'Transparent', value: 0 },
      { text: 'Anonymous', value: 1 },
      { text: 'Elite', value: 2 },
    ],
  }),
  methods: {
    filtration (proxies) {
      let filtrated = proxies
      if (this.country !== '') {
        filtrated = filtrated.filter((item) => {
          return item.country === this.country
        })
      }
      if (this.selectedProxyTypes[0] !== undefined) {
        filtrated = filtrated.filter((item) => {
          return this.selectedProxyTypes.includes(item.proxy_type)
        })
      }

      if (this.alive) {
        filtrated = filtrated.filter((item) => {
          return item.alive
        })
      }

        this.$store.commit('updateProxies', filtrated)
    }
  },
  computed: {
    proxies () {
      return this.$store.state.proxies
    },
    countryList () {
      return this.proxies.map((item) => {
        return item.country
      })
    }
  },
  watch: {
    selectedProxyTypes () {
      this.filtration(this.proxies)
    },
    alive () {
      this.filtration(this.proxies)
    },
    country () {
      this.filtration(this.proxies)
    },
    proxies (val) {
      this.filtration(val)
    }
  }
}
</script>

<style scoped lang="sass">
.proxy-filter
  margin-right: 30px
  max-width: 200px

  .custom-title
    margin-bottom: 10px
    display: block

    &:not(:first-child)
      margin-top: 20px
</style>