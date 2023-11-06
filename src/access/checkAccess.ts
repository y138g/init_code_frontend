import accessEnum from "@/access/accessEnum";

/**
 * 检查权限（判断当前登录用户是否具有某个权限）
 * @param loginUser 当前登录用户
 * @param needAccess 需要的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess = accessEnum.NOT_LOGIN) => {
  //获取当前用户具有的权限(没有 loginUser 则表示未登录)
  const loginUserAccess = loginUser?.userRole ?? accessEnum.NOT_LOGIN;
  if (needAccess === accessEnum.NOT_LOGIN) {
    return true;
  }
  //如果用户登录才能访问
  if (needAccess === accessEnum.USER) {
    //如果用户没登陆，则不能访问
    if (loginUserAccess === accessEnum.NOT_LOGIN) {
      return false;
    }
  }
  //如果管理员登录才能访问
  if (needAccess === accessEnum.ADMIN) {
    //如果用户没登陆/登录用户非管理员，则不能访问
    if (loginUserAccess !== accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
