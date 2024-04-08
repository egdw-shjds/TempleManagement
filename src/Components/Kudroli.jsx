import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Kudroli.css'; 

const Kudroli = () => {
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
            <div className="kudroli">
                <div className="kudroli-left">
                <Link to="/home">TEMPLE MANAGEMENT SYSTEM</Link>
                    
                </div>
               
                <div className="kudroli-center">
                    <span><strong>KUDROLI SRI GOKARNANATHESHWARA TEMPLE</strong></span>
                </div>
                <div className="kudroli-right">
                    
                    <Link smooth to="#about-us" onClick={handleClickAbout}>ABOUT US</Link>
                    <Link smooth to="#contact" onClick={handleClickContact}>CONTACT</Link>
                    <a href="/bookpooja">BOOK POOJA</a>
                    <a href="/donate">DONATION</a>
                </div>
                
            </div>
            <div className="kudroli-section">
                
                <div className="kudroli-images">
                    <img src="src\Kudroli\1.jpg" alt="Temple Image 1" />
                    <img src="src\Kudroli\2.jpg" alt="Temple Image 2" />
                    <img src="src\Kudroli\3.jpg" alt="Temple Image 3" />
                    <img src="src\Kudroli\4.jpg" alt="Temple Image 4" />
                </div>
            
            <div className="content-right">
            <div id="about-us" className={highlightAbout ? 'highlight' : ''}>
                <p>The Kudroli Gokarnanatheshwara Temple stands as a beacon of religious significance, cultural richness, and social harmony in the vibrant city of Mangalore, Karnataka, India. Nestled amidst the bustling streets and serene landscapes of this coastal city, the temple is not just a place of worship but a testament to the enduring spirit of communal harmony and social reform.</p>

                <p>Established in 1912 by the revered social reformer Narayana Guru, the temple holds a special place in the hearts of the local community. During that time, the Billava community, which faced discrimination and social ostracization, lacked a place where they could worship freely. Narayana Guru, known for his advocacy of equality and social justice, envisioned the temple as a sanctuary where people from all walks of life could come together to seek solace and spiritual guidance.</p>

                <p>The architecture of the Kudroli Gokarnanatheshwara Temple is a splendid fusion of traditional Kerala and modern Dravidian styles. As one enters the temple complex, they are greeted by the majestic gopuram (tower) adorned with intricate carvings and vibrant colors, depicting scenes from Hindu mythology. The temple's main shrine dedicated to Lord Shiva, in the form of Gokarnanatheshwara, is an architectural marvel, with its ornate pillars, sculpted walls, and beautifully crafted ceilings mesmerizing visitors with their grandeur.</p>

                <p>The sanctum sanctorum houses the imposing idol of Lord Shiva, exuding an aura of divine grace and tranquility. Devotees throng the temple premises, offering prayers, performing rituals, and seeking blessings from the presiding deity. The temple complex also includes smaller shrines dedicated to various Hindu deities, each adorned with exquisite sculptures and adorned with colorful decorations.</p>

                <p>The sacred pond or 'theertha' within the temple premises holds special significance for devotees, who believe that taking a dip in its holy waters purifies the soul and brings spiritual upliftment. The tranquil surroundings of the temple, coupled with the soothing chants of hymns and prayers, create an atmosphere of peace and serenity, inviting devotees to immerse themselves in the divine presence of Lord Shiva.</p>
                <p>Throughout the year, the Kudroli Gokarnanatheshwara Temple pulsates with religious fervor and cultural vibrancy. The annual festival of Shivaratri, celebrated with great pomp and splendor, is a highlight event, attracting devotees from far and wide. Elaborate processions, mesmerizing rituals, and vibrant cultural performances mark the festivities, as devotees come together to celebrate the glory of Lord Shiva.</p>
                <p>Beyond its religious significance, the temple is also deeply involved in various social welfare activities, reflecting its commitment to serving the community. Free meals (Annadanam) are served to the needy, educational programs are conducted for the youth, and charitable initiatives are undertaken to support the underprivileged. The temple's inclusive ethos fosters a sense of unity and compassion, transcending barriers of caste, creed, and religion.</p>
                <p>Accessible to all, the Kudroli Gokarnanatheshwara Temple stands as a shining example of communal harmony and spiritual enlightenment. Its towering spires, sacred rituals, and benevolent services continue to inspire generations, reaffirming the timeless values of love, compassion, and humanity. As devotees bow their heads in reverence and gratitude, the divine presence of Lord Shiva permeates every corner of this sacred abode, blessing all who seek solace and salvation within its hallowed precincts.</p>
            </div>
            <div id="contact" className={highlightContact ? 'highlight' : ''}>
                <h1></h1>
                <h2>Contact Info</h2>
                <p>Kudroli Gokarnanatheshwara Temple Mangalore</p>
                <p>Karnataka,India.</p>
                <p>Mobile: 08242494040, 08242495740</p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Kudroli;
