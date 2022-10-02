import React from 'react';
import './SidePanelComponent.scss';
import {AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";

class SidePanelComponent extends React.Component {

  private drawerWidth: number = 240;
  private mobileOpen: boolean = false;

  handleDrawerToggle() {
    this.mobileOpen = !this.mobileOpen;
  }

  render() {
    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Shop admin
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
              variant="permanent"
              sx={{
                width: this.drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: this.drawerWidth, boxSizing: 'border-box' },
              }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
              <List>
                {['Products'].map((text) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
          </Box>
        </Box>
  )
    ;
  }
}

export default SidePanelComponent;
