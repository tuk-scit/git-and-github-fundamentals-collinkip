import Link  from "next/link";
import Image from "next/image";
const Navbar=()=>{
    return(
        <div className="nav">
            <Image src="/logo.png" width={100} height={60}/>
            <div className="links">
                <Link  href="/home">Home</Link>
                <Link  href="/about">About us</Link>
                <Link  href="/contact">Contact</Link>
            </div>
            <Link  href="">Logout</Link>
        </div>
    )
};
export default Navbar;