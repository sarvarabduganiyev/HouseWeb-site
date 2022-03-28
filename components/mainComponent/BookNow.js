import styless from "/styles/BookNow.module.css";
function BookNow() {
    return (
        <div>
            <div className={styless.bg__color__red__100}>
                <div className="flex flex-col justify-center items-center">
                    <div className={styless.red__line}></div>
                </div>
                <div className={styless.grid__blog}>
                    <div>
                        <p>The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago, Lofoten, it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
                    </div>
                    <div className={styless.flex2qism}>
                        <p>Below you'll find information about the accommodation and what's included in the price. Don't hesitate to reach out to us vi the contact page if you have any questions around your stay.</p>
                        <div className={styless.button__box}>
                            <button>Book now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookNow;