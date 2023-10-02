//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginForm {
  username: string
  password: string
}

//定义全部接口返回数据都拥有ts类型
interface dataType {
  token?: string
  message?: string
}

//定义登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
//定义获取用户信息返回数据类型
export interface userInfoReponseData {
  code: number
  data: user
}
