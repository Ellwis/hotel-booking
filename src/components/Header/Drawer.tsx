import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerCustom() {
  const [DrawerOpen, setDrawerOpen] = useState(false);


  const list = (
    <Box
      sx={{ width: '200px', direction: 'rtl', textAlign: 'right' }}
    >
      <List>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="Discover" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="Contact" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="Activities" />
        </ListItem>
      </List>
      <List sx={{ mt: 40 }}>
        <Link href='/login'>
          <ListItem button sx={{ textAlign: 'center', bgcolor: '#2F80ED', color: 'white' }}>

            <ListItemText primary="Login" />

          </ListItem>
        </Link>
        <Link href='/register'>
          <ListItem  button>
            <ListItemText sx={{ textAlign: 'center' }} primary="Sign up" />
          </ListItem>
        </Link>

      </List>
    </Box>
  );

  return (
    <Box>
      <Button
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </Button>
      <Drawer open={DrawerOpen} onClose={() => setDrawerOpen(false)}>
        {list}
      </Drawer>
    </Box>
  );
}

export default DrawerCustom;