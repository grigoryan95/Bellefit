export const MuiButton = theme => ({
  variants: [
    {
      props: {variant: "contained"},
      style: {
        borderRadius: 12,
        lineHeight: '19px',
        fontStyle: 'normal',
        padding: '12px 16px',
        textTransform: 'uppercase',
        fontSize: theme.typography.smallFontSize,
        backgroundColor: theme.palette.button.green,
        fontWeight: theme.typography.fontWeightMedium,
        boxShadow: theme.shadows[1],
        "&.MuiButtonBase-root:hover": {
          backgroundColor: theme.palette.button.green,
          boxShadow: theme.shadows[1]
        },
        '&.MuiButtonBase-root:active': {
          boxShadow: theme.shadows[1]
        }
      },
    },
    {
      props: {variant: "outlined"},
      style: {
        borderRadius: 12,
        lineHeight: '19px',
        fontStyle: 'normal',
        padding: '12px 16px',
        textTransform: 'capitalize',
        color: theme.palette.button.main,
        background: theme.palette.button.white,
        fontSize: theme.typography.smallFontSize,
        fontWeight: theme.typography.fontWeightRegular,
        border: `2px solid ${theme.palette.border}`,
        "&.MuiButtonBase-root:hover": {
          backgroundColor: theme.palette.background.paper,
          border: `2px solid ${theme.palette.border}`,
        }
      },
    },
  ]
});