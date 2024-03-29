import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Mission from "./components/pages/Mission";
import About from "./components/pages/About";
import Members from "./components/pages/Members";
import Samples from "./components/pages/Samples";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/mission' element={<Mission />} />
                <Route path='/about' element={<About />} />
                <Route path='/members' element={<Members />} />
                <Route path='/samples' element={<Samples />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
