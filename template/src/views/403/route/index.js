const PermissionDenied403 = resolve => require(['../permission-denied'], resolve)

export default [{
  path: '/403',
  component: PermissionDenied403,
  meta: {
    requiresRole: 'ALL'
  }
}]
