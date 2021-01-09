import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { RootState } from '../../core/store/store';
import { favSong, unfavSong, favCollection, unfavCollection } from '../../core/store/itunesApi/favouritesSlice';
import './LikeWidget.scss';

export interface LikeWidgetProps {
  /**
   * The flag that will help to distinguish between track card and collection card. Required
   *  @type {'track' | 'collection'}
   */
  type: 'track' | 'collection';
  /**
   * Pass the dicriminator Id between trackID or collectionID depending the type. Required
   *  @type {ItunesResult.trackId | 'ItunesResult.collectionId'}
   */
  cardId: number;
}

const LikeWidget = (props: LikeWidgetProps) => {
  const dispatch = useDispatch();
  const { type, cardId } = props;
  const { favouritesSongsIds } = useSelector((state: RootState) => state.favourites);
  const { favouritesCollectionsIds } = useSelector((state: RootState) => state.favourites);

  const [isSongFav, setSongFav] = useState(false);
  const [isCollectionFav, setCollectionFav] = useState(false);

  useEffect(() => {
    if (type === 'track') {
      setSongFav(favouritesSongsIds.includes(cardId));
    } else {
      setCollectionFav(favouritesCollectionsIds.includes(cardId));
    }
  }, [type, cardId, favouritesCollectionsIds, favouritesSongsIds]);

  function handleLikeWidgetClick() {
    if (type === 'track' && isSongFav) {
      dispatch(unfavSong(cardId));
    } else if (type === 'track' && !isSongFav) {
      dispatch(favSong(cardId));
    } else if (type === 'collection' && isCollectionFav) {
      dispatch(unfavCollection(cardId));
    } else if (type === 'collection' && !isCollectionFav) {
      dispatch(favCollection(cardId));
    } else {
      return;
    }
  }

  return (
    <div className="LikeWidget">
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 511.999 511.999"
        enableBackground="new 0 0 511.999 511.999;"
        onClick={() => handleLikeWidgetClick()}
      >
        <path
          fill={'grey'}
          className={clsx([{ isSongFav1: isSongFav || isCollectionFav }])}
          d="M412.41,0H99.589C47.531,0,5.332,42.201,5.332,94.257v205.172c0,52.057,42.201,94.257,94.257,94.257
	h44.894c2.136,0,3.867,1.731,3.867,3.867v101.207c0,11.966,14.637,17.768,22.834,9.05l106.188-112.906
	c0.731-0.778,1.751-1.218,2.818-1.218h132.22c52.057,0,94.257-42.201,94.257-94.257V94.257C506.667,42.201,464.466,0,412.41,0z"
        />
        <path
          fill={'black'}
          className={clsx([{ isSongFav2: isSongFav || isCollectionFav }])}
          d="M188.005,358.509c0-2.249-1.676-4.072-3.744-4.072h-43.462c-50.396,0-91.25-44.439-91.25-99.257
	V39.123c0-9.276,1.174-18.253,3.361-26.77C24.489,28.587,5.332,59.184,5.332,94.257v205.172c0,52.056,42.201,94.257,94.257,94.257
	h44.894c2.136,0,3.867,1.732,3.867,3.867v101.207c0,11.966,14.637,17.768,22.834,9.05l16.82-17.885V358.509H188.005z"
        />
        <path
          fill={'whitesmoke'}
          className={clsx([{ isSongFav3: isSongFav || isCollectionFav }])}
          d="M361.908,122.325L361.908,122.325c-23.931-23.931-62.731-23.931-86.663,0l-13.518,13.518
	c-3.223,3.223-8.45,3.223-11.673,0l-13.302-13.302c-23.931-23.931-62.731-23.931-86.663,0l0,0
	c-23.931,23.931-23.931,62.731,0,86.663l99.973,99.973c3.223,3.223,8.45,3.223,11.673,0l100.172-100.189
	C385.839,185.056,385.839,146.257,361.908,122.325z"
        />
        <path
          fill={'white'}
          className={clsx([{ isSongFav4: isSongFav || isCollectionFav }])}
          d="M361.908,122.325L361.908,122.325c-23.931-23.931-62.731-23.931-86.663,0l-13.518,13.518
	c-3.223,3.223-8.45,3.223-11.673,0l-13.302-13.302c-23.931-23.931-62.731-23.931-86.663,0l0,0
	c-23.931,23.931-23.931,62.731,0,86.663l99.973,99.973c3.223,3.223,8.45,3.223,11.673,0l100.172-100.189
	C385.839,185.056,385.839,146.257,361.908,122.325z"
        />
        <path
          fill={'gainsboro'}
          className={clsx([{ isSongFav5: isSongFav || isCollectionFav }])}
          d="M182.145,209.204c-23.931-23.931-23.931-62.731,0-86.663l0,0c7.85-7.85,17.304-13.108,27.303-15.807
	c-20.486-5.532-43.278-0.274-59.358,15.807l0,0c-23.931,23.931-23.931,62.731,0,86.663l99.973,99.973
	c3.223,3.223,8.45,3.223,11.673,0l10.19-10.192L182.145,209.204z"
        />
      </svg>
    </div>
  );
};

export default LikeWidget;
