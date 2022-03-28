import styless from "/styles/wifiPage.module.css";
function WifiPage() {
    return (
        <div>
            <div>
                <div className={`${styless.wifiPage__imgBox} relative`}>
                    <img className="absolute w-full h-full" src="img/wifi.png" alt="wifi" />
                </div>
            </div>
            <div className={styless.allGrid}>
                <div>
                    <div className="red__line"></div>
                    <div className={styless.left__Box}>
                        <h2>Come together.</h2>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</h6>
                    </div>
                </div>
                <div className={styless.allGrid2}>
                    <div className={styless.allGrid3}>
                        <div className="flex items-center space-x-5">
                            <img src="img/wi__fi.png" alt="wifi__icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={` ${styless.allGrid__non} flex items-center space-x-5`}>
                            <img src="img/non.png" alt="non__icon" />
                            <p>Nullam scelerisque aliquam odio et faucibus.</p>
                        </div>
                        <div className={` ${styless.allGrid4} flex items-center space-x-5`}>
                            <img src="img/hook.png" alt="hook" />
                            <p>Nulla rhoncus feugiat eros quis consectetur.</p>
                        </div>
                        <div className={` ${styless.allGrid4} flex items-center space-x-5`}>
                            <img src="img/wilka.png" alt="wilka" />
                            <p>Morbi neque ex, condimentum.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WifiPage;