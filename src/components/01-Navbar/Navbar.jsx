import { useState } from "react"
import '../../scroll-bar.css'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'
import logo from "../../assets/logo.png"
import { navLinks } from "../../constants"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-2 justify-between items-center navbar"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundColor: '#343436',
                zIndex: 9999,

            }}
        >
            <img
                src={logo} alt="espuma play logo"
                className="w-[147.5px] h-[50px] ml-14 md:ml-40 lg:ml-60"
            />
            <ul className="list-none mr-14 md:mr-40 lg:mr-60 sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                    >
                        <a
                            href={`#${nav.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#${nav.id}`).scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div
                className="z-50 sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain mr-4"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-grayEspuma absolute top-16 right-0  min-w-[140px] rounded-sm sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[20px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                            >
                                <a
                                    href={`#${nav.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(`#${nav.id}`).scrollIntoView({
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar