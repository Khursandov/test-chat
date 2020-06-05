<template>
  <v-app
  height="500"
    width="344">
    <Dialog />
  <v-card
    class="mx-auto overflow-auto"
    height="500"
    width="344"
  >
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My Chats</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list>
      <v-list-item
        v-for="user in users"
        :key="user.id"
        :to="'/chat/' + user.id"
      >
        <v-list-item-icon>
          <v-icon v-if="user.icon" color="pink">mdi-star</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="user.name"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-badge
            bordered
            bottom
            :color="user.isActive ?'cyan accent-2' : 'deep-orange lighten-5'"
            dot
            offset-x="15"
            offset-y="35"
          >
            <v-avatar size="40">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <!-- <v-img :src="user.avatar"></v-img> -->
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="logOut" block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-card-text height="320px">
      <v-content>
      <router-view />
    </v-content>
    </v-card-text>
  </v-card>
  </v-app>
</template>

<script>
import Dialog from '@/components/Dialog'
  export default {
    components: { Dialog },
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed : {
      users () {
        return this.$store.state.users
      }
    },
    beforeCreate () {
      this.$store.dispatch('checkMessages')
      this.$store.dispatch('checkUser')
    },
    methods: {
      logOut () {
        this.$store.dispatch('removeUserStatus')
      }
    },
    watch: {
      group () {
        this.drawer = false
      },
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