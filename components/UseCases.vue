<template>
    <div class="wrapper">
        
        <UseOpenGraph />
        <UseQRCode />
        <UseQuotes />
        <UseMeme />
        <UseCertificate />
        <UseMore />
        <UseRealtime />

    </div>
</template>


<script>
import UseOpenGraph from './presentaUseCases/UseOpenGraph.vue'
import UseNewsletter from './presentaUseCases/UseNewsletter.vue'
import UseSocialAd from './presentaUseCases/UseSocialAd.vue'
import UseQRCode from './presentaUseCases/UseQRCode.vue'
import UseQuotes from './presentaUseCases/UseQuotes.vue'
import UseMeme from './presentaUseCases/UseMeme.vue'
import UseCertificate from './presentaUseCases/UseCertificate.vue'
import UseMore from './presentaUseCases/UseMore.vue'
import UseRealtime from './presentaUseCases/UseRealtime.vue'

export default {
    components:{
        UseOpenGraph,UseNewsletter,UseSocialAd,UseQRCode,UseQuotes,UseMeme,UseCertificate,UseMore,UseRealtime
    }
}

</script>


<style scoped>
.wrapper{
    padding-top:3rem;
}
</style>