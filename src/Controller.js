/* globals VueRouter,appRoutes,Vue, header, footer */
class Controller{
  static setup(){
    const router = new VueRouter({
      routes: appRoutes
    })

    var app = new Vue({
      el: '#app',
      data: {
      },
      components: {
        'app-header': header,
        'app-footer': footer
      },
      router: router
    })
  }
}