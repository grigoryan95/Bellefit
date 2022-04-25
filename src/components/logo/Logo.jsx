import React from 'react';
import PropTypes from 'prop-types';
import {Link, Stack, Typography} from '@mui/material';
import logo from '../../assets/image/logo-bellefit/logo.png';

const Logo = ({
  spacing = 0,
  direction= 'row',
  alignItems= 'center',
  logoName = '',
  variantTypography = 'h1'
}) => {
  return (
    <Stack direction={direction} spacing={spacing} alignItems={alignItems} >
      <Link href="#">
        <img  src={logo} alt="logo"/>
      </Link>
      {logoName && <Typography variant={variantTypography} children={logoName}/>}
    </Stack>
  );
};

Logo.propTypes = {
  spacing: PropTypes.number,
  direction: PropTypes.string,
  alignItems: PropTypes.string,
  logoName: PropTypes.string,
  variantTypography: PropTypes.string
};

export default Logo;