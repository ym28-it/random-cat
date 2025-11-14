"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
    url: string;
}


export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);

    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };


    return (
        <div>
            <button onClick={refreshImage} className={styles.button}>see other cat</button>
            {imageUrl && <img src={imageUrl} className={styles.image} />}
        </div>
    );
}