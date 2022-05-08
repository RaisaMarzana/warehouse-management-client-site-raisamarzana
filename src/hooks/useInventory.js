import { useEffect, useState } from "react"

const useInventory = () => {
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        fetch('https://blooming-beyond-59766.herokuapp.com/stock')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [inventories])

    return [inventories, setInventories]
}

export default useInventory;