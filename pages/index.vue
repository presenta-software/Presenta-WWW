<template>
    <div class="body">

      
      <HeroHeader />


        <!-- <div class="vid">
          <div class="video-container" @click="playVideo">
            <video ref="vid" src="/0-main.m4v" muted poster="0-main.jpg"></video>
          </div>
        </div> -->

        <!-- <div class="vid">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/AaKGgTXl4MA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> -->

        <div class="hsplash">
          <picture>
            <source srcset="/splash-desktop.jpg" media="(min-width: 600px)" alt="figma to image api" >
            <img src="/splash-mobile.jpg" alt="figma to image api" />
          </picture>
          
        </div>

        <HeroComp v-for="use in usecases" :block="use" />

        <!-- <CTA />

        <HeroComp v-for="feat in features" :block="feat" /> -->

        <Opening />

        <CTA />

        <FooterComp />
    </div>
</template>

<script>
import HeroHeader from '~/components/HeroHeader.vue'
import Features from '~/components/Features.vue'
import FooterComp from '~/components/FooterComp.vue'
import LatestPosts from '~/components/LatestPosts.vue'
import CTA from '~/components/CTA.vue'
import Opening from '~/components/Opening.vue'
import { mapMutations, mapGetters } from 'vuex'
import HomeExamples from '~/components/HomeExamples.vue'
import HeroComp from '~/components/HeroComp.vue'


export default {
  components:{
    HeroHeader,Features,FooterComp,LatestPosts,CTA,Opening,HomeExamples,HeroComp
  },  
  head () {
        return {
            title: 'Home'
        }
  },
  async asyncData(){
    return {
      usecases:[
        {
          title:'Newsletter <br/><b class="high break">Personalization!</b>', 
          subtitle:'Send <b>personalized images</b> to your audience <br />Use within <b>MailChimp</b>, <b>MailJet</b> or other email marketing tools.<br /><a href="/blog/newsletter-personalization">Learn more →</a>', 
          imageDesktop:'/newsletter-desktop.png',
          imageMobile:'/newsletter-mobile.png',
          aaa:'<br /><a href="">Learn more</a>'
        },
        {
          title:'<b>1 click</b> Share <br /><b class=high>Landing Page</b>', 
          subtitle:'Turn your Audience into <b>Brand ambassadors</b><br />Built-in <b>landing-page</b> to share <b>personalized images</b> with one click.<!--<br /><a href="/blog/share-enabler-landing-page">Learn more →</a>-->',
          imageDesktop:'/goshare-desktop.png',
          imageMobile:'/goshare-mobile.png'
        },
        {
          title:'Sharing <b class=high>Booster</b>', 
          subtitle:'Boost your Social Media <b>presence</b><br /> with automatic <b>Social Preview</b> (Open-Graph).<!--<br /><a href="/blog/social-preview-open-graph">Learn more →</a>-->',
          imageDesktop:'/social-preview-desktop.png',
          imageMobile:'/social-preview-mobile.png'
        },
        // {
        //   title:'Social Media <b>Images</b><br/>on <b class=high>Autopilot</b>', 
        //   subtitle:'<b>Publish</b> Social Media Images <b>automatically</b><br />using our <b>built-in Automator</b>.',
        //   imageDesktop:'splash-desktop.jpg'
        // },
        
        // {
        //   title:'<b class=high>Magic</b> CDN<br />', 
        //   subtitle:'Decorate images in bulk',
        //   imageDesktop:'splash-desktop.jpg'
        // }
      ],
      features:[
        {
          title:'Smart Blocks', 
          subtitle:'QRCode'
        },
        {
          title:'In Context', 
          subtitle:'Geo, Time'
        },
        {
          title:'Low-Code Scripting', 
          subtitle:'Geo, Time'
        },
      ]
    }
  },
  methods:{
    playVideo(){
      this.$refs.vid.play()
    }
  }
}
</script>



<style scoped>
.feat{
  text-align: center;
  font-size: 3.5rem;
}

.vid{
  margin:2rem 0;
  padding:1rem;
  padding-right: 1.5rem;

  display: flex;
  justify-content: center;
}
.video-container {
  box-shadow: 10px 10px 0 #000;
  border:1px solid #000;
}
video{
  display: block;
  width: 100%;
}

@media screen and (min-width: 700px){
    .video-container{
      width: 75%;
    }
}

/* 
.video-container {
	position: relative;
	padding-bottom: 56.25%;
	height: 0;
	overflow: hidden;
  box-shadow: 10px 10px 0 #000;
  border:1px solid #000;
}
.video-container iframe{
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
} */
</style>
