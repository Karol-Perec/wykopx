import { Card as MuiCard, darken, lighten, styled, Typography } from '@mui/material';

export const Card = styled(MuiCard, { shouldForwardProp: (prop) => prop !== 'listMode' })<{
  listMode?: boolean;
}>(({ theme, listMode }) => ({
  marginBottom: theme.spacing(2),
  WebkitTapHighlightColor: 'transparent',
  transition: 'background-color 0.3s ease-out 0s',
  ...(listMode && {
    ':hover': {
      cursor: 'pointer',
      backgroundColor:
        theme.palette.mode === 'dark'
          ? lighten(theme.palette.background.default, 0.05)
          : darken(theme.palette.background.default, 0.02),
    },
  }),
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
  },
}));

export const ContentContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(6),
  },
}));

export const TextContentContainer = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
  },
}));