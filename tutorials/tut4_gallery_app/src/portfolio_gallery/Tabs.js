// Create Gallery Tabs Component and pass two props {tabsdata and filterCategory}
function Tabs({ filterCategory, tabsData }) {
    return (
        <>
            {/* Return HTML with bootstrap classes */}
            <div className="text-center my-4">
                {
                    // Apply map function to the tabsdata
                    tabsData.map((category, index) => {
                        return (
                            <button type="button" className="btn btn-outline-primary mx-2 text-capitalize" onClick={() => filterCategory(category)} key={index}>{category}</button>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Tabs;