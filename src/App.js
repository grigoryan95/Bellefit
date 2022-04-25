import React from 'react';
import {useMediaQuery} from '@mui/material';
import Wrapper from './layout/wrapper/Wrapper';

function App() {
  let matches = useMediaQuery('(max-width:600px)');
  return (
    <Wrapper matches={matches}/>
  );
}

export default App;
