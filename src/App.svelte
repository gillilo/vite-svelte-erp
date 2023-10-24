<script>
  import {fade} from "svelte/transition";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Header from "./components/Header.svelte";
  
  const user = window.sessionStorage.getItem('user')
  import Login from "./routes/Login.svelte";
</script>


<div in:fade>
{#if user}
  <Header/>
  <Router
    {routes}
    restoreScrollState={true} />
{:else}
  <Login />
{/if}
</div>

<style lang="scss">
  @import "./app.scss";
</style>
