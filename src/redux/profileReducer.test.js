import React from 'react'
import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer"

let state = {
  posts: [ 
    {id: 1, message: 'Привет, как ты?', likesCount: 12},
    {id: 2, message: 'Это мой первый пост', likesCount: 18},
    {id: 3, message: 'Привет, как тебя зовут?', likesCount: 11},
    {id: 4, message: 'Какие сегодня новости?', likesCount: 6},
    {id: 5, message: 'Новый тренд', likesCount: 4},
  ]
};

test('length of posts should be incremented', () => {
  // 1. начальные данные
  let action = addPostActionCreator('it-kryto');

  // 2. action
  let newState = profileReducer(state, action)

  // 3. ожидания
  expect(newState.posts.length).toBe(6)
});

test('message of new posts should be correct', () => {
  // 1. начальные данные
  let action = addPostActionCreator('it-kryto');

  // 2. action
  let newState = profileReducer(state, action)

  // 3. ожидания
  expect(newState.posts[5].message).toBe('it-kryto')
});

test('after deleting length of message should be decrement', () => {
  // 1. начальные данные
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action)

  // 3. ожидания
  expect(newState.posts.length).toBe(4)
});

test('after deleting length shouldt be decrement if id is incorrect', () => {
  // 1. начальные данные
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action)

  // 3. ожидания
  expect(newState.posts.length).toBe(5)
});