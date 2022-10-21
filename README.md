# vue_basic_-Learn-from-Atguigu-
2022年9月中旬-2022年10月20日 在尚硅谷学习vue前端技术 边学边敲的代码们:vue_basic

# 001 课程简介

![image-20220904203207487](assets/image-20220904203207487.png)

本课程会强调以下几点：

+ vue基础
+ vue-cli              脚手架，专门做工程开发
+ vue-router       实现前端路由
+ vuex
+ element-ui
+ vue3



# 002 Vue简介

## 1.Vue是什么？

一套用于构建用户界面的渐进式JavaScript框架

构建用户界面：你把数据给我，我怎么把它们构成界面

渐进式：Vue可以自底向上逐层的应用 

​				简单应用：只需一个轻量小巧的核心库

​				复杂应用：可以引入各式各样的Vue插件

## 2.谁开发的？

<img src="assets/image-20220904204248998.png" alt="image-20220904204248998" style="zoom:50%;" />

## 3.Vue的特点

①采用组件化模式，提高代码复用率、切让代码更好维护。

<img src="assets/image-20220904204440370.png" alt="image-20220904204440370" style="zoom:80%;" />

②声明式编码，让编码人员无需直接操作DOM，提高开发效率。

<img src="assets/image-20220904204632114.png" alt="image-20220904204632114" style="zoom: 50%;" />



？DOM虚拟结点



## 4.学习Vue之前要掌握的JavaScript基础知识

+ ES6语法规范
+ ES模块化
+ 包管理器
+ 原型、原型链
+ 数组常用方法
+ axios
+ promise
+ ......



# 003 Vue官网使用指南

[Vue.js - 渐进式 JavaScript 框架 | Vue.js (vuejs.org)](https://cn.vuejs.org/)

# 004 搭建Vue开发环境



1.下载了一个开发版本的 Vue

2.安装了开发者调试工具 vue_dev_tools.crx

3.关闭了控制台的两个提示

![image-20220909210402402](assets/image-20220909210402402.png)



# 005 Hello小案例

## 1.favicon.ico 页签图标

浏览器打开网站时都会默认地去请求页签图标。

强制刷新：shift + 刷新按钮

![image-20220909211059611](assets/image-20220909211059611.png)

请求URL：http://127.0.0.1:5500/favicon.ico



进入根目录，加入favicon.ico

![image-20220909213348805](assets/image-20220909213348805.png)

##2.Live Server  默认5500端口

用Live Server打开的一瞬间，默认在本机的5500端口开了一台内置的小服务器，并且把整个工程的所有文件和文件夹都作为这台服务器的根资源去使用

![image-20220909211919036](assets/image-20220909211919036.png)

http://127.0.0.1:5500

![image-20220909212106232](assets/image-20220909212106232.png)

## 3.写点 Vue 相关的代码8

### 知识点

​      1.想让Vue工作，就必须创建一个 Vue 实例，且要传入一个配置对象;

​      2.root容器里的代码依然符合html规范，只不过混入了一些特殊的 Vue 语法;

​      3.root容器里的代码被称为 [ Vue模板 ]

![image-20220909222135571](assets/image-20220909222135571.png)

# 006 分析Hello小案例

### (1) 知识点

​     4.Vue实例和容器是一一对应得;

​     5.真实开发中只有一个Vue实例，并且会配合着组件一起使用;

​     6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性;

​     7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新;

### (2) Vue开发者工具

< Root> Vue实例，表示 “ 根 ”

![image-20220910153421587](assets/image-20220910153421587.png)

# 007 模板语法

​    Vue模板语法有2大类：

## 1.插值语法

​        功能：用于解析标签体内容。

​        写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

## 2.指令语法

​        功能：用于解析标签(包括：标签属性、标签体内容、绑定事件......)。

​        举例：v-bind:href="xxx" 或 简写为 :href="xxx"，xxx同样要写js表达式，

​          且可以直接读取到data中的所有属性。

​        备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。



# 008 数据绑定

​    Vue中有2种数据绑定的方式：

  ##   1.单向绑定(v-bind)

   			数据只能从data流向页面。

##       2.双向绑定(v-model)

​				数据不仅能从data流向页面，还可以从页面流向data。

​      

备注：

​        1.双向绑定一般都应用在表单类元素上(如：input、select等)

​        2.v-model:value 可以简写为 v-model，因为v-model 默认收集的就是value值 

![image-20220911104326146](assets/image-20220911104326146.png)

# 009 el与data的两种写法

​    data与el的2种写法

​      1.el有2种写法

​        (1) new Vue时候配置el属性。

​        (2) 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。

![image-20220911122406274](assets/image-20220911122406274.png)

​      2.data有2种写法

​        (1) 对象式

​        (2) 函数式

​        如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

![image-20220911122428601](assets/image-20220911122428601.png)

​      3.一个重要的原则

​        由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

# 010 理解MVVM模型

1. M：模型(Model)：对应data中的数据
2. V：视图(View)：模板代码
3. VM：视图模型(ViewModel)：Vue实例对象

备注：Vue的设计也受到了MVVM模型的启发，因此在文档中经常使用vm(ViewModel的缩写)这个变量名表示Vue实例。

观察发现：

​      1.data中所有的属性，最后都出现在了vm身上。

​      2.vm身上所有的属性 及 Vue原型 上的所有属性，在Vue模板中都可以直接使用。

![image-20220911130712733](assets/image-20220911130712733.png)



# 011 Object.defineProperty

![image-20220911141624259](assets/image-20220911141624259.png)

# 012 理解数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作 (读/写)

![image-20220911160300818](assets/image-20220911160300818.png)

# 013 Vue中的数据代理

##  1.Vue中的数据代理

​      通过vm对象来处理data对象中属性的操作(读/写)

### Getter

通过前面的知识，我们知道了我们创建Vue实例时配置的属性都会到vm身上，比如下图属性中有了name，它后面还有个(...)，鼠标轻轻放在它上面，会问你是否要调用属性Getter。所以当有人访问vm身上的name时，Getter开始工作，将别的地方的name拿过来用。

![image-20220914112804642](assets/image-20220914112804642.png)



### Setter

当有人修改name时，Setter就开始工作，把一个地方的name改掉。

![image-20220914113443893](assets/image-20220914113443893.png)



比如我们在控制台上输出vm.name时就是在读取，读取的就是data中的name；在控制台上修改vm.name时，修改的也是data中的name。但是想要在控制台上检查此时data中的name是不是改变了，有点困难，因为你不好直接访问data.name。

（你写的data是人家配置对象里的一个属性，不是全局随时都能用的对象

那怎么办呢！

![image-20220914114530257](assets/image-20220914114530257.png)

## 2.Vue中数据代理的好处

​      更加方便的操作data中的数据

## 3.基本原理

​      (1)通过Object.defineProperty() 把data对象中所有的属性添加到vm上(vm._data)。

​      (2)为每一个添加到vm上的属性，都指定一个getter/setter。

​      (3)在getter/setter内部去操作(读/写)data中对应的属性。



![image-20220911160109953](assets/image-20220911160109953.png)

![image-20220911160215445](assets/image-20220911160215445.png)

# 014 事件处理

事件的基本使用

​      1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名;

​      2.事件的回调需要配置在methods对象中，最终会在vm上;

​      3.methods中配置的函数，不要用箭头函数！否则this就不是vm了;

​      4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象;

​      5.@click='demo' 和@click='demo(&event)'效果一致，但后者可以传参；

![image-20220912090358294](assets/image-20220912090358294.png)

# 015 事件修饰符

​    Vue中的事件修饰符：

​      1.prevent：阻止默认事件(常用)

​      2.stop：阻止事件冒泡(常用)

​      3.once：事件只触发一次(常用)

​      4.capture：使用事件的捕获模式

​      5.self：只有event.target是当前操作的元素时才触发事件,(也可以阻止冒泡)

​      6.passive：事件的默认行为是立即执行，无需等待事件回调执行完毕  (移动端会用，手机、平板)

# 016 键盘事件

## 1.键盘事件

### （1）keydown

按下去不用抬起来触发

###    （2）keyup  

 按下去抬起来触发



    ## 2.Vue中常用的按键别名

​      回车 => enter

​      删除 => delete (捕获“删除”和“退格”键)

​      退出 => esc

​      空格 => space

​      换行 => tab  (特殊，必须配合keydown去使用)

​      上 => up

​      下 => down

​      左 => left

​      右 => right



​      一个按键 有两种表示,一个英文名儿(如Enter),一个编码(如13)

​      Vue中用小写是为了方便。

​      Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case(短横线命名)



![image-20220912204951141](assets/image-20220912204951141.png)

观察发现 CapsLock 和其它的不太一样，它是驼峰命名法，因为它是两个单词的组合。像这种由两个单词组成的要写成 @keyup.caps-lock



不是键盘上所有按键都能绑定事件。在众多可以绑定事件的按键中，有5个特殊的按键。

例如Tab键，它本身就有个功能，就是从当前元素身上切走。这导致按下Tab键后已经失去对<input>的焦点了，所有Tap键适合keydown。这样子切走就切走，你要的效果还是实现了的。

除了Tab键还有4个，是ctrl  alt  shift  meta

​            

    ### 3.系统修饰键(用法特殊):ctrl、alt、shift、meta

​      (1)配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。

​      (2)配合keydown使用：正常触发事件



​    4.也可以使用keyCode去指定具体的按键(不推荐)

​    5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名(不推荐)

# 017 事件总结

事件修饰符中修饰符可以连续使用，比如阻止冒泡后又阻止默认事件；

键盘事件中系统修饰键可以指定按键组合

# 018 姓名案例

### 插值语法实现.html

### methods方法实现.html

### 计算属性实现.html



# 019 计算属性

![image-20220915211559244](assets/image-20220915211559244.png)



![image-20220915225159847](assets/image-20220915225159847.png)

​    计算属性：

      ## 1.定义

要用的属性不存在，要通过已有属性计算得来。

      ## 2.原理

底层借助了Object.defineproperty方法提供的getter和setter。

      ## 3.get函数什么时候执行？

​        (1) 初次读取时会执行一次

​        (2) 当依赖的数据发生改变时会被再次调用

     ## 4.优势

与methods实现相比，内部有缓存机制(复用)，效率更高，调试方便(root中能看到计算属性computed)。

     ## 5.备注

​        (1) 计算属性最终会出现在vm上，直接读取使用即可

​        (2) 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起 计算时所依赖的数据 发生改变，让它有所改变，

​        也就是说要在set中真正地引起firstname lastname变化

# 020 计算属性_简写

![image-20220915232212596](assets/image-20220915232212596.png)

# 021 天气案例

![image-20220916161232601](assets/image-20220916161232601.png)

# 022 监视属性

## 1.监视属性watch

​      1.当被监视的属性变化时，回调函数自动调用，进行相关操作

​      2.监视的属性必须存在，才能进行监视！！

## 2.监视的两种写法

​        (1) new Vue时传入watch配置

​        (2) 通过vm.&watch监视

![image-20220916165026925](assets/image-20220916165026925.png)



# 023 深度监视

## 深度监视 deep:true

​      (1) Vue中的watch默认不监测对象内部值得改变(一层)

​      (2) 配置 deep:true 可以监测对象内部值改变(多层)

​    备注：

​      (1) Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以。

​      (2) 使用 watch 时根据数据的具体结构，决定是否采用深度监视。(默认不开启是为了简单)

![image-20220916175957896](assets/image-20220916175957896.png)



# 024 监视的简写形式

![image-20220916192739514](assets/image-20220916192739514.png)

# 025 watch对比computed

## 1.computed和watch之间的区别

​      (1) computed能完成的功能，watch都可以完成。

​      (2) watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。

## 2.两个重要的小原则

​      (1) 所有被Vue管理的函数，最好写成普通函数，这样this的指向才是 vm 或 组件实例对象。

​      (2) 所有不被Vue管理的函数(定时器的回调函数、ajax的回调函数、Promise的回调函数等)，最好写成箭头函数，这样this的指向一样才是 vm 或 组件实例对象)

