import React from "react";
import ReactDOM  from "react-dom/client";

//React.createElement => Object => HTMLElement(render)

//React Functional Component
const Title = () => (
    <h1 className = "head" tabIndex="5">
        HI 
    </h1>
    
);


//Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}
        <h1>BYE ...</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent />);
