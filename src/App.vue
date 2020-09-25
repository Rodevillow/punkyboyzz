<template>
    <div id="app">
        <site-header />
        <transition name="fade" mode="out-in">
            <div class="wrapper-with-background">
                <router-view class="view container"></router-view>
            </div>
        </transition>
        <site-footer />
    </div>
</template>

<script>

    import SiteHeader from "./components/blocks/Header/SiteHeader.vue";
    import SiteFooter from "./components/blocks/Footer/SiteFooter.vue";

    export default {
        name: 'app',
        components: { SiteHeader, SiteFooter }
    }
</script>

<style lang="stylus">
    h1
        color white
        font-size 41px
        font-weight 400
        letter-spacing 1px

    p
        font-size 13px
        letter-spacing 2px
        line-height 21px
        width 600px
</style>
<style lang="stylus">

    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

    .container
        max-width 1420px
        padding 0 25px
        margin auto

    .wrapper-with-background
        min-height calc(100vh - 140px)
        background-image url('/public/background.jpg')
        background-size cover
        background-position center

    body
        font-family 'Montserrat', sans-serif
        background-color #242424
        margin 0

    a
        color #34495e
        text-decoration none

    .view
        margin 0 auto
        position relative

    .fade-enter-active, .fade-leave-active
        transition all .2s ease

    .fade-enter, .fade-leave-active
        opacity 0

    /*@media (max-width 860px)*/
    /*    .header .inner*/
    /*        padding 15px 30px*/

    /*@media (max-width 600px)*/
    /*    .header*/
    /*        .inner*/
    /*            padding 15px*/

    /*        a*/
    /*            margin-right 1em*/

    /*        .github*/
    /*            display none*/
</style>