![image-20220916192654205](assets/image-20220916192654205.png)

# 026 绑定class样式



# 027 绑定style样式



# 028 条件渲染

## 1.v-if

​      写法：

​        (1) v-if="表达式"

​        (2) v-else-if="表达式"

​        (3) v-else="表达式"

​      适用于：切换频率较低的场景。

​      特点：不展示的DOM元素直接被移除。

​      注意：v-if可以和 v-else-if、v-else 一起使用，但要求结构不能被“打断”。



## 2.v-show

​      写法：

​        v-show="表达式"

​      适用于：切换频率较高的场景。

​      特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

   

备注

​    使用v-if时，元素可能无法获取到，而使用v-show一定可以获取到。

# 029 列表渲染

  ## v-for指令

​      1.用于展示列表数据

​      2.语法：v-for="(item,index) in xxx" :key="yyy"

​      3.可遍历：数组、对象、字符串(用的很少)、指定次数(用的很少)

![image-20220917144547434](assets/image-20220917144547434.png)

# 030 key作用与原理

## 1.index作为key

![image-20220918193044557](assets/image-20220918193044557.png)



如果不写key，vue会自动把index作为key

## 2. id作为key

![image-20220918193154511](assets/image-20220918193154511.png)

## 3. key总结--面试题：react、vue中的key有什么作用？(key的内部原理)

### (1) 虚拟DOM中key的作用

​        key是虚拟dom对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】，随后Vue进行【新虚拟DOM】和【旧虚拟DOM】的差异比较，比较规则如下:

### (2) 对比规则：

​        1) 旧虚拟DOM中找到了与新虚拟DOM相同的key:

​          ① 若虚拟DOM中内容没变，直接使用之前的真实DOM！

​          ② 若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

​        2) 旧虚拟DOM中未找到与新虚拟DOM相同的key

​          创建新的真实DOM，随后渲染到页面。

### (3) 用index作为key可能会引发的问题：

​        1) 若对数据进行：逆序添加、逆序删除等破坏顺序操作：

​          会产生没有必要的真实DOM更新 ==> 界面效果没问题，但效率低。

​        2) 如果结构中还包含输入类的DOM：

​          会产生错误的DOM更新 ==> 界面有问题。



### (4) 开发中如何选择key？

​        1) 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。

​        2) 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，

​          使用index作为key是没有问题的。

# 031 列表过滤

## 1. watch实现

![image-20220919160746684](assets/image-20220919160746684.png)

## 2. computed实现

![image-20220919160813085](assets/image-20220919160813085.png)

# 032 列表排序

![image-20220919160647374](assets/image-20220919160647374.png)

# 033 更新时的一个问题



# 034 Vue监测数据的原理_对象



# 035 Vue.set()方法



# 036 Vue监测数据的原理_数组



# 037 总结Vue监视数据



# 038 收集表单数据

收集表单数据：

​      若：<input type="text"/>  则v-model收集的是value值，用户输入的就是value值。

​      若：<input type="radio"/>  则v-model收集的是value值，且要给标签配置value值。

​      若：<input type="checkbox"/>

​        1.没有配置input的value属性，那么收集的就是checkd(勾选or未勾选，是布尔值)

​        2.配置input的value属性：

​          (1)v-model的初始值是非数组，那么收集的就是checked(勾选or未勾选，是布尔值)

​          (2) v-model的初始值是数组，那么收集的就是value组成的数组

​      备注：v-model的三个修饰符：

​        lazy：失去焦点再收集数据

​        number：输入字符串转为有效的数字

​        trim：输入首尾空格过滤

案例：

<img src="assets/image-20220919205907182.png" alt="image-20220919205907182" style="zoom:50%;" />

![image-20220919205938365](assets/image-20220919205938365.png)

![image-20220919205957836](assets/image-20220919205957836.png)

# 039 过滤器



# 040 v-text指令

 ## 1.回顾我们学过的指令

​      v-bind  ：单向绑定解析表达式，可简写为：xxx

​      v-model ：双向数据绑定

​      v-for  : 遍历数组/对象/字符串

​      v-on   : 绑定事件侦听，可简写为@

​      v-if   : 条件渲染(动态控制节点是否存在)

​      v-else  : 条件渲染(动态控制节点是否存在)

​      v-show  : 条件渲染(动态控制节点是否展示)



   ## 2. v-text指令

​      1.作用：向其所在的节点中渲染文本内容。

​      2.与插值语法的区别：v-text会替换掉节点中的内容，{{xxx}}则不会。

![image-20220920162726010](assets/image-20220920162726010.png)

# 041 v-html指令

## 1.v-html 可以解析html标签



## 2.v-html 的安全性问题：cookie

涉及知识点：Node.js   cookie

![image-20220920172541676](assets/image-20220920172541676.png)

![image-20220920173233398](assets/image-20220920173233398.png)

HttpOnly打勾后，控制台就读不出cookie了。

![image-20220920174137167](assets/image-20220920174137167.png)

![image-20220920173726043](assets/image-20220920173726043.png)

跳走之后，将cookie参数以query参数传给“坏人的服务器”。

![image-20220920173557464](assets/image-20220920173557464.png)

## 3. v-html指令

​    v-html指令：

​      1.作用：向指定节点中渲染包含html结构的内容。

​      2.与插值语法的区别：

​        (1) v-html和v-text一样都会替换掉节点中所有的内容，{{xx}}则不会

​        (2) v-html可以识别html结构。这点v-text就不可以。

​      3.严重注意：v-html有安全性问题

​        (1) 在网站时动态渲染任意HTML是非常危险的，容易导致XSS攻击(跨站脚本攻击)。

​        (2) 一定要在可信的内容上使用v-html，永远不要用在用户提交的内容上！

# 042 v-cloak指令

​    v-cloak指令(没有值)：

​      1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。

​      2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。



# 043 v-once指令

​    v-once指令：

​      1.v-once所在节点在初次动态渲染后，就视为静态内容了。

​      2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

![image-20220920191750360](assets/image-20220920191750360.png)

![image-20220920191813690](assets/image-20220920191813690.png)

# 044 v-pre指令

​    v-pre指令：

​      1.跳过其所在节点的编译过程。

​      2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

# 045 自定义指令_函数式



![image-20220921160950491](assets/image-20220921160950491.png)

# 046 自定义指令_对象式

![image-20220921161011107](assets/image-20220921161011107.png)



# 047 自定义指令_总结

​    自定义指令总结：

## 1.定义语法

### （1）局部指令

​      new Vue({

​        directives:{

​          指令名:配置对象

​        }

​      })

​      或者

​      new Vue({

​        directives:{

​          指令名：回调函数

​        }

​      })



### （2）全局指令

​      Vue.directive('指令名'，配置对象)      

​		或者

​      Vue.directive('指令名'，回调函数)



## 2.配置对象中常用的3个回调函数

