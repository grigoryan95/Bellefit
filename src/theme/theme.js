import {createTheme} from '@mui/material';
import {MuiButton, Palette, MuiTypography, MuiTextField, MuiCheckbox, MuiCssBaseline, Shadows} from './index';

let theme = createTheme({
  palette: Palette,
  typography: MuiTypography,
  MuiCssBaseline,
  shadows: Shadows
});

theme = createTheme(theme, {
  components: {
    MuiButton: MuiButton(theme),
    MuiTextField: MuiTextField(theme),
    MuiCheckbox: MuiCheckbox(theme),
  }
})
export {theme}