import React from "react";
import branding from "@/public/images/other-brand-logo.png";
import LineBox from "./LineBox";
import Card from "./Card";
import card1 from "@/public/images/we-do-1.png";
import ellipse1 from "@/public/images/Ellipse1.png";
import ellipse2 from "@/public/images/Ellipse2.png";

const Branding = () => {
    return (
        <div className="bg-[#1b1b27] relative py-40">
            <img src={ellipse1.src} className="absolute top-0 left-0 w-[450px]"/>
            <div className="max-w-[1040px] mx-auto">
                <div className="custom-section">
                    <div className="custom-article">
                        <div className="custom-image-container">
                            <ul className="custom-ul">
                                <li className="custom-li"><img src={branding.src} className="custom-image"/></li>
                                <li className="custom-li"><img src={branding.src} className="custom-image"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-40 flex flex-col justify-center items-center">
                    <h2 className="text-2xl my-4 text-center font-bold">
                        Meeting the needs of players <br/> across the world
                    </h2>
                </div>
                <div className="mt-10 flex justify-center items-center gap-8">
                <Card image={card1} buttonText="Video Game Suppliers"
                          desc="List of carefully selected, verified, high quality suppilers, in differret regions worldwide."
                          color="#61FFDA"
                    /><Card image={card1} buttonText="Video Game Suppliers"
                            desc="List of carefully selected, verified, high quality suppilers, in differret regions worldwide."
                            color="#7B61FF"
                /><Card image={card1} buttonText="Video Game Suppliers"
                        desc="List of carefully selected, verified, high quality suppilers, in differret regions worldwide."
                        color="#FF626B"
                />
                </div>

            </div>
            <img src={ellipse2.src} className="absolute top-0 right-0 w-[350px]"/>
        </div>
    );
};

export default Branding;