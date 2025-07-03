import React, { useEffect, useState } from 'react';
import './ParticleAnimation.scss';

function Animation() {
    const [change, setChange] = useState('');

    useEffect(() => {
        const wrap = document.querySelector('.wrap');
        if (!wrap) return;

        wrap.innerHTML = '';

        // Generate 700 particles
        for (let i = 0; i < 700; i++) 
        {
            const div = document.createElement('div');
            div.className = 'c';
            wrap.appendChild(div);
        }
    }, [change]);

    return (
    
            <div className="particle-container">
                <div className="wrap"></div>
            </div>
        
    );
}

export default Animation;
