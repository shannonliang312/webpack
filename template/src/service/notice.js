// 通用提示回调

/* 请求成功提示通用回调 */
export function successNotice ($v, message) {
  $v.$toast.success({
    title: '成功！',
    message,
    position: 'bottom right',
    closeDuration: '2000'
  })
}

/* 请求失败提示通用回调 */
export function errorNotice ($v, message) {
  $v.$toast.error({
    title: '失败！',
    message,
    position: 'bottom right',
    closeDuration: '2000'
  })
}
