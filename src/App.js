import image_equilibrium from "./assets/image-equilibrium.jpg";
import image_avatar from "./assets/image-avatar.png";
import icon_view from "./assets/icon-view.svg";
import icon_clock from "./assets/icon-clock.svg";
import icon_ethereum from "./assets/icon-ethereum.svg";

import "./App.css";

function App() {
    const selectToken = () => {
        console.log("token selected");
    };

    return (
        <div className="main-content" style={{ height: "100vh" }} id="app">
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center my-5">
                        {/* card */}
                        <div
                            className="card align-items-center shadow-lg super-rounded px-4"
                            style={{ width: "25rem" }}
                            onClick={selectToken}>
                            <img src={image_equilibrium} alt="" className="card-img-top mt-4" />

                            <div className="card-body">
                                {/* title */}
                                <h2 className="card-title mt-3 text-white change-on-select">
                                    Equilibrium #3429
                                </h2>

                                {/* <!-- text --> */}
                                <p className="card-text text-muted text-light-blue my-4">
                                    Our Equilibrium collection promotes balance and coin.
                                </p>

                                {/* <!-- nft content --> */}

                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <!-- ETH  --> */}
                                    <div className="d-flex gap-2 align-items-center">
                                        <img
                                            src={icon_ethereum}
                                            className="mr-auto"
                                            height="18px"
                                            width="auto"
                                            alt="icon-eth"
                                        />

                                        <p className="text-cyan fw-bold mb-0">0.041 ETH</p>
                                    </div>

                                    {/* <!-- Time Left  --> */}
                                    <div className="d-flex gap-2 align-items-center">
                                        <img
                                            src={icon_clock}
                                            className="mr-auto"
                                            height="18px"
                                            width="auto"
                                            alt="icon-clock"
                                        />

                                        <p className="text-light-blue mb-0">3 days left</p>
                                    </div>
                                </div>

                                {/* <!-- linebreak  --> */}
                                <hr size="3" />

                                {/* <!-- footer; creator info --> */}

                                <div className="d-flex align-items-center gap-3 my-3">
                                    <img
                                        src={image_avatar}
                                        height="30px"
                                        width="30px"
                                        className="avatar-border"
                                        alt="avatar"
                                    />

                                    <p className="text-light-blue mb-0">
                                        Creation of
                                        <span className="text-white change-on-select">
                                            Jules Wyvern
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
