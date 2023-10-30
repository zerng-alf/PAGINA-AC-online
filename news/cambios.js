
// Ejecutar comando en terminal  node news\cambios.js  para poder realizar los cambios///
// Si se requiere un cambio remplazar el div correspoondiente ////
// Modifcar si se require realizar otros cambios como img ///

const fs = require('fs');

// El nuevo div que quieres insertar.
const newDiv = 
`
<div class="text-center">
                                <a id="btnNews" href="index.html#contact"
                                    class="get-started-btn scrollto mb-3 mt-2 ">Contáctanos</a>
                            </div>
`;

// Itera sobre los archivos HTML en la carpeta.
fs.readdirSync('./').forEach((file) => {
    if (file.endsWith('.html')) {
        const filePath = `./${file}`;
        let html = fs.readFileSync(filePath, 'utf-8');

        // Reemplaza el div existente con el nuevo div.
        html = html.replace(
            /<div class="text-center">.*?<\/div>/s,
            newDiv
        );

        // Guarda el archivo modificado.
        fs.writeFileSync(filePath, html, 'utf-8');
        console.log(`Se ha modificado ${file}`);
    }
});