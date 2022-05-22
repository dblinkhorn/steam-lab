import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import About from './components/pages/About';
import Members from './components/pages/Members';
import Samples from './components/pages/Samples';
import Contact from './components/pages/Contact';
import App from './App';

ReactDOM.render(
    <HashRouter>
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/mission' element={<Mission />} />
                <Route path='/about' element={<About />} />
                <Route path='/members' element={<Members />} />
                <Route path='/samples' element={<Samples />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    </HashRouter>,
    document.getElementById('root')
);
