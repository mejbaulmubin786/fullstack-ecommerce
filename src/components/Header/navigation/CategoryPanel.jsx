import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// এই কম্পোনেন্টটি এখন 'open' স্টেট এবং 'toggleDrawer' ফাংশন prop হিসেবে গ্রহণ করবে
const CategoryPanel = ({ open, toggleDrawer }) => {

    // ড্রয়ারের ভেতরের লিস্টের কনটেন্ট
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Fashion', 'Electronics', 'Bags', 'Footwear'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* এখানে ListItemIcon যোগ করতে পারেন, যেমন: <ListItemIcon><StarIcon /></ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Groceries', 'Beauty', 'Wellness', 'Jewellery'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        // এখানে কোনো বাটন নেই, ড্রয়ারটি props অনুযায়ী চালু/বন্ধ হবে
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    )
}

export default CategoryPanel