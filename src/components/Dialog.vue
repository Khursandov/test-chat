<template>
  <div>
    <v-row
      justify="center"
    >
    <h3>{{ this.$store.state.me.name }}</h3>
      <v-dialog
        v-model="dialog2"
        max-width="500px"
        persistent
      >
        <v-card>
          <v-card-title>
            choose your person
          </v-card-title>
          <v-card-text>
            <v-select
              :items="select"
              label="A Select List"
              item-value="text"
              v-model="user"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-divider />
            <v-btn
                color="primary"
                text
                @click="goo"
            >
              Go
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // dialog2: true,
        user: null,
        select: [
          { text: 'Nick' },
          { text: 'Kisame' },
          { text: 'Jojo' },
          { text: 'Zephyr' }
        ],
      }
    },
    computed: {
        dialog2() {
            if (this.$store.state.me.name == 0) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        goo () {
            if (this.user !== '') {
                this.$store.dispatch('saveUser', this.user)
            }
        }
    }
  }
</script>