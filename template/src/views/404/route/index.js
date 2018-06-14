const NotFound404 = resolve => require(['../not-found'], resolve)

export default [{
  path: '*',
  component: NotFound404,
  meta: {
    requiresRole: 'ALL'
  }
}]
