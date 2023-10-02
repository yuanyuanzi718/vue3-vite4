//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type { loginForm, loginResponseData, userInfoReponseData } from './type'
//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

//登录接口
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USERINFO_URL)
