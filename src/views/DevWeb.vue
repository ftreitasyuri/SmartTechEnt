<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <main class="sm:flex text-primary bg-fifth">

        <!-- INICIO explicação -->
        <div class="w-[100%] min-h-[450px]">

            <div class=" text-center mb-2 p-4 bg-second text-fifth">
                <h1 class="sm:text-2xl "><strong>Transformando Ideias em Soluções Web Poderosas</strong></h1>
                <h1>Construindo aplicações robustas com Laravel e interfaces intuitivas com Vue.js</h1>

                <details>
                    <summary>Clique para ver a descrição sobre desenvolvimento web</summary>
                    <p class="text-sm text-wrap  sm:text-lg">
                        O desenvolvimentno WEB é a prática de criar aplicações e sites que podem ser acessados por meio
                        da internet. Através dessa
                        tecnologia, é possível desenvolver qualquer tipo de site e disponibilizá-lo online, permitindo o
                        acesso de pessoas em qualquer lugar do mundo.

                        Essa área também engloba o desenvolvimento de sites responsivos, que se adaptam a diferentes
                        tamanhos de tela — como smartphones e tablets — possibilitando uma experiência semelhante à de
                        um
                        aplicativo, diretamente pelo navegador.
                    </p>
                </details>

            </div>
            <h3 class="flex justify-center -mb-6 sm:text-2xl
                        
            "><strong class="m-5">Nossos Projetos</strong></h3>

            <!-- <div class="flex flex-wrap mx-auto gap-2 p-2 my-8 bg-fifth
                        
            "> -->

            <section class="flex flex-col p-4 gap-5 sm:justify-around">

                <div class="sm:flex gap-2 ">

                    <div class="border-8">

                        <img src="../assets/img_projects/CRM_DESKTOP.jpg"
                            class="w-full h-[25vh] sm:max-w-[20vw]  sm:max-h-[30vh] rounded-md hover:shadow-2xl hover:shadow-gray-900 cursor-pointer transition delay-50 duration-1000"
                            alt="Img_CRM">
                    </div>
                    <div class="hidden sm:flex bg-second text-fifth p-2 w-[60vw] gap-10 items-center">
                        <div class="max-w-[450px] w-[350px]">
                            <p><strong>Projeto: </strong>SMTE - CRM</p>
                            <p><strong>FrontEnd: </strong>VueJs V3</p>
                            <p><strong>BackEnd: </strong>API - Laravel V12</p>
                            <p><strong>Link Documentação: </strong><a
                                    href="https://crm-front-end-nine.vercel.app/documentacoes" target="_blank">Docs</a>
                            </p>
                        </div>
                        <div>
                            <p><strong>Link do Projeto: </strong><a href="https://crm-front-end-nine.vercel.app/" target="_blank" class="underline">SMTE - CRM</a></p>
                            <p><strong>Descrição: </strong>
                                Esse projeto foi desenvolvido com vue3 e consome uma API laravel 12 com proteção de
                                rotas. Usamos o sanctum para proteger as rotas. A API está hospedada no RailWay.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="sm:flex gap-2 ">

                    <div class="border-8">
                        <!-- <p class="">CRM - SMTE</p> -->

                        <img src="../assets/img_projects/CHAMADOS_DESKTOP.jpg"
                            class="w-full h-[25vh] sm:max-w-[20vw]  sm:max-h-[30vh] rounded-md hover:shadow-2xl hover:shadow-gray-900 cursor-pointer transition delay-50 duration-1000"
                            alt="Img_CRM">
                    </div>
                    <div class="hidden sm:flex bg-second text-fifth p-2 w-[60vw] gap-10 items-center">
                        <div class="max-w-[450px] w-[350px]">
                            <p><strong>Projeto: </strong>SMTE - Portal de Chamados</p>
                            <p><strong>FrontEnd: </strong>Larvel com Blade Components</p>
                            <p><strong>BackEnd: </strong>Laravel V11</p>
                            <!-- <p><strong>Link Documentação: </strong><a
                                    href="https://crm-front-end-nine.vercel.app/documentacoes" target="_blank">Docs</a>
                            </p> -->
                        </div>
                        <div>
                            <p><strong>Link do Projeto: </strong><a href="https://smartechenter.com/" target="_blank" class="underline">Portal de Chamados</a></p>
                            <p><strong>Descrição: </strong>
                                Esse projeto foi desenvolvido em Laravel na versão 11x e, foi hospedado na Hostinger com
                                MySQL
                            </p>
                        </div>
                    </div>

                </div>
                <div class="sm:flex gap-2 ">

                    <div class="border-8">
                        <!-- <p class="">CRM - SMTE</p> -->

                        <img src="../assets/img_projects/SITE_FORM_DESKTOP.jpg"
                            class="w-full h-[25vh] sm:max-w-[20vw]  sm:max-h-[30vh] rounded-md hover:shadow-2xl hover:shadow-gray-900 cursor-pointer transition delay-50 duration-1000"
                            alt="Img_CRM">
                    </div>
                    <div class="hidden sm:flex bg-second text-fifth p-2 w-[60vw] gap-10 items-center">
                        <div class="max-w-[450px] w-[350px]">
                            <p><strong>Projeto: </strong>SMTE - HR Management</p>
                            <p><strong>FrontEnd: </strong>VueJs V3</p>
                            <p><strong>BackEnd: </strong>API - Laravel V12</p>
                            <!-- <p><strong>Link Documentação: </strong><a
                                    href="https://crm-front-end-nine.vercel.app/documentacoes" target="_blank">Docs</a>
                            </p> -->
                        </div>
                        <div>
                            <p><strong>Link do Projeto: </strong><a href="https://hr-management-xi-eight.vercel.app/" target="_blank" class="underline">HR Management</a></p>
                            <p><strong>Descrição: </strong>
                                Esse projeto foi desenvolvido com vue3 e consome uma API laravel 11 com proteção de
                                rotas. Usamos o sanctum para proteger as rotas. A API está hospedada no RailWay.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="sm:flex gap-2 ">

                    <div class="border-8">
                        <!-- <p class="">CRM - SMTE</p> -->

                        <img src="../assets/img_projects/MUNDOLUA_DESKTOP.jpg"
                            class="w-full h-[25vh] sm:max-w-[20vw]  sm:max-h-[30vh] rounded-md hover:shadow-2xl hover:shadow-gray-900 cursor-pointer transition delay-50 duration-1000"
                            alt="Img_CRM">
                    </div>
                    <div class="hidden sm:flex bg-second text-fifth p-2 w-[60vw] gap-10 items-center">
                        <div class=" max-w-[450px] w-[350px]">
                            <p><strong>Projeto: </strong>SMTE - Mundo da Lua Doces</p>
                            <p><strong>FrontEnd: </strong>VueJs V3</p>
                            <!-- <p><strong>BackEnd: </strong>API - Laravel V12</p> -->
                            <!-- <p><strong>Link Documentação: </strong><a
                                    href="https://crm-front-end-nine.vercel.app/documentacoes" target="_blank">Docs</a>
                            </p> -->
                        </div>
                        <div>
                            <p><strong>Link do Projeto: </strong><a href="https://mundo-da-lua-bolos.vercel.app/" target="_blank" class="underline">Mundo da Lua</a></p>
                            <p><strong>Descrição: </strong>
                                Esse projeto foi com NextJS e não possui backend ainda
                            </p>
                        </div>
                    </div>

                </div>

            </section>




            <!-- AREA DE TÉCNOLOGIAS -->
            <!-- <div class="text-fifth p-2 sm:p-6
                        flex-row 
                        text-center 
                        
                         bg-second">
                <h1 class="sm:row-span-1 sm:col-span-5 text-2xl"><strong>Tecnologias</strong></h1> -->

            <!-- CONTEUDO GERAL -->
            <!-- <div class="sm:flex sm:row-span-1 sm:col-span-5
                            sm:gap-4            
                ">
                    <div class=" border rounded-md my-4 p-2">
                        <p><strong>HTML (HyperText Markup Language)</strong></p>
                        <img class="w-52 h-28 m-auto rounded-md my-2 shadow-lg shadow-slate-500"
                            src="../assets/images/html.png" alt="Image do logo do HTML">
                        <p>HTML é a linguagem base para a construção de páginas da web.
                            Ele define a estrutura e o conteúdo da página usando elementos, como títulos, parágrafos,
                            links
                            e imagens. Com o HTML,
                            é possível organizar e exibir informações na internet de maneira estruturada.</p>
                    </div>
                    <div class="border rounded-md my-4 p-2">
                        <p><strong>CSS (Cascading Style Sheets)</strong></p>
                        <img class="w-52 h-28 m-auto rounded-md my-2 shadow-lg shadow-slate-500"
                            src="../assets/images/css.jpg" alt="Image do logo do HTML">
                        <p>
                            CSS é uma linguagem usada para estilizar páginas da web.
                            Ele permite alterar cores, fontes, tamanhos e posicionamentos de elementos HTML,
                            tornando os sites visualmente atraentes e responsivos. Com CSS, você pode criar designs
                            consistentes e adaptáveis para diferentes dispositivos.


                        </p>
                    </div>
                    <div class="border rounded-md my-4 p-2">
                        <p><strong>TailWindCSS</strong></p>
                        <img class="w-52 h-28 m-auto rounded-md my-2 shadow-lg shadow-slate-500"
                            src="../assets/images/tailwindcss.png" alt="Image do logo do HTML">
                        <p>
                            Tailwind CSS é um framework de CSS utilitário que simplifica a criação de designs
                            estilizados.
                            Ele oferece classes pré-definidas para aplicar estilos diretamente no HTML, eliminando a
                            necessidade de
                            escrever estilos personalizados. Isso torna o desenvolvimento rápido, flexível e eficiente.
                        </p>
                    </div>
                    <div class="border rounded-md my-4 p-2">
                        <p><strong>JavaScript</strong></p>
                        <img class="w-52 h-28 m-auto rounded-md my-2 shadow-lg shadow-slate-500"
                            src="../assets/images/javascript.png" alt="Image do logo do HTML">
                        <p>
                            JavaScript é uma linguagem de programação que adiciona interatividade e
                            dinamismo às páginas da web. Com ele, você pode criar funcionalidades como menus
                            interativos,
                            validação de formulários,
                            animações e muito mais.
                            É amplamente usado tanto no front-end quanto no back-end.
                        </p>
                    </div>
                    <div class="border rounded-md my-4 p-2">
                        <p><strong>PHP (Hypertext Preprocessor)</strong></p>
                        <img class="w-52 h-28 m-auto rounded-md my-2 shadow-lg shadow-slate-500"
                            src="../assets/images/php.jpg" alt="Image do logo do HTML">
                        <p>
                            PHP é uma linguagem de programação para desenvolvimento web no lado do servidor.
                            Ele é usado para criar sites dinâmicos, conectar bancos de dados e processar formulários.
                            PHP é uma escolha popular para construir aplicações robustas e gerenciar conteúdo na web.
                        </p>
                    </div>
                </div> -->
            <!-- FIM CONTEUDO GERAL -->
            <!-- </div> -->
            <!-- FIM DE TÉCNOLOGIAS -->
        </div>
        <!-- FIM explicação -->


    </main>
</template>