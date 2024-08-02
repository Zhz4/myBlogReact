/**
 * 获取token
 */
export function getToken() {
  return localStorage.getItem("token");
}

/**
 * 存储token
 */
export function setToken(token) {
  localStorage.setItem("token", token);
}

/**
 * 清空token
 */
export function removeToken() {
  localStorage.removeItem("token");
}

/**
 * 获取路由表
 */
export function getRoutes() {
  return localStorage.getItem("routeMenu");
}

/**
 * 存储路由表
 */
export function setRoutes(route) {
  localStorage.setItem("routeMenu", route);
}

/**
 * 清空路由表
 */
export function removeRoutes() {
  localStorage.removeItem("routeMenu");
}
