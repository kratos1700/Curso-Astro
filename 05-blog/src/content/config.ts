// la carpeta content es exclusivamente para las colecciones de contenido en astro

import { defineCollection, z } from "astro:content";

// Definimos una colección de contenido llamada "blog" con su esquema
// Aquí especificamos los campos que tendrá cada entrada del blog
// y sus tipos de datos utilizando zod para validación
const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: z.string(),  
        author:z.string(),
        tags: z.array(z.string()),
        url: z.string().optional(), // opcional si no se quiere mostrar el enlace
    }),

});

// Exportamos las colecciones definidas para que puedan ser utilizadas en otras partes de la aplicación
// En este caso, solo tenemos la colección "blog"
export const collections = {
    blog: blogCollection,
};