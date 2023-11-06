import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    background: {
      default: '#111111',
    },
  },
  typography: {
    allVariants: {
      WebkitFontSmoothing: 'auto',
    },
  },
})

export default function MyThemeProvider({ ...props }) {
  return <ThemeProvider theme={theme} {...props} />
}
