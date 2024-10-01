import Logo from "../assets/images/header-logo.svg";
import Humberger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constans";
const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={Logo} alt="logo" width={130} height={130} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={Humberger}
                        alt="Humberger"
                        height={25}
                        width={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
