<template>
  <div class="home">
    <HomeToolbar :search="search" @input="setSearch($event)" />
    <HomeList
      :items="accounts"
      @copy="copy"
      @deleteAccountDialog="openDialog({ dialogName: 'deleteAccountDialog', account: $event })"
      @unlockAccountDialog="openDialog({ dialogName: 'unlockAccountDialog', account: $event })"
      @lock="lock($event)"
      @edit="edit($event)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mapMutations } from 'vuex'

const HomeToolbar = () => import('@/components/HomeToolbar.vue')
const HomeList = () => import('@/components/HomeList.vue')
export default {
  name: 'home',
  components: {
    HomeToolbar,
    HomeList
  },
  created() {
    this.$store.dispatch('home/getAccounts')
  },
  methods: {
    ...mapActions('home', ['copy', 'lock', 'edit']),
    ...mapActions('dialog', ['openDialog']),
    ...mapMutations('home', ['setSearch', 'resetState'])
  },
  computed: {
    ...mapGetters('home', ['accounts', 'search'])
  },
  destroyed() {
    this.resetState()
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.v-list {
  flex: 1 1 0;
  overflow: auto;
}
</style>
