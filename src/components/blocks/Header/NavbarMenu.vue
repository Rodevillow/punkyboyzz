<template>
    <nav class="inner">
        <router-link to="/" class="router-link-logo" exact>
            <logo-horizontal />
        </router-link>
       <div>
           <router-link to="/home">Главная</router-link>
           <router-link to="/new">Медиа</router-link>
           <router-link to="/show">Наши движухи</router-link>
           <router-link to="/contact">Контакты</router-link>
           <router-link to="/about">О нас</router-link>
           <router-link to="/posts">Магазин</router-link>
       </div>

<!--        <router-link to="/top">Главная</router-link>-->
<!--        <router-link to="/new">Медиа</router-link>-->
<!--        <router-link to="/show">Наши движухи</router-link>-->
<!--        <router-link to="/ask">Контакты</router-link>-->
<!--        <router-link to="/job">О нас</router-link>-->

        <span class="locales-switcher">
            <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" rel="noopener">
                Рус
            </a>
            |
            <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" rel="noopener">
                Укр
            </a>
        </span>
    </nav>
</template>

<script>

import LogoHorizontal from "../Icons/LogoHorizontal.vue";
export default {
  name: 'nav-bar-menu',
    components: {LogoHorizontal},
}

</script>

<style lang="stylus">

    .inner
        box-sizing border-box
        margin auto
        height 100%
        display flex
        justify-content space-between
        align-items center

        /*&>div>a*/
        /*    padding 2px*/
        /*    background-color #efc14e*/

        a
            color rgba(255, 255, 255, .8)
            /*line-height 24px*/
            /*font-weight 300*/
            transition color .15s ease
            display inline-block
            vertical-align middle
            letter-spacing .075em
            /*margin-right 1.8em*/
            margin 0 20px

            font-family 'Montserrat', sans-serif
            font-style normal
            font-weight 100
            font-size 13px
            line-height 18px

            &:hover
                color #fff

            &.router-link-active
                color #7F4242

            &.router-link-logo
                margin 0

        .github
            color #fff
            margin 0
            float right

        .locales-switcher
            min-width 116px
            display flex
            color white
            justify-content flex-end

            a:first-child
                margin-right 15px

            a:last-child
                margin-left 15px

        .logo
            width 24px
            margin-right 10px
            display inline-block
            vertical-align middle
</style>
