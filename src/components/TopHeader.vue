<template>
    <header>
        <div>
            <router-link to="/" class="logo">
                Megatron
            </router-link>
        </div>
        <!-- <div>
            <router-link to="/login" class="btn btn-login">
                Login
            </router-link>
            <router-link to="/register" class="btn btn-register ">
                Register
            </router-link>
        </div> -->
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
.logo {
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.1rem;
    color: #03203c;
}
.btn {
    text-decoration: none;
    padding: 8px 25px;
    border-radius: 30px;
    border: 1px solid #000;
    margin: 10px;
    color: #03203c;
    transition: all 0.3s ease;
    &:hover {
        color: #fff;
        background: #03203c;
    }
}

.btn-register {
    background: #03203c;
    color: #fff;
    &:hover {
        background: hsl(209, 90%, 20%);
        border-color: hsl(209, 90%, 20%);
    }
}
</style>
