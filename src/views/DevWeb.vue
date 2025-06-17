<script>


</script>

<template>
    <main class="h-full w-screen grid
                
                bg-fifth
                text-primary">
        <!-- INICIOOOOOOO explicação -->
        <div class="text-center">
            <div class="grid items-center mt-4 mb-2 p-4 bg-second text-fifth" >
                <h1 class="sm:text-2xl sm:mb-4"><strong>O desenvolvimento WEB,</strong></h1>
                <hr>
                <p class="text-sm text-wrap  sm:text-lg">
                    é a prática de criar aplicações e sites que podem ser acessados por meio da internet. Através dessa
                    tecnologia, é possível desenvolver qualquer tipo de site e disponibilizá-lo online, permitindo o
                    acesso de pessoas em qualquer lugar do mundo.

                    Essa área também engloba o desenvolvimento de sites responsivos, que se adaptam a diferentes
                    tamanhos de tela — como smartphones e tablets — possibilitando uma experiência semelhante à de um
                    aplicativo, diretamente pelo navegador.
                </p>
            </div>
            <h3 class="flex justify-center -mb-6 sm:text-2xl
                        
            "><strong>Nossos Projetos</strong></h3>
            <div class="flex flex-wrap mx-auto gap-2 p-2 my-8 bg-fifth
                        lg:w-[90vw] 
            ">

                <section class="w-full flex flex-col sm:flex-row p-4 gap-5 sm:justify-around">
                    
                    <div class="hover:shadow-2xl hover:shadow-gray-900 cursor-pointer transition delay-50 duration-1000">

                        <p>CRM - SMTE</p>
                       <a href="https://crm-front-end-nine.vercel.app" target="_blank">
                         <img src="../assets/img_projects/CRM_DESKTOP.jpg" class="w-full h-[25vh] sm:max-w-[20vw]  sm:max-h-[30vh] border rounded-md" alt="Img_CRM">
                       </a>
                        
                    </div>
                    <!-- https://mundo-da-lua-bolos-afal81gzy-ftreitasyuri.vercel.app/ -->
                    <div class="hover:shadow-2xl hover:shadow-gray-900 cursor-pointer transition delay-50 duration-1000 ">
                        <p>Mundo Lunar Doces</p>
                        <a href="https://mundo-da-lua-bolos-afal81gzy-ftreitasyuri.vercel.app" target="_blank">
                            <img src="../assets/img_projects/MUNDOLUA_DESKTOP.jpg" class="w-full h-[25vh] sm:max-w-[20vw]  sm:max-h-[31vh] border rounded-md" alt="Img_CRM">
                        </a>
                        
                    </div>
                    <!-- https://smartechenter.com -->
                    <div class="hover:shadow-2xl hover:shadow-gray-900 cursor-pointer transition delay-50 duration-1000 ">
                        <p>Portal de Chamados - SMTE</p>
                        <a href="https://smartechenter.com" target="_blank">
                            <img src="../assets/img_projects/CHAMADOS_DESKTOP.jpg" class="w-full h-[25vh] sm:max-w-[20vw]  sm:max-h-[30vh] border rounded-md"/>
                        </a>
                        
                    </div>
              
                </section>
           

            </div>

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