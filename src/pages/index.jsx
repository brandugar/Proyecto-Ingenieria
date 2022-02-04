import React from "react";
import fotico from '../fotico.png';
import ProgressBar from "../components/ProgressBar";
const Index = () => {
    return (

        <div className="md:flex md:flex-no-wrap">
            <div className="w-80 sm:absolute sm:relative bg-teal-700 shadow  flex-col sm:justify-between sm:flex ">
                <div className="px-6">
                    <div className="px-6 h-80  flex items-center sm:flex-row flex-wrap">
                        <div className="h-40 w-60 mb-4 lg:mb-0 mr-4 items-center">
                            <img src={fotico} alt="" className="h-60 w-60  rounded-full overflow-hidden shadow-xl" />
                        </div>
                    </div>
                    <ul className="mt-12 h-screen">
                        <li className="justify-between text-gray-300 mb-6">
                            <div className="flex items-center underline">
                                <span className="text-lg  ml-2 font-bold">CONTACTO</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 items-center mb-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm  ml-2">3245649528</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-around text-gray-300 items-center mb-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm  ml-2">brandon.duque@udea.edu.co</span>
                            </div>
                        </li>
                        <li className="text-gray-300 flex w-full justify-between items-center mb-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm  ml-2">Bello, Antioquia</span>
                            </div>
                        </li>
                        <br/>
                        <br/>
                        <br/>
                        <li className="justify-between text-gray-300 mb-6">
                            <div className="flex items-center underline">
                                <span className="text-lg  ml-2 font-bold">HABILIDADES</span>
                            </div>
                        </li>
                        <li className=" text-gray-300 mb-6">
                            <div className="flex flex-col">
                                <span className="text-lg  ml-2 font-bold">Inglés</span>
                                <ProgressBar progressPercentage="70" />
                            </div>
                        </li>
                        <li className=" text-gray-300 mb-6">
                            <div className="flex flex-col">
                                <span className="text-lg  ml-2 font-bold">Java</span>
                                <ProgressBar progressPercentage="60" />
                            </div>
                        </li>
                        <li className=" text-gray-300 mb-6">
                            <div className="flex flex-col">
                                <span className="text-lg  ml-2 font-bold">JavaScript</span>
                                <ProgressBar progressPercentage="55" />
                            </div>
                        </li>
                        <li className=" text-gray-300 mb-6">
                            <div className="flex flex-col">
                                <span className="text-lg  ml-2 font-bold">HTML</span>
                                <ProgressBar progressPercentage="40" />
                            </div>
                        </li>
                        <li className=" text-gray-300 mb-6">
                            <div className="flex flex-col">
                                <span className="text-lg  ml-2 font-bold">React</span>
                                <ProgressBar progressPercentage="5" />
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="bg-green-100 w-full  absolute sm:relative ">
                <div>
                    <ul className="mt-12 sm:h-screen">
                        <li className="flex w-full justify-around text-gray-00 mb-6">
                            <div className="flex items-center">
                                <span className="text-6xl  ml-2 font-bold">Brandon Duque García</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-around text-gray-500 mb-6">
                            <div className="flex items-center underline">
                                <span className="text-3xl  font-bold">Sobre mi</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-around text-gray-500 mb-6">
                            <div className="flex flex-col items-center">
                                <p className='p-6 text-xl text-justify'>Soy una persona responsable, honesta, eficiente, dinámica y creativa con facilidad de
                                    adaptación, aprendo fácil, estoy dispuesto a asumir las diferentes actividades laborales
                                    que me asignen, con ganas de salir adelante con mi proyecto de vida al lado de mi familia.</p>
                                <p className='p-6 text-xl text-justify'>Estudiante de septimo semestre de ingeniería de sistemas en la universidad de Antioquia.
                                    Desarrollo competencias y habilidades de atención y servicio al cliente, diseñando
                                    productos y servicios específicos, proceso información, proyecto el mercado de acuerdo
                                    con el tipo de producto, intervengo en los programas de mejoramiento organizacional que
                                    se deriven de la función administrativa.</p>
                            </div>
                        </li>
                        <br />
                        <li className="flex w-full justify-around text-gray-500 mb-6">
                            <div className="flex items-center underline">
                                <span className="text-3xl  font-bold">Experiencia profesional</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-around text-gray-500 mb-6">
                            <div className="flex flex-col ">
                                <span className="text-2xl items-center font-bold">Indexer | Talent.com</span>
                                <span className="text-xl">Agosto 02 de 2021 - Actualmente</span>
                                <span className="text-xl">Trabajo actualmente en la empresa Talent.com programando spiders en JavaScript</span>
                            </div>
                        </li>
                        <br />
                        <li className="flex w-full justify-around text-gray-500 mb-6">
                            <div className="flex items-center underline">
                                <span className="text-3xl  font-bold">Formación Académica</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-around text-gray-500 mb-6">
                            <div className="flex flex-col ">
                                <span className="text-2xl font-bold">Ingeniería de Sistemas | Universidad de Antioquia</span>
                                <span className="text-xl">Agosto de 2017 - Actualmente</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Index;


