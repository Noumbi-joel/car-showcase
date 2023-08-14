export async function fetchCars(filters: FilterProps) {
  const headers = {
    "X-RapidAPI-Key": "3d352b5d2cmsh567f0aa25e52d3ep1fcca2jsnc82c9cc5ac50",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters?.manuFacturer}&year=${filters?.year}&model=${filters?.model}&limit=${filters?.limit}&fuel_type=${filters?.fuel}`,
    { headers }
  );

  const result = await response.json();
  return result;
}
