const View1 = resolve => require(['../'], resolve)
const Layout = resolve => require(['../../layout'], resolve)

export default [{
  path: '/view1',
  component: Layout,
  children: [{
    path: '',
    component: View1,
    meta: {
      requiresRole: 'ALL'
    }
  }]
}]
