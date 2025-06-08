import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser';

// Khởi tạo EmailJS với public key
emailjs.init('VTi81qD55hrji2yuK');

createRoot(document.getElementById("root")!).render(<App />);
