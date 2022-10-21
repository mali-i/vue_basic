import App from './App.vue'

// main.js中创建vm，vm直接和App对话。所以main.js中要引入App.vue

new Vue({
    el:'#root',
    templates:`
    <div>
        <App></App>
    </div>    

    `,
    data:{

    },
    components:{App}  //注册App组件大哥

})