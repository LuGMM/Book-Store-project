import React from "react";
import Landing from "../components/Lnading";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

const Home = () => {
    return (
        <>
        <Landing/>
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
    )
}

export default Home