import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch ("https://api.exchangerate.host/latest?base=USD&symbols=EUR,INR")
            .then((res) => res.json())
            .then((res) => setData([currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;
