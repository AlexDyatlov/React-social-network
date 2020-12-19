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
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object.')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { 
      status: status 
    })
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}