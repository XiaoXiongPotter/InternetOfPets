<template>
<div class="home">
	<v-header></v-header>
  <div>HOME</div>
  <v-foot></v-foot>
  </div>
</template>
<script>

import header from '../../components/header'
import footernav from '../../components/footernav'
export default {
  name: "home",
   components: {
   'v-header':header,
   'v-foot':footernav
  }
};
</script>
<style >
</style>