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

/* 401(session超时)处理 */
function handle401 (ref) {
  ref.actLogout()
  ref.$router.push({ path: '/login' })
}

/* 通用异常处理 */
export function errorHandler ($v, errData, message) {
  if (errData) {
    if (errData.status === 403) $v.$router.push({ path: '/403' })
    else if (errData.status === 401) {
      handle401($v)
    } else {
      let errMessage = errData.data.msg || message
      errorNotice($v, errMessage)
    }
  }
}
