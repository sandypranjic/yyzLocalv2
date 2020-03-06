import React, { useEffect } from 'react';
import { useStore } from "./store";

const SearchDropDown = () => {
    const {state, dispatch} = useStore();
    // console.log(state.housingData);

    useEffect(() => {
        state.housingData.forEach((item) => {
            if (item.Characteristic === "Neighbourhood Number") {
                console.log(item);
                for (let prop in item) {
                    console.log(prop);
                    if (prop !== "_id" && prop !== "Characteristics" && prop !== "Category" && prop !== "Topic" && prop !== "Data Source" && prop !== "City of Toronto") {
                        const propToString = JSON.stringify(prop);
                        const removeQuotes = propToString.replace(/['"]+/g, '')
                        const optionsMenu = document.getElementById("neighbourhoodOptions");
                        const option = document.createElement('option');
                        option.appendChild(document.createTextNode(removeQuotes));
                        option.value = removeQuotes;
                        optionsMenu.appendChild(option);
                    }
                }
            }
        })
    })

    return ( 
        <React.Fragment>
            <select className="neighbourhoodOptions" id="neighbourhoodOptions">
                <option value="Choose a Neighbourhood">Choose a Neighbourhood</option>
            </select>
        </React.Fragment>
    );
}

export default SearchDropDown;