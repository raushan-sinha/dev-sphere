import { ArrowUpwardOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

const ScrollView: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    //todo: Toggle visibility -
    const toggleVisible = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    //todo: Scroll to Top -
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    //todo: Scroll event -
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <>
            {isVisible && (
                <button className='fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-blue-500 cursor-pointer' onClick={scrollToTop}>
                    <ArrowUpwardOutlined />
                </button>
            )
            }
        </>
    )
}

export default ScrollView;