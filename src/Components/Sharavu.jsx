import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Sharavu.css'; 

const Sharavu = () => {
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
        <div className="sharavu">
            <div className="sharavu-left">
            <Link to="/home">TEMPLE MANAGEMENT SYSTEM</Link>
                
            </div>
           
            <div className="sharavu-center">
                <span><strong>SHARAVU MAHAGANAPATHI TEMPLE</strong></span>
            </div>
            <div className="sharavu-right">
                
                <Link smooth to="#about-us" onClick={handleClickAbout}>ABOUT US</Link>
                <Link smooth to="#contact" onClick={handleClickContact}>CONTACT</Link>
                <a href="/bookpooja">BOOK POOJA</a>
                <a href="/donate">DONATION</a>
            </div>
                
            </div>
            <div className="sharavu-section">
               
                <div className="sharavu-images">
                    <img src="src\Sharavu\4.jpg" alt="Temple Image 1" />
                    <img src="src\Sharavu\2.jpg" alt="Temple Image 2" />
                    <img src="src\Sharavu\1.jpg" alt="Temple Image 3" />
                    <img src="src\Sharavu\3.jpg" alt="Temple Image 4" />
                </div>
           
            <div className="content-right">
            <div id="about-us" className={highlightAbout ? 'highlight' : ''}>
                <p>The Sharavu Mahaganapathi Temple, situated in the heart of Mangalore, Karnataka, India, stands as a revered center of devotion, cultural heritage, and spiritual enlightenment. With its rich history, architectural splendor, and deep-rooted religious significance, the temple holds a special place in the hearts of devotees and visitors alike.</p>
<p>Dating back centuries, the Sharavu Mahaganapathi Temple boasts a fascinating history steeped in mythological lore and religious lore. Legend has it that the temple was established by the great sage Parashurama, an avatar of Lord Vishnu, who is said to have installed the idol of Lord Ganesha here. Over the years, the temple has evolved into a prominent pilgrimage site, attracting devotees from far and wide who come to seek the blessings of Lord Ganesha, the remover of obstacles.</p>
 <p>Architecturally, the temple is a marvel to behold, blending traditional South Indian temple architecture with intricate craftsmanship and artistic finesse. The towering gopuram (entrance tower) adorned with colorful sculptures and intricate carvings welcomes visitors into the sacred precincts of the temple. Inside, the main shrine dedicated to Lord Ganesha exudes an aura of divine grace and sanctity, with the idol of the elephant-headed deity adorned with precious ornaments and vibrant decorations.</p>  
 <p>Devotees flock to the Sharavu Mahaganapathi Temple throughout the year to offer their prayers and seek blessings for prosperity, success, and fulfillment of desires. The temple reverberates with the melodious chants of hymns and prayers, creating an atmosphere of piety and devotion. Rituals and ceremonies are conducted with meticulous precision, following ancient customs and traditions handed down through generations.</p>
 <p>The temple complex also houses several smaller shrines dedicated to various Hindu deities, including Lord Shiva, Goddess Durga, and Lord Vishnu, reflecting the inclusive ethos of Hinduism. Each shrine is adorned with exquisite sculptures and intricate artwork, symbolizing the diverse facets of divinity worshiped by devotees.</p>             
    <p>One of the most revered festivals celebrated at the Sharavu Mahaganapathi Temple is the annual Ganesha Chaturthi, also known as Vinayaka Chaturthi, which marks the birth anniversary of Lord Ganesha. The festival is celebrated with great fervor and enthusiasm, as devotees participate in colorful processions, cultural performances, and special rituals. The idol of Lord Ganesha, adorned with garlands and ornaments, is worshipped with fervent devotion, and later immersed in water amidst chants and prayers, symbolizing the cycle of creation and dissolution.</p>
            </div>
            <div id="contact" className={highlightContact ? 'highlight' : ''}>
                <h1></h1>
                <h2>Contact Info</h2>
                <p>Sri Sharavu Mahaganapathy Temple Mangalore</p>
                <p>Karnataka,India.</p>
                <p>Mobile: 0824-2440328</p>
                <p>sharavu@hotmail.com</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Sharavu;
