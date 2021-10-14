import { request, request1 } from "./request"

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request1({
    url: '/api/hy66/home/data',
    params: {
      type,
      page
    }
  })
}