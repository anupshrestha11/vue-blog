<template>
    <div class="card">
        <div class="card-top">
            <div class="author-info">
                <img
                    src="https://static.productionready.io/images/smiley-cyrus.jpg"
                    alt=""
                    width="40px"
                    height="40px"
                    class="avatar"
                />
                <div class="author">
                    <div class="author-name">
                        {{ post.author }}
                    </div>
                    <div>
                        <small>
                            24 Apr, 2020
                        </small>
                    </div>
                </div>
            </div>
            <div>
                <div class="views ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                        />
                        <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                        />
                    </svg>
                    <span>
                        {{ post.views }}
                    </span>
                </div>
            </div>
        </div>
        <div>
            <div class="post-title">
                <router-link :to="'/post/' + post.slug">
                    {{ post.title }}
                </router-link>
            </div>
            <p class="post-excerpt">
                {{ post.excerpt }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["post"],
};
</script>

<style lang="scss" scoped>
.card {
    padding: 20px 0;
    border-bottom: 1px solid hsl(0, 0, 90);
}
.avatar {
    clip-path: circle();
}
.card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.author-info {
    display: flex;
    align-items: center;
}
.author {
    padding: 10px;
    font-size: 0.9rem;
    &-name {
        color: #748ef3;
        font-weight: 500;
    }
}

.views {
    display: flex;
    align-items: center;
    border: 0;
    outline: 0;
    color: #fff;
    background: hsl(228, 84%, 50%);

    padding: 5px 8px;
    border-radius: 5px;
    svg {
        margin: 0 5px;
    }
}
.post-title {
    margin: 10px 0 0;
    font-weight: 600;
    a {
        color: #777;
        text-decoration: none;
        &:hover {
            color: #333;
        }
    }
}
.post-excerpt {
    font-size: 0.9rem;
}
</style>
