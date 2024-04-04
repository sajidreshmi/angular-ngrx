import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from '../types/postState.interface';
import * as actions from './actions';

export const intialState: PostStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

export const reducers = createReducer(
  intialState,
  on(actions.getPosts, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(actions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(actions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
