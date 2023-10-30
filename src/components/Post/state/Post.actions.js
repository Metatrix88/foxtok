import {playbackStatus} from './Post.constants';

export const play = { type: playbackStatus.Playing };
export const pause = { type: playbackStatus.Paused };
export const stop = { type: playbackStatus.Stopped };

