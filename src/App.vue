<template>
  <div id="app">

  	<router-view></router-view>
  <footernav></footernav>
  </div>
</template>

<script>
import footernav from './components/footernav'
export default {
  name: 'App',
  components: {
    footernav
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}

</style>
