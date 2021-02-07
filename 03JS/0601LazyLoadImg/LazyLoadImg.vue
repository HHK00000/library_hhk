<template>
    <img
        ref="image"
        v-if="selfSrc"
        v-show="loaded"
        class="lazy-load-img"
        :src="selfSrc"
        @load="loadImage"
    />
    <div
        ref="contentDom"
        v-else-if="!loaded"
        class="lazy-load-img-container"
    >
        <div class="lazy-load-img-content"><div class="loading"></div></div>
    </div>
</template>

<script>
export default {
    name: 'LazyLoadImg',
    props: {
        src: {
            type: String,
            default: ''
        },
        offset: {
            type: Number,
            default: 0
        },
        container: {
            type: Function,
            default: () => (undefined)
        }
    },
    data() {
        return {
            loaded: false, // 已加载
            isVisible: false, // 是否在可视区域
            selfSrc: '',
        };
    },
    mounted() {
        this.$container = this.container() || document.documentElement || document.body;
        this.contentDom = this.$refs.contentDom;
        this.target = this.container() || window;
        this.target.addEventListener('scroll', this.scrollHandle);
        // this.scrollHandle();
    },
    beforeDestroy() {
        this.removeEvent();
    },
    methods: {
        scrollHandle() {
          console.log('执行 scrollHandle')
            // console.log(this.isVisible);
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                const top = this.contentDom.offsetTop;
                const height = this.contentDom.clientHeight;
                const clientHeight = this.$container.clientHeight;
                const scrollTop = this.$container.scrollTop;
                const viewTop = top - (scrollTop + clientHeight);
                this.isVisible = viewTop < this.offset && (top + height + this.offset > scrollTop);
                // console.log(viewTop, top + height - scrollTop, this.isVisible);
                if (this.isVisible) {
                    this.selfSrc = this.src;
                    this.removeEvent();
                }
            }, 100);
        },
        removeEvent() {
            this.target.removeEventListener('scroll', this.scrollHandle);
        },
        loadImage() {
            this.loaded = true;
        }
    }
}
</script>
<style>
.lazy-load-img-container{
    display: inline-block;
    width: 600px;
    height: 350px;
    background-color: #eee;
    color: #aaa;
}
.lazy-load-img-container .lazy-load-img-content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.lazy-load-img-container .loading{
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    border: 3px solid #ddd;
    border-bottom-color: transparent;
    height: 25px;
    width: 25px;
    background: transparent !important;
    display: inline-block;
    -webkit-animation: loadingRotate 0.75s 0s linear infinite;
    animation: loadingRotate 0.75s 0s linear infinite;
}
@keyframes loadingRotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg); 
    }
}

</style>
