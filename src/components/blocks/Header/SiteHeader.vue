<template>
    <header class="header container">
        <NavbarMenu />
    </header>
</template>

<script>

import NavbarMenu from "./NavbarMenu.vue";

export default {
    name: 'site-header',
    components: { NavbarMenu }
}

</script>

<style lang="stylus">
    .header
        background-color transparent
        box-sizing border-box
        z-index 999
        height 70px
</style>