​      (1) bind：指令与元素成功绑定时调用

​      (2) inserted；指令所在元素被插入页面时调用

​      (3) update：指令所在模板结构被重新解析时调用



## 3.注意

​        1.指令定义时不加v-，但使用时要加v-

​        2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名

#  



#048 引出生命周期(钩子)

​    生命周期：

## 1.生命周期的别名

生命周期回调函数、生命周期函数、生命周期钩子。

## 2.生命周期是什么

是Vue在关键时刻帮我们调用的一些特殊名称的函数。

   ##   3.注意

（1）生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。

（2）生命周期函数中的this指向是 vm 或 组件实例对象。

## 4.生命周期示意图

![生命周期](assets/生命周期.png)



# 049 生命周期_挂载流程



注意beforecreat是指在什么创建之前？

是在数据监测、数据代理创建之间

![image-20220921192317181](assets/image-20220921192317181.png)

![image-20220921191727932](assets/image-20220921191727932.png)



# 050 生命周期_更新流程



![image-20220921194809941](assets/image-20220921194809941.png)

![image-20220921194849017](assets/image-20220921194849017.png)



Model --> View

![image-20220921194530717](assets/image-20220921194530717.png)

# 051 生命周期_销毁流程



![image-20220921194955213](assets/image-20220921194955213.png)



![image-20220921203809403](assets/image-20220921203809403.png)







# 052 生命周期_总结

## 1.形象类比：张三的一生-vm的一生

![image-20220922095130913](assets/image-20220922095130913.png)



 ## 2.常用的生命周期钩子

### （1）mounted

发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。

   ###   （2）beforeDestroy

清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。



## 3.关于销毁Vue实例注意事项

(1) 销毁后借助Vue开发者工具看不到任何信息。（但如果之前点开过Vue开发者工具，那销毁后会有残留）

(2) 销毁后自定义事件会失效，但原生DOM事件依然有效。

 (3) 一般不会在beforeDestroy中操作数据，因为即便操作数据，也不会再触发更新流程了。







# 053 对组件的理解

Reusable Compoents

![image-20220922120422507](assets/image-20220922120422507.png)



## 1.传统方式编写应用

![image-20220922120704733](assets/image-20220922120704733.png)



存在问题：

​	（1）依赖关系混乱，不好维护

​    （2）代码复用率不高

## 2.使用组件方法编写应用

![image-20220922120915860](assets/image-20220922120915860.png)

## 3.组件的定义

### 实现应用中局部功能代码和资源的集合。

![image-20220922121026976](assets/image-20220922121026976.png)



## 4.模块与组件、模块化与组件化

### （1）模块



### （2）组件



### （3）模块化



### （4）组件化





# 054 非单文件组件

   ## 1.Vue中使用组件的三大步骤

一: 定义组件(创建组件Vue.extend({}))

二 :注册组件(Vue实例中配置components属性)

三 :使用组件(写组件标签)



## 2.如何定义一个组件？

​      使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别。

​      区别如下：

​        1.el不要写，为什么？———— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。

​        2.data必须写成函数，为什么？———— 避免组件被复用时，数据存在引用关系。

​      备注：使用template可以配置组件结构。



   ## 3.如何注册组件？

​      1.局部注册：靠new Vue的时候传入components选项

​      2.全局注册：靠Vue.component('组件名'，组件)



## 4.编写组件标签

​      < school >< /school >



![image-20220922162645145](assets/image-20220922162645145.png)

![image-20220922162732641](assets/image-20220922162732641.png)

# 055 组件的几个注意点

​    几个注意点：

## 1.关于组件名

### (1) 一个单词组成

​          第一种写法(首字母小写)：school

​          第二种写法(首字母大写)：School

### (2) 多个单词组成

​          第一种写法(kebab-case命名)：my-school

​          第二种写法(CamelCase命名)：MySchool(需要Vue脚手架支持)

### (3) 备注

​          1) 组件名尽可能回避HTML中已有的元素名称，例如h2、H2都不行。

​          2)  可以使用name配置项指定组件再开发者工具中呈现的名字。



## 2.关于组件标签

​        第一种写法：<school></school>

​        第二种写法：</school>

​        备注：不使用脚手架时，</school>会导致后续组件不能渲染。

## 3.定义组件时的简写方式

​        const school = Vue.extend(options) 

可简写为：

​		const school = options



# 056 组件的嵌套

## 1.子组件

![image-20220923143727824](assets/image-20220923143727824.png)



## 2.app组件——用于管理应用中所有的组件

一人之下(vm)，万人之上(所有组件)

![image-20220923144302083](assets/image-20220923144302083.png)

![image-20220923145021106](assets/image-20220923145021106.png)

# 057 VueComponent构造函数

## 1.school组件的本质——是VueComponent构造函数

虽然你代码中没有写过“new VueComponent()”，但是实际上，VueComponent在Vue.extend()时就被Vue自动调用。

根据源码：VueComponent是在你Vue.extend()时Vue自己调用的。

<img src="assets/image-20220923153011831.png" alt="image-20220923153011831" style="zoom:67%;" />



 ##     2.VueComponent实例什么时候会被创建？

我们只需要写<school/>或者<school></school>，Vue解析时会帮我们创建school组件的实例对象，

​      即Vue帮我们执行的：new VueComponent(options)。



      ## 3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！

定义多个组件，new出来的是全新的VueComponent



      ## 4.关于this指向
    
    ###    (1)组件配置中

 data函数、methods中的函数、watch中的函数、computed中的函数：

 它们的this均是【VueComponent实例对象】。



      ###  (2)new Vue()配置中

  data函数、method中的函数、watch中的函数、computed中的函数：

  它们的this均是【Vue实例对象】



      ### 5.简称

VueComponentd的实例对象，以后简称vc(也可称之为：组件实例对象)。

Vue的实例对象，以后简称vm





# 058 Vue实例与组件实例

组件是可复用的Vue实例，所以它们与new Vue接受相同的选项，例如data、computed、watch、methods以及生命周期钩子等。仅有的例外是像 el 这样根实 例特有的选项。



一个组件中data选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝。从而避免数据引用失误。

data：function(){

return {

​	count:0

​	}

}

# 059 一个重要的内置关系

// 需要有原型的相关基础

## 1.原型对象的简单说明

原型对象简单说明：

![image-20220924135948575](assets/image-20220924135948575.png)

![原型对象](assets/原型对象.png)





## 2.重要：VueComponent.prototype.__proto === Vue.prototype

![image-20220924150244024](assets/image-20220924150244024.png)



# 060 单文件组件 .vue

## 1.为什么需要脚手架？

直接把.vue文件交给浏览器，浏览器是不认识的。

你得把.vue文件经过处理和加工，变成.js文件，浏览器就认识了。

怎么处理和加工呢？

+ webpack 自己找一些loader、插件，搭建起一个工作流

这种方式比较麻烦，而且你搭建的工作流不一定好。

+ Vue官方搭建提供好的webpack环境：脚手架



本章节将介绍.vue里面的代码怎么写。至于写完的代码怎么去编译、运行是下一小节请来脚手架的事。

## 2. 一个组件.vue文件里代码怎么写呢？

### (1) 回顾组件的定义

组件的定义：

实现界面局部功能代码和资源的集合。

所以一个.vue里面应该有html、css、javascript。为了迎合组件的这三个元素，vue设计了三个标签。



.vue文件就是组件



###   (2) vscode插件：vetur

vscode不认识.vue文件，所以建议安装一个插件：Vetur。

(有个常用快捷键，敲下 <v  ，自动出现vue的三个标签（结构、交互、样式）)



###   (3) .vue文件的内容：结构、交互、样式

结构：template标签

交互：script标签

样式：style标签

![image-20220924160336917](assets/image-20220924160336917.png)



###   (4) 组件的3种暴露方式

模块化，组件需要暴露，别人才好import

三种暴露方式：

1）分别暴露

![image-20220924163108382](assets/image-20220924163108382.png)

2)统一暴露

![image-20220924163246907](assets/image-20220924163246907.png)

3）默认暴露

![image-20220924163601400](assets/image-20220924163601400.png)

一般来说，使用默认暴露。

这样子引入比较简单：

​		import ??? from ????

但凡使用统一暴露或者分别暴露，就得：

​		import {???} from ????



默认暴露的简写：直接暴露组件的配置对象

![image-20220924163807754](assets/image-20220924163807754.png)







## 3.标准化开发

【前述知识：ES6模块化】

####  		App.vue

##### 				School.vue

##### 				Student.vue

##### 				......

​        所有的组件听从vm，所以还要创建vm。vm的代码写在main.js中

####  		main.js  (也称为“入口文件”)

​		main.js中创建vm，vm直接和App对话。所以main.js中要引入App.vue

​		在main.js中用到了new Vue，但是这里还没有引入，所以在用main.js之前在index.html中引入Vue.js

#### 		index.html

​		准备好容器root

​		引入Vue.js、main.js





# 061 创建Vue脚手架  Vue-CLI ——Vue.js开发的标准工具

Vue-CLI :

CLI：command line interface （命令行接口工具）



【cmd命令：cls：将输入命令清空】

## 1.安装步骤

step 1：全局安装@vue/cli  （第一次创建项目时，以后就不用了）

​	命令：npm install -g @vue/cli

step 2：切换到你要创建项目的目录，然后使用命令创建项目

​	命令：vue create xxx   （用该命令创建的确实是一个脚手架，人家已经给写了一个HelloWorld组件，你相当于给这个项目重命名为xxx）

