
<template>
<div>
  <h3>vue chat</h3>
</div>
</template>

<script>
// import writeJsonFile from 'write-json-file'
  export default {
    data: () => ({
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
      send () {
        // writeJsonFile('foo.json', {foo: true});
        // console.log(this.message)
      }
    }
  }
</script>
<style scoped>
.discussion {
	max-width: 425px;
	margin: 0 auto;
	display: block;
	flex-flow: auto;
}
.discussion > .bubble {
	border-radius: 1em;
	padding: 0.25em 0.75em;
	margin: 0.0625em;
	max-width: 50%;
}
.discussion > .bubble.sender {
	align-self: flex-start;
	background-color: cornflowerblue;
	color: #fff;
}
.discussion > .bubble.recipient {
	align-self: flex-end;
	background-color: #efefef;
}
.discussion > .bubble.sender.first { border-bottom-left-radius: 0.1em; }
.discussion > .bubble.sender.last { border-top-left-radius: 0.1em; }
.discussion > .bubble.sender.middle {
border-bottom-left-radius: 0.1em;
border-top-left-radius: 0.1em;
}
.discussion > .bubble.recipient.first { border-bottom-right-radius: 0.1em; }
.discussion > .bubble.recipient.last { border-top-right-radius: 0.1em; }
.discussion > .bubble.recipient.middle {
	border-bottom-right-radius: 0.1em;
	border-top-right-radius: 0.1em;
}
.bubble.sender {
  background-image: linear-gradient(rgba(24,201,255,1), rgba(5,230,195,1));
  background-size: 100% 100%;
  background-attachment: fixed;
}
a {
  color: #fff;
}
</style>