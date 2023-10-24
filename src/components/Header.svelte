<script>
  import { link } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  
  const menus = [
    {
      href: '/',
      name: 'Home'
    },
    {
      href: '/search',
      name: 'Search'
    },
    {
      href: '/bookmark',
      name: 'Bookmark',
    },
    {
      href: '/about',
      name: 'About',
      path: /^\/about/
    },
  ]
</script>

<header>
  <a
    use:link
    href="/">
    (주)<span>우리회사</span>
  </a>
  <nav>
    <ul>
      {#each menus as {href, name, path} (name)}
        <li>
          <a
            use:link
            use:active={path}
            {href}>
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  @import "../app.scss";
  header {
    padding: 20px 40px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 9;
    display: flex;
    align-items: flex-end;
    @media #{$mobile} {
      padding: 14px 20px;
    }
    a {
      display: block;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 20px;
      color: $color--black;
      text-decoration: none;
      font-weight: 400;
      span {
        color: $color--primary;
        font-size: 20px;
      }
    }
    nav {
      margin-left: 40px;
      @media #{$mobile} {
        display: none;
      }
      ul {
        display: flex;
        li {
          margin-left: 10px;
          &:first-child {
            margin-left: 0;
          }
          a {
            font-size: 14px;
            font-weight: 400;
            color: $color--black;
            text-decoration: none;
            font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
          }
        }
      }
    }
  }
  header :global(a.active) {
    color: $color--primary !important;
  }
</style>