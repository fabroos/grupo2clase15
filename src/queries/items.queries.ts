import { FullCategory, Category } from "../schema/item-category";





export const getItemCategories = async (): Promise<Category[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/item-category/");
    const data = await response.json();
    return data.results;
};

export const getItemCategory = async (categoryId: string): Promise<FullCategory> => {
    const response = await fetch(`https://pokeapi.co/api/v2/item-category/${categoryId}`);
    const data = await response.json();
    return data;
};