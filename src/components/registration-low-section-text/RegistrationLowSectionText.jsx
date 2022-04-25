import React from 'react';
import PropTypes from 'prop-types';
import {Link, Typography} from '@mui/material';

const RegistrationLowSectionText = ({linkName, variant}) => {
  return (
    <Typography variant={variant}  textAlign="center">
      Already have an account?
      <Link href="#" underline="none" color="links" children={linkName}/>
    </Typography>
  );
};

RegistrationLowSectionText.propTypes = {
  linkName: PropTypes.node || PropTypes.string,
  variant: PropTypes.string
};

export default RegistrationLowSectionText;