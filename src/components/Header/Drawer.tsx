import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

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
        <ListItem href='/register' button>
          <ListItemText sx={{ textAlign: 'center' }} primary="Sign up" />
        </ListItem>

      </List>
    </Box>
  );

  return (
    <Box>
      <Button
        onClick={() => setDrawerOpen(true)}
      >
        <Image src={'/menu.png'} alt='' width={20} height={20} />
      </Button>
      <Drawer open={DrawerOpen} onClose={() => setDrawerOpen(false)}>
        {list}
      </Drawer>
    </Box>
  );
}

export default DrawerCustom;