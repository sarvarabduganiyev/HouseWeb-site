import styless from "/styles/mainHouseBG.module.css";
import Image from 'next/image'
import Logo from "../../public/img/LOGO.png"
import kalamush from "../../public/img/kalamush.png";
// import hosue from "../../public/img/hosue.png";


function MainHousebg() {
    return (
        <>
            <div>
                <div className={styless.bg__houseDiv}>
                    <div className="flex flex-col items-center">
                        <div style={{
                            marginTop: "130px"
                        }} className={`${styless.imgCenter} `}>
                            <Image
                                src={Logo}
                                alt="LOGO___IMG"
                                width={260}
                                height={90}
                            />
                        </div>
                    </div>
                    <div className={styless.bg__house__WordsDiv}>
                        <h1>Experience the perfect combination of modern housing & natural scenery.</h1>
                        <h6>Located in Lofoten, norway</h6>
                    </div>
                    <div>
                        <div style={{ marginTop: "100px" }} className={"flex  flex-col items-center"}>
                            {/* <Image
                                src={kalamush}
                                alt="LOGO___IMG"
                                width={50}
                                height={52}
                            /> */}

                            {/* Next js da rasm  html tah bo=ilan yozilganda rasm public 
                            papkasini ichida bolishi kerak va mana vunday yonalishda berilishi 
                            zarur */}
                            <img src="/img/kalamush.png" alt="sdfsdf" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainHousebg;