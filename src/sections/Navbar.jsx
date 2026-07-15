import { useState } from 'react'
import { motion } from 'motion/react'


const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Experiência", href: "#experience" },
    { label: "Contato", href: "#contact" },
];
function Navigation({ mobile = false }) {
    return (
        <ul className="nav-ul">
            {navItems.map((item, index) => (
                <motion.li
                    key={item.href}
                    className="nav-li"
                    initial={{ opacity: 0, y: mobile ? 10 : -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: mobile ? index * 0.05 : 0.7 + index * 0.2,
                    }}
                >
                    <a href={item.href} className="nav-link">
                        {item.label}
                    </a>
                </motion.li>
            ))}
        </ul>
    );
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <motion.a
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                            delay: 0.3,
                            duration: 1.2,
                        }}
                        href="/"
                        className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                        Michael|Portfólio
                    </motion.a>
                    <motion.button
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            className='w-6 h-6' alt="toggle" />
                    </motion.button>
                    <nav
                        className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="block overflow-hidden text-center sm:hidden">
                    <nav className="pb-5">
                        <Navigation mobile />
                    </nav>
                </motion.div>
            )}
        </div>
    )
}

export default Navbar