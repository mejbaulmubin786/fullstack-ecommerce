```jsx
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



const CategoryPanel = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
 const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel import { Button } from '@mui/material'
import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
  return (
    <>
    <nav className='py-2'>
      <div className="container flex items-center justify-end gap-8">
        <div className="col_1 w-[20%]">
          <Button className='!text-black gap-2 w-full'>
            <RiMenu2Fill className='text-[18px]' />
            SHOP BY CATEGORIES
            <FaAngleDown className='text-[16px] ml-auto' />
          </Button>
        </div>
        <div className="col_2 w-[62%]">

          <ul className="flex items-center justify-between gap-3">
            <li className="list-none">
              
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Home</Button></Link>
            </li>
            <li className="list-none">
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Fashion</Button></Link>
            </li>
            <li className="list-none">
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Electronics</Button></Link>
            </li>
            <li className="list-none">
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Bags</Button></Link>
            </li>
            <li className="list-none">
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Footwere</Button></Link>
            </li>
            <li className="list-none">
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Groceries</Button></Link>
            </li>
            <li className="list-none">
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Beauty</Button></Link>
            </li>
            <li className="list-none">
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Wellness</Button></Link>
            </li>
            <li className="list-none">
              <Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Jewellery</Button></Link>
            </li>
          </ul>
        </div>
        <div className="col_3 w-[18%]">
          <p className='font-[500] flex items-center gap-2'><MdOutlineRocketLaunch className='text-[18px] '/>Free International Delivery</p>
        </div>
      </div>
    </nav>
    <CategoryPanel />
    </>
  )
}
```
আপনি আপনার **`Navigation`** কম্পোনেন্টের "SHOP BY CATEGORIES" বাটনে ক্লিক করলে যেন **`CategoryPanel`**-এর ড্রয়ারটি খোলে, সেই ব্যবস্থা করতে চাইছেন।

বর্তমানে, ড্রয়ারটি `CategoryPanel` কম্পোনেন্টের ভেতরেই 'Open drawer' বাটনের মাধ্যমে খোলা হচ্ছে। আপনাকে যা করতে হবে তা হলো:

1.  **`CategoryPanel`** কম্পোনেন্টে ড্রয়ারটি খোলার জন্য প্রয়োজনীয় **`toggleDrawer`** ফাংশনটি prop হিসেবে গ্রহণ করুন।
2.  **`Navigation`** কম্পোনেন্ট থেকে এই ফাংশনটি **`CategoryPanel`**-এ পাঠান এবং "SHOP BY CATEGORIES" বাটনের `onClick` হ্যান্ডলারে সেই ফাংশনটি কল করুন।

এখানে দুটি কম্পোনেন্টের জন্য সঠিক কোড দেওয়া হলো:

-----

## ১. CategoryPanel কম্পোনেন্ট (সংশোধিত)

এই কম্পোনেন্টটি এখন `open` স্টেট এবং `toggleDrawer` ফাংশন props হিসেবে গ্রহণ করবে। এখানে ড্রয়ার খোলার জন্য কোনো বাটন থাকবে না।

```jsx
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
```

-----

## ২. Navigation কম্পোনেন্ট (সংশোধিত)

এই কম্পোনেন্টে **`useState`** ব্যবহার করে ড্রয়ারের স্টেট তৈরি করা হয়েছে এবং **`toggleDrawer`** ফাংশনটিকে **`CategoryPanel`**-এ prop হিসেবে পাঠানো হয়েছে। "SHOP BY CATEGORIES" বাটনে ক্লিক করলে এটি ড্রয়ার খুলে দেবে।

```jsx
import React, { useState } from 'react' // useState ইম্পোর্ট করা হয়েছে
import { Button } from '@mui/material'
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
    // ড্রয়ারের স্টেট ম্যানেজ করার জন্য
    const [open, setOpen] = useState(false);

    // ড্রয়ার খোলার/বন্ধ করার ফাংশন
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <nav className='py-2'>
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[20%]">
                        {/* SHOP BY CATEGORIES বাটনে ক্লিক করলে ড্রয়ার চালু হবে */}
                        <Button 
                            className='!text-black gap-2 w-full'
                            onClick={toggleDrawer(true)} // <-- এখানে toggleDrawer(true) যুক্ত করা হয়েছে
                        >
                            <RiMenu2Fill className='text-[18px]' />
                            SHOP BY CATEGORIES
                            <FaAngleDown className='text-[16px] ml-auto' />
                        </Button>
                    </div>
                    <div className="col_2 w-[62%]">
                        <ul className="flex items-center justify-between gap-3">
                            {/* ... আপনার মেনু আইটেমগুলো এখানে ... */}
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Home</Button></Link></li>
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Fashion</Button></Link></li>
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Electronics</Button></Link></li>
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Bags</Button></Link></li>
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Footwere</Button></Link></li>
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Groceries</Button></Link></li>
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Beauty</Button></Link></li>
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Wellness</Button></Link></li>
                            <li className="list-none"><Link to="/" className='link transition text-[14px] font-[500]'><Button className='button'>Jewellery</Button></Link></li>
                        </ul>
                    </div>
                    <div className="col_3 w-[18%]">
                        <p className='font-[500] flex items-center gap-2'><MdOutlineRocketLaunch className='text-[18px] '/>Free International Delivery</p>
                    </div>
                </div>
            </nav>
            {/* CategoryPanel-এ স্টেট এবং ফাংশন prop হিসেবে পাঠানো হয়েছে */}
            <CategoryPanel open={open} toggleDrawer={toggleDrawer} /> 
        </>
    )
}

export default Navigation
```

### প্রধান পরিবর্তনগুলো:

1.  **`useState` স্থানান্তর:** `CategoryPanel` থেকে `open` স্টেট এবং `toggleDrawer` ফাংশন **`Navigation`** কম্পোনেন্টে নিয়ে আসা হয়েছে।
2.  **Prop হিসেবে পাস করা:** `Navigation`-এর মধ্যে `<CategoryPanel open={open} toggleDrawer={toggleDrawer} />` যুক্ত করা হয়েছে।
3.  **বাটনে ফাংশন যুক্ত করা:** "SHOP BY CATEGORIES" **`Button`**-এ `onClick={toggleDrawer(true)}` যুক্ত করা হয়েছে, যাতে ক্লিক করার সাথে সাথে ড্রয়ারটি খুলে যায়।