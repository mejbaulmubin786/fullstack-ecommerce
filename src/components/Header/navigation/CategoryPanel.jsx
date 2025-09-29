import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// রিয়্যাক্ট আইকন ইমপোর্ট করা
import { FaInbox, FaEnvelope } from 'react-icons/fa'; 

const CategoryPanel = ({ open, toggleDrawer }) => {
    
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {/* প্রথম লিস্ট */}
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* কমেন্ট আউট করা অংশটি ঠিক করে রিয়্যাক্ট আইকন ব্যবহার করা হয়েছে */}
                            <ListItemIcon>
                                {/* index এর ভিত্তিতে আইকন পরিবর্তন */}
                                {index % 2 === 0 ? <FaInbox /> : <FaEnvelope />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {/* দ্বিতীয় লিস্ট */}
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* কমেন্ট আউট করা অংশটি ঠিক করে রিয়্যাক্ট আইকন ব্যবহার করা হয়েছে */}
                            <ListItemIcon>
                                {/* এখানেও index এর ভিত্তিতে আইকন পরিবর্তন */}
                                {index % 2 === 0 ? <FaInbox /> : <FaEnvelope />} 
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    )
}

export default CategoryPanel