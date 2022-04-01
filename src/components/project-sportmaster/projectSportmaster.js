import React, {useEffect} from "react";
import "./projectSportmaster.css";

const ProjectSportmaster = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="project-sportmaster layout main-color-theme">
            <header className=""></header>
            <main className="layout__main">

                <section className="section section-1">

                    <div className="section-1__banner dark-color-theme mb-banner-1">
                        
                        <div className="banner__gradient"></div>
                        <div className="banner__spatter-spray-dust"></div>

                        <div className="banner__text banner__text_bottom-margin flex-row font-s font-oblique font-small-caps">
                            <div className="location-pointer-icon"></div>
                            г.Москва, Варшавское ш., д.129
                        </div>
                        <div className="banner__text">
                            <div className="font-xxl font-oblique font-uppercase"><strong>Экипировочный центр хоккея</strong></div>
                            <div className="font-l font-oblique font-small-caps">Профессиональный выбор экипировки для хоккея!</div>
                        </div>
                        
                        <div className="banner__brands">
                            
                            <input type="radio" name="brands-slider" id="brands-slider-prev"checked />
                            <label className="brands__prev prev-btn-size" for="brands-slider-prev"></label>
                            
                            <input type="radio" name="brands-slider" id="brands-slider-next" />
                            <label className="brands__next prev-btn-size" for="brands-slider-next"></label>

                            <div className="banner__brands-list">
                                <div className="hover-scaled logo-ccm"></div>
                                <div className="hover-scaled logo-bauer"></div>
                                <div className="hover-scaled logo-warrior"></div>
                                <div className="hover-scaled logo-graf"></div>
                                <div className="hover-scaled logo-zarad"></div>
                                <div className="hover-scaled logo-fischer"></div>
                            </div>
                        </div>

                        <div className="banner__brands-mobile"></div>
                    </div>
                    <div className="section-1__bullits mb-banner-1">
                        <div className="bullit">
                            <div className="bullits__icon">
                                <i className="sprite sprite--e-icon_1"></i>
                            </div>
                            <div className="font-uppercase font-oblique font-s font-bold text-center-dv-pv">Персональная работа с клиентом</div>
                            <div className="q-mark"></div>
                            <div className="tip tip-1 font-s font-oblique">Работа с клиентом кандидата в мастера спорта по хоккею</div>
                        </div>
                        <div className="bullit">
                            <div className="bullits__icon">
                                <i className="sprite sprite--e-icon_2"></i>
                            </div>
                            <div className="font-uppercase font-oblique font-s font-bold text-center-dv-pv">Подбор хоккейной экипировки</div>
                            <div className="q-mark"></div>
                            <div className="tip tip-2 font-s font-oblique">Подбор экипировки под индивидуальные требования</div>
                        </div>
                        <div className="bullit">
                            <div className="bullits__icon">
                                <i className="sprite sprite--e-icon_3"></i>
                            </div>
                            <div className="font-uppercase font-oblique font-s font-bold text-center-dv-pv">Рекомендации по подбору моделей перчаток</div>
                        </div>
                        <div className="bullit">
                            <div className="bullits__icon">
                                <i className="sprite sprite--e-icon_4"></i>
                            </div>
                            <div className="font-uppercase font-oblique font-s font-bold text-center-dv-pv">Бросковая зона для тестирования клюшек</div>
                        </div>
                        <div className="bullit">
                            <div className="bullits__icon">
                                <i className="sprite sprite--e-icon_5"></i>
                            </div>
                            <div className="font-uppercase font-oblique font-s font-bold text-center-dv-pv">3D-сканер</div>
                        </div>
                    </div>
                </section>

                <section className="section section-2">
                    <div className="section-2__experts blue-color-theme">
                        
                        <div className="experts__gradient"></div>
                        <div className="experts__snow"></div>

                        <div className="experts__column">
                            <div className="font-xl font-bold font-oblique font-uppercase mb-experts-caption experts-caption_width">Наши эксперты</div>
                            <div className="expert">
                                <div className="expert__caption">
                                    <div className="expert__photo goldin"></div>
                                    <div className="font-l font-uppercase font-oblique font-bold">Александр Голдин</div>
                                </div>
                                <div className="expert__description font-oblique font-m">
                                    <div className="expert-description__item">Александр в хоккее с 1995 года</div>
                                    <div className="expert-description__item">Кандидат в мастера спорта</div>
                                    <div className="expert-description__item">Двукратный Чемпион Москвы (СДЮШОР Русь)</div>
                                    <div className="expert-description__item">Чемпион России (СДЮШОР Спартак)</div>
                                    <div className="expert-description__item">Лучший бомбардир Москвы (сезон 2000–2001)</div>
                                    <div className="expert-description__item">Серебряный призер Российской Хоккейной лиги</div>
                                </div>
                            </div>
                        </div>
                        <div className="experts__column">
                            <div className="expert">
                                <div className="expert__caption">
                                    <div className="expert__photo chadkin"></div>
                                    <div className="font-l font-uppercase font-oblique font-bold">Виктор Чадкин</div>
                                </div>
                                <div className="expert__description font-oblique font-m">
                                    <div className="expert-description__item">Постоянный участник любительских соревнований по хоккею</div>
                                    <div className="expert-description__item">Неоднократный победитель городских 
                                    и региональных соревнований 
                                    по слаломному катанию 
                                    на роликовых коньках </div>
                                    <div className="expert-description__item">Победитель соревнований 
                                    по сноуборду (freestyle)</div>
                                    <div className="expert-description__item">Участник соревнований 
                                    по агрессивным роллам 
                                    и скейтборду      </div>                      
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="section-2__goods">
                        <div className="font-xl font-bold font-oblique font-uppercase text-center">Эксперты рекомендуют</div>


                        <ul className="goods__container goods__container_dv">
                            <input type="radio" name="goods-slider-dv" id="goods-1-2-3" checked />
                            <li className="goods__item"> 
                                <div className="goods__content">
                                    <div className="goods__image goods-1"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">CCM</div>
                                    <div className="goods__description text-center font-m">Коньки FT2</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__content">
                                    <div className="goods__image goods-2"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">WARRIOR</div>
                                    <div className="goods__description text-center font-m">Перчатки Covert</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__content">
                                    <div className="goods__image goods-3"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">Bauer</div>
                                    <div className="goods__description text-center font-m">Коньки Vapor x2.9</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__nav">
                                    <label for="goods-4-5-6" className="goods__nav-btn goods__prev"></label>
                                    <label for="goods-4-5-6" className="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider-dv" id="goods-4-5-6" />
                            <li className="goods__item"> 
                                <div className="goods__content">
                                    <div className="goods__image goods-2"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">WARRIOR#2</div>
                                    <div className="goods__description text-center font-m">Перчатки Еще Одни</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__content">
                                    <div className="goods__image goods-3"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">Bauer#2</div>
                                    <div className="goods__description text-center font-m">Коньки Еще Одни</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__content">
                                    <div className="goods__image goods-1"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">CCM#2</div>
                                    <div className="goods__description text-center font-m">Коньки WTF</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__nav">
                                    <label for="goods-1-2-3" className="goods__nav-btn goods__prev"></label>
                                    <label for="goods-1-2-3" className="goods__nav-btn goods__next"></label>
                                </div>
                            </li>
                        </ul>


                        <ul className="goods__container goods__container_pv-mv">
                            <input type="radio" name="goods-slider" id="goods-1" checked />
                            <li className="goods__item"> 
                                <div className="goods__content">
                                    <div className="goods__image goods-1"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">CCM</div>
                                    <div className="goods__description text-center font-m">Коньки FT2</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__nav">
                                    <label for="goods-6" className="goods__nav-btn goods__prev"></label>
                                    <label for="goods-2" className="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-2" />
                            <li className="goods__item"> 
                                <div className="goods__content">
                                    <div className="goods__image goods-2"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">WARRIOR</div>
                                    <div className="goods__description text-center font-m">Перчатки Covert</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__nav">
                                    <label for="goods-1" className="goods__nav-btn goods__prev"></label>
                                    <label for="goods-3" className="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-3" />
                            <li className="goods__item"> 
                                <div className="goods__content">
                                    <div className="goods__image goods-3"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">Bauer</div>
                                    <div className="goods__description text-center font-m">Коньки Vapor x2.9</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__nav">
                                    <label for="goods-2" className="goods__nav-btn goods__prev"></label>
                                    <label for="goods-4" className="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-4" />
                            <li className="goods__item"> 
                                <div className="goods__content">
                                    <div className="goods__image goods-2"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">WARRIOR#2</div>
                                    <div className="goods__description text-center font-m">Перчатки Еще Одни</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__nav">
                                    <label for="goods-3" className="goods__nav-btn goods__prev"></label>
                                    <label for="goods-5" className="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-5"/>
                            <li className="goods__item">
                                <div className="goods__content">
                                    <div className="goods__image goods-3"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">Bauer#2</div>
                                    <div className="goods__description text-center font-m">Коньки Еще Одни</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__nav">
                                    <label for="goods-4" className="goods__nav-btn goods__prev"></label>
                                    <label for="goods-6" className="goods__nav-btn goods__next"></label>
                                </div>
                            </li>

                            <input type="radio" name="goods-slider" id="goods-6"/>
                            <li className="goods__item">
                                <div className="goods__content">
                                    <div className="goods__image goods-1"></div>
                                    <div className="goods__caption font-bold text-center font-uppercase font-l">CCM#2</div>
                                    <div className="goods__description text-center font-m">Коньки WTF</div>
                                    <button className="goods__btn-buy text-center font-uppercase font-bold font-btn-buy">Купить</button>
                                </div>
                                <div className="goods__nav">
                                    <label for="goods-5" className="goods__nav-btn goods__prev"></label>
                                    <label for="goods-1" className="goods__nav-btn goods__next"></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="section section-3 dark-color-theme">
                    <div className="font-xl font-bold font-oblique font-uppercase text-center margin-hor-mv">технологии для ярких побед</div>

                    <div className="section-3__tech-container">
                        
                        <input type="radio" name="tech-tabs" id="tech-x-curv" checked />
                        <input type="radio" name="tech-tabs" id="tech-x-flow" />
                        <input type="radio" name="tech-tabs" id="tech-liteframe" />
                        <input type="radio" name="tech-tabs" id="tech-duraflex" />
                        <input type="radio" name="tech-tabs" id="tech-tuuk" />

                        <input type="radio" name="tech-prev-next" id="tech-nav-prev" checked />
                        <label for="tech-nav-prev" className="tech__prev-next-controls tech__prev"></label>
                        <input type="radio" name="tech-prev-next" id="tech-nav-next"/>
                        <label for="tech-nav-next" className="tech__prev-next-controls tech__next"></label>
                        

                        <div className="section-3__tech-nav">
                            <label for="tech-x-curv" className="tech__nav-btn tech__nav-x-curv">
                                <i className="tech__sprite sprite-tech-x-curv"></i>
                            </label>
                            <label for="tech-x-flow" className="tech__nav-btn tech__nav-x-flow">
                                <i className="tech__sprite sprite-tech-x-flow"></i>
                            </label>
                            <label for="tech-liteframe" className="tech__nav-btn tech__nav-liteframe">
                                <i className="tech__sprite sprite-tech-liteframe"></i>
                            </label>
                            <label for="tech-duraflex" className="tech__nav-btn tech__nav-duraflex">
                                <i className="tech__sprite sprite-tech-duraflex"></i>
                            </label>
                            <label for="tech-tuuk" className="tech__nav-btn tech__nav-tuuk">
                                <i className="tech__sprite sprite-tech-tuuk"></i>
                            </label>
                        </div>

                        <ul className="section-3__tech-content">
                            <li className="section-3__tech-item tech__content-x-curv">
                                <div className="tech__image-container">
                                    <div className="tech__image tech-img-1"></div>
                                </div>
                                <div className="tech__description">
                                    <div className="font-l font-bold font-uppercase font-oblique">3D LASTED CARBON CURV</div>
                                    <div className="font-m font-oblique">
                                        Легкий технологичный материал 3D lasted Carbon Curv® обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div className="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала 3D lasted Carbon Curv® точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                            <li className="section-3__tech-item tech__content-x-flow">
                                <div className="tech__image-container">
                                    <div className="tech__image tech-img-2"></div>
                                </div>
                                <div className="tech__description">
                                    <div className="font-l font-bold font-uppercase font-oblique">X-Flow lasted technologies</div>
                                    <div className="font-m font-oblique">
                                        Легкий технологичный материал X-FLOW обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div className="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала X-FLOW точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                            <li className="section-3__tech-item tech__content-liteframe">
                                <div className="tech__image-container">
                                    <div className="tech__image tech-img-3"></div>
                                </div>
                                <div className="tech__description">
                                    <div className="font-l font-bold font-uppercase font-oblique">liteframe new styled components</div>
                                    <div className="font-m font-oblique">
                                        Легкий технологичный материал LITEFRAME обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div className="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала LITEFRAME точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                            <li className="section-3__tech-item tech__content-duraflex">
                                <div className="tech__image-container">
                                    <div className="tech__image tech-img-4"></div>
                                </div>
                                <div className="tech__description">
                                    <div className="font-l font-bold font-uppercase font-oblique">DURAFLEX powerful framework</div>
                                    <div className="font-m font-oblique">
                                        Легкий технологичный материал DURAFLEX обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div className="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала DURAFLEX точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                            <li className="section-3__tech-item tech__content-tuuk">
                                <div className="tech__image-container">
                                    <div className="tech__image tech-img-5"></div>
                                </div>
                                <div className="tech__description">
                                    <div className="font-l font-bold font-uppercase font-oblique">TUUK SWEDISH HIGH QUALITY</div>
                                    <div className="font-m font-oblique">
                                        Легкий технологичный материал TUUK обеспечивает прочность 
                                        и жесткость ботинок, что улучшает маневренность на поворотах и виражах. </div>
                                    <div className="font-m font-oblique">
                                        После процесса термоформовки ботинок 
                                        из материала TUUK точно повторяет форму стопы и плотно сидит 
                                        по ноге.</div>                                
                                </div>
                            </li>
                        </ul>
                        
                    </div>

                </section>
            </main>
        </div>
    );
}

export default ProjectSportmaster;