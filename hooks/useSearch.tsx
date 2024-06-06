import {ChangeEventHandler, useEffect, useState} from "react";

export default function useSearch(init: string, sleepTimeMs: number){
    const [textSearch, setTextSearch] = useState(init)
    const [searchRequest, setSearchRequest] = useState("")

    useEffect(() => {
        const timeOut = setTimeout(applyTextToSearch, sleepTimeMs);
        return () => clearTimeout(timeOut)
    }, [textSearch]);

    useEffect(() => {}, [searchRequest]);

    const applyTextToSearch = () => {
        setSearchRequest(textSearch)
    }

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => setTextSearch(event.target.value)

    return {
        text: textSearch,
        setText: setTextSearch,
        textToSearch: searchRequest,
        onChange,
    }
}
