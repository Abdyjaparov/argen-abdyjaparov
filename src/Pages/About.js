import React from "react";
import '../Style/About.css';




const About = () => {
    return (
        <main className="retelling">
            <dev className="about-my">
                <h1>ABOUT MY</h1>
                <img src="/Images/myphoto.png" alt="myphoto" className="image1 shadow" />

                <h3>My name is Abdyzhaparov Argen Nurbekovich. I was born in the village of Ala-Buka in Jalal-Abad. I studied at School No.1 named after T. Baltagulov. After finishing the 9th grade, I enrolled in Salumbekova College.</h3>
                <h1>Interesting facts about me:</h1>
                <h3 className="o-sebe">I love many things: money, eating, sleeping, playing, hanging out with friends, reading, and writing code. From 1st to 9th grade, I practiced Greco-Roman wrestling and excelled in school. I enjoy interacting with people and, overall, I am a cheerful person.</h3>
            </dev>    
        </main>
    )
}


export default About;