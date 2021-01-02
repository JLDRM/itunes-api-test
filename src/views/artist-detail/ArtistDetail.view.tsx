import React from 'react';
import { useParams } from 'react-router-dom';

function ArtistDetail() {

  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { artistId } = useParams();

  return (
    <div>
      <h2>Artist detail works</h2>
      <p>{artistId}</p>
    </div>
  );
}

export default ArtistDetail;