export const MuiTextField = theme => ({
  styleOverrides: {
    root: {
      width: '100%',
    }
  },
  variants: [
    {
      props: {variant: "outlined"},
      style: {
        input: {
          height: 15,
          fontSize: 15,
          color: theme.palette.black,
          borderRadius: 6,
        },
        "& fieldset": {
          borderRadius: 6,
          border: `2px solid ${theme.palette.border}`,
        },
        '& .MuiOutlinedInput-root': {
          paddingLeft: '10px',
          paddingRight: '10px',
          '&:hover fieldset': {
            border: `2px solid ${theme.palette.border}`
          },
          '&.Mui-focused fieldset': {
            border: `2px solid ${theme.palette.primary.dark}`,
          },
        },

      },
    },
  ]
});