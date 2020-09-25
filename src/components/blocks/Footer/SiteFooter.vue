<template>
    <footer class="footer container">

        <span class="social-icons">

            <a href="#">
                <instagram-xs-icon />
            </a>

            <a href="#">
                <telegram-xs-icon />
            </a>

            <a href="#">
                <facebook-xs-icon />
            </a>

        </span>

        <span class="brand-icons">

            <a href="#">
                <spotify-xs-icon />
            </a>

            <a href="#">
                <deezer-xs-icon />
            </a>

            <a href="#">
                <apple-music-xs-icon />
            </a>

        </span>

    </footer>
</template>

<script>

import InstagramXsIcon from "../Icons/InstagramXsIcon.vue";
import TelegramXsIcon from "../Icons/TelegramXsIcon.vue";
import FacebookXsIcon from "../Icons/FaceBookXsIcon.vue";
import SpotifyXsIcon from "../Icons/SpotifyXsIcon.vue";
import DeezerXsIcon from "../Icons/DeezerXsIcon.vue";
import AppleMusicXsIcon from "../Icons/AppleMusicXsIcon.vue";

export default {
    name: 'site-footer',
    components: {
        AppleMusicXsIcon,
        DeezerXsIcon,
        SpotifyXsIcon,
        FacebookXsIcon,
        TelegramXsIcon,
        InstagramXsIcon
    }
}

</script>

<style lang="stylus">
    .footer
        background-color transparent
        box-sizing border-box
        z-index 999
        height 70px

        display flex
        justify-content space-between
        align-items center

        .social-icons
            display flex

            svg
                margin-right 20px

        .brand-icons
            display flex

            svg
                margin-left 20px
</style>
