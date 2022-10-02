import React from 'react';
import './SidePanelComponent.scss';
import {AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import ProductsComponent from "../ProductsComponent/ProductsComponent";

class SidePanelComponent extends React.Component {

  private drawerWidth: number = 160;
  private mobileOpen: boolean = false;

  handleDrawerToggle() {
    this.mobileOpen = !this.mobileOpen;
  }

  render() {
    return (
        <Box sx={{display: 'flex'}}>
          <CssBaseline/>
          <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                <Link to="/" className="link">
                  Shop admin panel
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
              variant="permanent"
              sx={{
                width: this.drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: this.drawerWidth, boxSizing: 'border-box'},
              }}
          >
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
              <List>
                {[{title: 'Products', route: 'products'}].map((route) => (
                    <ListItem key={route.title} disablePadding>
                      <ListItemButton>
                        <Link to={route.route} className="link">
                          <ListItemText primary={route.title}/>
                        </Link>
                      </ListItemButton>
                    </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <Toolbar/>
            <Routes>
              <Route path="/products" element={<ProductsComponent/>}>
              </Route>
              {/*  {routes.map((route) => (*/}
              {/*      <Route key={route.path} path={route.path} element={route.component}>*/}
              {/*      </Route>*/}
              {/*  ))}*/}
            </Routes>
          </Box>
        </Box>
    )
        ;
  }
}

export default SidePanelComponent;
