import MovieProps from "../interfaces/MovieProps"

export default async function getJSON(filePath : string) : Promise<MovieProps[]> {
    const response = await fetch(filePath)
    const file = await response.json()
    return file
}