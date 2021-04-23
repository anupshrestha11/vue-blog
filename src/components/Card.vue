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
                        Anup Shrestha
                    </div>
                    <div>
                        <small>
                            24 Apr, 2020
                        </small>
                    </div>
                </div>
            </div>
            <div>
                <button class="btn btn-like">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                    </svg>
                    <span>
                        0
                    </span>
                </button>
            </div>
        </div>
        <div>
            <div class="post-title">
                Lorem ipsum dolor sit amet.
            </div>
            <p class="post-excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                minus.
            </p>
        </div>
    </div>
</template>

<script>
export default {};
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

.btn {
    display: flex;
    align-items: center;
    border: 0;
    outline: 0;
    color: #fff;
    background: #748ef3;
    padding: 5px 8px;
    border-radius: 5px;
    svg {
        padding: 2px;
        margin: 0 5px;
    }
    &:hover {
        background: hsl(228, 84%, 50%);
    }
}
.post-title {
    margin: 10px 0 0;
    font-weight: 600;
}
.post-excerpt {
    font-size: 0.9rem;
}
</style>
