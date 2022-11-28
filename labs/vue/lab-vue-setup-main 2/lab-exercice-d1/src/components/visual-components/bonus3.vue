<template>



</template>

<button @click="say('hi')">Say hi</button>
<button @click="say('what')">Say what</button>




<script>

export default {
  methods: {
	  say(message) {
    	alert(message)
  	}
	}
}   

</script>


<style scoped>


button {
  display: block;
  width: 200px;
  height: 200px;
}


</style>