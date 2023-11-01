
// Ejecutar comando en terminal  node news\cambios.js  para poder realizar los cambios///
// Si se requiere un cambio remplazar el div correspoondiente ////
// Modifcar si se require realizar otros cambios como img ///

const fs = require('fs');

// El nuevo div que quieres insertar.
const newDiv = 
`
<nav class="nav-menu d-none d-lg-block">
<ul>
    <li class="active"><a href="index.html">Inicio</a></li>
    <li><a href="index.html#about">Nosotros</a></li>
    <li><a href="index.html#services">Funciones</a></li>
    <!--<li><a href="#portfolio">Portfolio</a></li>-->
    <li><a href="index.html#team">Testimonios</a></li>
    <li><a href="index.html#pricing">Planes</a></li>
    <li><a href="index.html#News">News</a></li>
    <li><a href="index.html#contact">Contacto</a></li>
</ul>
</nav>
`;

// Itera sobre los archivos HTML en la carpeta.
fs.readdirSync('./').forEach((file) => {
    if (file.endsWith('.html')) {
        const filePath = `./${file}`;
        let html = fs.readFileSync(filePath, 'utf-8');

        // Reemplaza el div existente con el nuevo div.
        html = html.replace(
            /<nav class="nav-menu d-none d-lg-block".*?<\/nav>/s,
            newDiv
        );

        // Guarda el archivo modificado.
        fs.writeFileSync(filePath, html, 'utf-8');
        console.log(`Se ha modificado ${file}`);
    }
});