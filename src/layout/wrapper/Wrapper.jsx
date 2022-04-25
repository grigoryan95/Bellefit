import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material';
import {Registration, Illustration} from '../../pages';

const WrapperContainer = styled('div')(
  ({theme}) => `
    display: flex;
    background: ${theme.palette.background.paper};
    height: 100vh;
`,
);

const Wrapper = ({matches}) => {
  return (
    <WrapperContainer>
      <Registration matches={matches}/>
      {
        matches || <Illustration matches={matches}/>
      }
    </WrapperContainer>
  );
};

Wrapper.propTypes = {
  matches: PropTypes.bool
};

export default Wrapper;