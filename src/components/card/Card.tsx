import React from 'react';
import clsx from 'clsx';

import './Card.scss';
import { ItunesResult } from '../../core/models/itunesApi.models';
import Grid from '../grid/Grid';
import LikeWidget from '../like-widget/LikeWidget';

export interface CardProps {
  /**
   * The flag that will help to distinguish between track card and collection card. Required
   *  @type {'track' | 'collection'}
   */
  type: 'track' | 'collection';
  /**
   * The Data that will be rendered in the card. Required
   *  @type {ItunesResult}
   */
  itunesResult: ItunesResult;
  className?: string;
}

const Card = (props: CardProps) => {
  const { type, itunesResult, className } = props;

  return (
    <div className={clsx(['Card', type, className])}>
      <Grid container maxHeight direction="column">
        <Grid className="collection-img-container" item s={7} m={7} l={7}>
          <img
            src={itunesResult.artworkUrl300 ? itunesResult.artworkUrl300 : itunesResult.artworkUrl100}
            alt={itunesResult.collectionName}
          />
        </Grid>

        <Grid className="description-container" item s={5} m={5} l={5} xl={5} container>
          <Grid className="track-name" item s={12} m={12} l={12} xl={12}>
            <b>{type === 'track' ? itunesResult.trackName : itunesResult.collectionName}</b>
          </Grid>
          <Grid className="collection-name" item s={12} m={12} l={12} xl={12}>
            <p>{type === 'track' ? itunesResult.collectionName : itunesResult.artistName}</p>
          </Grid>
          <Grid className="like-widget" item s={12} m={12} l={12} xl={12} container justifyContent="flex-end">
            <LikeWidget type={type} cardId={type === 'track' ? itunesResult.trackId : itunesResult.collectionId} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
