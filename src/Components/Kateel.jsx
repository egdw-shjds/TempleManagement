import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Kateel.css'; 

const Kateel = () => {
    const [highlightAbout, setHighlightAbout] = useState(false);
    const [highlightContact, setHighlightContact] = useState(false);

    const handleClickAbout = () => {
        setHighlightAbout(true);
        setHighlightContact(false);
    }

    const handleClickContact = () => {
        setHighlightContact(true);
        setHighlightAbout(false);
    }
    return (
        <div>
        <div className="kateel">
            <div className="kateel-left">
            <Link to="/home">TEMPLE MANAGEMENT SYSTEM</Link>
                
            </div>
           
            <div className="kateel-center">
                <span><strong>SHREE DURGAAPARAMESHWARI TEMPLE</strong></span>
            </div>
            <div className="kadri-right">
                
                <Link smooth to="#about-us" onClick={handleClickAbout}>ABOUT US</Link>
                <Link smooth to="#contact" onClick={handleClickContact}>CONTACT</Link>
                <a href="/bookpooja">BOOK POOJA</a>
                <a href="/donate">DONATION</a>
            </div>
            </div>
            <div className="kateel-section">
                
                <div className="kateel-images">
                    <img src="src\Kateel\1.jpg" alt="Temple Image 1" />
                    <img src="src\Kateel\2.jpg" alt="Temple Image 2" />
                    <img src="src\Kateel\3.jpg" alt="Temple Image 3" />
                
                </div>
            
            <div className="content-right">
            <div id="about-us" className={highlightAbout ? 'highlight' : ''}>
                <p>The Shree Durga Parameshwari Temple in Mangalore is a revered Hindu temple dedicated to Goddess Durga, also known as Durga Parameshwari, the divine embodiment of feminine power and strength. Situated in the heart of the city, this temple holds a significant place in the religious and cultural landscape of Mangalore and the surrounding regions.</p>

                <p>The history of the Sri Durga Parameshwari Temple traces back several centuries, with its origins steeped in legend and mythology. According to popular belief, the temple was originally located in the Kadri area of Mangalore, atop a hillock. However, due to various reasons including Muslim invasions and natural calamities, the temple was relocated to its current location in Bolar, Mangalore.</p>

                <p>The architecture of the Sri Durga Parameshwari Temple reflects a blend of traditional South Indian temple architecture with unique coastal influences. The temple's gopuram (tower) stands tall and imposing, adorned with intricate sculptures and vibrant paintings depicting scenes from Hindu mythology. As visitors step into the temple complex, they are greeted by the majestic vimana (main shrine) dedicated to Goddess Durga, embellished with ornate carvings and decorative motifs.</p>

                <p>The sanctum sanctorum of the temple houses the idol of Sri Durga Parameshwari, resplendent in her divine form, adorned with jewels and surrounded by offerings from devotees. The idol exudes an aura of grace and power, inspiring reverence and devotion among the faithful. Surrounding the main shrine are smaller shrines dedicated to other deities such as Ganesha, Subramanya, and Navagrahas, each reflecting exquisite craftsmanship and artistic finesse.</p>

                <p>One of the most striking features of the Sri Durga Parameshwari Temple is its serene ambience and tranquil surroundings. Nestled amidst lush greenery and swaying coconut palms, the temple provides a serene retreat from the hustle and bustle of city life. The gentle fragrance of incense, the melodious chants of hymns, and the rhythmic beats of traditional drums create an atmosphere of spirituality and peace, inviting devotees to connect with the divine.</p>
                <p>Throughout the year, the Sri Durga Parameshwari Temple is a hub of religious activity and cultural celebration. Various festivals and rituals are observed with great fervor, drawing devotees from far and wide. Navaratri, the nine-day festival dedicated to Goddess Durga, holds special significance at the temple, with elaborate decorations, devotional music, and vibrant processions marking the occasion</p>
            </div>
            <div id="contact" className={highlightContact ? 'highlight' : ''}>
                <h1></h1>
                <h2>Contact Info</h2>
                <p>Kateel Durgaparameshwari Temple,Kateel Post,Mangalore</p>
                <p>Karnataka,India.</p>
                <p>Mobile: +917411534592, +918904905361</p>
                <p>Email: kateellkateel@gmail.com</p>
                
            </div>
        </div>
        </div>
        </div>
    );
};

export default Kateel;
