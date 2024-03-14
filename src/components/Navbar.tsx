import React from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import {IoIosMenu} from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import CartCountBadge from "./CartCountBadge";

const Navbar =() => {

    return (
        <div className="sticky top-0 bg-white z-10">
            <div className="container hidden lg:block">
                <div className="flex justify-between items-center p-8">
                    <h1 className="text-4xl font-medium">Logo</h1>
                  
                    <div className="flex gap-7">
                        <div className="icon_wrapper">
                            <AiOutlineUser size="w-[25px] h-25px]"/>
                        </div>
                        <div className="relative cursor-pointer">
                            <AiOutlineShoppingCart/>
                            <CartCountBadge size="w-[35px] h-25px]"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;