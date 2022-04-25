import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, FormControlLabel, Link, Stack, Typography} from '@mui/material';

const CheckboxRegistration = ({matches}) => {
  return (
  <Stack direction="row" spacing={1} alignItems="center" >
    <FormControlLabel
      sx={{mr: 0}}
      label={
        <Typography
          component="p"
          children="I agree with"
          variant={matches ? 'h6' : 'body1'}
        />
      }
      control={
        <Checkbox
          disableRipple
          size={matches ? 'small' : 'medium'}
        />
      }
    />
    <Link
      href="#"
      color="links"
      underline="none"
      children="Terms "
      variant={matches ? 'h6' : 'body1'}
    />
    <Typography
      component="p"
      children=" and "
      variant={matches ? 'h6' : 'body1'}
    />
    <Link
      href="#"
      color="links"
      underline="none"
      children=" Privacy "
      variant={matches ? 'h6' : 'body1'}
    />
  </Stack>
  );
};

CheckboxRegistration.propTypes = {
  matches: PropTypes.bool
};

export default CheckboxRegistration;