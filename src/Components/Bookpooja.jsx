import React, { useState } from 'react';
import '../App.css';
import jsPDF from 'jspdf';
import tickMark from './tickMark.png';

const Bookpooja = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pooja, setPooja] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const doc = new jsPDF();

        if (name && email && mobile && date && time && pooja) {

            doc.setLineWidth(1);
            doc.rect(20, 20, 170, 165); 

            doc.setFont('helvetica'); 
            doc.setFontSize(22); 
            doc.setTextColor(0, 0, 255); 
            doc.text('Your Slot is Booked', 105, 40, { align: 'center' }); 

            doc.addImage(tickMark, 'PNG', 80, 45, 50, 50); 

            doc.setFontSize(16); 
            doc.setTextColor(0, 0, 0); 
            doc.text(`Name: ${name}`, 105, 110, { align: 'center' }); 
            doc.text(`Date: ${date}`, 105, 120, { align: 'center' });
            doc.text(`Time: ${time}`, 105, 130, { align: 'center' }); 
            doc.text(`Pooja: ${pooja}`, 105, 140, { align: 'center' }); 

            doc.setFontSize(18); 
            doc.setTextColor(0, 128, 0); 
            doc.text('Thank You!', 105, 160, { align: 'center' }); 

            // Save the PDF
            doc.save('Receipt.pdf');
        } else {
            alert('Please fill all the details');
        }
    };

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Book Pooja</h2>
                <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Enter Name' onChange={e => setName(e.target.value)} />

                <label htmlFor='email'>Email:</label>
                <input type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>

                <label htmlFor='mobile'>Mobile:</label>
                <input type='tel' placeholder='Enter Mobile Number' onChange={e => setMobile(e.target.value)}/>

                <label>Date:</label>
                <input type="date" onChange={e => setDate(e.target.value)} />

                <label>Time:</label>
                <input type="time" onChange={e => setTime(e.target.value)} />

                <label htmlFor='pooja'>Pooja:</label>
                <input type='text' placeholder='Enter Pooja' onChange={e => setPooja(e.target.value)} />

                <button type='submit'>Book Pooja</button>
            </form>
        </div>
    )
}

export default Bookpooja;
