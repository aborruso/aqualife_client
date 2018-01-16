<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <side-bar>
      <mobile-menu></mobile-menu>
      <template slot-scope="props" slot="links">
        <sidebar-item :link="{name: 'Home', path: '/'}">
        </sidebar-item>
        <sidebar-item :link="{name: 'Chemical Risk', path: '/indexes/chemicalrisk'}"></sidebar-item>
        <sidebar-item :link="{name: 'Theoretical Biological Risk', path: '/indexes/theoretiacalbiologicalrisk'}">
        </sidebar-item>
        <sidebar-item :link="{name: 'Empirical Biological Risk', path: '/indexes/empiricalbiologicalrisk'}">
        </sidebar-item>
        <sidebar-item :link="{name: 'Conservation Index', path: '/indexes/conservationindex'}">
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click="toggleSidebar"></dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './Extra/MobileMenu.vue'
  import UserMenu from './Extra/UserMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu,
      UserMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
<style lang="scss">
  .vue-notifyjs.notifications{
    .list-move {
      transition: transform 0.3s, opacity 0.4s;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;

    }
    .list-enter-active {
      transition: transform 0.2s ease-in, opacity 0.4s ease-in;
    }
    .list-leave-active {
      transition: transform 1s ease-out, opacity 0.4s ease-out;
    }

    .list-enter {
      opacity: 0;
      transform: scale(1.1);

    }
    .list-leave-to {
      opacity: 0;
      transform: scale(1.2, 0.7);
    }
  }
</style>
