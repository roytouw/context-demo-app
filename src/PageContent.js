import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default function PageContent(props) {
    const context = useContext(ThemeContext);

    const { isDarkMode } = context;
    const styles = {
        'backgroundColor': isDarkMode ? 'black' : 'white',
        'width': '100vw',
        'height': '100vh'
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    );

}
