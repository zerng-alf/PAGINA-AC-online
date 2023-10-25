
// Ejecutar comando en terminal  node news\cambios.js  para poder realizar los cambios///
// Si se requiere un cambio remplazar el div correspoondiente ////
// Modifcar si se require realizar otros cambios como img ///

const fs = require('fs');

// El nuevo div que quieres insertar.
const newDiv = 
`
<section id="blog" class="blog">
<div class="container " data-aos="fade-up">
    <div class="row pt-5 pb-5 g-5">
        <div class="col-lg-8 mt-3" style="background-color: #fff;">
            <article class="blog-details" id="">
                <div class="post-img">
                    <img src="" alt="" id="imgfluid" class="img-fluid">
                </div>
                <h1 class="title pt-3" id="title"></h1>
                <div class="meta-top">
                    <ul class="row">
                        <li class="d-flex align-items-center col-2"><i class="bi bi-person"></i> <a href=""
                                id="editor" class="pl-2"></a></li>
                        <li class="d-flex align-items-center col-5"><i class="bi bi-clock"></i> <a
                                href=""><time datetime="" id="fecha" class="pl-2"></time></a>
                        </li>
                    </ul>
                </div>
                <div class="content" id="content">
                    <!-- Contenido del artículo -->
                </div>
                <div id="secciones">
                    <!-- Aquí se agregarán las secciones desde JavaScript -->
                    <!-- <h3 id="subtitulo">¿Qué es el RPA Educativo?</h3>
                    <ul id="puntos">
                        <il id="Punto 1">El RPA educativo es la ejecución de la automatización de procesos robóticos en el entorno educativo para simplificar tareas administrativas, mejorar la personalización del aprendizaje y optimizar tiempo para la enseñanza creativa. Esta innovación utiliza robots de software para realizar tareas repetitivas y basadas en reglas, permitiendo que educadores y estudiantes se concentren en actividades más significativas.</il>
                        <il id=""></il>
                        <il id="Punto 3"></il>
                    </ul> -->
                </div>
                <div class="portfolio-info mt-3 mb-3 text-center">
                    <h4>
                        <a href="portfolio-details.html" title="More Details">Contáctanos</a>
                    </h4>
                </div>

                <div class="meta-bottom">
                    <div class="row">
                        <div class="d-flex align-items-center col-6">
                            <img src="blog-author-2.jpg" alt=""
                                class="img-fluid post-author-img flex-shrink-0">
                            <div class="post-meta">
                                <p class="post-author-list">Maria Doe</p>
                                <p class="post-date">
                                    <time datetime="2022-01-01">Jan 1, 2022</time>
                                </p>
                            </div>
                        </div>
                        <div class="col-6">
                            <i class="bi bi-folder"></i>
                            <ul class="cats">
                                <li><a href="#">Business</a></li>
                            </ul>
                            <i class="bi bi-tags"></i>
                            <ul class="tags">
                                <li><a href="#">Creative</a></li>
                                <li><a href="#">Tips</a></li>
                                <li><a href="#">Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div class="col-lg-4 mt-3" style="background-color: #fff;">
            <div class="sidebar">
<!-- <div class="sidebar-item search-form">
                    <h3 class="sidebar-title">Search</h3>
                    <form action="" class="mt-3">
                        <input type="text">
                        <button type="submit"><i class="bi bi-search"></i></button>
                    </form> -->

                <div class="sidebar-item recent-posts">
                    <h3 class="sidebar-title">Ultimos Posts</h3>
                    <div class="mt-3">
                        <div id="15" class="post-item mt-3">
                            <img src="assets/img/News/portada de recusos humanos-terminado.png" alt="">
                            <div>
                                <h4><a href="news15.html">Un vistazo al RPA en los ERPs educativos.</a></h4>
                                <time datetime="2023-10-09">Fer, 09/10/2023</time>
                            </div>
                        </div><!-- End recent post item-->

                        <div id="14" class="post-item">
                            <img src="assets/img/News/portada de integración-tamaño.png" alt="">
                            <div>
                                <h4><a href="news13.html">La integración de sistemas en el ERP.</a></h4>
                                <time datetime="2023-09-25">Fer, 25/09/2023</time>
                            </div>
                        </div><!-- End recent post item-->

                        <div id="13" class="post-item">
                            <img src="assets/img/News/portada de gestión financiera-tamaño.png" alt="">
                            <div>
                                <h4><a href="news12.html">Una gestión financiera efectiva.</a></h4>
                                <time datetime="2023-09-18">Fer, 18/9/2023</time>
                            </div>
                        </div><!-- End recent post item-->

                        <div id="12" class="post-item">
                            <img src="assets/img/News/portada de sistemas de gestión-tamaño.png" alt="">
                            <div>
                                <h4><a href="news11.html">Sistemas de gestión para la excelencia en el
                                        control de inventarios.</a>
                                </h4>
                                <time datetime="2023-09-11">Fer, 11/9/2023</time>
                            </div>
                        </div><!-- End recent post item style="margin-top: 0px;"-->

                        <div id="11" class="post-item">
                            <img src="assets/img/News/rendimiento docente-tamaño.png" alt="">
                            <div>
                                <h4><a href="news14.html">Seguimiento del rendimiento docente con un ERP
                                        educativo</a></h4>
                                <time datetime="2023-10-02">Fer, 02/10/2023</time>
                            </div>
                        </div><!-- End recent post item-->

                        <div id="10" class="post-item">
                            <img src="assets/img/News/automatizar erp-tamaño.png" alt="">
                            <div>
                                <h4><a href="news10.html">ERP en instituciones escolares</a></h4>
                                <time datetime="2023-09-18">Fer, 04/9/2023</time>
                            </div>
                        </div><!-- End recent post item-->

                        <div id="9" class="post-item">
                            <img src="assets/img/News/portada admisión-tamaño.png" alt="">
                            <div>
                                <h4><a href="news9.html">Un ERP educativo brinda una plataforma
                                        centralizada.</a>
                                </h4>
                                <time datetime="28/8/2023">Fer, 28/8/2023</time>
                            </div>
                        </div><!-- End recent post item-->

                        <div id="8" class="post-item mb-4">
                            <img src="assets/img/News/portada de artículo de robotica-tamaño.png" alt="">
                            <div>
                                <h4><a href="news8.html">La robótica abarca más que simplemente el
                                        seguimiento de instrucciones.</a></h4>
                                <time datetime="21/8/2023">Fer, 21/8/2023</time>
                            </div>
                        </div><!-- End recent post item-->

                    </div>
                </div><!-- End sidebar recent posts-->
            </div><!-- End Blog Sidebar -->
        </div>
    </div>
</div>
</section>
`;

// Itera sobre los archivos HTML en la carpeta.
fs.readdirSync('./').forEach((file) => {
    if (file.endsWith('.html')) {
        const filePath = `./${file}`;
        let html = fs.readFileSync(filePath, 'utf-8');

        // Reemplaza el div existente con el nuevo div.
        html = html.replace(
            /<section id="blog" class="blog">.*?<\/section>/s,
            newDiv
        );

        // Guarda el archivo modificado.
        fs.writeFileSync(filePath, html, 'utf-8');
        console.log(`Se ha modificado ${file}`);
    }
});