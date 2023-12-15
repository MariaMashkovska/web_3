import axios from 'axios';


const http = axios.create({
    baseURL: 'http://localhost:5050/api/v2/devices',
    headers: {
        'Content-type': 'application-json'
    }
});

interface Item {
    price: number;
    model: string;
}

export const getFilteredData = async (title: string, minPrice: string, maxPrice: string) => { 
    let url = `http://localhost:5050/api/v2/devices?`   

    if(title !== undefined && title !== '') {
        url += `model=${title}&`;
    }

    console.log('url: ', url);

    let data = (await http.get(url)).data;

    if (minPrice !== undefined && minPrice !== '') {
        data = data.filter((item: Item) => item.price >= Number(minPrice));
    }

    if (maxPrice !== undefined && maxPrice !== '') {
        data = data.filter((item: Item) => item.price <= Number(maxPrice));
    }

    return data;
}

export const getById = async (id: string | number) => {
    let url = `http://localhost:5050/api/v2/devices/${id}`
    return (await http.get(url)).data
}