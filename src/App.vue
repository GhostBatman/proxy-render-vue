<template>
  <div id="app">
    <proxy-filter />
    <proxies-list />
  </div>
</template>

<script>

import ProxiesList from './components/ProxiesList'
import ProxyFilter from './components/ProxyFilter'
import data from './proxies'

export default {
  name: 'app',
  components: {
    ProxyFilter,
    ProxiesList
  },
  data: () => ({}),
  mounted () {
    this.$store.commit('loadProxies', data)
  }
}
</script>

<style lang="sass">
#app
  max-width: 1200px
  padding: 40px 20px
  font-family: 'Roboto'
  display: flex
  align-items: flex-start
  @media (max-width: 600px)
    max-width: 90%
    flex-direction: column
    > *
      margin-bottom: 20px


</style>
