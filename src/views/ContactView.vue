<template>
    <div class="contacts">
        <h1>Контакты</h1>
<!--        <div class="contacts-content">-->

<!--            <span class="contacts-content-title">Связаться с нами:</span>-->

<!--            <div class="columns-wrapper">-->

<!--                <div class="block">-->
<!--                    <span class="name">Антон Веревской</span>-->
<!--                    <p>-->
<!--                        Почта: anton.vocal.example@gmail.com <br>-->
<!--                        Номер: +38 (050) 458 92 10 <br>-->
<!--                        Telegram: +38 (050) 458 92 10 <br>-->
<!--                        Viber: +38 (050) 458 92 10 <br>-->
<!--                    </p>-->
<!--                </div>-->

<!--                <div class="block">-->
<!--                    <span class="name">Антон Веревской</span>-->
<!--                    <p>-->
<!--                        Почта: anton.vocal.example@gmail.com <br>-->
<!--                        Номер: +38 (050) 458 92 10 <br>-->
<!--                        Telegram: +38 (050) 458 92 10 <br>-->
<!--                        Viber: +38 (050) 458 92 10 <br>-->
<!--                    </p>-->
<!--                </div>-->

<!--                <div class="block">-->
<!--                    <span class="name">Антон Веревской</span>-->
<!--                    <p>-->
<!--                        Почта: anton.vocal.example@gmail.com <br>-->
<!--                        Номер: +38 (050) 458 92 10 <br>-->
<!--                        Telegram: +38 (050) 458 92 10 <br>-->
<!--                        Viber: +38 (050) 458 92 10 <br>-->
<!--                    </p>-->
<!--                </div>-->

<!--                <div class="block">-->
<!--                    <span class="name">Антон Веревской</span>-->
<!--                    <p>-->
<!--                        Почта: anton.vocal.example@gmail.com <br>-->
<!--                        Номер: +38 (050) 458 92 10 <br>-->
<!--                        Telegram: +38 (050) 458 92 10 <br>-->
<!--                        Viber: +38 (050) 458 92 10 <br>-->
<!--                    </p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>

    export default {
        name: 'contact-view',
        // props: {
        //     item: {
        //         type: Object,
        //         required: true,
        //     }
        // },
        data: () => {
            return {};
        },
        components: {},
        computed: {},
        // methods: {
        //     loadPage() {
        //         // TODO :: переделать
        //         this.$bar.start()
        //         this.$bar.finish()
        //     }
        // },
        title() {
            return "ContactsView Title some title"
        },
        description() {
            return "ContactsView Description some Contacts Description some ContactsView Description some"
        },
        // beforeMount() {
        //     if (this.$root._isMounted) {
        //         this.loadPage();
        //     }
        // }
    }
</script>

<style lang="stylus" scoped>
    .contacts
        color white
        padding-top 50px
        text-align center

        div.contacts-content
            font-size 13px
            letter-spacing 2px
            line-height 21px
            margin auto
            text-align center
            padding 40px
            box-sizing border-box
            width 100%

            &-title
                margin-bottom 20px

            .columns-wrapper
                display grid
                grid-template-columns repeat(2, 1fr)
                grid-template-rows repeat(2, 200px)

                /*.block*/
                /*    text-align left*/

            p
                width auto

            .name
                color #7F4242
                font-size 15px
                font-weight 600

</style>
