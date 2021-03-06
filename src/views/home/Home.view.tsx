import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';

import Container from '../../components/container/Container';
import Grid from '../../components/grid/Grid';
import Card from '../../components/card/Card';

function Home() {
  const { searchResults, isLoadingSongs } = useSelector((state: RootState) => state.songs);

  return (
    <Container viewContainer>
      {!isLoadingSongs && searchResults && searchResults.length !== 0 && (
        <Grid container spacing={2} zeroMinWidth>
          {searchResults.map((searchResult) => {
            return (
              <Grid key={searchResult.trackId} item s={12} m={6} l={4} xl={4}>
                <Card key={searchResult.trackId} type="track" itunesResult={searchResult} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}

export default Home;
