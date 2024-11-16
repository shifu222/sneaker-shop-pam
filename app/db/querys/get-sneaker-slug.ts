import { db } from "../db.server";

export default async function GetSneakersSlug(slug : string){
    const { rows } = await db.query(
        `SELECT 
            s.sneaker_id,
            s.name,
            b.name AS brand,         
            s.price,
            s.description,
            s.image_url,
            c.name AS category,      
            s.gender,
            s.slug
        FROM 
            public.sneakers s
        JOIN 
            public.brands b ON s.brand_id = b.brand_id
        JOIN 
            public.categories c ON s.category_id = c.category_id
        WHERE 
            s.slug = $1`, // Usa $1 para representar el primer parámetro
        [slug] // Array de parámetros
    );
    return rows[0];
}