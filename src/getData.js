import React from 'react';
import axios from "axios";

export const getData = () => {
    return axios({
        method:'GET',
        url: 'http://proxy.hackeryou.com',
        responseType:'json',
        params: {
            reqUrl: 'https://sandy.codes/yyzLocal/neighbourhood-profiles-2016-csv.json',
            xmlToJSON: false
        }
        }).then((response) => {
            const data = response.data;
            return data;
    });
}