var router=new VueRouter({
    linkActiveClass:"active",
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/info",
            component:Info,
            children:[

                {
                    path:"",component:List,

                },
                {
                    path:"list/:id",component:Con
                }
            ]
        },


        {
            path:"/doc",
            component:Doc,
            children:[

                {
                    path:"",
                    components:{
                        left:left,
                        right:right,
                    }
                }
            ]
        },
        {
            path:"*",
            redirect:"/"
        },
        {
            path:"/login",
            component:Login
        }


    ]
})

//express   发起请求 中间件next()  相应请求  登陆


