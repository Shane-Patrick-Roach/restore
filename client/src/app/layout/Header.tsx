import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {
  return (
    <AppBar sx={{ mb: 4 }} position='static'>

      <Toolbar>
        <Switch checked={darkMode} onChange={handleThemeChange} />
        <Typography variant='h6'>RE-Store</Typography>
      </Toolbar>
    </AppBar>

  )
}
