import React from 'react';
import {Box} from '@mui/material';
import {IllustrationList} from '../../components';
import illustrationPicture from '../../assets/image/illustration-picture/picture-bellefit.svg';

const Illustration = () => {
  return (
    <Box width="50%">
      <IllustrationList/>
      <Box m="0 auto" maxWidth="500px" maxHeight="500px">
        <img src={illustrationPicture} width="100%" alt="Illustration"/>
      </Box>
    </Box>
  );
};

export default Illustration;