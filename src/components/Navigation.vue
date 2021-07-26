<template>
  <div>
    <b-navbar
      toggleable="lg"
      variant="primary"
    >
      <b-navbar-brand>MLVC Portal</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item
            to="/home"
            exact
            exact-active-class="active"
          >
            Home
          </b-nav-item>
          <b-nav-item
            to="/predict"
            exact
            exact-active-class="active"
          >
            Predict
          </b-nav-item>
          <b-nav-item
            to="/company"
            exact
            exact-active-class="active"
          >
            Company
          </b-nav-item>
          <b-nav-item
            to="/reference"
            exact
            exact-active-class="active"
          >
            Reference
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
};
</script>

<style scoped>
</style>
