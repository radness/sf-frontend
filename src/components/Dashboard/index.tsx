import React, {useState, useEffect} from 'react';
import './dashboard.css';
import Card from "./Card";
import Reports from "./Reports";

const Dashboard = () => {
    const [cards, setCards] = useState<any[]>([]);

    const fecthData = () => {
        fetch('http://localhost:4000/cards')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fecthData();
    }, []);

    return (
        <div>
            <section className='dashboard section'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='row'>
                            {
                                cards && cards.length > 0 &&
                                cards.map((card) => (
                                    <Card key={card.id} card={card} />
                                ))
                            }
                            <div className='col-12'>
                                <Reports/>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;