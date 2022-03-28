import styless from "/styles/WereAlready.module.css";
function WereAlreadyComponent() {
    return (
        <div className={styless.glavniyDiv}>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <div className="red__line"></div>
                </div>
                <h1>We're already booked up for the spring — hurry up & secure your stay for the summer.</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</h5>
                <div className={styless.buttonDiv}>
                    <button className={styless.buttonContact}>Contact</button>
                    <button className={styless.buttonBookNow}>Book now</button>
                </div>
            </div>
        </div>
    );
}

export default WereAlreadyComponent;