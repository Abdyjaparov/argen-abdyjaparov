import React from 'react';
import '../Style/Home.css';




const Home = () => {
    return (
        <div className="container about-page">
            <h1>About Me</h1>
            <img src="/Images/example.png" alt="Example" className="image2" />
            <p>My name is Argen. I'm 17 years old, and I'm a student at Salymbekov University.</p>

            <section className="team">
                <h2>Meet THE Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <h3>Argen Abdyjaparov</h3>
                        <p>boss of bosses</p>
                    </div>
                    <div className="team-member">
                        <h3>Amina Nusupjanova</h3>
                        <p>boss</p>
                    </div>
                    <div className="team-member">
                        <h3>Kamila Toktalieva</h3>
                        <p>participant</p>
                    </div>
                    <div className="team-member">
                        <h3>Akmaral Tabyldieva</h3>
                        <p>participantr</p>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default Home;