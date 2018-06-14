const Login = resolve => require(['../'], resolve)

export default [{
  path: '/login',
  component: Login,
  meta: {
    requiresRole: 'ALL'
  }
}]
