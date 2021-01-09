import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { RootState } from '../../core/store/store';
import { requested as songsRequested } from '../../core/store/itunesApi/songsSlice';
import { requested as collectionsRequested } from '../../core/store/itunesApi/collectionsSlice';
import './IonSearchBar.scss';

export interface IonSearchBarProps {
  /**
   * Discrimitanor between Home and Collections views
   * Required
   */
  pathname: string;
  className?: string;
}

const IonSearchBar = (props: IonSearchBarProps) => {
  const dispatch = useDispatch();
  const { pathname, className } = props;

  const inputElement = useRef<HTMLInputElement>(null);

  const { songSearchTerm } = useSelector((state: RootState) => state.songs);
  const { collectionSearchTerm } = useSelector((state: RootState) => state.collections);

  useEffect(() => {
    if (pathname === '/' && inputElement.current !== null) {
      inputElement.current.value = songSearchTerm;
    } else if (pathname === '/collections' && inputElement.current !== null) {
      inputElement.current.value = collectionSearchTerm;
    }
  }, [pathname, songSearchTerm, collectionSearchTerm]);

  function handleInputChange(e: any) {
    const term = e.target.value;
    if (pathname === '/' && inputElement.current !== null) {
      dispatch(songsRequested(term));
    } else if (pathname === '/collections' && inputElement.current !== null) {
      dispatch(collectionsRequested(term));
    } else {
      return;
    }
  }

  return (
    <>
      <label className={clsx(['IonSearchBar', className])}>
        <input
          type="text"
          ref={inputElement}
          onChange={handleInputChange}
          placeholder={`search for ${pathname === '/' ? 'songs' : 'collections'}`}
        />
      </label>
    </>
  );
};

export default IonSearchBar;
