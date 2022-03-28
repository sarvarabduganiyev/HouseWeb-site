import Image from "next/image";
import styles from "../styles/layout.module.css"
import { useEffect, useState } from "react"
function Navbar() {

    const [toggle, setToggle] = useState(false);


    const toggleBTN = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        if (toggle) {
            document.querySelector("body").style.overflow = "hidden";
        }
        else {
            document.querySelector("body").style.overflow = "initial";
        }
    })


    return (
        <div>
            <div className={styles.navbar}>
                <div className="max__w text-white">
                    <div className={styles.navbar__flex}>
                        <div>
                            <Image
                                className={styles.navbar__flex__IMG}
                                src="/img/LOGO.png"
                                alt="Picture of the author"
                                width={125}
                                height={45} />
                        </div>
                        <div>
                            <ul style={toggle ? { left: "0px" } : { left: "-100%" }} className={`${styles.ul__links} flex items-center`}>
                                <li><a className={`${styles.navbar__flex__IMG__a1} hover:underline`} href="#">Start</a></li>
                                <li><a className={`${styles.navbar__flex__IMG__a2} hover:underline`} href="#">Contact</a></li>
                                <li><a className={`${styles.navbar__flex__IMG__a3} hover:underline`} href="#">Our History</a></li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <button className={styles.navbar__flex__btn}>Book Now</button>
                            </div>
                        </div>
                        <div className={styles.navbar__flex__burgerDiv}>
                            <button onClick={toggleBTN}>
                                {toggle ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                }

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;