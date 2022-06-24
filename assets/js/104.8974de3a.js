(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{542:function(t,n,e){"use strict";e.r(n);var r=e(16),a=function(t){t.options.__data__block__={markmap_1a96284d:"# Spring\n* 概述 `解决企业级应用开发的复杂性，即简化Java开发`\n\t- 设计思想\n\t\t- 基于POJO的轻量级和最小侵入性编程\n\t\t- 通过依赖注入和面向接口实现松耦合\n\t\t- 基于切面和惯例进行声明式编程\n\t\t- 通过切面和模板减少样板式代码\n\t- 核心\n\t\t- IOC容器`管理POJO对象`\n\t\t- AOP模块`动态增强服务`\n\t- 优点\n\t\t- 方便解耦，简化开发\n\t\t- AOP编程的支持\n\t\t- 声明式事务的支持\n\t\t- Junit方便程序的测试\n\t\t- 集成各种优秀框架\n\t- 缺点\n\t\t- Spring明明一个很轻量级的框架，却给人感觉大而全\n\t\t- 依赖反射，影响性能\n- 模块\n\t- spring core\n\t\t- 控制反转（Inversion of Control，IOC）\n\t\t- 依赖注入（Dependency Injection，DI）\n\t- spring beans\n\t\t- BeanFactory 工厂模式\n\t- spring context `提供了一种框架式的对象访问方法`\n\t- spring jdbc `简化jdbc`\n\t- spring aop `面向切面`\n\t\t- 拦截器\n\t\t- 切点\n\t- spring Web  `Web 开发的集成特性`\n\t- spring test  `提供测试支持`\n- 设计模式\n\t- 工厂模式：BeanFactory就是简单工厂模式的体现，用来创建对象的实例\n\t- 单例模式：Bean默认为单例模式\n\t- 代理模式：Spring的AOP功能用到了JDK的动态代理和CGLIB字节码生成技术\n\t- 模板方法：用来解决代码重复的问题\n\t\t- RestTemplate\n\t- 观察者模式：`定义对象键一种一对多的依赖关系`\n- 详解\n\t- Spring控制反转(IOC)`程序代码直接操控的对象的调用权交给容器`\n\t\t- 功能\n\t\t\t- 依赖注入\n\t\t\t- 依赖检查\n\t\t\t- 自动装配\n\t\t\t- 支持集合\n\t\t\t- 指定初始化和销毁方法\n\t\t\t- 支持回调方法\n\t\t- 流程\n\t\t\t- 加载配置，解析Bean定义\n\t\t\t- 调用时实例化对象\n\t\t\t\t- 处理依赖关系\n\t\t- 接口容器\n\t\t\t- BeanFactory `Spring里面最底层的接口`\n\t\t\t\t- 延迟加载形式来注入Bean\n\t\t\t\t- ApplicationContext `应用上下文，更高级的容器`\n\t\t\t\t\t- 一次性创建了所有的Bean\n\t\t\t\t\t\t- 比较占用内存\n\t\t- Spring的依赖注入(DI)`管理组件之间的依赖关系`\n\t\t\t- 构造器注入\n\t\t\t- Setter方法注入\n\t- Spring Beans `被Spring IOC容器初始化的java对象`\n\t\t- 配置方式\n\t\t\t- XML配置文件\n\t\t\t- 基于注解的配置\n\t\t\t- 基于Java的配置\n\t\t- 作用域\n\t\t\t- singleton（默认） : `bean在每个Spring ioc 容器中只有一个实例`\n\t\t\t- prototype（频繁的创建销毁让费性能）：一个bean的定义可以有多个实例。\n\t\t\t- request：每次http请求都会创建一个bean\n\t\t\t- session：在一个HTTP Session中，一个bean定义对应一个实例。\n\t\t\t- global-session：在一个全局的HTTP Session中，一个bean定义对应一个实例。\n\t\t- 自动装配\n\t\t\t- 5种自动装配\n\t\t\t\t- no\n\t\t\t\t- byName\n\t\t\t\t- byType\n\t\t\t\t- constructor\n\t\t\t\t- autodetect\n\t\t- 注解\n\t\t\t- @Autowied `按照类型装配注入的`\n\t\t\t- @Resource `按照名称来装配注入`\n\t\t\t- @Inject\n\t- Spring注解\n\t\t- @Required`自动装配`\n\t\t- @Component,\n\t\t- @Controller\n\t\t- @Repository\n\t\t- @Service\n\t\t- @RequestMapping 映射请求的 URL\n\t- Spring面向切面编程（AOP）`抽取并封装为一个可重用的模块（切面）`\n\t\t- 实现原理\n\t\t\t- AspectJ静态代理：`编译时将切面织入java字节码`\n\t\t\t- Spring AOP动态代理`运行时临时生成对象`\n\t\t\t\t- JDK动态代理`实现InvocationHandler接口`\n\t\t\t\t- CGLIB动态代理`指定类的一个子类`\n\t\t- 名词\n\t\t\t- 切面（Aspect）：切面是通知和切点的结合\n\t\t\t- 通知（Advice）：在AOP术语中，切面的工作被称为通知。\n\t\t\t- 连接点（Join point）：应用执行过程中能够插入切面的一个点（方法）\n\t\t\t- 切入点（Pointcut）切点的定义会匹配通知所要织入的一个或多个连接点。\n\t\t- Spring通知有哪些类型\n\t\t\t- 前置通知（Before）：在目标方法被调用之前调用通知功能\n\t\t\t- 后置通知（After）：在目标方法完成之后调用通知，此时不会关心方法的输出是什么\n\t\t\t- 返回通知（After-returning ）：在目标方法成功执行之后调用通知\n\t\t\t- 异常通知（After-throwing）：在目标方法抛出异常后调用通知\n\t\t\t- 环绕通知（Around）：通知包裹了被通知的方法\n\t\t- 实现方式\n\t\t\t- XML Schema方式的切面实现\n\t\t\t- 基于注解的切面(基于@AspectJ的实现)"}},i=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"spring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[this._v("#")]),this._v(" Spring")]),this._v(" "),n("Markmap",{attrs:{id:"markmap_1a96284d",code:this.$dataBlock.markmap_1a96284d}})],1)}),[],!1,null,null,null);"function"==typeof a&&a(i);n.default=i.exports}}]);