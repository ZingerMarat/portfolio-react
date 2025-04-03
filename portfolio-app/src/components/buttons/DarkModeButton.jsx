import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode'
import moon from '../../img/icons/moon.svg'
import sun from '../../img/icons/sun.svg'
import './style.css'

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());
    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }
    }, [darkMode])

    useEffect(() => {
        // Check if dark mode in system is changed
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', e => {
                const newColorScheme = e.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            });
    }, [])


    const toggleDarkMode = () => {
        setDarkMode(prev => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}

export default DarkModeButton;