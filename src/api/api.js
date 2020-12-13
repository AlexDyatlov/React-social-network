// DAL - data access layer
import * as axios from 'axios'

// экземпляр axiosa
const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3f162224-b865-4c7c-aa67-7ae5db8a24d3'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(responce => responce.data)
  }
}