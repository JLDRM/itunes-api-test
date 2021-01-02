import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ArtistDetail from '../../views/artist-detail/ArtistDetail.view';

function ArtistDetailRouting() {

  // The `path` lets us build <Route> paths that are
  // relative to the parent route
  let { path } = useRouteMatch();

  return (
    <Switch>
      {/* nested routing example */}
      <Route path={`${path}/:artistId`}>
        <ArtistDetail />
      </Route>
    </Switch>
  );
}

export default ArtistDetailRouting;