/* globals home */
const appRoutes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/tasks',
    component: tasks
  },
  {
    path: '/tasks/singleTask/:methodName',
    component: singleTask
  }
]

