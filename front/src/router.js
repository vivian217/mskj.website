const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/home.vue'], resolve),
        redirect:'/index',
        children: [
            {
                path: '/index',
                name: 'index',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/index.vue'], resolve)
            },
            {
                path: '/demos',
                name: 'demos',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/demos.vue'], resolve),
                children: [
                    {
                        path: '/face',
                        name: 'face',
                        meta: {
                            title: ''
                        },
                        component: (resolve) => require(['./views/demos/face.vue'], resolve)
                    },{
                        path: '/car',
                        name: 'car',
                        meta: {
                            title: ''
                        },
                        component: (resolve) => require(['./views/demos/car.vue'], resolve)
                    },{
                        path: '/img-compress',
                        name: 'img-compress',
                        meta: {
                            title: ''
                        },
                        component: (resolve) => require(['./views/demos/img-compress.vue'], resolve)
                    },{
                        path: '/video-compress',
                        name: 'video-compress',
                        meta: {
                            title: ''
                        },
                        component: (resolve) => require(['./views/demos/video-compress.vue'], resolve)
                    },
                ]
            },
            {
                path: '/core',
                name: 'core',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/core.vue'], resolve)
            },
            {
                path: '/news',
                name: 'news',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/news.vue'], resolve),
                children:[
                    {
                        path: '',
                        name: '',
                        meta: {
                            title: ''
                        },
                        component: (resolve) => require(['./views/news/news-main.vue'], resolve)
                    },
                    {
                        path: '/news-detail',
                        name: 'news_details',
                        meta: {
                            title: ''
                        },
                        component: (resolve) => require(['./views/news/news-detail.vue'], resolve)
                    },
                ]
            },
            {
                path: '/about',
                name: 'about',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/about.vue'], resolve)
            }
        ]
    },
    {
        path: '/demos-mobile',
        name: 'demos-mobile',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/mobile/demos-mobile.vue'], resolve),
        redirect:'/face-mobile',
        children: [
            {
                path: '/face-mobile',
                name: 'face-mobile',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/mobile/face-mobile.vue'], resolve)
            }, {
                path: '/img-compress-mobile',
                name: 'img-compress-mobile',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/mobile/img-compress-mobile.vue'], resolve)
            }
        ]
    },
];
export default routers;
