import { Menu, ShoppingCart } from "lucide-react"
import { useState } from "react";

const Navbar = () => {

    const [isMobileToggle, setIsMobileToggle] = useState(false);

    return (
        <header className="grid grid-cols-2 text-white  justify-between items-center">
            <div className="flex items-center gap-4">
                <img src="./logo.png" alt="" className="cursor-pointer" />
                <span className="text-2xl text cursor-pointer">
                    Pop Rock Crystal
                </span>
            </div>
    
            {/* Large Screen Size */}
            <div className="hidden lg:flex items-center justify-between">
                <ul className="flex gap-16 xl:gap-24">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Help</li>
                </ul>
                <img src="./ion_basket.png" alt="" className="size-8 cursor-pointer"/>
                {/* <ShoppingCart className="cursor-pointer"/> */}
            </div>

            <div className="lg:hidden flex justify-end gap-4">
                <ShoppingCart className="cursor-pointer"/>
                <Menu onClick={() => {setIsMobileToggle(!isMobileToggle)}} className="cursor-pointer"/>
            </div>

    
            {(isMobileToggle &&
                <div className="lg:hidden flex flex-col mt-4">
                    <ul className=" space-y-2">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About Us</li>
                        <li>Help</li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar