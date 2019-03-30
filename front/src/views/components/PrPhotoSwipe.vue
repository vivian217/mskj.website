<!-- 图片盒子组件, 基于photoswipe -->
<template>
    <!-- v-transfer-dom指令可以将该元素自动移动到body内, 而不是父vue内部 -->
    <div class="pr-photo-swipe" v-transfer-dom :data-transfer="true">
        <!-- PhotoSwipe根元素. -->
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true" ref="photoSwipe">
            <!-- 背景 -->
            <div class="pswp__bg"></div>
            <!-- 外部容器 -->
            <div class="pswp__scroll-wrap">

                <!-- 图片盒子 -->
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
                <!-- 工具按钮, 使用默认UI, 可自定义 -->
                <div class="pswp__ui pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <!-- 数量统计 -->
                        <div class="pswp__counter"></div>
                        <!-- 关闭按钮 -->
                        <button class="pswp__button pswp__button--close" title="关闭"></button>
                        <!-- 全屏 -->
                        <button class="pswp__button pswp__button--fs" title="全屏显示"></button>
                        <!-- 放大缩小 -->
                        <button class="pswp__button pswp__button--zoom" title="放大或缩小"></button>
                        <!-- 预加载 http://codepen.io/dimsemenov/pen/yyBWoR -->
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 上一张 -->
                    <button class="pswp__button pswp__button--arrow--left" title="上一张">
                    </button>
                    <!-- 下一张 -->
                    <button class="pswp__button pswp__button--arrow--right" title="下一张">
                    </button>
                    <!-- 文字说明 -->
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import 'photoswipe/dist/photoswipe.css'
    import 'photoswipe/dist/default-skin/default-skin.css'

    import PhotoSwipe from 'photoswipe/dist/photoswipe'
    import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
    import TransferDom from 'iview/src/directives/transfer-dom'

    export default {
        name: 'pr-photo-swipe',
        directives: {
            TransferDom
        },
        props: {
            // 当前显示第几张图, 默认值0, 第一张
            index: {
                default: 0
            },
            // 图片集合
            items: {
                default: () => {
                    return [
                        // {
                        //     title: '图片说明',
                        //     src: '主图地址',
                        //     msrc: '小图地址',
                        //     // 如果宽高大于当前屏幕，将按比例缩小
                        //     w: '宽度',
                        //     h: '高度'
                        // }
                    ]
                }
            },
            // 图片大小
            size: {
                default: () => {
                    return [1920, 1080]
                }
            },
            // 是否开启历史记录
            history: {
                default: false
            }
        },
        data() {
            return {
                // 元素
                el: {},
                // 图片集合
                pswpItems: [],
                // 参数
                options: {
                    index: 0
                },
                // 图片盒子实例
                pswpInstance: {}
            }
        },
        methods: {
            // 初始化
            init() {
                this.el = this.$refs['photoSwipe']
            },
            // 开启
            open(index) {
                let len = this.pswpItems.length
                if (index <= -1 || index > len) {
                    console.warn('索引不存在无法开启')
                    return
                }
                if (len == 0) {
                    console.error('开启PhotoSwipe失败, 图片集合为空')
                    return
                }
                // 图片预加载
                let oImg = new Image()
                // 优先显示缩略图
                oImg.src = this.pswpItems[index]['src']
                oImg.onload = oImg.onerror = (e) => {
                    if (e.type == 'error') {
                        console.warn('图片无法正常加载.')
                    } else {
                        this.pswpItems[index]['w'] = oImg.width
                        this.pswpItems[index]['h'] = oImg.height
                        this.load(index)
                    }
                }
            },
            load(index) {
                // 修改索引
                this.options.index = index
                this.options.history = this.history
                // 创建实例
                this.pswpInstance = new PhotoSwipe(this.el, PhotoSwipeUI_Default, this.pswpItems, this.options)
                // 初始化并打开预览
                this.pswpInstance.init()
            }
        },
        watch: {
            // 图片列表发生改变
            items(n) {
                let items = []
                // 添加宽高属性
                n.forEach((value) => {
                    let obj = value
                    if (!value['w']) {
                        obj['w'] = this.size[0]
                    }
                    if (!value['h']) {
                        obj['h'] = this.size[1]
                    }
                    items.push(obj)
                })
                this.pswpItems = items
            }
        },
        mounted() {
            this.init()
        }
    }
</script>
<style lang="less" scoped>
    .pswp__caption__center {
        text-align: center;
    }
</style>