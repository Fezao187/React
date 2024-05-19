// Create Portfolio Gallery Component
// Import tabs
import Tabs from "./Tabs";
// Import items
import Items from "./Items";
import Data from "./Data";
import { useState } from "react";

// Create a gallery functional component
function Gallery() {

    const [data, setData] = useState(Data);
    const categoryData = Data.map((value) => {
        return value.category
    });
    const tabsData = ["all", ...new Set(categoryData)];

    // Declare an event handler function and pass category
    const filterCategory = (category) => {
        // If catehory equal to all.......
        if (category == "all") {
            // .......then pass data into setdata
            setData(Data);
            return;
        }
        // A filter data function to filter by category
        const filteredData = Data.filter((value) => {
            return value.category == category;
        })
        // Pass filtered data into data
        setData(filteredData);
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-1">

                </div>
                <div className="col-sm-10">
                    {/* Pass the filter category into the tabs component as props */}
                    <Tabs filterCategory={filterCategory} tabsData={tabsData} />
                    <Items data={data} />
                </div>
                <div className="col-sm-1">

                </div>
            </div>

        </div>

    )
}

export default Gallery;