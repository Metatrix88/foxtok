import {playbackStatus} from './Post.constants';

export const postReducer = (state, action) => {
  switch (action.type) {
    case playbackStatus.Playing:
      return { status: playbackStatus.Playing };
    case playbackStatus.Paused:
      return { status: playbackStatus.Paused };
    case playbackStatus.Stopped:
      return { status: playbackStatus.Stopped };
    default:
      return {...state};
  }
};