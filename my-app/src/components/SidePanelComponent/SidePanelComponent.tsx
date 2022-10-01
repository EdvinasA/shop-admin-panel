import React from 'react';
import './SidePanelComponent.scss';
import {AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";

class SidePanelComponent extends React.Component {

  private drawerWidth: number = 240;
  private mobileOpen: boolean = false;

  handleDrawerToggle() {
    this.mobileOpen = !this.mobileOpen;
  }

  render() {
    return (
        <Box sx={{display: 'flex'}}>
          <CssBaseline/>
          <AppBar
              position="fixed"
              sx={{
                width: {sm: `calc(100% - ${this.drawerWidth}px)`},
                ml: {sm: `${this.drawerWidth}px`},
              }}
          >
            <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={this.handleDrawerToggle}
                  sx={{mr: 2, display: {sm: 'none'}}}
              >
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Responsive drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
              component="nav"
              sx={{width: {sm: this.drawerWidth}, flexShrink: {sm: 0}}}
              aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                variant="temporary"
                open={this.mobileOpen}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: {xs: 'block', sm: 'none'},
                  '& .MuiDrawer-paper': {boxSizing: 'border-box', width: this.drawerWidth},
                }}
            >
              <div>
                <Toolbar/>
                <Divider/>
                <List>
                  {['Products', 'Users', 'Send email', 'Drafts'].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text}/>
                        </ListItemButton>
                      </ListItem>
                  ))}
                </List>
                <Divider/>
                <List>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text}/>
                        </ListItemButton>
                      </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                  display: {xs: 'none', sm: 'block'},
                  '& .MuiDrawer-paper': {boxSizing: 'border-box', width: this.drawerWidth},
                }}
                open
            >
              <div>
                <Toolbar/>
                <Divider/>
                <List>
                  {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text}/>
                        </ListItemButton>
                      </ListItem>
                  ))}
                </List>
                <Divider/>
                <List>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text}/>
                        </ListItemButton>
                      </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </Box>
          <Box
              component="main"
              sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${this.drawerWidth}px)`}}}
          >
            <Toolbar/>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
              enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
              imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
              Convallis convallis tellus id interdum velit laoreet id donec ultrices.
              Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
              nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
              feugiat vivamus at augue. At augue eget arcu dictum varius duis at
              consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
              sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
              neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
              tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
              sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
              tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
              et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
              eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
              posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
          </Box>
        </Box>
    );
  }
}

export default SidePanelComponent;
