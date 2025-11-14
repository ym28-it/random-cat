"use server"

import { CAT_API_KEY } from "@/app/env";

type Image = {
    url: string;
};


export async function fetchImage(): Promise<Image> {
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: { "x-api-key": CAT_API_KEY },
    });
    const images = await res.json();
    console.log('images', images);
    return images[0];
}