![image-20220924173231510](assets/image-20220924173231510.png)

选择Vue2

babel是 ES6===>ES5 语法转换的东西

eslint 是webpack里做语法检查的

![image-20220924173258905](assets/image-20220924173258905.png)

成功创建如下

![image-20220924173528266](assets/image-20220924173528266.png)

进入创建项目的文件夹，运行npm run serve

![image-20220924173628008](assets/image-20220924173628008.png)

![image-20220924173755304](assets/image-20220924173755304.png)



进入http://localhost:8080/

运行这个项目时，它会给你开启一个内置的服务器，端口是8080

打开Vue开发者工具，会发现Vue已经给你写好了一个HelloWorld组件

![image-20220924174005647](assets/image-20220924174005647.png)

按ctrl+c关掉

![image-20220924174253734](assets/image-20220924174253734.png)



下一节分析脚手架结构



# 062 分析脚手架结构

在vscode中打开上一节通过脚手架创建的Vue项目。

<img src="assets/image-20220924174532980.png" alt="image-20220924174532980" style="zoom: 50%;" />





## 1.配置文件介绍

![image-20220924174700852](assets/image-20220924174700852.png)



.gitignore——git的忽略文件

babel.config.js——babel的配置文件。如果需要配置，参考babel官网

package-lock.json和package.json——包的说明书

README.md——可以删掉原来的内容。写点你的笔记。

## 2. src文件夹

你执行npm run serve之后，立马执行的就是main.js

![image-20220924175516097](assets/image-20220924175516097.png)



点开main.js

在终端中运行 npm run serve

![image-20220924175908077](assets/image-20220924175908077.png)

进入http://localhost:8080/

同样显示如下界面

![image-20220924175939824](assets/image-20220924175939824.png)





assets中常放静态资源

## 3.public文件夹



# 063 render函数

残缺版的Vue没有模板解析器，解析不了template配置项

当你引入残缺版的Vue，你还想渲染内容，那就需要render了

render(createElement){

​	return createElement('h1','你好啊')

}

箭头函数简写：

render:h=>h(App)



.vue文件里的template标签有专门的解析器——"vue-template-compiler"

Vue :  Vue核心 + 模板解析器



关于不同版本的Vue:

1.vue.js与vue.runtime.xxx.js的区别：

​	 （1)vue.js是完整版的Vue，包含：核心功能+模板解析器。

​	   (2)vue.runtime.xxx.js是运行版的Vue，只包含：核心功能。没有模板解析器。

2.因为vue.runtime.xxx.js没有模板解析器，所有不能使用template配置项，需要使用render函数收到的createElement函数去指定具体内容。



# 064 修改默认配置

脚手架配置好了默认配置。

比如入口就是main.js



实在想改 => 去官网找高端的配置文件



# 065 ref属性

vue中收集元素

App组件中输出this是VueComponents

查看它身上，发现一个$refs，点开发现$refs下就有刚刚ref='title'的h1元素

![image-20220925102948573](assets/image-20220925102948573.png)

![image-20220925103245984](assets/image-20220925103245984.png)

![image-20220925103257288](assets/image-20220925103257288.png)

## 1.vue的ref属性与原生id属性

  ref被用来给元素或子组件注册引用信息(id的替代者)

## 2.应用对象：html标签或vc

应用在html标签上获取的是真实的DOM元素

应用在组件标签上是组件实例对象(vc)

  ## 3.使用方式

   ### (1) 打标签

< h1 ref='xxx'></h1>

或

 < School ref='xxx'></School>

### (2)获取 

获取：this.$refs.xxx





# 066 props配置

##  1.功能：让组件接收外部传过来的数据

###     (1)传递数据

​      < Demo name="xxx"/>

###     (2)接收数据

####       第一种方式：(只接收)

​        props:['name']

​      

####       第二种方式：(限制类型)

​        props:{

​          name:Number

​        }



####       第三种方式：(限制类型、限制必要性、指定默认值)

​        props:{

​          name:{

​            type:String,   //类型

​            required:true,  //必要性

​            defalut:'张三'  //默认值

​          }

​        }

##   2.备注：props是只读的

props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请赋值props的内容到data中一份，然后去修改data中的数据。



![image-20220925114033162](assets/image-20220925114033162.png)

<img src="assets/image-20220925114009443.png" alt="image-20220925114009443" style="zoom:50%;" />





<img src="assets/image-20220925113835504.png" alt="image-20220925113835504" style="zoom: 67%;" />



# 067 mixin混入(混合)

多个组件共享一个配置

<img src="assets/image-20220925115425871.png" alt="image-20220925115425871" style="zoom:67%;" />

##   1.功能

可以把多个组件共用的配置提取成一个混入对象。

##   2.使用方式

###     Step1：定义混入

例如：

mixin.js文件中：

​    const mixin =  {

​        data(){......},

​        methods:{......}

​        ....

​      }

###     Step2：使用混合

先import，再用一个全新的配置项



例如：

​      (1) 全局混入: Vue.mixin(xxx)

​      (2) 局部混入: mixins:['xxx']



# 068 插件

##  1.功能：用于增强Vue

![image-20220926095747565](assets/image-20220926095747565.png)

plugin可以收到参数。且该参数是vm的构造函数Vue

![image-20220926100357293](assets/image-20220926100357293.png)



![image-20220926101612137](assets/image-20220926101612137.png)

## 2.install方法

插件的本质是包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

## 3.定义插件

​    对象.install = function(Vue,options){

​      //1.添加全局过滤器

​      Vue.filter(...)



​      //2.添加全局指令

​      Vue.directive(....)



​      //3.配置全局混入(合)

​      Vue.mixin(....)



​      //4.添加实例方法

​      Vue.prototype.$myMethod = function(){...}

​      Vue.prototype.$myProperty = xxxx

​    }

## 4.使用插件

在main.js中： 

   Vue.use()





# 069 scoped样式

## 1.作用

​	让样式在局部生效，防止冲突

##  2.写法

​	< style scoped>



# 070 TodoList案例_静态

根据组件设计，对已有的html结构和css样式进行拆分。

或者说是

抽取组件，使用组件实现静态页面效果



实现静态页面如下：

![image-20220926130836215](assets/image-20220926130836215.png)











# 071 TodoList案例_初始化列表

存数据。

展示动态数据：

​	思考：

​			数据的类型、名称是什么？

​			数据保存在哪个组件？

​	回答：

​			可以用数组去存，数组里面每一个要做的事是一个对象。

​			[{xx:yyy , zz : dd , ....}] 

​			[id:     ,    name:          ,done:     ,......]

​												    ||

​													标记事情是否昨晚

传值——props属性

![image-20220926190513360](assets/image-20220926190513360.png)









# 072 TodoList案例_添加

找到对应的input框，想到键盘事件 ===> @keyup.enter

将用户输入包装成todoArr对象时候，需要输入id。

有两个包，一个是：uuid  可以生成全球唯一的id；

还有一个是nanoid，这个是uuid做了精简，体积小，下这个。

下载方式：npm i nanoid 

![image-20220926195013294](assets/image-20220926195013294.png)

导入nanoid

![image-20220926192529581](assets/image-20220926192529581.png)



![image-20220926204150070](assets/image-20220926204150070.png)

# 073 TodoList案例_勾选



# 074 TodoList案例_删除



# 075 TodoList案例_底部统计



# 076 TodoList案例_底部交互







# 077 TodoList案例_总结

##   1.组件化编码流程

###     (1)拆分静态组件

组件要按照功能点拆分，命名不要与html元素冲突；



###     (2)实现动态组件

考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

​      1)一个组件在用：放在组件自身即可。

​      2)一些组件在用：放在他们共同的父组件上(状态提升)。

​    (3)实现交互：从绑定事件开始。



##   2.props适用于

​    (1)父组件 ==> 子组件 通信

​    (2)子组件 ==> 父组件 通信(要求父先给子一个函数)



props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。



##   3.使用v-model时

要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！



# 078 webStorage 浏览器本地存储

##  localStorage 本地存储

##  sessionStorage 会话存储



  1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

  2.浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制

  3.相关API：

​    (1) xxxxxStorage.setItem('key','value')

​      该方法接受一个键和值作为参数，会把键值对添加到浏览器存储中，如果键名存在，则更新其对应的值。

​    (2) xxxxxStorage.getItem('key')

​      该方法接受一个键名作为参数，返回键名对应的值。

​    (3) xxxxxStorage.removeItem('key')

​      该方法接受一个键名作为参数，并把该键名从存储中删除。

​    (4) xxxxxStorage.clear()

​      该方法会清空存储中的所有数据。

  4.备注

​    (1)sessionStorage存储的内容会随着浏览器窗口关闭而消失

​    (2)localStorage存储的内容，需要手动清除才会消失

​    (3)xxxxxStorage.getItem('key')，如果'key'对应的value获取不到，那么getItem的返回值是null

​    (4)JSON.parse(null)的结果依然是null





# 079 TodoList 本地存储

上面写的TodoList案例有一个问题，就是：页面刷新后数据会丢失

App.vue中

对todosArr进行深度监视，并使用localStorage.setItem和localStorage.getItem

![image-20221003152846357](assets/image-20221003152846357.png)

![image-20221003152917823](assets/image-20221003152917823.png)

# 080 组件自定义事件_绑定

## 1.需求

在school组件里加一个按钮，当你点击按钮时，school组件里的学校名称“尚硅谷”三个字就交给App了。（实现子=>父组件的通信）

