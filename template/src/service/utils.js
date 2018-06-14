import { errorNotice } from './notice'

/* 401(session超时)处理 */
function handle401 (ref) {
  ref.actLogout()
  ref.$router.push({ path: '/login' })
}

/* 通用异常处理 */
export function errorHandler (error, ref, errMsg) {
  if (error.status === 401) {      // 登录超时、会话过期等
    handle401(ref)
  } else if (error.status === 403) {   // 未授权
    ref.$router.push({ path: '/403' })
  } else {
    errorNotice(ref, errMsg)
  }
}
