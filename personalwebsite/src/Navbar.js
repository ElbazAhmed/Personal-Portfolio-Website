const Navbar = () => {
    return ( 
        <nav className="flex justify-between">
            <div className="navTitle text-2xl">Ahmed Elbaz</div>
            <div className="links">
                <ul className="nav-links inline-block px-1">
                    <a href="#" className="px-1">Home</a>
                    <a href="#">Content</a>
                    <a href="#">Project</a>
                    <a href="#">Education</a>
                    <a href="#">Get in touch</a>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;