import {ChangeEventHandler, useEffect, useState} from "react";

export default function useSearch(init: string, sleepTimeMs: number){
    const [textSearch, setTextSearch] = useState(init)
    const [searchRequest, setSearchRequest] = useState("")
    const [available, setAvailable] = useState(true)

    useEffect(() => {
        if (available) {
            applyTextToSearch()
            setAvailable(false)
            setTimeout(()=>{
                setAvailable(true)
                if (textSearch != searchRequest)
                    applyTextToSearch()
            }, sleepTimeMs)
        }
    }, [textSearch]);

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
