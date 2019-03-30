<!-- 响应式图片组件 -->
<template>
    <div class="pr-image-responsive">
        <div class="prir__box" :style="imageBoxStyle">
            <img :class="preview ? 'preview' : ''" :src="url" :style="imageStyle" @click="imageClick(url)">
            <p class="prir__desc" v-if="desc">{{desc}}</p>
        </div>
        <pr-photo-swipe
                ref="photoSwipe"
                :items="photoSwipeItems"></pr-photo-swipe>
    </div>
</template>

<script>
    import PrPhotoSwipe from './PrPhotoSwipe'

    export default {
        name: 'pr-image-responsive',
        components: {
            PrPhotoSwipe
        },
        props: {
            // 图片地址
            url: {
                required: true
            },
            // 是否开启预览
            preview: {
                default: false
            },
            // 最大宽度
            maxWidth: {
                default: '100%'
            },
            // 最大宽度
            maxHeight: {
                default: '100%'
            },
            // 边距
            padding: {
                default: '5px'
            },
            // 边框
            border: {
                type: String
            },
            backgroundImage:{
                type: String
            },
            // 是否居中
            align: {
                default: 'center'
            },
            // 图片描述
            desc: {
                default: ''
            }
        },
        data() {
            return {
                imageUrl: '',
                imageBoxStyle: {},
                imageStyle: {},
                photoSwipeItems: []
            }
        },
        methods: {
            imageClick(url) {
                if (this.preview && this.url) {
                    this.$refs['photoSwipe'].open(0)
                }
                this.$emit('imageClick', url)
            },
            changeStyle() {
                if (this.preview && this.url) {
                    // 放大图动态更新
                    this.photoSwipeItems = [
                        {
                            src: this.url,
                        }
                    ]
                }
                if (this.border) {
                    // border动态更新
                    this.imageStyle['border'] = this.border
                } else {
                    // 清空border
                    this.imageStyle['border'] = ''
                }

                if(this.backgroundImage){
                    this.imageStyle['backgroundImage']=this.backgroundImage
                }
                // 通知vue更新
                this.imageStyle = JSON.parse(JSON.stringify(this.imageStyle))
            }
        },
        created() {
            if (this.desc) {
                this.imageBoxStyle['flexFlow'] = 'column'
            }
            this.imageBoxStyle['padding'] = this.padding
            if (this.maxWidth) {
                this.imageStyle['maxWidth'] = this.maxWidth
            }
            if (this.maxHeight) {
                this.imageStyle['maxHeight'] = this.maxHeight
            }
        },
        mounted() {
            this.changeStyle()
        },
        watch: {
            url() {
                this.changeStyle()
            },
            border() {
                this.changeStyle()
            }
        }
    }
</script>

<style lang="less" scoped>
    .pr-image-responsive {
        .prir__box {
            display: flex;
            img {
                margin: auto;
            }
        }
    }

    .pr-image-responsive, .prir__box {
        width: 100%;
        height: 100%;
    }

    .prir__desc {
        text-align: center;
        margin: 0 0 10px 0;
        font-size: 14px;
        line-height: 20px;
    }

    .prir__box:hover {
        cursor: pointer;
    }
</style>