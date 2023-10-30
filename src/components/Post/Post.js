import React, {useCallback, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {usePostContext} from '../../contexts/Post.context';

import { Button } from '../Button';
import { Comment, Like, Pause, Play, Share } from '../../icons';
import { Player } from '../Player';

import { stop, play, pause } from './state/Post.actions';
import { postReducer } from './state/Post.reducers';
import { postInitialState, playbackStatus } from './state/Post.constants';

import './Post.css';

export const Post = ({
  id,
  avatar,
  altText,
  author,
  video,
}) => {
  const playerRef = useRef();
  const [state, dispatch] = useReducer(postReducer, postInitialState);
  const { activeVideoId, setActiveVideoId } = usePostContext();

  useEffect(() => {
    if (playerRef.current && state.status !== playbackStatus.Stopped && activeVideoId !== id) {
      dispatch(stop)
      playerRef.current.stop();
    }
  }, [activeVideoId]);

  const handlePlay = useCallback(() => {
    setActiveVideoId(id);
    dispatch(play)
    playerRef.current.play();
  }, [id]);

  const handlePause = () => {
    dispatch(pause)
    playerRef.current.pause();
  };

  return (
    <article className="post">
      <img className="post__avatar" src={avatar} alt={altText}/>
      <div className="post__content">
        <a className="post__author" href="#">{author}</a>
        <div className="player">
          <Player
            ref={playerRef}
            id={id}
            src={video}
            className="player__video"
          />
          <Button
            className={classNames('player__btn', {active: [playbackStatus.Stopped, playbackStatus.Paused].includes(state.status)})}
            variant="icon"
            onClick={handlePlay}
          >
            <Play></Play>
          </Button>
          <Button
            className={classNames('player__btn', {active: state.status === playbackStatus.Playing})}
            variant='icon'
            onClick={handlePause}
          >
            <Pause/>
          </Button>
        </div>
      </div>
      <div className="post__actions">
        <Button variant="icon">
          <Like></Like>
        </Button>
        <Button variant="icon">
          <Comment></Comment>
        </Button>
        <Button variant="icon">
          <Share></Share>
        </Button>
      </div>
    </article>
  );
};

Post.prototype = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  altText: PropTypes.string,
  author: PropTypes.string,
  video: PropTypes.string,
}