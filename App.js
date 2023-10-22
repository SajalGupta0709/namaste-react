import React from "react";
import ReactDOM  from "react-dom/client";

/**
 * 
 * Header
 *  - logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *      - Img
 *      - Name of res, Star rating, cuisine, delivery time etc
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return(
        <div className = "header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8F4Kv-7wuG2EnTljlpjClafnqaLIU9I8YFEa_2Was&s"
                /> 
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div> 
    )
}

const resList = [{
    id:"12345",
    name: "KFC",
    cuisines: "Burger, Fast-food, American",
    costForTwo: 40000,
    avgRating: 3.8,
    deliveryTime: 38
}
]

const RestaurantCard = (props) => {
    const {resData} = props;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
                className="res-logo"
                alt = "res-logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSp-oV6FglpwUL1HvTntfJ8O7XW4y0yq1ItqrKbnu8Q&s" 
            />
            <h3>{resData.name}</h3>
            <h5>{resData.cuisines}</h5>
            <h5>Rs {resData.costForTwo / 100} for Two</h5>
            <h5>{resData.avgRating}</h5>
            <h5>{resData.deliveryTime}minutes </h5>
        </div>
    )
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key = {restaurant.id }resData = {restaurant} />
                ))}
            </div>
        </div>
        
    )
}

const AppLayout =  () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<AppLayout />);
