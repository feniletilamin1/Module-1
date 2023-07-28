import { useState } from "react";
import ToolBar from "./ToolBar";
import Projects from "./Projects";

import pics from '../../data/pics';


const Portfolio = () => {
    const [activeTag, setActiveTag] = useState(null);
    const [activePics, setActivePics] = useState(pics);

    const categories = Array.from(new Set(pics.map(pic => pic.category)))

    const changeChoose = tag => {
        setActiveTag(tag);
        if (tag === 'All')
            return setActivePics(pics);
        const activePics = pics.filter(pic => pic.category === tag);
        setActivePics(activePics);
    };

    return (
        <div>
            <ToolBar
                changeChoose={changeChoose}
                categories={['All', ...categories]}
                activeTag={activeTag}
            />
            <Projects pics={activePics} />
        </div>
    );
}

export default Portfolio;