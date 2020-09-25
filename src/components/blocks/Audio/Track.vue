<template>
    <div class="audio-track">
        <div class="audio-track-top" @click="test()" @dblclick="clear()">
            {{ title }}
        </div>
        <div class="audio-track-bottom">

            <!--            <audio controls="controls">-->
            <!--                <source :src="src_ogg" type="audio/ogg" />-->
            <!--                <source :src="src_mp3" type="audio/mpeg" />-->
            <!--                Your browser does not support the audio element.-->
            <!--            </audio>-->

            <svg v-if="is_playing" @click="switchIsPlaying()" width="14" height="16" viewBox="0 0 14 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <rect x="7.92175" y="0.861816" width="5.46087" height="14.9714" fill="#C4C4C4"/>
                <rect x="0.640625" y="0.861816" width="5.46087" height="14.9714" fill="#C4C4C4"/>
            </svg>

            <svg v-if="!is_playing" @click="switchIsPlaying()" width="14" height="16" viewBox="0 0 14 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9702 7.00474L5.26356e-06 15L0.00275654 6.99994L0.0051639 -4.27889e-05L13.9702 7.00474Z"
                      fill="#7F4242"/>
            </svg>

            <span class="audio-track-bottom-seconds-till">{{ currentTime }}</span>

            <span class="audio-track-bottom-line">
                <span class="audio-track-bottom-line-main"></span>
                <span class="audio-track-bottom-line-available"></span>
                <span class="audio-track-bottom-line-active"></span>
            </span>

            <span class="audio-track-bottom-seconds-full">{{ duration }}</span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "audio-track",
        data: () => {
            return {
                is_watching: false,
                is_playing: false,
                audio: null,
                interval: null,
                currentTime: '00:00',
                duration: '00:00',
            }
        },
        props: {
            src_mp3: {
                type: String,
                required: true,
            },
            src_ogg: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            }
        },
        mounted() {
            this.audio = new Audio(this.src_mp3);
        },
        methods: {
            readableDuration(seconds) {
                let sec = Math.floor(seconds);
                let min = Math.floor(sec / 60);
                min = min >= 10 ? min : '0' + min;
                sec = Math.floor(sec % 60);
                sec = sec >= 10 ? sec : '0' + sec;
                return min + ':' + sec;
            },
            test() {
            },
            clear() {
            },
            doWatch() {
                if (!this.is_watching) {

                    console.log('Add Listteneer');

                    this.audio.addEventListener('timeupdate', (event) => {

                        this.currentTime = this.readableDuration(this.audio.currentTime)
                        this.duration = this.readableDuration(this.audio.duration)

                        console.log('BUFFER');
                        console.log(this.audio.buffered);
                        console.log('BUFFER');

                    });

                    this.is_watching = true;
                }
            },
            switchIsPlaying() {
                this.is_playing = !this.is_playing

                if (this.is_playing) {
                    this.audio.play();
                    this.doWatch()

                } else {
                    this.audio.pause();
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .audio-track
        padding 10px
        /*background-color red*/
        color white
        margin-bottom 10px

        &-top
            font-family 'Montserrat', sans-serif
            font-style normal
            font-weight normal
            font-size 13px

        &-bottom
            color blue
            display flex

            &-line
                width 100%
                display flex
                justify-content center
                align-items center
                padding 5px
                position: relative;

                &-main
                    padding 2px
                    background-color rgba(196, 196, 196, 0.34)
                    width 100%

                &-active
                    width 49%
                    background-color #804242
                    padding 2px
                    position absolute
                    box-sizing border-box
                    left 5px

                &-available
                    width 69%
                    background-color rgba(229, 229, 229, 0.6)
                    padding 2px
                    position absolute
                    box-sizing border-box
                    left 5px

            &-seconds-till
                color #fff
                padding 0 7px
                font-size 15px
                display flex
                align-items center

            &-seconds-full
                color #fff
                padding 0 7px
                font-size 15px
                display flex
                align-items center

            svg
                width: 28px
                height: 28px
</style>