![image-20221004120758049](assets/image-20221004120758049.png)

## 2.先前的方法:props

按照之前的方法：app先传入方法，子组件利用props接受

App.vue中

<img src="assets/image-20221004122013086.png" alt="image-20221004122013086" style="zoom:50%;" />

School.vue中

<img src="assets/image-20221004122034701.png" alt="image-20221004122034701" style="zoom: 50%;" />

## 3.组件自定义事件

现在用组件自定义事件：

### 	(1)第一种自定义写法 v-on:xxx 或 @xxx

App.vue中：

![image-20221004170044102](assets/image-20221004170044102.png)

![image-20221004170130918](assets/image-20221004170130918.png)

Student.vue中：

不用props接收了。

用this.$emit触发组件自定义事件，并传入参数

![image-20221004170208120](assets/image-20221004170208120.png)

### (2)第二种自定义写法 ref 和 $on

在App.vue中

![image-20221004170408878](assets/image-20221004170408878.png)

在钩子中绑定事件。第二种自定义写方法比较灵活，因为可以在挂载里面用定时器。

![image-20221004170703859](assets/image-20221004170703859.png)



## 4.事件只能触发一次

### (1)  v-on:xxx.once 或 @xxx.once

![image-20221004171514893](assets/image-20221004171514893.png)

### (2) ref 和 $on

![image-20221004171603700](assets/image-20221004171603700.png)



## 5.传很多参数时  （name, ...params)

![image-20221004172204045](assets/image-20221004172204045.png)



# 081 组件自定义事件_解绑

## 1. 解绑：this.$off('xxx')

![image-20221004174440165](assets/image-20221004174440165.png)

## 2.销毁：回顾this.destroy()

在Student.vue中加一个点击事件使number++

![image-20221004180000826](assets/image-20221004180000826.png)

一测试vc被销毁后原生js和组件自定义事件还活着不，

​			都没了。（有些版本问题，有的add会还能回调）

二测试vm被销毁后原生js和组件自定义事件还活着不，

​			也都没了。。（可能还有些版本问题，有的add会还能回调。不确定。）



# 082 组件自定义事件_总结

## 1.模板语法中的变量来源

+ data中
+ props传进来
+ computed计算属性计算出来

## 2.总结

1.一种组件间通信的方法，适用于：子组件 ===> 父组件

  2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）

  3.绑定自定义事件：

​    （1）第一种方式，在父组件中：

​      <Demo @atguigu="test"/>或 < Demo v-on:atguigu="test"/>

​    （2）第二种方式，在负组件中：

​      < Demo ref="demo"/>

​      ......

​      mounted(){

​        this.&refs.xxx.$on('atguigu',this.test)

​      }

​    （3）若想让自定义事件只能触发一次，可以使用once修饰符，或者$once()方法。

  4.触发自定义事件：this.&emit('atguigu',数据)

  5.解绑自定义事件：this.$off('atguigu')

  6.组件上也可以绑定原生DOM事件，需要使用native修饰符

  7.注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配置在methods,要么用箭头函数，否则this指向会出问题！



# 083 TodoList案例_自定义事件

把TodoList案例中父传子的改成组件自定义事件（App => MyHeader 和 App => MyFooter ，暂时先不改MyList，因为里面还涉及到了MyList => MyItem ）

App.vue中

![image-20221005100537614](assets/image-20221005100537614.png)

![image-20221005102055912](assets/image-20221005102055912.png)

注意 todosArr可不用改成组件自定义事件，这是传的数据，所以props中的todosArr也可不能跟着删掉哦。

MyHeader.vue中

![image-20221005102238733](assets/image-20221005102238733.png)

MyFooter.vue中

![image-20221005102304543](assets/image-20221005102304543.png)

# 084 全局事件总线1

建立在自定义事件的基础上。

实现任意组件间通信

# 085 全局事件总线2 

##   1.GlobalEventBus定义

一种组件间通信的方式，适用于任意组件间通信。

全局事件总线：GlobalEventBus

![image-20221005150402513](assets/image-20221005150402513.png)

##   2.安装全局事件总线$bus

  new Vue({

​      ......

​      beforeCreate(){

​        Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm

​      },

​      ......

​    })

##   3.使用事件总线

###     （1）接收数据

​      A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。      

​      methods(){

​        demo(data){......}

​      }

​      ......

​      mounted(){

​        this.$bus.$on('xxx',this.demo)

​      }

###     （2）提供数据

​      this.$bus.$emit('xxx',数据)



##   4.解绑当前组件的事件

最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。



## 5.代码

main.js中

安装全局事件总线 $bus

![image-20221005152525161](assets/image-20221005152525161.png)

School.vue中

![image-20221005152619583](assets/image-20221005152619583.png)

Student.vue中

![image-20221005152646837](assets/image-20221005152646837.png)



# 086 TodoList案例_事件总线

main.js中安装全局事件总线

![image-20221005155602095](assets/image-20221005155602095.png)

App.vue中给$bus绑定事件

![image-20221005155702268](assets/image-20221005155702268.png)

MyItem.vue中通过$bus直接与“爷爷”App.vue通信

![image-20221005155751845](assets/image-20221005155751845.png)





# 087 消息订阅与发布_pubsub

##   1.作用

一种组件间通信的方式，适用于任意组件间通信。

##   2.使用步骤

###     (1)npm i pubsub-js

安装pubsub：npm i pubsub-js

###     (2)引入

import pubsub from 'pubsub-js'

###     (3)接收数据

A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。

​      methods(){

​        demo(data){......}

​      }

​      ......

​      mounted(){

​        this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息

​      }

###     (4)提供数据

pubsub.publish('xxx',数据)

###     (5)取消订阅

最好在beforeDestroy钩子中,用PubSub.unsubscribe(this.pid)去取消订阅。

## 3.代码

School.vue中

![image-20221005164946006](assets/image-20221005164946006.png)

Student.vue中

![image-20221005165020704](assets/image-20221005165020704.png)

# 088 TodoList案例_pubsub



# 089 TodoList案例_编辑

MyItem.vue中

![image-20221007145005378](assets/image-20221007145005378.png)

![image-20221007145017262](assets/image-20221007145017262.png)

App.vue中

![image-20221007145044613](assets/image-20221007145044613.png)

![image-20221007145056697](assets/image-20221007145056697.png)

效果：

![image-20221007145122882](assets/image-20221007145122882.png)

![image-20221007145136239](assets/image-20221007145136239.png)

但目前编辑案例还有很多小bug，比如点击编辑还得点一下input框，手动确定焦点。



# 090 $nextTick

点击编辑按钮，Input框出现并获取焦点。涉及到代码执行顺序问题。

##   1.语法

​    this.$nextTick(function(){

​    })

##   2.作用

​    在下一次DOM更新结束后执行其指定的回调。

##   3.什么时候用？

​    当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

##   4.代码

$nextTick指定的回调会在DOM更新完毕后再执行。

![image-20221007150629681](assets/image-20221007150629681.png)



# 091 动画效果

![image-20221007155259785](assets/image-20221007155259785.png)

![image-20221007155246874](assets/image-20221007155246874.png)

# 092 过度效果

![image-20221007161817386](assets/image-20221007161817386.png)

# 093 多个元素过度

多个元素过度用：transition-group

![image-20221007162313635](assets/image-20221007162313635.png)

# 094 集成第三方动画

安装：npm install animate.css

引入：import 'animate.css'

使用：

三个配置属性：

enter-active-class 和 leave-active-class样式去animate.css官网选吧

![image-20221007163933039](assets/image-20221007163933039.png)

# 095 总结过度与动画

原则：谁想有过度、谁想有动画，就给谁包一个transition

给TodoList案例加上一个简单的动画

MyItem.vue中

![image-20221007170250105](assets/image-20221007170250105.png)



# 096 配置代理_方式一

## 1.常用的发送ajax请求的方式

### 1.xhr     

“鼻祖”，但不常用       new XMLHttpRequest() 

​					api:    xhr.open()

​						  	 xhr.send()

一般是公司对xhr进行二次封装,

或者直接采用成型的第三方封装，比如jQurey，还有大名鼎鼎的axios

### 2.jQuery 

​			常用api：$get   $post

### 3.axios

（推荐使用该方法发送请求）

### 4.fetch 

（与xhr平行，fetch 也是promise风格）

​		两个致命问题：

​				fetch 会把你返回的值包两层promise

​				兼容性问题：IE浏览器上用不了





## 2.下载安装axios：npm i axios

引入axios:

​			import axios from 'axios'

## 3.跨域问题

### （1）运行代码

（服务器server1端口为5000）

![image-20221008094238425](assets/image-20221008094238425.png)

出现：跨域问题：一般报错中有CORS、‘Access-Control-Allow-Origin'

![image-20221008094437319](assets/image-20221008094437319.png)

原因：你跨域了，违背了同源策略。

同源策略规定了三个东西必须一致：

+ 协议名     比如http
+ 主机名     比如localhost
+ 端口名     比如8080

cors是后端解决跨域，

代理方式是前端解决跨域。



我们访问server1的可视化如下：

![image-20221008094859714](assets/image-20221008094859714.png)

同时观察cmd窗口：服务器显示有人请求服务器了，说明我们访问到服务器了，只是服务器没把数据给我们。

![image-20221008094608561](assets/image-20221008094608561.png)



### （2）解决跨域问题一般有三个方法

