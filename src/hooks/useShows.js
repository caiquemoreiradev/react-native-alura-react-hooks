import { useState, useEffect } from "react";

import { loadData } from "../utils/loadData";

export default function useShows(){

    const [title, setiTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {

        const response = loadData();

        setiTitle(response.title);
        setList(response.list);

        console.log(response)
    }, [])

    return [title, list]
}