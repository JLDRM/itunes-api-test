import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';

import './LikesCounter.scss';

export interface LikesCounterProps {
  pathname: string;
}

const LikesCounter = (props: LikesCounterProps) => {
  const { pathname } = props;
  const { favouritesSongsLength } = useSelector((state: RootState) => state.favourites);
  const { favouritesCollectionsLength } = useSelector((state: RootState) => state.favourites);

  return (
    <div className="LikesCounter">
      <svg viewBox="0 0 450 450" enableBackground="new 0 0 450 450">
        <path
          fill="#D7443E"
          d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58 c0,
            107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,
            47.717-106.58,106.58-106.58l0,0c36.032-0.281,69.718,17.842,89.339,
            48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
        />
        <text x="200" y="260" textAnchor="middle" fontSize="180" fill="white">
          {pathname === '/' ? favouritesSongsLength : favouritesCollectionsLength}
        </text>
      </svg>
    </div>
  );
};

export default LikesCounter;
