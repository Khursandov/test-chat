  <template>
  <div>
      <section class="discussion" v-for="message in messages" :key="message.id">
        <div class="bubble sender first" v-if="message.from !== me">{{ message.message }}</div>
        <div class="bubble recipient first" v-else>{{ message.message }}</div>
        <div class="clear"></div>
      </section>
      <v-text-field
          fixed
          v-model="message"
          required
          @keydown.enter="send"
      ></v-text-field>
  </div>
</template>
<script>
export default {
  data () {
    return {
      messagesList: [],
      message: ''
    }
  },
  computed: {
    messages () {
      this.removeData()
      if (this.$store.state.messages !== null) {
        this.$store.state.messages.forEach(message => {
          if ((message.to == parseInt(this.$route.params.id, 10) && message.from == this.$store.state.me.id) ||
            ((message.to == this.$store.state.me.id) && message.from == parseInt(this.$route.params.id, 10))
            ) {
            this.messagesList.push(message)
            }
        })
      }
      return this.messagesList
    },
    me () {
      return this.$store.state.me.id
    },
  },
  methods: {
    removeData () {
      this.messagesList = []
    },
    send () {
      const data = {
        from: this.me,
        to: this.$route.params.id,
        message: this.message
      }
      this.$store.dispatch('saveMessage', data)
      this.message = ''
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
  float: left;
	align-self: flex-start;
	background-color: #efefef;
	color: #fff;
}
.discussion > .bubble.recipient {
  float: right;
	align-self: flex-end;
  background-color: cornflowerblue;
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
.clear {
  clear: both;
}
</style>

