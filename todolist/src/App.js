import React from 'react';
import {Route, Routes} from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";

const App = () => {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
        </div>
    );
};

export default App;
