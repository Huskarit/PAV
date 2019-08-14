<template lang="html">
  <div>
    <sui-menu secondary> 
      <sui-menu-item active link name="Home"><nuxt-link to="/">Home page</nuxt-link></sui-menu-item>
      <sui-menu-item name="Login"><nuxt-link to="/auth/login">Login Page</nuxt-link></sui-menu-item>
      <sui-menu-item name="Todo"><nuxt-link to="/todos">Todos</nuxt-link></sui-menu-item>
      <sui-menu-item name="Report"><nuxt-link to="/report">Report</nuxt-link></sui-menu-item>
    </sui-menu>
  </div>
</template>
