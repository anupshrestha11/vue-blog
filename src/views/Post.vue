<template>
    <div>
        <Hero>
            <div class="container">
                <h1 class="heading">{{ post.title }}</h1>
                <p class="sub-heading">
                    {{ post.author }}
                </p>
            </div>
        </Hero>
        <div class="container">
            <div v-html="post.content"></div>
        </div>
    </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
    components: { Hero },

    created() {
        this.$store.dispatch("getPost", this.$route.params.post_slug);
    },

    computed: {
        post() {
            return this.$store.state.post;
        },
    },
};
</script>

<style>
.heading {
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 0.3rem;
    color: #fff;
    text-align: center;
}
.sub-heading {
    text-transform: capitalize;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    color: #fff;
    text-align: center;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 10px;
    text-align: justify;
}
</style>
