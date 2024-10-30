import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Импортируем Font Awesome
import '../Style/Contact.css';



const Contact = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setShowBanner(true); // Показать баннер при монтировании компонента
    }, []);


    // Функция для копирования текста в буфер обмена
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert(`${text} скопирован в буфер обмена!`);
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
            });
    };

    return (
        <main style={{ padding: '20px' }}>
           
            <div className="contact-info" onClick={() => copyToClipboard("+996998444307")}>
                <h2><i className="fas fa-phone"></i> +996998444307</h2> 
            </div>
            <div className="contact-info" onClick={() => copyToClipboard("Abdyjaparrovv.16")}>
                <h2><i className="fab fa-instagram"></i> Abdyjaparrovv.16</h2>
            </div>
            <div className="contact-info" onClick={() => copyToClipboard("+996706406940")}>
                <h2><i className="fab fa-whatsapp"></i> +996706406940</h2>
            </div>
        </main>
    );
}

export default Contact;



