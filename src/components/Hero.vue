<template>
    <div class="hero">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero {
    padding: 20px 0;
    background-image: linear-gradient(
        135deg,
        #6ee2f5 0%,
        #74c6f5 20%,
        #76aaf4 40%,
        #748ef3 60%,
        #6e72f2 80%,
        #6454f0 100%
    );
    box-shadow: inset 0 0 8px 0px hsl(0, 0%, 40%);
}
</style>
