<template>
    <header>
        <div class="logo">
            <nuxt-link to="/"><img src="~/assets/logo.svg" alt="presenta" /></nuxt-link>
        </div>
        

        <div class="menu">
            <nuxt-link to="/pricing">Pricing</nuxt-link>
            <a href="https://app.presenta.cc/signup" target="_blank">Sign Up</a>
        </div>
    </header>
</template>





<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0 0 15px #ccc;
    z-index: 9999;
}

.logo a{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 4px;
}

.btn{
    font-size:1.5rem;
}

.menu{
    display: none;
}
.menu a{
    padding: .5rem;
    display: block;
    overflow: hidden;
    border-radius: 4px;
    text-decoration: none;
    margin-left: .5rem;
}
.menu a:hover{
    text-decoration: underline;
}

.menu .nuxt-link-active{
    background: var(--accentcolor);    
}

@media screen and (min-width: 450px) {
    .btn{
        font-size:1rem;
    }
    .menu{
        display: flex;
    }
}

div{
    display: flex;
    align-items: center;
}

img{
    width: 10rem;
}

@media screen and (min-width: 450px) {
    img{
        width: 8rem;
    }
}

@media screen and (min-width: 770px) {
    
}
</style>
