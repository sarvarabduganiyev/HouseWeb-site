import styless from "/styles/SleepingArrangements.module.css";

function SleepingArrangements() {
    return (
        <div className={styless.componentBox}>
            <div className="flex flex-col justify-center items-center">
                <div className={styless.sabzirang__line}></div>
            </div>
            <div>
                <h1 className={styless.sleeping__sarlavha}>Sleeping arrangements</h1>
                <p className={styless.sleeping__paragraf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam  scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.
                </p>
            </div>
            <div className={styless.grid__Box}>
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="img/divan.png" alt="divan" />
                    </div>
                    <div>
                        <p className={styless.p__sarlavha}>Beds</p>
                        <p>The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds.</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="img/eshik.png" alt="eshik" />
                    </div>
                    <div>
                        <p className={styless.p__sarlavha}>Bedrooms</p>
                        <p>Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room.</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="img/vanna.png" alt="vanna" />
                    </div>
                    <div>
                        <p className={styless.p__sarlavha}>Bathrooms</p>
                        <p>The cabin has three bathrooms, all equipped with showers and one with a bath tub,</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SleepingArrangements;

