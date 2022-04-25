import React from 'react';
import {List, ListItemButton, Typography} from '@mui/material';

const IllustrationList = () => {
  return (
    <List
      disablePadding
      sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between', m: '45px 25% 103px 50%'}}
    >
      <ListItemButton disableRipple disableGutters  component="a" href="#">
        <Typography variant="h3" >About</Typography>
      </ListItemButton>
      <ListItemButton disableGutters  disableRipple component="a" href="#">
        <Typography variant="h3" >Contact</Typography>
      </ListItemButton>
    </List>
  );
};

export default IllustrationList;