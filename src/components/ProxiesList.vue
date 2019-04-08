<template>
  <div class="proxies-list">
    <b-table striped hover :items="proxies" :fields="fields"></b-table>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  name: 'ProxiesList',
  data: () => ({
    fields: [
      {
        key: 'id',
        sortable: true
      },
      {
        key: 'country',
        sortable: true
      },
      'host',
      'port',
      {
        key: 'proxy_type',
        sortable: true,
        formatter: 'proxyTypeFormatter'
      },
      'alive',
      {
        key: 'last_check_time',
        formatter: 'dateFormatter',
        sortable: true
      }
    ]
  }),
  methods: {
    proxyTypeFormatter (val) {
      let result = ''
      switch (val) {
        case 0:
          result = 'Transparent'
          break
        case  1:
          result = 'Anonymous'
          break
        case 2:
          result = 'Elite'
          break
      }
      return result
    },
    dateFormatter (val) {
      return moment(val).format('HH:mm DD-MM-YYYY')
    }
  },
  computed: {
    proxies () {
      return this.$store.state.filtratedProxies
    }
  }
}
</script>

<style scoped lang="sass">
.proxies-list
  display: flex
  flex-direction: column
</style>