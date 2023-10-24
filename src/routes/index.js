import Home from "./Home.svelte";
import Login from "./Login.svelte";
import NotFound from "./NotFound.svelte";

export default {
  '/': Home,
  '/login': Login,
  '/*': NotFound,
}