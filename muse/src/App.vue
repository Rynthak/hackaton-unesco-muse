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
  components: { TopMenu: Menu}
}
</script>

