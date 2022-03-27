import React from "react";
import { Link } from "react-router-dom";
//import "./projectSportmaster.css";

const ProjectSportmaster = () => {
    return (
        <div class="layout main-color-theme">
            <header class=""></header>
            <main class="layout__main">

                <section class="section section-1">

                    <div class="section-1__banner dark-color-theme mb-banner-1">
                        
                        <div class="banner__gradient"></div>
                        <div class="banner__spatter-spray-dust"></div>

                        <div class="banner__text banner__text_bottom-margin flex-row font-s font-oblique font-small-caps">
                            <div class="location-pointer-icon"></div>
                            г.Москва, Варшавское ш., д.129
                        </div>
                        <div class="banner__text">
                            <div class="font-xxl font-oblique font-uppercase"><strong>Экипировочный центр хоккея</strong></div>
                            <div class="font-l font-oblique font-small-caps">Профессиональный выбор экипировки для хоккея!</div>
                        </div>
                        
                        <div class="banner__brands">
                            
                            <input type="radio" name="brands-slider" id="brands-slider-prev"checked />
                            <label class="brands__prev prev-btn-size" for="brands-slider-prev"></label>
                            
                            <input type="radio" name="brands-slider" id="brands-slider-next" />
                            <label class="brands__next prev-btn-size" for="brands-slider-next"></label>

                            <div class="banner__brands-list">
                                <div class="hover-scaled logo-ccm"></div>
                                <div class="hover-scaled logo-bauer"></div>
                                <div class="hover-scaled logo-warrior"></div>
                                <div class="hover-scaled logo-graf"></div>
                                <div class="hover-scaled logo-zarad"></div>
                                <div class="hover-scaled logo-fischer"></div>
                            </div>
                        </div>

                        <div class="banner__brands-mobile"></div>
                    </div>
                    <div class="section-1__bullits mb-banner-1">
                        <div class="bullit">
                            <div class="bullits__icon">
                                <i class="sprite sprite--e-icon_1"></i>
                            </div>
                            <div class="font-uppercase font-oblique font-s font-bold text-center-dv-pv">Персональная работа с клиентом</div>
                            <div class="q-mark"></div>
                            <div class="tip tip-1 font-s font-oblique">Работа с клиентом кандидата в мастера спорта по хоккею</div>
                        </div>
                        <div class="bullit">
                            <div class="bullits__icon">
                                <i class="sprite sprite--e-icon_2"></i>
                            </div>
                            <div class="font-uppercase font-oblique font-s font-bold text-center-dv-pv">Подбор хоккейной экипировки</div>
                            <div class="q-mark"></div>
                            <div class="tip tip-2 font-s font-oblique">Подбор экипировки под индивидуальные требования</div>
                        </div>
                        <div class="bullit">
                            <div class="bullits__icon">
                                <i class="sprite sprite--e-icon_3"></i>
                            </div>
                            <div class="font-uppercase font-oblique font-s font-bold text-center-dv-pv">Рекомендации по подбору моделей перчаток</div>
                        </div>
                        <div class="bullit">
                            <div class="bullits__icon">
                                <i class="sprite sprite--e-icon_4"></i>
                            </div>
                            <div class="font-uppercase font-oblique font-s font-bold text-center-dv-pv">Бросковая зона для тестирования клюшек</div>
                        </div>
                        <div class="bullit">
                            <div class="bullits__icon">
                                <i class="sprite sprite--e-icon_5"></i>
                            </div>
                            <div class="font-uppercase font-oblique font-s font-bold text-center-dv-pv">3D-сканер</div>
                        </div>
                    </div>
                </section>

                <section class="section section-2">
                    <div class="section-2__experts blue-color-theme">
                        
                        <div class="experts__gradient"></div>
                        <div class="experts__snow"></div>

                        <div class="experts__column">
                            <div class="font-xl font-bold font-oblique font-uppercase mb-experts-caption experts-caption_width">Наши эксперты</div>
                            <div class="expert">
                                <div class="expert__caption">
                                    <div class="expert__photo goldin"></div>
                                    <div class="font-l font-uppercase font-oblique font-bold">Александр Голдин</div>
                                </div>
                                <div class="expert__description font-oblique font-m">
                                    <div class="expert-description__item">Александр в хоккее с 1995 года</div>
                                    <div class="expert-description__item">Кандидат в мастера спорта</div>
                                    <div class="expert-description__item">Двукратный Чемпион Москвы (СДЮШОР Русь)</div>
                                    <div class="expert-description__item">Чемпион России (СДЮШОР Спартак)</div>
                                    <div class="expert-description__item">Лучший бомбардир Москвы (сезон 2000–2001)</div>
                                    <div class="expert-description__item">Серебряный призер Российской Хоккейной лиги</div>
                                </div>
                            </div>
                        </div>
                        <div class="experts__column">
                            <div class="expert">
                                <div class="expert__caption">
                                    <div class="expert__photo chadkin"></div>
                                    <div class="font-l font-uppercase font-oblique font-bold">Виктор Чадкин</div>
                                </div>
                                <div class="expert__description font-oblique font-m">
                                    <div class="expert-description__item">Постоянный участник любительских соревнований по хоккею</div>
                                    <div class="expert-description__item">Неоднократный победитель городских 
                                    и региональных соревнований 
                                    по слаломному катанию 
                                    на роликовых коньках </div>
                                    <div class="expert-description__item">Победитель соревнований 
                                    по сноуборду (freestyle)</div>
                                    <div class="expert-description__item">Участник соревнований 
                                    по агрессивным роллам 
                                    и скейтборду      </div>                      
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="section-2__goods">
                        <div class="font-xl font-bold font-oblique font-uppercase text-center">Эксперты рекомендуют</div>


                        <ul class="goods__container goods__container_dv">
                            <input type="radio" name="goods-slider-dv" id="goods-1-2-3" checked />
                            <li class="goods__item"> 
                                <div class="goods__content">
                                    <div class="goods__image goods-1"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">CCM</div>
                                    <div class="goods__description text-center font-m">Коньки FT2</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__content">
                                    <div class="goods__image goods-2"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">WARRIOR</div>
                                    <div class="goods__description text-center font-m">Перчатки Covert</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__content">
                                    <div class="goods__image goods-3"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">Bauer</div>
                                    <div class="goods__description text-center font-m">Коньки Vapor x2.9</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__nav">
                                    <label for="goods-4-5-6" class="goods__nav-btn goods__prev"></label>
                                    <label for="goods-4-5-6" class="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider-dv" id="goods-4-5-6" />
                            <li class="goods__item"> 
                                <div class="goods__content">
                                    <div class="goods__image goods-2"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">WARRIOR#2</div>
                                    <div class="goods__description text-center font-m">Перчатки Еще Одни</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__content">
                                    <div class="goods__image goods-3"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">Bauer#2</div>
                                    <div class="goods__description text-center font-m">Коньки Еще Одни</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__content">
                                    <div class="goods__image goods-1"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">CCM#2</div>
                                    <div class="goods__description text-center font-m">Коньки WTF</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__nav">
                                    <label for="goods-1-2-3" class="goods__nav-btn goods__prev"></label>
                                    <label for="goods-1-2-3" class="goods__nav-btn goods__next"></label>
                                </div>
                            </li>
                        </ul>


                        <ul class="goods__container goods__container_pv-mv">
                            <input type="radio" name="goods-slider" id="goods-1" checked />
                            <li class="goods__item"> 
                                <div class="goods__content">
                                    <div class="goods__image goods-1"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">CCM</div>
                                    <div class="goods__description text-center font-m">Коньки FT2</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__nav">
                                    <label for="goods-6" class="goods__nav-btn goods__prev"></label>
                                    <label for="goods-2" class="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-2" />
                            <li class="goods__item"> 
                                <div class="goods__content">
                                    <div class="goods__image goods-2"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">WARRIOR</div>
                                    <div class="goods__description text-center font-m">Перчатки Covert</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__nav">
                                    <label for="goods-1" class="goods__nav-btn goods__prev"></label>
                                    <label for="goods-3" class="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-3" />
                            <li class="goods__item"> 
                                <div class="goods__content">
                                    <div class="goods__image goods-3"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">Bauer</div>
                                    <div class="goods__description text-center font-m">Коньки Vapor x2.9</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__nav">
                                    <label for="goods-2" class="goods__nav-btn goods__prev"></label>
                                    <label for="goods-4" class="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-4" />
                            <li class="goods__item"> 
                                <div class="goods__content">
                                    <div class="goods__image goods-2"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">WARRIOR#2</div>
                                    <div class="goods__description text-center font-m">Перчатки Еще Одни</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__nav">
                                    <label for="goods-3" class="goods__nav-btn goods__prev"></label>
                                    <label for="goods-5" class="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-5"/>
                            <li class="goods__item">
                                <div class="goods__content">
                                    <div class="goods__image goods-3"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">Bauer#2</div>
                                    <div class="goods__description text-center font-m">Коньки Еще Одни</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__nav">
                                    <label for="goods-4" class="goods__nav-btn goods__prev"></label>
                                    <label for="goods-6" class="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-6"/>
                            <li class="goods__item">
                                <div class="goods__content">
                                    <div class="goods__image goods-1"></div>
                                    <div class="goods__caption font-bold text-center font-uppercase font-l">CCM#2</div>
                                    <div class="goods__description text-center font-m">Коньки WTF</div>
                                    <button class="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div class="goods__nav">
                                    <label for="goods-5" class="goods__nav-btn goods__prev"></label>
                                    <label for="goods-1" class="goods__nav-btn goods__next"></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="section section-3 dark-color-theme">
                    <div class="font-xl font-bold font-oblique font-uppercase text-center margin-hor-mv">технологии для ярких побед</div>

                    <div class="section-3__tech-container">
                        
                        <input type="radio" name="tech-tabs" id="tech-x-curv" checked />
                        <input type="radio" name="tech-tabs" id="tech-x-flow" />
                        <input type="radio" name="tech-tabs" id="tech-liteframe" />
                        <input type="radio" name="tech-tabs" id="tech-duraflex" />
                        <input type="radio" name="tech-tabs" id="tech-tuuk" />

                        <input type="radio" name="tech-prev-next" id="tech-nav-prev" checked />
                        <label for="tech-nav-prev" class="tech__prev-next-controls tech__prev"></label>
                        <input type="radio" name="tech-prev-next" id="tech-nav-next"/>
                        <label for="tech-nav-next" class="tech__prev-next-controls tech__next"></label>
                        

                        <div class="section-3__tech-nav">
                            <label for="tech-x-curv" class="tech__nav-btn tech__nav-x-curv">
                                <i class="tech__sprite sprite-tech-x-curv"></i>
                            </label>
                            <label for="tech-x-flow" class="tech__nav-btn tech__nav-x-flow">
                                <i class="tech__sprite sprite-tech-x-flow"></i>
                            </label>
                            <label for="tech-liteframe" class="tech__nav-btn tech__nav-liteframe">
                                <i class="tech__sprite sprite-tech-liteframe"></i>
                            </label>
                            <label for="tech-duraflex" class="tech__nav-btn tech__nav-duraflex">
                                <i class="tech__sprite sprite-tech-duraflex"></i>
                            </label>
                            <label for="tech-tuuk" class="tech__nav-btn tech__nav-tuuk">
                                <i class="tech__sprite sprite-tech-tuuk"></i>
                            </label>
                        </div>

                        <ul class="section-3__tech-content">
                            <li class="section-3__tech-item tech__content-x-curv">
                                <div class="tech__image-container">
                                    <div class="tech__image tech-img-1"></div>
                                </div>
                                <div class="tech__description">
                                    <div class="font-l font-bold font-uppercase font-oblique">3D LASTED CARBON CURV</div>
                                    <div class="font-m font-oblique">
                                        Легкий технологичный материал 3D lasted Carbon Curv® обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div class="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала 3D lasted Carbon Curv® точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                            <li class="section-3__tech-item tech__content-x-flow">
                                <div class="tech__image-container">
                                    <div class="tech__image tech-img-2"></div>
                                </div>
                                <div class="tech__description">
                                    <div class="font-l font-bold font-uppercase font-oblique">X-Flow lasted technologies</div>
                                    <div class="font-m font-oblique">
                                        Легкий технологичный материал X-FLOW обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div class="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала X-FLOW точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                            <li class="section-3__tech-item tech__content-liteframe">
                                <div class="tech__image-container">
                                    <div class="tech__image tech-img-3"></div>
                                </div>
                                <div class="tech__description">
                                    <div class="font-l font-bold font-uppercase font-oblique">liteframe new styled components</div>
                                    <div class="font-m font-oblique">
                                        Легкий технологичный материал LITEFRAME обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div class="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала LITEFRAME точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                            <li class="section-3__tech-item tech__content-duraflex">
                                <div class="tech__image-container">
                                    <div class="tech__image tech-img-4"></div>
                                </div>
                                <div class="tech__description">
                                    <div class="font-l font-bold font-uppercase font-oblique">DURAFLEX powerful framework</div>
                                    <div class="font-m font-oblique">
                                        Легкий технологичный материал DURAFLEX обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div class="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала DURAFLEX точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                            <li class="section-3__tech-item tech__content-tuuk">
                                <div class="tech__image-container">
                                    <div class="tech__image tech-img-5"></div>
                                </div>
                                <div class="tech__description">
                                    <div class="font-l font-bold font-uppercase font-oblique">TUUK SWEDISH HIGH QUALITY</div>
                                    <div class="font-m font-oblique">
                                        Легкий технологичный материал TUUK обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div class="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала TUUK точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                        </ul>
                        
                    </div>

                </section>
            </main>
            <footer class=""><Link to="/">Home</Link></footer>    
        </div>
    );
}

export default ProjectSportmaster;