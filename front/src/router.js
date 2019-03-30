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
            },
            {
                path: '/news/detail/:nid',
                name: 'news_details',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/news-detail.vue'], resolve),
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

];
export default routers;