(1) cors （Cross-Origin Resource Sharing）

 后端人员的工作。返回响应时会带有一些特殊的响应头。浏览器看见这些响应头就放过你的跨域问题，把数据给你了。

(2) jsonp  它是利用了script里面的src，只能解决get请求，而且需要前端和后端人员配合着写些代码

(3) 代理



### （3）代理

粉色的：代理服务器（代理服务器的端口号与我们保持一致，”我们“：前端人员）

服务器和服务器之间打交道不用ajax，ajax是前端技术。两台服务器之间用的是简单的http请求。

![image-20221007173451472](assets/image-20221007173451472.png)

开启粉色的代理服务器：

#### 		1）利用nginx 

nginx ：反向代理服务器

（学习成本相对较高，且要对后端熟悉）

#### 		2） 借助vue-cli

 下面借助vue-cli开启代理服务器。

既然要借助vue-cli，那自然就是要到  vue.config.js 文件中去写点啥了。

常去vue官网找找说明sei：[Home | Vue CLI (vuejs.org)](https://cli.vuejs.org/zh/#起步)

![image-20221008100619109](assets/image-20221008100619109.png)

##### 代码：

##### vue.config.js中

![image-20221008101146578](assets/image-20221008101146578.png)

##### App.vue中

![image-20221008101225072](assets/image-20221008101225072.png)

备注：

代理服务器不是把所有的请求都转向5000。如果资源8080本身就有，就不会转向5000要。

这个方法的不完美之处：

​	不能配置多个代理；

​	不能灵活代理。

# 097 配置代理_方式二

代码：

vue.config.js中

![image-20221008104458263](assets/image-20221008104458263.png)

注意配置请求前缀时不要忘记pathRewrite把前缀去掉，否则请求地址会不符合。

![image-20221008103024646](assets/image-20221008103024646.png)

![image-20221008102810281](assets/image-20221008102810281.png)

页面运行如下

![image-20221008104403011](assets/image-20221008104403011.png)

## 两个方法总结

###   方法一

​    在vue.config.js中添加如下配置：

​    devServer:{

​      proxy:"http://localhost:5000"

​    }



​    说明：

​      1.优点：配置简单，请求资源时直接发给前端(8080)即可。

​      2.缺点：不能配置多个代理，不能灵活地控制请求是否走代理。

​      3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）



###   方法二

​    编写vue.config.js配置具体代理规则：

​    module.exports:{

​      proxy:{

​        'api1':{ //匹配所有以'/api'开头的请求路径

​          target:"http://localhost:5000", //代理目标1的基础路径

​          pathRewrite:{'^api1':''},

​          ws:true //用于支持websocket，默认为true

​          changeOrigin:true // 用于控制请求头中的host值    

​        },

​        'api2':{

​          target:"http://localhost:5001", //代理目标2的基础路径

​          pathRewrite:{'^api2':''},

​        }       

​      }

​    }

### 	备注

​    /*

​      changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000

​      changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080

​      changeOrigin默认值为true

​     */

# 098 github案例_静态组件

实现页面效果如下：

![image-20221008171706333](assets/image-20221008171706333.png)





# 099 github案例_列表展示



# 100 github案例_完善案例



# 101 vue-resource

发送ajax的方法：

​		1.xhr

​		2.jQuery

​		3.axaios

​		4.fetch

​		5.vue-resource

vue-resource是vue插件库，vue1.x使用广泛，官方已不维护。

### Step1

安装vue-resource  （库）：npm i vue-resource

![image-20221010091506045](assets/image-20221010091506045.png)

### Step2

引入：import vueResource from 'vue-resource'

![image-20221010092243293](assets/image-20221010092243293.png)

### Step3

使用：Vue.use(vueResource)

输出vc，可以发现vc身上出现了“$http”

![image-20221010092206432](assets/image-20221010092206432.png)

### Step4

把axios换成vue-resource方法

![image-20221010093836957](assets/image-20221010093836957.png)

# 102 默认插槽

## 1.插槽的作用

让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 父组件 ===> 子组件。

## 2.插槽的分类

### （1）默认插槽

### （2）具名插槽

### （3）作用域插槽



## 3.默认插槽的写法

父组件中：

```vue
 <Category>	
	<div>html结构1</div>                   
 </Category>
```

子组件中：

```vue
<template>
    <div>
        <!-- 定义插槽 -->
        <slot>插槽默认内容...</slot>
    </div>
</template>
```



## 4.代码

###  代码.0

App.vue中

![image-20221010102639504](assets/image-20221010102639504.png)

Category.vue中

![image-20221010102712101](assets/image-20221010102712101.png)





### 代码.1  使用默认插槽slot

App.vue中

![image-20221010104426276](assets/image-20221010104426276.png)

Category.vue中

![image-20221010104445317](assets/image-20221010104445317.png)

效果：

![image-20221010104352833](assets/image-20221010104352833.png)





# 103 具名插槽

## 1.写法

父组件中：

```vue
<Category>
    <template slot="center">  <!--第一种取名方式 -->
        <div>html结构1</div>
    </template>
    <template v-slot:footer>  <!--第二种取名方式 -->
        <div>html结构2</div>
    </template>                   
</Category>
```

子组件中：

```vue
<template>
    <div>
        <!-- 定义具名插槽 -->
        <slot name="center">插槽默认内容...</slot>
        <slot name="footer">插槽默认内容...</slot>
    </div>
</template>
```

## 2.代码

Category.vue中

给slot加上name属性取个名

![image-20221010150853641](assets/image-20221010150853641.png)

App.vue中

指定放入的slot

注意当用template包括时，可以写成v-slot:xxx

![image-20221010151035179](assets/image-20221010151035179.png)

# 104 作用域插槽

## 1.需求

数据一样，结构自定义

## 2.理解

数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。(games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定)

## 3.写法

父组件中：

```vue
<Category>
    <template slot-scope="scopeData">  
        <!-- 生成的是ul列表 -->
        <ul v-for="(g,index) in scopeData.games" :key="index">
            <li>{{g}}</li>
        </ul>
    </template>                   
</Category>

<Category>
    <template slot-scope="{games}">   <!-- 解构赋值 -->
        <!-- 生成的是h4标题  -->
        <h4 v-for="(item,index) in games" :key="index" >{{item}}</h4>
    </template>
</Category>
```

子组件中：

```vue
<template>
    <div>
        <!-- 定义作用域插槽 -->
        <slot :scopeData="games">插槽默认内容...</slot>
    </div>
</template>
<script>
    export default{
        name:'CategoryLabel',
        //数据在子组件自身
        data(){
            return{
                games:['羊了个羊','跳一跳','合成神龙']
            }
        }
    }
</script>
```

## 4.效果和代码

效果如下：

![image-20221010161554082](assets/image-20221010161554082.png)

Category.vue中

![image-20221010161641165](assets/image-20221010161641165.png)

App.vue中

![image-20221010161659181](assets/image-20221010161659181.png)

# 105 Vuex简介

## 1.理解Vuex

概念：专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

## 2.什么时候使用Vuex

1.多个组件依赖于同一状态

2.来自不同组件的行为需要变更同一状态



（多个组件需要共享数据时）



# 106 求和案例_纯Vue版

![image-20221010185904953](assets/image-20221010185904953.png)

实现页面如下：

![image-20221010185758636](assets/image-20221010185758636.png)

# 107 Vuex工作原理图

## 1.原理图

![image-20221010191600695](assets/image-20221010191600695.png)

Vuex的三个重要组成部分：

+ Actions

+ Mutations

+ State

  这三个都是对象。都经过store的领导。

## 2.store

![image-20221011084502595](assets/image-20221011084502595.png)

# 108 搭建Vuex环境

## 1.安装vuex：npm i vuex@3

(vue2中，要用vuex的3版本)

(vue3中，要用vuex的4版本)

## 2.引入vuex

import Vuex from 'vuex'

## 3.应用vuex

Vue.use(Vuex)     ===> 导致创建vm时候可以传入store这个配置项了。

## 4.搭建Vuex环境

### 4.0.目录文件创建

方法一：

![image-20221011085758378](assets/image-20221011085758378.png)

方法二：

![image-20221011085843715](assets/image-20221011085843715.png)



推荐使用方法二。



### （值得注意的error）

![image-20221011093107595](assets/image-20221011093107595.png)

错误信息提示：你要在创建Vuex.Store实例之前use(Vuex)。

倘若只是在main.js文件中，将Vue.use(Vuex)和import store from './stroe' 上下调换位置，是不够的。因为脚手架中当你import一个文件时，脚手架会首先将所有的import按import的顺序执行，再编译剩下的代码。正确的解决方法是不要在main.js中use(Vuex)，去index.js中use(Vuex)。所以在index.js就要import Vue以及Vue. use(Vuex)

### 4.1.src/store/index.js

```javascript
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {}
//准备mutations对象——修改state中的数据
const mutations = {}
//准备state对象——保存具体的数据
const state = {}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

### 4.2.在main.js中创建vm时传入store配置项

```javascript
......
//引入store
import store from './store'
......

//创建vm
new Vue({
    el:'app',
    render:h => h(App),
    store
})
```



## 5.基本使用

5.1 初始化数据、配置actions、配置mutations，操作文件store.js

5.2 组件中读取vuex中的数据：$store.state.sum

5.3 组件中修改vue中的数据：$store.dispatch('action中的方法名',数据) 或 $store.commit('mutations中的方法名',数据)

备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commit



# 109 求和案例_Vuex版

### mian.js中

```javascript
//引入Vue
import Vue from 'vue'
//引入App大哥组件
import App from './App.vue'
//引入store
import store from './store'    //index.js是Vue认识的名字，写'./store'默认Vue会先去找文件下的index文件。你也可以写全‘./store/index.js’

//关闭Vue生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',  //app容器
    render:h => h(App),  //渲染App标签,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
})

