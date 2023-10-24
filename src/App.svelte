<script>
  import {fade} from "svelte/transition";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Header from "./components/Header.svelte";
  
</script>
<Header/>
<div in:fade>
  <Router {routes}/>
</div>

<style lang="scss">
  @import "./app.scss";
</style>
