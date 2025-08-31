import React, { useEffect } from 'react';
import mayuriGif from '../assets/mayuri.gif';
import style from './Container.module.css';

const useMousePosition = () => {
        const [
            mousePosition,
            setMousePosition
        ] = React.useState({ x: null, y: null });

        React.useEffect(() => {
            const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
            };

            window.addEventListener('mousemove', updateMousePosition);

            return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            };
        }, []);

        return mousePosition;
    };

const Container = () => {
    const [scale, setScale] = React.useState(2);
    const defaultWidth = 100;


    useEffect(() => {
        window.electronAPI.setClickable(false);
    }, []);
    
    return (
        <div className={style.container}>
            <img 
                src={mayuriGif} 
                alt='sewekGIF' 
                style={{ width: `${scale*defaultWidth}px`, height: 'auto' }}
                onMouseEnter={() => {window.electronAPI.setClickable(true)}}
                onMouseLeave={() => window.electronAPI.setClickable(false)}
                onClick={() => console.log("hehehehehe")}
            />
        </div>
    );
};

export default Container;