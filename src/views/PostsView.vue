<template>
    <div class="posts">
        <post-item :click="goToPost(post.id)" v-for="post in posts" :item="post" :key="post.id"></post-item>
    </div>
</template>

<script>

    import PostItem from "../components/blocks/Posts/PostItem.vue";

    export default {
        name: 'posts-view',
        data: () => {
            return {
                posts: [
                    {
                        id: 1,
                        title: 'Title 1',
                        description: 'Some description 1',
                    },
                    {
                        id: 2,
                        title: 'Title 2',
                        description: 'Some description 2',
                    },
                    {
                        id: 3,
                        title: 'Title 3',
                        description: 'Some description 3',
                    },
                    {
                        id: 4,
                        title: 'Title 4',
                        description: 'Some description 4',
                    },
                    {
                        id: 5,
                        title: 'Title 5',
                        description: 'Some description 5',
                    },
                    {
                        id: 6,
                        title: 'Title 6',
                        description: 'Some description 6',
                    },
                    {
                        id: 7,
                        title: 'Title 7',
                        description: 'Some description 7',
                    },
                    {
                        id: 8,
                        title: 'Title 8',
                        description: 'Some description 8',
                    },
                    {
                        id: 9,
                        title: 'Title 9',
                        description: 'Some description 9',
                    },
                    {
                        id: 10,
                        title: 'Title 10',
                        description: 'Some description 10',
                    },
                ]
            };
        },
        components: {
            PostItem
        },
        beforeMount() {
            if (this.$root._isMounted) {
                this.loadPage();
            }
            console.log('POSTS VIEW');
        },
        computed: {},
        methods: {
            goToPost(id) {
                // this.$router.push('/posts/' + id)
            },
            loadPage() {
                // TODO :: testing
                this.$bar.start();
                this.$bar.finish();
            }
        },
        title () {
            return "PostView Title some title"
        },
        description () {
            return "PostView Description some PostView Description some PostView Description some PostView Description some "
        },
    }
</script>

<style lang="stylus" scoped>
    .posts
        display: grid
        grid-template-columns: repeat(3, 1fr)
    
</style>
