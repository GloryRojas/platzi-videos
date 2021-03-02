import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVideoSource} from '../actions';
import '../assets/styles/components/_player.scss';

const Player = (props) => {
  const [loading, setLoading] = useState(true);
  const { playing, match: { params } } = props;
  const { id } = params;
  const hasPlaying = Object.keys(playing).length;

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ?
        <h1>cargando</h1> :
        hasPlaying ? (
          <div className='player'>
            <video controls autoPlay>
              <source src={playing.source} type='video/mp4' />
            </video>
            <div className='player-back'>
              <button type='button' onClick={() => props.history.goBack()}>
                regresar
              </button>
            </div>
          </div>
        ) : <Redirect to='/404/' />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
