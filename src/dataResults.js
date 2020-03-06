import React from "react";
import { getData } from "./getData.js";

function neighbourhoodData() {
    const data = getData();
    const neighbourhoodData = [];
    data.then((results) => {
        results.forEach((item) => {
        neighbourhoodData.push(item);
        })
    })
    return neighbourhoodData;
}

export default neighbourhoodData;