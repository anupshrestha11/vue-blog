<template>
    <div class="home">
        <Hero>
            <h1 class="heading">Megatron</h1>
            <p class="sub-heading">
                Best Destination To Gain Knownledge
            </p>
        </Hero>
        <div class="container">
            <div class="col-9">
                <div class="top-bar">
                    <span class="title">
                        Latest Post
                    </span>
                </div>
                <div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div class="col-3">
                <div class="pop-tag">
                    Popular Tags
                </div>
                <div class="tag-list">
                    <button class="tag">
                        tag1
                    </button>
                    <button class="tag">
                        another tag
                    </button>
                    <button class="tag">
                        tag1
                    </button>
                    <button class="tag">
                        another tag
                    </button>
                    <button class="tag">
                        tag1
                    </button>
                    <button class="tag">
                        another tag
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from "@/components/Hero";
import Card from "@/components/Card";
export default {
    name: "Home",
    components: { Hero, Card },
};
</script>

<style lang="scss" scoped>
.heading {
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 0.3rem;
    color: #fff;
    text-align: center;
}
.sub-heading {
    text-transform: capitalize;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    color: #fff;
    text-align: center;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
}
.col-9 {
    width: 100%;
    padding: 20px;
    @media screen and (min-width: 800px) {
        width: 70%;
    }
}
.col-3 {
    width: 30%;
    padding: 20px;
    display: none;
    @media screen and (min-width: 800px) {
        display: block;
    }
}
.top-bar {
    border-bottom: 1px solid hsl(0, 0%, 70%);
}
.title {
    font-weight: 500;
    color: #748ef3;
    border-bottom: 3px solid #748ef3;
    display: inline-block;
    margin-bottom: -2px;
    padding: 15px;
}
.pop-tag {
    padding: 15px;
    background: hsl(0, 0, 90);
}
.tag-list {
    display: flex;
    flex-wrap: wrap;
    .tag {
        white-space: nowrap;
        background: hsl(189, 77%, 40%);
        color: #fff;
        padding: 5px 15px;
        margin: 5px;
        border-radius: 10px;
        font-size: 0.8rem;
        text-transform: capitalize;
        border: 0;
        outline: 0;
        cursor: pointer;
        &:hover {
            background: hsl(189, 77%, 30%);
        }
    }
}
</style>
