<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
		<!-- <Father></Father> -->
		<!-- <Father1></Father1> -->
		<Father2></Father2>
  </div>
</template>

<script>
	import Father from "./Father"  //默认插槽
	import Father1 from "./Father1"  //具名插槽 在template上使用v-slot:插槽名
	import Father2 from "./Father2"  //作用域插槽
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
	},
	components: {
		Father,	Father1, Father2
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
