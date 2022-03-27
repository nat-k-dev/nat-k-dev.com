import React from "react";
//import "./projectDesignSystem.css";

const ProjectDesignSystem = () => {
    
    function changeTheme(e) {
        e.classList.toggle("onoffswitch_checked");
        for (var t = document.getElementsByClassName("theme"), o = 0; o < t.length; o++) {
            console.log((t[o].classList.contains("theme_color_project-inverse") || t[o].classList.contains("theme_color_project-default")) && (t[o].classList.toggle("theme_color_project-inverse"), t[o].classList.toggle("theme_color_project-default")));
        }
    }
    
    function toggleAccordion(e) {
        for (var t = e.childNodes, o = 0; o < t.length; o++) t[o].classList.contains("e-accordion__more") && (t[o].style.display = t[o].style.display ? "" : "block")
    }
    var bodyElement = document.body;
    bodyElement && bodyElement.addEventListener("click", function(e) {
        var t = e.target.closest(".onoffswitch"),
        o = e.target.closest(".e-accordion__short");
        t ? changeTheme(t) : o && toggleAccordion(o.parentNode)
    }, !0);
    
    return (
      <>
        <div class="page theme theme_color_project-default theme_size_default theme_space_default theme_gap_small">
        <div class="header">
            <div class="header__content">
            <div class="header__logo"></div>
            <div class="onoffswitch onoffswitch_checked">
                <div class="onoffswitch__button"></div>
            </div>
            </div>
        </div>
        <div class="layout">
            <div class="layout__container layout__container_size_m layout__container_align_center section section_indent-b_xxxxl">
            <div class="grid grid_m-columns_12 grid_col-gap_full grid_row-gap_full">
                <div class="grid__fraction grid__fraction_m-col_4">
                <div class="cover theme theme_color_project-brand card card_view_default">
                    <div class="cover__info card__content card__content_space-a_xxl">
                    <div class="cover__preview">
                        <div class="image"></div>
                    </div>
                    <div class="text text_view_primary text_size_xxl cover__text">
                        <div class="text__word text__word_width_l"></div>
                    </div>
                    <div class="text text_view_primary text_size_xxl cover__text">
                        <div class="text__word text__word_width_m"></div>
                    </div>
                    </div>
                    <div class="cover__footer card__footer card__footer_space-a_xxl">
                    <div class="button button_size_l button_width_full"></div>
                    </div>
                </div>
                </div>
                <div class="grid__fraction grid__fraction_m-col_8">
                <div class="text text_size_xxl text_view_primary text_type_h1">
                    <div class="text__word text__word_width_l"></div>
                </div>
                <div class="text text_view_primary text_size_m">
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                </div>
                <div class="text text_size_xl text_view_primary text_type_h2">
                    <div class="text__word text__word_width_l"></div>
                </div>
                <div class="text text_view_primary text_size_m">
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_l"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_m"></div>
                    <div class="text__word text__word_width_s"></div>
                </div>
                </div>
            </div>
            </div>
            <div class="layout__container theme theme_color_project-inverse section section_space-v_xxxxl">
            <div class="layout__container layout__container_size_m layout__container_align_center">
                <div class="text text_view_primary text_size_xl product__title">
                <div class="text__word text__word_width_l"></div>
                <div class="text__word text__word_width_l"></div>
                </div>
                <div class="grid grid_m-columns_12 grid_row-gap_half grid_col-gap_half">
                <div class="grid__fraction grid__fraction_m-col_3">
                    <div class="product card card_view_default card_border_all theme theme_color_project-inverse">
                    <div class="product__content card__content card__content_space-a_m">
                        <div class="product__image theme theme_color_project-default">
                        <div class="image"></div>
                        </div>
                    </div>
                    <div class="product__footer card__footer card__footer_space-a_m">
                        <div class="text text_size_m text_view_primary">
                        <div class="text__word text__word_width_l"></div>
                        </div>
                        <div class="text text_size_s text_view_primary">
                        <div class="text__word text__word_width_m"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid__fraction grid__fraction_m-col_3">
                    <div class="product card card_view_default card_border_all theme theme_color_project-inverse">
                    <div class="product__content card__content card__content_space-a_m">
                        <div class="product__image theme theme_color_project-default">
                        <div class="image"></div>
                        </div>
                    </div>
                    <div class="product__footer card__footer card__footer_space-a_m">
                        <div class="text text_size_m text_view_primary">
                        <div class="text__word text__word_width_l"></div>
                        </div>
                        <div class="text text_size_s text_view_primary">
                        <div class="text__word text__word_width_m"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid__fraction grid__fraction_m-col_3">
                    <div class="product card card_view_default card_border_all theme theme_color_project-inverse">
                    <div class="product__content card__content card__content_space-a_m">
                        <div class="product__image theme theme_color_project-default">
                        <div class="image"></div>
                        </div>
                    </div>
                    <div class="product__footer card__footer card__footer_space-a_m">
                        <div class="text text_size_m text_view_primary">
                        <div class="text__word text__word_width_l"></div>
                        </div>
                        <div class="text text_size_s text_view_primary">
                        <div class="text__word text__word_width_m"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid__fraction grid__fraction_m-col_3">
                    <div class="product card card_view_default card_border_all theme theme_color_project-inverse">
                    <div class="product__content card__content card__content_space-a_m">
                        <div class="product__image theme theme_color_project-default">
                        <div class="image"></div>
                        </div>
                    </div>
                    <div class="product__footer card__footer card__footer_space-a_m">
                        <div class="text text_size_m text_view_primary">
                        <div class="text__word text__word_width_l"></div>
                        </div>
                        <div class="text text_size_s text_view_primary">
                        <div class="text__word text__word_width_m"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer__content">
            <div class="text text_view_primary text_size_l">
                <div class="text__word text__word_width_l"></div>
                <div class="text__word text__word_width_s"></div>
            </div>
            <div class="text text_view_primary text_size_l">
                <div class="text__word text__word_width_l"></div>
            </div>
            </div>
        </div>
        </div>
      </>
    );
}

export default ProjectDesignSystem;