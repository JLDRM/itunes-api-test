import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../core/store/store';
import Container from '../../components/container/Container';
import Grid from '../../components/grid/Grid';
import Card from '../../components/card/Card';

function Collection() {
  const { isLoadingCollections, searchResults } = useSelector((state: RootState) => state.collections);

  return (
    <Container viewContainer>
      {!isLoadingCollections && searchResults && searchResults.length !== 0 && (
        <Grid container spacing={2} zeroMinWidth>
          {searchResults.map((searchResult) => {
            return (
              <Grid key={searchResult.collectionId} item s={12} m={6} l={4} xl={4}>
                <Card key={searchResult.collectionId} type="collection" itunesResult={searchResult} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}

export default Collection;