```



### src/store/index.js中

```javascript
//该文件用于创建Vuex中最为核心的store
//引入Vue核心
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//准备actions——用于响应组件中的动作
const actions = {
    // jia:function(context,value){  //context是指mini版的store，中译：上下文
    //     console.log('actions中的jia被调用了，马上发给mutations')
    //     context.commit('JIA',value)   
    // },
    // jian(context,value){
    //     console.log('actions中的jian被调用了，马上发给mutations')
    //     context.commit('JIAN',value) 
    // },
    jiaOdd(context,value){
        console.log('actions中的jiaOdd被调用了，马上发给mutations')
        if(context.state.sum % 2){
            context.commit('JIAODD',value)
        }
       
    },
    jiaWait(context,value){
        console.log('actions中的jiaWait被调用了，马上发给mutations')
        setTimeout(()=>{
            context.commit('JIAWAIT',value)
        },1000)
    }
}
//准备mutations——用于操作数据(state)
const mutations = {
    JIA(state,value){   //第一个参数state就是存储数据的state
        console.log('mutations中的JIA被调用了')
        state.sum += value
    },
    JIAN(state,value){
        console.log('mutations中的JIAN被调用了')
        state.sum -= value
    },
    JIAODD(state,value){
        console.log('mutations中的JIANODD被调用了')
        state.sum += value
    },
    JIAWAIT(state,value){
        console.log('mutations中的JIAWAIT被调用了')
        state.sum += value
    }
}
//准备state——用于存储数据
const state = {
    sum:0  //当前求和值
}

//创建store，暴露store
const store = new Vuex.Store({    //既然用了Vuex，那就得import它
    actions:actions,    //当属性名和变量名一样时，可以直接简写。
    mutations,
    state
})
export default store
```

### Count.vue中

```vue
<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数时加</button>
        <button @click="incrementWait">等一会儿加</button>
    </div>
</template>

<script>
    export default {
        name:'CountLabel',
        data() {
            return {
                n:1,  //用户选择的加项的值                
            }
        },
        methods: {
            increment(){
                console.log('使用vuex的store')
                this.$store.commit('JIA',this.n)   //因为加和减不需要在actions中进行逻辑判断，所以可以直接commit到mutations中         
            },
            decrement(){
                console.log('使用vuex的store')
                this.$store.commit('JIAN',this.n)     
            },
            incrementOdd(){   //把业务逻辑放到actions中去
                console.log('使用vuex的store')
                this.$store.dispatch('jiaOdd',this.n)
            },
            incrementWait(){
                console.log('使用vuex的store')
                this.$store.dispatch('jiaWait',this.n)       
            }
        },
    }
</script>
```



# 110 Vuex开发者工具的使用

![image-20221012084959896](assets/image-20221012084959896.png)

# 111 getters配置项

## 1.概念

当state中的数据需要经过加工后再使用时，可以使用getters加工。

## 2.追加getters配置项

在store.js中追加getters配置项

```javascript
......
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}
//创建并暴露store
export default new Vuex.Store({
    ......
    getters
})
```

## 3.组件中读取数据

组件中读取数据:

​		$store.getters.bigSum

# 112 mapState与mapGetters

页面效果如下：

![image-20221012093133555](assets/image-20221012093133555.png)

## 1.没有精简的代码

当state中有多个数据时，没有精简代码的时候：$store.state.xxx 写了很多遍，模板看上去不够简单。

![image-20221012093255548](assets/image-20221012093255548.png)

## 2.用计算属性精简

![image-20221012094204099](assets/image-20221012094204099.png)

![image-20221012094133409](assets/image-20221012094133409.png)

但还是看上去重复的很多。

要是有个函数再提炼一下就好了。Vue帮我们准备好了：mapState和mapGetters

## 3.mapState和mapGetters精简

两种写法：一个是对象写法，一个是数组写法。

![image-20221012095337071](assets/image-20221012095337071.png)

![image-20221012094937028](assets/image-20221012094937028.png)



### 1）mapState方法

用于帮助我们映射state中的数据为计算属性

```vue
<script>
......
computed:{
    //借助mapState生成计算属性：sum、school、subject（对象写法）
    ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState(['sum','school','subject']),
}
 
</script>
```

### 2）mapGetters方法

用于帮助我们映射getters中的数据为计算属性

```js
computed:{
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapState({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapState(['bigSum']),
}
```



# 113 mapActions与mapMutations

## 1.mapActions方法

用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数

```javascript
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])                
}
```



## 2.mapMutations方法

用于帮助我们生成与Mutations对话的方法，即：包含$store.commit(xxx)的函数

```js
methods:{
    //靠mapMutations生成：increment、decrement（对象形式）
    ...mapMutations({increment:'jia',decrement:'jian'})

    //靠mapMutations生成：increment、decrement（数组形式）
    ...mapMutations(['jia','jian'])                
}
```

备注：

​      mapActions与mapMutations使用时，若需要传递参数，需要：在模板中绑定事件时传递参数，否则默认参数是事件对象。



# 114 多组件共享数据

<img src="assets/image-20221012140832330.png" alt="image-20221012140832330" style="zoom:50%;" />



# 115 vuex模块化+namespace _1

模块化管理中设计map的：

​	count组件中练到了：

​			读取state,getters,联系mutations（commit）,actions（dispatch）

​	但还有东西没有练到：

​			不用map简写来从getters中读取数据，不用map简写来利用dispatch联系actions

![image-20221012181847116](assets/image-20221012181847116.png)

# 116 vuex模块化+namespace _2

## 1.目的

让代码更好维护，让多种数据分类更加明确。

## 2.修改store.js

```js
const countAbout = {
    namespaced:true, //开启命名空间
    state:{x:1},
    mutations:{},
    actions:{},
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}
const personAbout = {
    namespaced:true,  //开启命名空间
    state:{...},
    mutations:{},
    actions:{}
}
const store = Vuex.Store({
    modules:{
    	countAbout,
    	personAbout
}
})
```

## 3.开启命名空间后，组件中读取state数据

```js
//方式一：自己直接读取
this.$store.state.personAbout.list
//方式二：借助mapState读取
...mapState('personAbout',{'sum','school','subject'})
```

## 4.开启命名空间后，组件中读取getters数据

```js
//方式一：自己直接读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取
...mapGetters('countAbout',['bigSum'])
```

## 5.开启命名空间后，组件中调用dispatch

```js
//方式一：自己直接dispatch
this.$store.dispatch('personAbout/addPersonWang',person)
//方式二：借助mapActions:
...mapActions('countAbout',{increment:'jiaOdd',incrementWait:'jiaWait'})
```

## 6.开启命名空间后，组件中调用commit

```JS
//方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',person)
//方式二：借助mapMutations
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'})
```





# 117 路由的简介

## 1.生活中的路由与路由器

![image-20221012184457878](assets/image-20221012184457878.png)

## 2.编程中的路由

### 2.1 vue-router

vue的一个插件库，专门用来实现SPA应用（单页Web应用）

![image-20221012184917729](assets/image-20221012184917729.png)

### 2.2 SPA应用

1.单页Web应用（single page web application，SPA）

2.整个应用只有 一个完整的页面

3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新

4.数据需要通过ajax请求获取

![image-20221012185519420](assets/image-20221012185519420.png)

## 3.对路由的理解

### 3.1 什么是路由？

（1）一个路由就是一组映射关系（key-value）

（2）key为路径，value可能是function或component

### 3.2 路由的分类

#### (1)后端路由

1）理解：value是function，用于处理客户端提交的请求。

2）工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据。

![image-20221013092846893](assets/image-20221013092846893.png)

#### (2)前端路由

1）理解：value是component，用于展示页面内容。

2）工作过程：当浏览器的路径改变时，对应的组件就会显示。



# 118 路由基本使用

![image-20221013103427496](assets/image-20221013103427496.png)



##  1.安装vue-router

​      命令：npm i vue-router@3

## 2.应用插件

​      Vue.use(VueRouter)

## 3.编写router配置项

```js
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由组件
import About from '../components/About'
import Home from '../components/Home'

//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        },
    ]
})
//暴露router
export default router
```

## 4.实现切换

(active-class可配置高亮样式)    

```html
//导航标签
<router-link active-class="active" to="/about">About</router-link>
```

## 5.指定展示位置     

```html
<router-view></router-view>
```



# 119 路由的几个注意点

​    (1)路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹。

​    (2)通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。

​    (3)每个组件都有自己的$route属性，里面存储着自己的路由信息。

​    (4)整个应用只有一个router，可以通过组件的$router属性获取到。



# 120 嵌套路由(多级路由)



​    (1)配置路由规则，使用children配置项

```js
routes:[
    {
        path:'/about',
        component:About
    },
    {
        path:'/home',
        component:Home,
        children:[   //通过children配置子级路由
            {
                path:news,  //此处一定不要写成：/news
                component:News
            },
            {
                path:message, //此处一定不要写成：/message
                component:Message
            }
        ]
    }
]
```

​    (2)跳转(要写完整路径)

```html
<router-link to="/home/news">News</router-link>
```



# 121 路由的query参数



![image-20221013184755360](assets/image-20221013184755360.png)

## 1.传递参数

```html
<!-- 跳转并携带query参数，to的字符串写法 -->
<router-link :to="`/home/message/details?id=666&title=你好`" >跳转</router-link>

