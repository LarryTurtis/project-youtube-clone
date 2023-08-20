import { useState } from "react";


function SearchBar() {

    const [searchValue, setSearchValue] = useState("")


    return (
        <>
            <div className="searchBarArea">
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="searchBarArea-btn">
                    Search
                </button>
            </div>
        </>
    )
}





export default SearchBar