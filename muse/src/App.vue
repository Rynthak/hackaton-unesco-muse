<template>
  <div id="app">
     <TopMenu></TopMenu> 
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: { TopMenu: Menu},
  beforeCreate () {
    console.log('registerWeb3 Action dispatched')
    this.$store.dispatch('registerWeb3')

    console.log("dispatching getContractInstance");
    this.$store.dispatch("getContractInstance");
 


  }
}
</script>

