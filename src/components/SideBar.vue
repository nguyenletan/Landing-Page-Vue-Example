<template>
  <div class="sidebar">
    <vs-sidebar
      static-position
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
    >
      <div class="header-sidebar" slot="header">
        <router-link to="/"
          ><img class="logo" src="@/assets/images/logo-without-shadow.png"
        /></router-link>
        <vs-divider class="sidebar-divider" color="#1256B3"></vs-divider>
        <img class="avatar" src="@/assets/images/alice-avatar.png" />
        <p class="name">Alice London</p>
        <vs-divider class="sidebar-divider" color="#1256B3"></vs-divider>
      </div>

      <vs-sidebar-item index="9" icon="notifications" to="/user-notification">
        NOTIFICATIONS
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="near_me"> SENT </vs-sidebar-item>

      <vs-sidebar-item index="3" icon="account_balance_wallet" to="/my-wallet">
        MY WALLET
      </vs-sidebar-item>

      <vs-sidebar-item index="4" icon="archive"> ARCHIVE </vs-sidebar-item>

      <vs-sidebar-item index="5" icon="settings">
        ACCOUNT SETTINGS
      </vs-sidebar-item>

      <vs-sidebar-item index="6" icon="view_headline">
        TERMS AND CONDITIONS
      </vs-sidebar-item>
      <vs-sidebar-item index="7" icon="exit_to_app"> SIGN OUT </vs-sidebar-item>

      <!--
        <div class="footer-sidebar" slot="footer">
          <vs-button vs-icon="reply" color="danger" vs-type="flat">log out</vs-button>
          <vs-button vs-icon="settings" color="primary" vs-type="border"></vs-button>
        </div>
      -->
    </vs-sidebar>
  </div>
</template>

<script>
import "@/assets/styles/sidebar.scss";

export default {
  name: "SideBar"
};
</script>
