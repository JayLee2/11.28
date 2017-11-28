var Home=Vue.component("home",{
    template:`
    <div class="home"> 
        <Nav></Nav> 
        <div class="homeCon">
                <img src="http://www.sxuek.com/statics/images/uek/new_logo.png" alt="">
        </div>
    </div>
`
})


var Nav=Vue.component("Nav",{
    template:`
    <div class="Nav"> 
        <router-link :to="item.url" v-for="(item,key) in navData" :key="key" exact>{{item.title}}</router-link>
       
       <router-link to="/login" v-if="!islogin">login</router-link>
       
       <span v-if="islogin" class="info" @click="show">
       {{name}}
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
       </span>
       
   
    </div>
`,
    data(){
        return {
            navData:[
                {title:"首页",url:"/"},
                {title:"公司简介",url:"/info"},
                {title:"文档说明11",url:"/doc"}
            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
    created(){
         this.name=this.get("login","name");
         this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
          this.del("login");
          router.push("/")
        }
    }
})

var Info=Vue.component("Info",{
    template:`
     <div class="Info"> 
        <Nav></Nav>
        <transition name="opacity" mode="out-in">
            <router-view style="text-align: center"> 
            
            </router-view>
        </transition>
     </div>
`
})

var List=Vue.component("List",{
    template:` 
    	  <ul class="mui-table-view" style="padding-top:44px;position: absolute;width:100%">
	      <li class="mui-table-view-cell mui-media">
	      
	       <router-link to="/info/list/1" tag="a">
	       
	       <img class="mui-media-object mui-pull-right" src="http://placehold.it/40x30">
	              <div class="mui-media-body">
	                  幸福
	                  <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
	              </div>
</router-link>
	          
	      </li>
	      <li class="mui-table-view-cell mui-media">
	         <router-link to="/info/list/2" tag="a">
	       
	       <img class="mui-media-object mui-pull-right" src="http://placehold.it/40x30">
	              <div class="mui-media-body">
	                  幸福
	                  <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
	              </div>
</router-link>
	      </li>
	      <li class="mui-table-view-cell mui-media">
	         <router-link to="/info/list/3" tag="a">
	       
	       <img class="mui-media-object mui-pull-right" src="http://placehold.it/40x30">
	              <div class="mui-media-body">
	                  幸福
	                  <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
	              </div>
</router-link>
	      </li>
	  </ul>
`,
    beforeRouteEnter(to,from,next){
        console.log(1);
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log(2);
        next();
    }
})

var Con=Vue.component("Con",{
    template:`
     <div style="padding-top:44px;position: absolute">
        {{$route.params.id}}
        sakdjksajdkashjkdhasj<br>
        sakdjksajdkashjkdhasj<br>
        sakdjksajdkashjkdhasj<br>
        sakdjksajdkashjkdhasj<br>
        
     
     </div>
     
     

`
})

var Doc=Vue.component("Doc",{
    template:`
     <div style="position: absolute;left:0;top:0;width:100%">
      <Nav></Nav>
      <div class="Doc">
      <router-view name="left" class="left"></router-view>
      <router-view name="right" class="right"></router-view>
      </div>
     </div>
     `,

    beforeRouteEnter(to,from,next){

        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})


var left=Vue.component("left",{
    template:`

      <div>
                <ul> 
                    <li> 
                       <strong>vue安装</strong>
                    
                        <ul class="son"> 
                          <li> 
                              <router-link to="#one" tag="li">npm 安装</router-link>
                          </li>
                           <li> 
                           <router-link to="#two" tag="li"> script 安装</router-link>
                             
                          </li>
                        </ul>
                    </li>
                    
                      <li> 
                       <strong>vue路由</strong>
                    
                        <ul class="son"> 
                        
                         <router-link to="#three" tag="li">  vue路由的钩子函数</router-link>
                          <router-link to="#four" tag="li">vue路由的配置项</router-link>
                        
                         
                        </ul>
                    </li>
                </ul>
      
       </div>
`,

    watch:{
        $route(){
           var hash=this.$route.hash.slice(1);
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber:document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-44 }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop= this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()

        }
    }
})

var right=Vue.component("right",{
    template:`

      <div>
      
         <div class="floor" id="one">
         
            npm 安装<br>
            
            npm install vue
         </div>
         
         <div class="floor" id="two">
         
            script 安装<br>
            
            &lt;script src='' &gt;   &lt;/script&gt; 
         </div>
         
          <div class="floor" id="three">
         
            钩子函数<br>
             
             1. 全局使用<br>
             router.beforeEach()<br>
             router.afterEach()<br>
             2. 路由里面使用<br>
             this.$route.afterRouter()<br>
             this.$route.beforeEnter()<br>
             4.在组件里面使用<br>
                this.$route.beforeRouteEnter
                this.$route.beforeRouteUpdate (2.2 新增)
                this.$route.beforeRouteLeave
         </div>
         
          <div class="floor" id="four">
            <h1>
            路由配置项
           </h1>
            <pre>
            declare type RouteConfig = {
  path: string;
  component?: Component;
  name?: string; // 命名路由
  components?: { [name: string]: Component }; // 命名视图组件
  redirect?: string | Location | Function;
  props?: boolean | string | Function;
  alias?: string | Arraystring;
  children?: ArrayRouteConfig; // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void;
  meta?: any;

  // 2.6.0+
  caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object; // 编译正则的选项
}
           </pre>
          
           </div>
      
      </div>
`
})


var Login=Vue.component("Login",{
    template:`
<div>
<header class="mui-bar mui-bar-nav">
     <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
</header>
<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div></div>`,
    methods:{
        back(){
            router.push("/");
        },
        submit(){

            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/doc")
        }

    }


})



