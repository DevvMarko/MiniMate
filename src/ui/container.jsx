import React, { useRef, useState, useEffect} from 'react';
import mayuriGif from '../../mates/mayuri.gif';
import style from './container.module.css';

const Container = () => {
    // variables for image
    const [scale, setScale] = useState(2);
    const defaultWidth = 100;
    const imgRef = useRef(null);

    useEffect(() => {
        setScale(2); // for testing purpose only, remove later
        console.log('scale:', scale);
    }, [scale]);

    return (
        <div className={style.container}>
            <img 
                src={mayuriGif} 
                alt='sewekGIF' 
                style={{ width: `${scale * defaultWidth}px`, height: 'auto' }}
                ref={imgRef}
            />
        </div>
    );
};

export default Container;