import { useEffect, useState } from "react";
import productosData from "../data/productos.json";

export function useFetch() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosData);
            }, 500);
        });

        fetchData.then((res) => setProductos(res));
    }, []);

    return productos;
}
