import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Polali.css'; 

const Polali = () => {
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
        <div className="polali">
            <div className="polali-left">
            <Link to="/home">TEMPLE MANAGEMENT SYSTEM</Link>
                
            </div>
           
            <div className="polali-center">
                <span><strong>SHRI KSHETRA RAAJERAJESHWARI TEMPLE</strong></span>
            </div>
            <div className="polali-right">
                
                <Link smooth to="#about-us" onClick={handleClickAbout}>ABOUT US</Link>
                <Link smooth to="#contact" onClick={handleClickContact}>CONTACT</Link>
                <a href="/bookpooja">BOOK POOJA</a>
                <a href="/donate">DONATION</a>
            </div>
                
            </div>
            <div className="polali-section">
                
                <div className="polali-images">
                    <img src="src\Polali\1.jpg" alt="Temple Image 1" />
                    <img src="src\Polali\2.jpg" alt="Temple Image 2" />
                    <img src="src\Polali\3.jpg" alt="Temple Image 3" />
                    
                </div>
           
            <div className="content-right">
            <div id="about-us" className={highlightAbout ? 'highlight' : ''}>
                <p>The Shri Kshetra Rajarajeshwari Temple, commonly known as the Polali Rajarajeshwari Temple, is a revered Hindu temple located in Polali village, about 20 kilometers from Mangalore city in the southern Indian state of Karnataka. This ancient temple holds immense religious significance and is dedicated to Goddess Rajarajeshwari, an incarnation of Goddess Parvati, the consort of Lord Shiva. The temple's history, architecture, rituals, and cultural importance make it a significant pilgrimage site in the region.</p>

                <p>The temple's origins can be traced back to several centuries, with historical records suggesting its existence since the early medieval period. Legend has it that the temple was established by the famous sage Agastya Muni, who consecrated the idol of Goddess Rajarajeshwari here. Over the centuries, the temple underwent several renovations and expansions, with contributions from various rulers and devotees, resulting in its present grandeur.</p>

                <p>Architecturally, the Polali Rajarajeshwari Temple is a stunning example of traditional South Indian temple architecture. The temple complex is characterized by its towering gopuram (entrance tower), intricate carvings, and ornate sculptures depicting scenes from Hindu mythology. The main sanctum sanctorum houses the sacred idol of Goddess Rajarajeshwari, adorned with precious jewels and intricate decorations, attracting devotees from far and wide who come to seek her blessings.</p>

                <p>The temple is not only a place of worship but also a center for various religious and cultural activities. Daily rituals, including elaborate poojas and abhishekams (ritual bathing of the deity), are performed with utmost devotion and reverence by the temple priests. Festivals play a crucial role in the temple's calendar, with celebrations marked by colorful processions, traditional music, dance performances, and special rituals dedicated to the goddess.</p>

                <p>One of the most significant festivals celebrated at the Polali Rajarajeshwari Temple is the annual Navaratri festival, which spans nine nights and is dedicated to honoring the divine feminine energy. During this festival, the temple premises come alive with fervent devotion as thousands of devotees gather to witness the grand festivities. The highlight of Navaratri is the 'Vijayadashami' or 'Dasara' celebrations, marked by the immersion of idols in water bodies, symbolizing the triumph of good over evil.</p>

            </div>
            <div id="contact" className={highlightContact ? 'highlight' : ''}>
                <h1></h1>
                <h2>Contact Info</h2>
                <p>Shree Rajarajeshwari Temple Polali,Kariyangala village,Bantwala taluku,Dakshina Kannada</p>
                <p>Karnataka,India.</p>
                <p>Mobile: 0824-2266141, 9845802475</p>
                <p>Email: polalirajarajeshwaritemple@gmail.com </p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Polali;
