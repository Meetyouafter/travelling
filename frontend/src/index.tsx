import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/config';
import App from './App';
import styles from './styles/styles.scss';

const container = document.getElementById('root');
container.classList.add(`${styles.root}`);
const root = createRoot(container);
root.render(<App />);
