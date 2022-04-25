import React from 'react';
import PropTypes from 'prop-types';
import {Box, styled, Container, Typography,} from '@mui/material';
import {RegistrationLowSectionText, RegistrationFormGroup, Logo} from '../../components';
import illustrationPicture from '../../assets/image/illustration-picture/picture-bellefit.svg';

const RegistrationContainer = styled('div')(
  ({matches, theme}) => `
    background: ${theme.palette.primary.light};
    padding: 25px 30px 0 30px;
    width: ${matches ? '100%' : '50%'};
    border-radius: ${matches ? 'none' : '0 52px 52px 0'};
`,
);

const Registration = ({matches}) => {

  return (
    <RegistrationContainer matches={matches}>
      <Container maxWidth="xl">
        <Logo logoName="Bellefit" spacing={2}/>
      </Container>
      {
        matches &&
        <Box m="0 auto">
          <img src={illustrationPicture} width="100%" alt="illustrationPicture"/>
        </Box>
      }
      <Container maxWidth="sm" sx={{mt: 9}}>
        {matches
          ?
          <Typography
            mb={1}
            mt={1}
            variant="h4"
            textAlign="center"
            children="Sign up"
          />
          :
          <Typography
            mb={2}
            variant="h2"
            children="Create Account"
          />
        }
        <RegistrationFormGroup matches={matches}/>
        {
          matches
            ?
            <RegistrationLowSectionText variant="body1" linkName=" Log In"/>
            :
            <RegistrationLowSectionText variant="h5" linkName=" In"/>
        }
      </Container>
    </RegistrationContainer>
  );
};

Registration.propTypes = {
  matches: PropTypes.bool
};

export default Registration;