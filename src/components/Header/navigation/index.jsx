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