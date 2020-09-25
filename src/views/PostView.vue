<template>
    <div class="post">
        <span>POSTS VIEW {{ $route.params.id }}</span>
        <p>{{ $route.params }}</p>
    </div>
</template>

<script>

    export default {
        name: 'post-view',
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
        title () {
            return "PostView Title some title"
        },
        description () {
            return "PostView Description some PostView Description some PostView Description some PostView Description some "
        },
        beforeMount() {
            if (this.$root._isMounted) {
                this.loadPage();
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .posts
        display: grid
        grid-template-columns: repeat(4, 1fr)
    
</style>