<!-- 跳转并携带query参数，to的对象写法 -->
<router-link :to="{
    path:'/home/message/details',
    query:{
        id:666,
        title:'你好'
    }
}" >跳转</router-link>
```

## 2.接收参数

```js
$route.query.id
$route.query.title
```



# 122 命名路由

## 1.作用

可以简化路由的跳转。(路径长时优势可以体现出来)

## 2.如何使用？

### (1)给路由命名

```js
{
path:'/demo',
component:Demo,
children:[
    {
        path:'test',
        component:Test,
        children:[
            {
                name:'hello',  //给路由命名
                path:'welcome',
                component:Hello
            }
        ]
    }
]
}
```

### (2)简化跳转

```html
<!-- 简化前，需要写完整的路径 -->
<router-link to="/demo/test/welcome" >跳转</router-link>

<!-- 简化后，直接通过名字跳转 -->
<router-link :to="{name:"hello"}" >跳转</router-link>

<!-- 简化写法配合传递参数 -->
<router-link 
    :to="{
        name:'hello',
        query:{
            id:666,
            title:'你好'
        }
    }"
 >跳转</router-link>
```



# 123 路由的params参数

## 1.配置路由

声明接收params参数 (占位)

```js
{
    path:'/home',
    component:Home,
    children:[
        {
            path:'news',
            component:News
        },
        {
            name:'xiangqing',
            path:'details/:id/:title', //使用占位符声明接收params参数
            component:Details
        }
    ]
}
```

## 2.传递参数

```html
<!-- 跳转并携带params参数，to的字符串写法 -->
<route-link :to="`/home/message/details/${m.id}/${m.title}`" >跳转</route-link>

<!-- 跳转并携带params参数，to的对象写法 -->
<route-link 
:to="{
    name:"xiangqing",
    //path:"/home/message/details"   //注意对象写法时params参数传递时只能用name，不能用path
    params:{
        id:m.id,
        title:m.title
    }
    }" 
>跳转</route-link>
```

特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

# 124 路由的props配置

## 1.作用

让路由组件更方便的收到参数

## 2.写法

```js
{
    name:'xiangqing',
    path:'detail/:id',
    component:Details,
    props:.....
}
}
```

### (1)第一种写法：props值为对象

```js
//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Details组件
props:{a:666,b:"你好啊"}
```

### (2)第二种写法：props值为布尔值

```js
//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Details组件
props:true
```

### (3)第三种写法：props值为函数

```js
//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Details组件
props($route){
    return{
        id:$route.query.id,
        title:$route.query.title
    }
}
```



# 125 router-link的replace属性

## 1.作用

 控制路由跳转时操作浏览器历史记录的模式

## 2.浏览器的历史记录的写入方式

### (1)push

push——追加历史记录

注意：路由跳转时默认为 push

<img src="assets/image-20221014173033789.png" alt="image-20221014173033789" style="zoom: 33%;" />

### (2)replace

replace——替换当前记录

<img src="assets/image-20221014173103729.png" alt="image-20221014173103729" style="zoom:33%;" />

## 3.如何开启replace模式

```html
<router-link replace :to="{...}" >News</router-link>
```



# 126 编程式路由导航

## 1.作用

不借助：

```html
<router-link></router-link>
```

实现路由跳转，让路由跳转更加灵活

## 2.具体编码

### (1) $router的两个API

#### ① this.$router.push()

```js
this.$router.push({
    name:'xiangqing',
    query:{
        id:m.id,
        title:m.title                          
    }
})
```

#### ② this.$router.replace

```js
this.$router.replace({
    name:'xiangqing',
    query:{
        id:m.id,
        title:m.title                          
    }
})
```

### (2)$router的其他API

```js
//$router还有几个可以实现路由跳转的API
this.$router.forward()  //前进
this.$router.back()   //后退
this.$router.go()   //可前进也可后退
```



# 127 缓存路由组件

## 1.作用

让不展示的路由组件保持挂载，不被销毁。

## 2.具体编码

```html
<keep-alive include="News">
    <router-view></router-view>
</keep-alive>
```



# 128 两个新的生命周期钩子

## 1.作用

路由组件所独有的两个钩子，用于捕获路由组件的激活状态。配合keep-alive标签使用：

```html
<keep-alive>
	<router-link></router-link>
</keep-alive>
```

## 2.具体名字

### (1) activated

activated 路由组件被激活时触发

### (2) deactivated 

deactivated 路由组件失活时触发



# 129 全局前置_路由守卫

## 1.作用

对路由进行权限控制

## 2.路由守卫分类

路由守卫：全局守卫、独享守卫、组件内守卫

## 3.全局守卫

### 全局前置守卫 beforeEach

```js
//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to,from,next)=>{
    //判断将要前去的路由是否需要进行权限控制
    if(to.mata.isAuth){
        if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则。真实开发时应该用token。
            next() //满足规则放行
        }else{
            alert('暂无权限查看')
        }
    }else{
        next()  //不用鉴权，直接放行
    }
})
```



# 130 全局后置_路由守卫

### 全局后置守卫 afterEach

```js
//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to,from)=>{
    if(to.meta.title){   //写了标题
        document.title = to.meta.title
    }else{
        document.title = "vue_test"  //没写就都统一命名为这个
    }
})
```



# 131 独享路由守卫

### beforeEnter

```js
{ 
    name:'zhuye',
    path:'/home',
    component:Home,
    meta:{title:'主页'},
    children:[
        {
            path:'news',
            component:News,
            meta:{isAuth:true,title:'新闻'},
            //独享路由守卫
            beforeEnter:(to,from,next) => {
                if(to.meta.isAuth){  //判断是否需要鉴权    
                    console.log('@我是News的独享路由守卫,你的localStorage中学校是atguigu我才放行')
                    if(localStorage.getItem('school') === 'atguigu'){
                        console.log('放行')
                        next()
                    }else{
                        alert('News的独享路由守卫：你的学校名不对，无权限查看！')
                        console.log('不放行')
                    }        
                }else{
                    next()
                }
            }
        }
```

beforeEnter可以配合afterEach使用。



# 132 组件内路由守卫

弹幕锐评：

![image-20221015113836549](assets/image-20221015113836549.png)



### beforeRouteEnter

```js
//通过路由规则，进入该组件时被调用
beforeRouteEnter(to,from,next){
    console.log('马上要进入About组件')
    if(to.meta.isAuth){  //判断是否需要鉴权    
        console.log('@我是About的组件内路由守卫,你的localStorage中学校是atguigu我才放行')
        if(localStorage.getItem('school') === 'atguigu'){
            console.log('放行')
            next()
        }else{
            alert('About的组件内路由守卫：你的学校名不对，无权限查看！')
            console.log('不放行')
        }        
    }else{
        next()
    }
```

### beforeRouteLeave

```js
//通过路由规则，离开该组件时被调用
beforeRouteLeave(to,from,next){
    console.log('马上要离开About组件')
    next()
}
```



# 133 history模式与hash模式

（hash模式  有#  不会作为路径的一部分发给服务器）

## 1.一个项目上线

### 1.1 前端项目打包

![image-20221015142956056](assets/image-20221015142956056.png)

给后端人员，他们往服务器上放的是.html .css .js

#### npm i build

npm run serve   默认开启8080端口

npm run build  把你写的东西生成最纯粹的html css js文件。

执行npm run build后生成dist文件

![image-20221015143409188](assets/image-20221015143409188.png)

这里打开index.html是空白，是因为：打包后的文件要到服务器上进行部署（把你的东西放到服务器上）。

### 1.2 服务器准备

#### node.js框架——express

用node.js的框架express写一个小服务器

新建一个demo文件夹；

用vsccode打开；

新建一个终端；

安装express之前把它变成一个合法的包（？）  ：npm init；

命名。例如：atguigu_test_server;

回车； 

npm i express；

在所建立的文件夹下新建一个主项目：server.js；



前端上线了之后，需要把静态资源放在static（有时候也在public中）

### 1.3 部署

把前端写的东西打包后，放到static文件夹中。（前端工程师可以下班了）

你原来写的那些东西就可以用了。不过因为不走网络请求，且用的还是history模式，所以当你刷新页面时，会出问题。如果用hash模式就没问。

### 1.4 网页刷新404问题

那当用history模式出现上述404问题怎么办呢？

后端配合。

推荐个中间件：npm 官网搜索 ： connect-history-api-fallback

专门在node.js中解决history模式 404



## 2.路由器的两种工作模式

 (1) 对于一个url来说，什么是hash值？

​          ‘#’  及其后面的内容就是hash值

 (2) hash值不会包含在HTTP请求中，即：hash值不会带给服务器。

 (3) hash模式：

​          ① 地址中永远带着#号，不美观

​          ② 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。

​          ③ 兼容性较好

 (4) history模式

​          ① 地址干净，美观

​          ② 兼容性和hash模式相比略差

​          ③ 应用部署上线时需要后端人员支持，解决刷新页面服务器端404的问题

# 134 element-ui基本使用

## 1.Vue UI组件库

### 1.1 移动端常用UI组件库

+ Vant
+ Cube UI
+ Mint UI

### 1.2 PC端常用UI组件库

+ Element UI
+ IView UI





# 135 element-ui按需引入





