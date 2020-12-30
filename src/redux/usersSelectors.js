import {createSelector} from 'reselect'

// Примитивные селекторы (создаются вручную)
const getUsersSelector = (state) => {
  return state.usersPage.users
}

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount= (state) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}

// селекторы с помощью библиотеки reselect
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter(u => true)
})

