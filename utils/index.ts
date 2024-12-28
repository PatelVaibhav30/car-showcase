import { CarProps } from "@/types";

//FETCH ALL CARS DATA
export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'a8424951d2mshe2ab8521f401b9ap1b2367jsn6b0ab8b5b6db',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
        headers: headers,
    });

    const result = await response.json();
    return result
}

//GET CAR RENT PRICE
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 2000; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    debugger;
    const url = new URL("https://cdn.imagin.studio/getimage");

    const { make, year, model } = car;
    url.searchParams.append('customer', 'hrjavascript-mastery'); //if this key is expired go to github repo and find new key
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
    return `${url}`;
}