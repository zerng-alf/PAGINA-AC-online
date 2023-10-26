
// Ejecutar comando en terminal  node news\cambios.js  para poder realizar los cambios///
// Si se requiere un cambio remplazar el div correspoondiente ////
// Modifcar si se require realizar otros cambios como img ///

const fs = require('fs');

// El nuevo div que quieres insertar.
const newDiv = 
`
<div class="meta-top">
                                <ul class="row">
                                    <li class="d-flex align-items-center col-5"><i class="bi bi-person"></i> <a href=""
                                            id="editor" class="pl-2"></a></li>
                                    <li class="d-flex align-items-center col-5"><i class="bi bi-clock"></i> <a
                                            href=""><time datetime="" id="fecha" class="pl-2"></time></a>
                                    </li>
                                </ul>
                            </div>
`;

// Itera sobre los archivos HTML en la carpeta.
fs.readdirSync('./').forEach((file) => {
    if (file.endsWith('.html')) {
        const filePath = `./${file}`;
        let html = fs.readFileSync(filePath, 'utf-8');

        // Reemplaza el div existente con el nuevo div.
        html = html.replace(
            /<div class="meta-top">.*?<\/div>/s,
            newDiv
        );

        // Guarda el archivo modificado.
        fs.writeFileSync(filePath, html, 'utf-8');
        console.log(`Se ha modificado ${file}`);
    }
});