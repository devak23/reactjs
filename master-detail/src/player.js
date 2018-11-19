import React from 'react';
import PlayerAPI from './playerAPI';

const Player = (props) => {
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  console.log('player = ', player);

  if (!player) {
    return <div>Sorry no player was found</div>
  }

  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
  );
}

export default Player;