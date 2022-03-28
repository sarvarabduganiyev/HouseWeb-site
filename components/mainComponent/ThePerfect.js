import styless from "/styles/ThePerfect.module.css";


function ThePerfect() {
    return (
        <div className={styless.ThePerfect__Component}>
            <div>
                <div className={styless.red__line}></div>
            </div>
            <div>
                <h2 className={styless.ThePerfect__sarlavha}>The perfect escape.</h2>
                <h5 className={styless.ThePerfect__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</h5>
            </div>
            <div className={styless.grid__iconsCard}>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className={`${styless.imgIconDiv} relative`}>
                            <img className="absolute w-full h-full object-cover" src="img/teshik.png" alt="teshik__png" />
                        </div>
                    </div>
                    <div>
                        <h2>Modern Kitchen Appliances</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className={`${styless.imgIconDiv2} relative`}>
                            <img className="absolute w-full h-full object-cover" src="img/trees.png" alt="trees__png" />
                        </div>
                    </div>
                    <div>
                        <h2>Outdoor Paths</h2>
                        <h3>Nulla rhoncus feugiat eros quis consectetur.</h3>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className={`${styless.imgIconDiv3} relative`}>
                            <img className="absolute w-full h-full object-cover" src="img/coffee.png" alt="coffee__png" />
                        </div>
                    </div>
                    <div>
                        <h2>Coffee Maker</h2>
                        <h3>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</h3>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className={`${styless.imgIconDiv4} relative`}>
                            <img className="absolute w-full h-full object-cover" src="img/forest.png" alt="forest__png" />
                        </div>
                    </div>
                    <div>
                        <h2>Natural Scenery</h2>
                        <h3>Cras commodo consequat orci, in convallis risus egestas non.</h3>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className={`${styless.imgIconDiv5} relative`}>
                            <img className="absolute w-full h-full object-cover" src="img/air.png" alt="air__png" />
                        </div>
                    </div>
                    <div>
                        <h2>Air Conditioner</h2>
                        <h3>Nullam scelerisque aliquam odio et faucibus.</h3>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className={`${styless.imgIconDiv6} relative`}>
                            <img className="absolute w-full h-full object-cover" src="img/briefcase.png" alt="briefcase__png" />
                        </div>
                    </div>
                    <div>
                        <h2>Storage Solutions</h2>
                        <h3>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</h3>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className={`${styless.imgIconDiv7} relative`}>
                            <img className="absolute w-full h-full object-cover" src="img/glass.png" alt="glass__png" />
                        </div>
                    </div>
                    <div>
                        <h2>Cutlery Selection</h2>
                        <h3>Duis tristique sed lorem a vestibulum.</h3>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className={`${styless.imgIconDiv8} relative`}>
                            <img className="absolute w-full h-full object-cover" src="img/Pizza.png" alt="Pizza__png" />
                        </div>
                    </div>
                    <div>
                        <h2>Take-away Options</h2>
                        <h3>Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThePerfect;


