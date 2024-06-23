// CREATE OR REPLACE FUNCTION prod2.insertar_en_historial(idexamen text, pathexamen text)
//  RETURNS void
//  LANGUAGE plpgsql
// AS $function$
// BEGIN
//     -- Inserción de los datos desde la tabla temporal a la tabla histórica
//     INSERT INTO prod2."HST_examenesRealizados" (id, "typeDocument", "nameProcess", "idExamen", "pathS3", "createdAt", "updatedAt")
//     SELECT
//         min(temp.id) AS id,                -- Usamos MIN para obtener un id representativo (podría ser cualquier función de agregación)
//         temp."typeDocument",
//         string_agg(temp."nameProcess", ', ') AS "nameProcess", -- Concatenamos los textos de "nameProcess" separados por una coma
//         idExamen,                          -- Asignamos el valor del parámetro idExamen
//         pathExamen,                        -- Asignamos el valor del parámetro pathExamen
//         min(temp."createdAt") AS "createdAt", -- Usamos MIN para obtener una fecha representativa
//         max(temp."updatedAt") AS "updatedAt"  -- Usamos MAX para obtener una fecha representativa
//     FROM prod2."TMP_examenesRealizados" temp
//     WHERE temp."idExamen" = idExamen
//     GROUP BY temp."typeDocument";           -- Agrupamos por "typeDocument" para combinar los registros por examen

//     -- Manejo de errores
//     EXCEPTION
//         WHEN OTHERS THEN
//             RAISE NOTICE 'Error al insertar en la tabla histórica: %', SQLERRM;
// END;
// $function$
// ;

export {};
