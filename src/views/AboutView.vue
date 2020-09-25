<template>
    <div class="about">
        <h1>О нас</h1>
        <p>
            Группа Punky-BoyZZ, это абсолютно не коммерческий проект, что б срубить бабла или хайпануть на патриотизме.
            Это сборище творческих единомышленников, которые хотят просто донести свою музыку с понятными текстами до
            обычных людей. Наша цель выступить хотя бы раз в год и желательно не в подвальном гадюшнике. Приходите на
            наше рок-шоу, мы будем очень рады видеть вас.
        </p>
    </div>
</template>

<script>

    export default {
        name: 'about-view',
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
        methods: {
            loadPage() {
                // TODO :: переделать
                this.$bar.start()
                this.$bar.finish()
            }
        },
        title() {
            return "PostView Title some title"
        },
        description() {
            return "AboutView Description some PostView Description some PostView Description some PostView Description some "
        },
        beforeMount() {
            if (this.$root._isMounted) {
                this.loadPage();
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .about
        color white
        padding-top 50px
        text-align center

        p
            font-size 13px
            letter-spacing 2px
            line-height 21px
            width 600px
            margin auto

</style>
