import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MuiFormGroup from '@mui/material/FormGroup';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import CheckboxRegistration from '../checkbox-registration/CheckboxRegistration';
import {EmailIcon, FullNameIcon, PasswordIcon} from '../../assets/svg-icons/Icons';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';

const RegistrationFormGroup = ({matches}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <MuiFormGroup>
      <TextField
        type="text"
        sx={{mb: 2}}
        variant="outlined"
        placeholder="Full Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FullNameIcon/>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="email"
        sx={{mb: 2}}
        variant="outlined"
        placeholder="Email address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon/>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type={showPassword ? 'text' : 'password'}
        sx={{mb: 2}}
        variant="outlined"
        placeholder="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon/>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableRipple
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <CheckboxRegistration matches={matches}/>
      <Button
        fullWidth
        disableRipple
        children="sign up"
        variant="contained"
        sx={{mt: 40 / 8, mb: 30 / 8}}
      />
      <Button
        fullWidth
        disableRipple
        variant="outlined"
        children="Sign Up with Google"
        sx={{mb: matches ? 1 : 8}}
        startIcon={
          <GoogleIcon sx={{color: '#c7827c'}}/>
        }
      />
      {matches &&
        <Button
          fullWidth
          sx={{mb: 4}}
          disableRipple
          variant="outlined"
          children="Sign Up with Facebook"
          startIcon={
            <FacebookIcon sx={{color: 'blue'}}/>
          }
        />
      }
    </MuiFormGroup>
  );
};

RegistrationFormGroup.propTypes = {
  matches: PropTypes.bool
};

export default RegistrationFormGroup;

