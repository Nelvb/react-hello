import React, { useEffect, useState } from "react";
import { Digit } from "./digit";

const Home = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(value => value + 1);
        }, 1000);

        return () => clearInterval(interval); // limpiar el interval
    }, []);

    return (
        <div className="container text-center mt-5">
            <div className="d-flex justify-content-center counter-holder">
                <Digit number={<span className="fa fa-clock"></span>} />
                <Digit number={Math.floor((timer / 100000) % 10)} />
                <Digit number={Math.floor((timer / 10000) % 10)} />
                <Digit number={Math.floor((timer / 1000) % 10)} />
                <Digit number={Math.floor((timer / 100) % 10)} />
                <Digit number={Math.floor((timer / 10) % 10)} />
                <Digit number={Math.floor(timer % 10)} />
            </div>
        </div>
    );
};

export default Home;
