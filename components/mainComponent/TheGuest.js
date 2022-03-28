import styless from "/styles/TheGuest.module.css";
function TheGuest() {
    return (
        <>
            <div className={styless.bigBox}>
                <div className="flex flex-col justify-center items-center">
                    <div className={styless.tomato__line}></div>
                </div>
                <div className={styless.big__title__box}>
                    <h2>The Guest House is the perfect weekend getaway cabin.</h2>
                </div>
            </div>
            <div>
                <div className={`${styless.chair__boxDiv} relative`}>
                    <img className="absolute w-full h-full object-fill" src="img/chair.png" alt="stollar" />
                </div>
            </div>
        </>
    );
}

export default TheGuest;