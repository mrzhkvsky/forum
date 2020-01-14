/* eslint-disable no-empty */
import axios from 'axios';
import * as types from './types';

export const fetchUser = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/auth');
    dispatch({ type: types.FETCH_USER_DATA, payload: response.data });
  } catch (err) {}
};

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.delete('/api/logout');
    dispatch({ type: types.DELETE_USER_DATA });
  } catch (err) {}
};

export const fetchSections = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/sections');
    dispatch({ type: types.FETCH_SECTIONS_DATA, payload: response.data });
  } catch (err) {}
};

export const fetchCurrentSection = (sectionId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/sections/${sectionId}`);
    dispatch({ type: types.FETCH_CURRENT_SECTION_DATA, payload: response.data });
  } catch (err) {}
};

export const dropCurrentSection = () => (dispatch) => {
  dispatch({ type: types.DROP_CURRENT_SECTION_DATA });
};

export const fetchTopics = (sectionId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/sections/${sectionId}/topics`);
    dispatch({ type: types.FETCH_TOPICS_DATA, payload: response.data });
  } catch (err) {}
};

export const dropTopics = () => async (dispatch) => {
  dispatch({ type: types.DROP_TOPICS_DATA });
};

export const fetchCurrentTopic = (sectionId, topicId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/sections/${sectionId}/topics/${topicId}`);
    dispatch({ type: types.FETCH_CURRENT_TOPIC_DATA, payload: response.data });
  } catch (err) {}
};

export const dropCurrentTopic = () => (dispatch) => {
  dispatch({ type: types.DROP_CURRENT_TOPIC_DATA });
};

export const fetchPosts = (sectionId, topicId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/sections/${sectionId}/topics/${topicId}/posts`);
    dispatch({ type: types.FETCH_POSTS_DATA, payload: response.data });
  } catch (err) {}
};

export const dropPosts = () => async (dispatch) => {
  dispatch({ type: types.DROP_POSTS_DATA });
};
