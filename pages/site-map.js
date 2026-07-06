import React from 'react';
import PageWrapper from '../components/PageWrapper';

const bodyHtml = `<style id="wpr-usedcss">img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}body{background-color:#fff}.form .gform_wrapper .gform_footer input[type=submit],.search--new__field,.search__field,body{font-family:"Proxima Nova",Arial,SourceSansPro,"Segoe UI",Roboto,"Helvetica Neue",sans-serif}body,html{overflow-x:hidden}.link,body{position:relative}.btn-n--black:after,.btn-n--black:before,.form .atachfile .atachfile_link:before,.link-n--white:after,.link-n--white:before{filter:brightness(0) invert(1)}@font-face{font-family:'Proxima Nova';src:url(https://eleks.com/wp-content/themes/eleks/fonts/ProximaNova/ProximaNova-Regular.woff2) format('woff2'),url(https://eleks.com/wp-content/themes/eleks/fonts/ProximaNova/ProximaNova-Regular.woff) format('woff');font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:'Proxima Nova';src:url(https://eleks.com/wp-content/themes/eleks/fonts/ProximaNova/ProximaNova-Light.woff2) format('woff2'),url(https://eleks.com/wp-content/themes/eleks/fonts/ProximaNova/ProximaNova-Light.woff) format('woff');font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:'Proxima Nova';src:url(https://eleks.com/wp-content/themes/eleks/fonts/ProximaNova/ProximaNova-Semibold.woff2) format('woff2'),url(https://eleks.com/wp-content/themes/eleks/fonts/ProximaNova/ProximaNova-Semibold.woff) format('woff');font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:'Proxima Nova';src:url(https://eleks.com/wp-content/themes/eleks/fonts/ProximaNova/ProximaNova-Bold.woff2) format('woff2'),url(https://eleks.com/wp-content/themes/eleks/fonts/ProximaNova/ProximaNova-Bold.woff) format('woff');font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Signifier;src:url(https://eleks.com/wp-content/themes/eleks/fonts/signifier/signifier-extralight.woff2) format('woff2');font-display:swap;font-weight:300;font-style:normal}*,:after,:before{box-sizing:border-box}html{font-size:16px;-moz-text-size-adjust:none;text-size-adjust:none;-webkit-text-size-adjust:none}@media (max-width:1700px){html{font-size:15px}}@media (max-width:1440px){html{font-size:14px}}body{color:#1e1d28;font-size:1rem;font-weight:400;line-height:1.63;margin:0}.title-h1{font-family:Signifier}.title,strong{font-weight:600}body a{color:inherit;display:inline;padding:0}body video{max-width:initial}.preload *{transition:none!important}a{transition:text-decoration-color .3s}a:hover{text-decoration-color:transparent}.no-js .sr{opacity:1!important}.title{color:#1e1d28;font-size:3.75rem;line-height:1.17;margin:0 0 1.5rem}@media (max-width:1440px),(max-height:768px){.title{font-size:3.571rem}}@media (max-width:640px){.title{font-size:2.5rem}}.title-h1{font-size:32px;line-height:1.25;font-weight:300;margin:0}@media (min-width:1280px){.title-h1{font-size:56px;line-height:1}}@media (min-width:1680px){.title-h1{font-size:64px}}@media (min-width:1920px){.title-h1{font-size:72px}}@media (min-width:2560px){.title-h1{font-size:88px}}.title-h2{font-size:24px;line-height:32px;font-weight:300;margin:0 0 32px}@media (min-width:768px){.title-h2{margin-bottom:56px}}@media (min-width:1280px){.title-h2{font-size:32px;line-height:40px;margin-bottom:64px}}@media (min-width:1680px){.title-h2{font-size:40px;line-height:48px}}@media (min-width:1920px){.title-h2{font-size:48px;line-height:56px;margin-bottom:80px}}@media (min-width:2560px){.title-h2{font-size:56px;line-height:64px;margin-bottom:120px}}.title-h4{font-size:20px;font-weight:300;line-height:24px;margin:0}@media (min-width:1280px){.title-h4{font-size:24px;line-height:32px}}@media (min-width:1680px){.title-h4{font-size:28px;line-height:36px}}@media (min-width:1920px){.title-h4{font-size:32px;line-height:40px}}@media (min-width:2560px){.title-h4{font-size:40px;line-height:48px}}.header__menu--new .menu-title,.title-h5{font-size:16px;font-weight:600;line-height:20px;margin:0}@media (min-width:1280px){.header__menu--new .menu-title,.title-h5{line-height:24px}}@media (min-width:1920px){.header__menu--new .menu-title,.title-h5{font-size:20px;line-height:24px}}@media (min-width:2560px){.header__menu--new .menu-title,.title-h5{font-size:24px;line-height:32px}}.description{color:#373737;font-size:1.25rem;line-height:1.5;margin:0 auto 3rem;max-width:800px;text-align:center}@media (max-width:1440px),(max-height:768px){.description{font-size:1.143rem}}.description a{color:#0045e6;font-weight:600;text-decoration:none}.description-n{font-size:14px;line-height:1.43;font-weight:400}@media (min-width:1280px){.description-n{font-size:15px;line-height:1.6}}@media (min-width:1920px){.description-n{font-size:16px;line-height:1.5}}@media (min-width:2560px){.description-n{font-size:20px;line-height:1.6}}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyButtonDecline,.header__menu>li .block-group .dropdown-item{text-align:left}.img-fluid{max-width:100%;height:auto}img[src\$=".svg"]{height:auto;width:auto}img{-o-object-fit:contain;object-fit:contain;vertical-align:top}.pl-big{padding-left:16px}@media (min-width:768px){.pl-big{padding-left:64px}}@media (min-width:960px){.pl-big{padding-left:80px}}@media (min-width:1280px){.pl-big{padding-left:208px}}@media (min-width:1440px){.pl-big{padding-left:224px}}.link{align-items:center;cursor:pointer;display:inline-flex;outline:0;text-decoration:none}.slick-dots li button:after{height:120%;transition:transform .3s cubic-bezier(.4,0,0,1)}.link-n{align-items:center;border-left:7px solid transparent;border-right:7px solid transparent;color:inherit;display:inline-flex;font-size:14px;font-weight:700;gap:8px;line-height:1.43;margin-left:-7px;margin-right:-7px;position:relative;text-decoration:none}.link-n:after,.link-n:before{background-image:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L9 1M9 1H1M9 1V9' stroke='%231E1D28'/%3E%3C/svg%3E%0A");background-size:contain;background-repeat:no-repeat;background-position:center;content:"";flex:0 0 10px;height:10px;transition:transform .3s;width:10px}.link-n:before{margin-right:-18px;transform:scale(0)}.link-n__text{transition:transform .3s}.link-n:focus-visible:before,.link-n:hover:before{transform:scale(1)}.link-n:focus-visible:after,.link-n:hover:after{transform:scale(0)}.link-n:focus-visible .link-n__text,.link-n:hover .link-n__text{transform:translateX(18px)}.link-n:focus-visible{border-radius:20px;outline-offset:4px;outline:#0045E6 solid 2px}.link-n--white{color:#fff}.section{padding-bottom:130px;padding-top:110px}@media (max-width:1440px){.section{padding-bottom:100px;padding-top:80px}}@media (max-width:960px){.title br{display:none}.section{padding-bottom:55px;padding-top:55px}}.section--black{background-color:#1e1d28}.section-n{padding-top:64px;padding-bottom:64px}@media (min-width:768px){.section-n{padding-top:80px;padding-bottom:80px}}@media (min-width:1280px){.link-n{font-size:15px;line-height:1.6}.section-n{padding-top:120px;padding-bottom:120px}}@media (min-width:1920px){.pl-big{padding-left:304px}.link-n{font-size:16px;line-height:1.5}.section-n{padding-top:160px;padding-bottom:160px}}@media (min-width:2560px){.pl-big{padding-left:400px}.link-n{font-size:20px;line-height:1.6}.link-n:after,.link-n:before{background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6569 13.6566L13.6569 2.34291M2.34314 2.34292L13.6569 2.34291M13.6569 2.34291L2.34314 13.6566' stroke='%231E1D28'/%3E%3C/svg%3E%0A");flex-basis:16px;height:16px;width:16px}.link-n:before{margin-right:-24px}.link-n:focus-visible .link-n__text,.link-n:hover .link-n__text{transform:translateX(24px)}.section-n{padding-top:240px;padding-bottom:240px}}[id^=pl-]::before{content:"";display:block;height:72px;margin-top:-72px;visibility:hidden}@media (min-width:768px){[id^=pl-]::before{height:80px;margin-top:-80px}}@media (min-width:1280px){[id^=pl-]::before{height:86px;margin-top:-86px}}.skip-the-section{align-self:flex-start;margin-top:-40px;opacity:0;position:absolute;transition:opacity .1s cubic-bezier(.4,.2,.4,1);z-index:-1}.skip-the-section:after,.skip-the-section:before{background-image:url("data:image/svg+xml,%3Csvg width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4L5 8M9 4L5 8M5 8L5 1.74846e-07' stroke='%231E1D28'/%3E%3C/svg%3E%0A")}.skip-the-section:focus-visible{opacity:1;z-index:inherit}.skip-the-section:focus-visible:before{transform:scale(0)}.skip-the-section:focus-visible:after{transform:scale(1)}.skip-the-section:focus-visible .link-n__text{transform:translateX(0)}.slider-with-custom-cursor .slick-track{cursor:none;position:relative}.container-n,.search--new{padding-left:16px;padding-right:16px;width:100%}@media (min-width:768px){.container-n,.search--new{padding-left:8px;padding-right:8px}}@media (min-width:1280px){.skip-the-section{margin-top:-56px}.container-n,.search--new{padding-left:24px;padding-right:24px}}@media (min-width:1440px){[id^=pl-]::before{height:112px;margin-top:-112px}.container-n,.search--new{padding-left:56px;padding-right:56px}}@media (min-width:2560px){[id^=pl-]::before{height:136px;margin-top:-136px}.skip-the-section{margin-top:-72px}.container-n,.search--new{padding-left:88px;padding-right:88px;max-width:2560px;margin-left:auto;margin-right:auto}}.row{display:flex}[dir=rtl] .btn-n:before{margin-left:-18px;margin-right:0}[dir=rtl] .btn-n:focus-visible .btn-n__text,[dir=rtl] .btn-n:hover .btn-n__text{transform:translateX(-18px)}.btn-n{-webkit-appearance:none;align-items:center;border-radius:48px;border:none;cursor:pointer;display:inline-flex;font-size:14px;font-weight:700;gap:8px;line-height:16px;outline:0;padding:12px 16px;text-align:center;text-decoration:none;transition-duration:.3s;transition-property:background-color,color;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}@media (min-width:1280px){.btn-n{font-size:15px;line-height:24px;padding-left:20px;padding-right:20px}}@media (min-width:1920px){.btn-n{font-size:16px;line-height:24px;padding:16px 24px}}.btn-n:after,.btn-n:before{background-image:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L9 1M9 1H1M9 1V9' stroke='%231E1D28'/%3E%3C/svg%3E%0A");background-size:contain;background-repeat:no-repeat;background-position:center;content:"";flex:0 0 10px;height:10px;transition:transform .3s;width:10px}.btn-n:before{margin-right:-18px;transform:scale(0)}.btn-n__text{transition:transform .3s}.btn-n:focus-visible:before,.btn-n:hover:before{transform:scale(1)}.btn-n:focus-visible:after,.btn-n:hover:after{transform:scale(0)}.btn-n:focus-visible .btn-n__text,.btn-n:hover .btn-n__text{transform:translateX(18px)}@media (min-width:2560px){[dir=rtl] .btn-n:before{margin-left:-24px;margin-right:0}[dir=rtl] .btn-n:focus-visible .btn-n__text,[dir=rtl] .btn-n:hover .btn-n__text{transform:translateX(-24px)}.btn-n{font-size:20px;line-height:32px;padding-left:32px;padding-right:32px}.btn-n:after,.btn-n:before{background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6569 13.6566L13.6569 2.34291M2.34314 2.34292L13.6569 2.34291M13.6569 2.34291L2.34314 13.6566' stroke='%231E1D28'/%3E%3C/svg%3E%0A");flex-basis:16px;height:16px;width:16px}.btn-n:before{margin-right:-24px}.btn-n:focus-visible .btn-n__text,.btn-n:hover .btn-n__text{transform:translateX(24px)}}.btn-n:focus-visible{outline-offset:1px;outline:#0045E6 solid 2px}.btn-n--black{background-color:#1e1d28;color:#fff}.btn-n--black:focus-visible,.btn-n--black:hover{background-color:#0045e6}.btn-n--gray{background-color:#e9edf3;color:#1e1d28}.btn-n--gray:focus-visible,.btn-n--gray:hover{background-color:#c7c7d6}.btn-n--small{padding:8px 12px}@media (min-width:1920px){.btn-n--small{padding:8px 16px}}@media (min-width:2560px){.btn-n--small{padding-left:24px;padding-right:24px}}.form ul{margin:0;padding:0;list-style:none}.form__tooltip{animation-name:fadeInLeft;background-color:#fff;border-radius:5px;bottom:0;box-shadow:0 25px 70px 0 rgba(29,55,99,.15);color:#4a4a4a;display:none;font-size:.875rem;left:100%;line-height:1.64;margin-left:10px;padding:20px;position:absolute;width:350px;z-index:2}.form__tooltip:after{border-bottom:10px solid transparent;border-right:10px solid #fff;border-top:10px solid transparent;bottom:15px;content:"";position:absolute;right:100%}@media (max-width:1000px){.form__tooltip{animation-name:fadeInUp;bottom:100%;left:0;margin:0 0 20px;right:0;width:auto}.form__tooltip:after{border-bottom:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #fff;right:auto;left:20px;top:100%}}.form__info{color:#c7c7d6;font-size:12px;grid-column:span 2;line-height:16px;margin:-8px 0 0;order:9}.form__info a{color:#fff;text-decoration:underline}.form .gform_wrapper .gform_footer input[type=submit],.form .gform_wrapper .gform_footer input[type=submit]:focus,.form .gform_wrapper .gform_footer input[type=submit]:hover,.header--new__screen-reader-shortcut,.header__menu .dropdown-item,.header__menu .nav-link,.header__menu--new .about-us .dropdown-menu>.menu-item>.dropdown-item,.header__menu--new .blog .dropdown-menu>.menu-item>.dropdown-item,.header__menu--new .dropdown-item,.header__menu--new .nav-link,.header__menu--new .services .block-group .dropdown-menu>.menu-item>.dropdown-item,.lang--new__link,.video{text-decoration:none}.form input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),.form textarea{background:0 0;border-radius:0;border:none;border-bottom:1px solid rgba(255,255,255,.3);color:#fff;font-family:inherit;font-size:16px;line-height:25px;outline:0;padding:23px 16px 7px;transition:border-bottom-color .3s;vertical-align:top;-webkit-appearance:none;-webkit-border-radius:0;width:100%}.form input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):-webkit-autofill,.form textarea:-webkit-autofill{-webkit-text-fill-color:#fff!important;-webkit-box-shadow:0 0 0 1000px #1e1d28 inset!important}.form input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):-webkit-autofill:focus,.form input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):-webkit-autofill:hover,.form textarea:-webkit-autofill:focus,.form textarea:-webkit-autofill:hover{-webkit-text-fill-color:#fff!important;-webkit-box-shadow:0 0 0 1000px #1e1d28 inset!important}.form input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file])::-moz-placeholder,.form textarea::-moz-placeholder{color:#8a8a8a}.form input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file])::placeholder,.form textarea::placeholder{color:#8a8a8a}.form .formrowlist{display:grid!important;grid-gap:24px 16px;grid-template-columns:1fr 1fr}.form .formrow{position:relative}.form .formrow .gfield{margin-top:0}.form .formrow .gfield_label{color:#fff;font-size:16px;font-weight:400;left:16px;line-height:24px;max-width:100%;overflow:hidden;position:absolute;text-overflow:ellipsis;top:15px;transition-duration:.3s;transition-property:transform,opacity,font-size;white-space:nowrap}.form .formrow__name{order:1}.form .formrow__phone{order:3}.form .formrow__company{grid-column:span 2;order:5}@media (max-width:480px){.form__info{grid-column:span 1}.form .formrowlist{grid-template-columns:1fr}.form .formrow__company{grid-column:span 1}}.form .formrow__email{order:2}.form .formrow__country{order:4}.form .formrow__message{grid-column:span 2;order:6;position:relative}@media (max-width:480px){.form .formrow__message{grid-column:span 1}}.form .formrow__message textarea{overflow:hidden;padding-right:50px}.form .formrow__attach{grid-column:span 2;order:7}@media (max-width:480px){.form .formrow__attach{grid-column:span 1}}.form .formrow__attach .ginput_preview{background-color:#f4f5f7;display:flex;margin-bottom:24px;padding:10px 16px 10px 38px;position:relative}.form .formrow__attach .ginput_preview img{cursor:pointer;flex:0 0 15px;margin-left:-22px;margin-right:8px;opacity:0;position:relative;z-index:1}.form .formrow__attach .ginput_preview strong{display:inline-block;font-size:14px;font-weight:400;line-height:24px;position:relative;word-break:break-all}.form .formrow--checkbox .gfield_checkbox input:checked~label{font-weight:400!important}.form .formrow__attach .ginput_preview strong:after,.form .formrow__attach .ginput_preview strong:before{background:#000;content:"";height:1px;left:-21px;opacity:.5;position:absolute;top:11px;width:12px}.form .formrow__attach .ginput_preview strong:after{transform:rotate(-45deg)}.form .formrow__attach .ginput_preview strong:before{transform:rotate(45deg)}.form .formrow--checkbox{grid-column:span 2;margin-top:-24px;order:8}.form .formrow--checkbox .gfield_checkbox input{position:absolute;opacity:0}.form .formrow--checkbox .gfield_checkbox input:focus-visible~label:after{outline-offset:1px;outline:#0045E6 solid 2px}.form .formrow--checkbox .gfield_checkbox input:checked~label:before{opacity:1}.form .formrow--checkbox .gfield_checkbox input:checked~label:after{border-color:rgba(255,255,255,.8)}.form .formrow--checkbox .gfield_checkbox label{align-items:center;color:#fff;display:flex;font-size:12px;line-height:16px;max-width:100%;min-height:20px;padding-left:48px;padding-top:1px;position:relative}.form .formrow--checkbox .gfield_checkbox label:after,.form .formrow--checkbox .gfield_checkbox label:before{content:"";position:absolute;transition-duration:.3s}.form .formrow--checkbox .gfield_checkbox label:before{border-bottom:2px solid #fff;border-right:2px solid #fff;height:11px;left:23px;opacity:0;top:3px;transform:rotate(45deg);transition-property:opacity;width:6px}@media (min-width:1280px){.form__info{font-size:14px;line-height:24px}.form .formrowlist{grid-gap:24px 40px}.form .formrow--checkbox .gfield_checkbox label{font-size:14px;line-height:24px;padding-top:0}.form .formrow--checkbox .gfield_checkbox label:before{top:4px}}.form .formrow--checkbox .gfield_checkbox label:after{border:2px solid rgba(255,255,255,.4);border-radius:2px;height:20px;left:16px;top:0;transition-property:border-color;width:20px}.form .formrow--checkbox .gfield_checkbox li:hover label:after{border-color:rgba(255,255,255,.6)}.form .formrow__infocus input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),.form .formrow__infocus textarea{border-bottom-color:#fff}.form .formrow__infocus .form__tooltip{animation-duration:.5s;display:block}.form .formrow--changed .gfield_label,.form .formrow__infocus .gfield_label{font-size:12px;line-height:16px;opacity:.4;transform:translateY(-7px)}.form .gfield_label{color:rgba(29,55,99,.5);left:30px}.form .gform_wrapper{margin:0}.form .gform_wrapper .field_description_below .gfield_description{color:#939393;font-size:12px;line-height:16px;padding-right:0;padding-top:5px}.form .gform_wrapper .field_description_below .validation_message{bottom:-18px;color:#ff4925;font-size:12px;font-weight:400;line-height:16px;left:16px;max-width:100%;overflow:hidden;padding-top:5px;position:absolute;right:0;text-overflow:ellipsis;white-space:nowrap}.form .gform_wrapper textarea.medium{height:56px;min-height:56px;resize:vertical}.form .gform_wrapper .gfield_required{display:inline-block;color:#fff;margin-left:2px;opacity:.7}.form .gform_wrapper .charleft,.form .gform_wrapper .gform_validation_errors{display:none}.form .gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error{background-color:transparent;border:none;margin-bottom:0!important;max-width:100%!important;padding:0}.form .gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error:not(.gf_left_half):not(.gf_right_half){max-width:100%!important}.form .gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error .gfield_label{color:#ff4925!important;margin-top:0}.form .gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),.form .gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error textarea{border:none!important;border-bottom:1px solid #ff4925!important;color:#ff4925!important;margin-bottom:0}.form .gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error .ginput_container{margin-top:0}.form .gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error .validation_message{bottom:-18px;color:#ff4925;font-size:12px;line-height:16px;font-weight:400;padding-top:5px!important;position:absolute}.form .gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error .gfield_required{color:#ff4925}.form .gform_wrapper.gform_validation_error .gform_body .formrow--changed ul li.gfield.gfield_error .ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),.form .gform_wrapper.gform_validation_error .gform_body .formrow--changed ul li.gfield.gfield_error .ginput_container textarea,.form .gform_wrapper.gform_validation_error .gform_body .formrow__infocus ul li.gfield.gfield_error .ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),.form .gform_wrapper.gform_validation_error .gform_body .formrow__infocus ul li.gfield.gfield_error .ginput_container textarea{border-bottom:1px solid #fff!important;color:#fff!important}.form .gform_wrapper.gform_validation_error .gform_body .formrow__infocus ul li.gfield.gfield_error .gfield_label{color:#fff!important}.form .gform_wrapper .ginput_container_checkbox{margin-top:0!important}.form .gform_wrapper .gform_footer{align-items:center;display:inline-flex;gap:16px;margin-top:40px;padding:0;position:relative}@media (max-width:1440px){.form .gform_wrapper .gform_footer{margin-top:32px}}@media (max-width:1366px){.form .gform_wrapper .gform_footer{margin-top:24px}}.form .gform_wrapper .gform_footer input[type=submit]{background-color:#fff;background-image:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L9 1M9 1H1M9 1V9' stroke='%231E1D28'/%3E%3C/svg%3E%0A");background-position:calc(100% - 16px) center;background-repeat:no-repeat;background-size:10px;border-radius:48px;border:none;color:#1e1d28;cursor:pointer;display:block;font-size:14px;font-weight:700;line-height:16px;margin:0;outline:0;padding:12px 32px 12px 16px;text-align:center;transition-duration:.3s;transition-property:background-color,background-image,color;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;-webkit-appearance:none}.form .gform_wrapper .gform_footer input[type=submit]:disabled{cursor:disabled;opacity:.65}.form .gform_wrapper .gform_footer input[type=submit]:hover{background-color:#0045e6;background-image:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L9 1M9 1H1M9 1V9' stroke='%23ffffff'/%3E%3C/svg%3E%0A");color:#fff}.form .gform_wrapper .gform_footer input[type=submit]:focus-visible{outline-offset:1px;outline:#0045E6 solid 2px}.form .atachfile{display:flex;flex-direction:column}.form .atachfile>ul{order:1}.form .atachfile .atachfile_cont{border-radius:50%;order:0;position:absolute;right:0;top:-72px}@media (min-width:1440px){.form .formrowlist{grid-gap:32px 40px}.form .atachfile .atachfile_cont{top:-80px}}.form .atachfile .atachfile_link{color:#fff;cursor:pointer;font-size:.875rem;font-weight:600;height:0;margin:0;overflow:hidden;padding-top:40px;position:relative;width:40px}.form .atachfile .atachfile_link:after,.form .atachfile .atachfile_link:before{height:40px;left:0;position:absolute;top:0;width:40px;content:""}.form .atachfile .atachfile_link:after{border:1px solid #2c2a39;background-color:#2c2a39;border-radius:50%;transition-duration:.3s;transition-property:background-color,border-color}.form .atachfile .atachfile_link:before{background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 7.5L8.5 2.5C9.60457 1.39543 11.3954 1.39543 12.5 2.5V2.5C13.6046 3.60457 13.6046 5.39543 12.5 6.5L4.5 14.5C3.94772 15.0523 3.05228 15.0523 2.5 14.5V14.5C1.94772 13.9477 1.94772 13.0523 2.5 12.5L10 5' stroke='%231E1D28'/%3E%3C/svg%3E%0A");background-size:16px;background-repeat:no-repeat;background-position:center;z-index:1}.form .atachfile .atachfile_link:hover:after{background-color:transparent;border-color:#54575e}.form .atachfile .atachfile_filename{background-color:#f4f5f7;color:rgba(29,55,99,.5);position:static;margin-bottom:0;margin-top:0;word-break:break-word}.form .atachfile .atachfile_filename:before{content:""}.form .atachfile .atachfile_filename--correct{font-size:14px;line-height:24px;padding:10px 16px 10px 38px;position:relative}.form .atachfile .atachfile_filename--correct:after,.form .atachfile .atachfile_filename--correct:before{background:#000;content:"";height:1px;left:17px;opacity:.5;position:absolute;top:21px;width:12px}.form .atachfile .atachfile_filename--correct:after{transform:rotate(-45deg)}.form .atachfile .atachfile_filename--correct:before{transform:rotate(45deg)}.form .atachfile .atachfile_filename--correct+.atachfile_remove{display:block}.form .atachfile .atachfile_filename--error{background-color:transparent;color:#ff4925;font-size:12px;line-height:16px;margin-top:0;padding-left:16px}.form .atachfile .atachfile_filename:not(:empty){margin-bottom:24px}.form .atachfile .atachfile_text{display:none}.form .atachfile .gfield_label{height:0;opacity:0;overflow:hidden;width:0}.form .atachfile .gform_fileupload_rules,.form .atachfile .screen-reader-text{display:none!important}.form .atachfile .atachfile_remove{cursor:pointer;display:none;height:15px;left:16px;opacity:.3;position:absolute;top:14px;width:15px}.form .atachfile input[type=file]{cursor:pointer;height:1px;right:0;opacity:0;padding:0!important;position:absolute;top:-72px;width:1px}.form .atachfile input[type=file].osx{height:40px;width:40px;z-index:2}.form .atachfile:has(input[type=file]:focus-visible) .atachfile_link:after{background-color:transparent;border-color:#54575e}.form .atachfile:has(input[type=file]:focus-visible) .atachfile_cont{outline-offset:1px;outline:#0045E6 solid 2px}.form .gform_delete+strong{color:rgba(29,55,99,.5)}.form .gform_delete+strong::after,.form .gform_delete+strong::before{background-color:rgba(29,55,99,.5)}.form .gform-loader{animation:1.1s ease-in-out infinite load;background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle opacity='0.24' cx='12' cy='12' r='11' stroke='%23C7C7D6' stroke-width='2'/%3E%3Cmask id='mask0_25429_72449' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='11' stroke='%239B9FAD' stroke-width='2'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_25429_72449)'%3E%3Crect x='-1' y='12' width='13' height='13' fill='%239B9FAD'/%3E%3C/g%3E%3C/svg%3E%0A");background-size:contain;background-repeat:no-repeat;background-position:center;flex:0 0 24px;height:24px;width:24px}.form #gform_ajax_spinner_1,.form #gform_ajax_spinner_12,.form #gform_ajax_spinner_13,.form #gform_ajax_spinner_15,.form #gform_ajax_spinner_16,.form #gform_ajax_spinner_17,.form #gform_ajax_spinner_18,.form #gform_ajax_spinner_2,.form #gform_ajax_spinner_23,.form #gform_ajax_spinner_24,.form #gform_ajax_spinner_3,.form #gform_ajax_spinner_4,.form #gform_ajax_spinner_6,.form #gform_ajax_spinner_7,.form #gform_ajax_spinner_9,.form .gform_ajax_spinner{flex:0 0 20px;height:20px;width:20px}.form #gform_ajax_spinner_5{bottom:-25px;left:50%;margin-left:-10px;position:absolute;padding-left:0;height:20px;width:20px}.form .gform_legacy_markup_wrapper .gform_hidden,.form .gform_legacy_markup_wrapper input.gform_hidden,.form .gform_legacy_markup_wrapper input[type=hidden]{display:none!important;max-height:1px!important;overflow:hidden}.form .gform_legacy_markup_wrapper .gform_body ul.gform_fields li.gfield.gform_validation_container,.form .gform_legacy_markup_wrapper .gform_validation_container,.form .gform_legacy_markup_wrapper li.gform_validation_container,.form .gform_legacy_markup_wrapper ul.gform_fields li.gfield.gform_validation_container,.form .gform_validation_container{display:none!important;position:absolute!important;left:-9000px}.slick-dotted.slick-slider{margin-bottom:30px}.autocomplete-items{position:absolute;top:100%;z-index:1}@keyframes fadeInLeft{from{opacity:0;transform:translate3d(-10%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,20%,0)}to{opacity:1;transform:translate3d(0,0,0)}}.autocomplete-items{background-color:#fff;border-radius:8px;box-shadow:0 4px 4px 0 rgba(0,0,0,.25);left:0;max-height:300px;overflow:auto;right:0}.autocomplete-items div{border-radius:8px;font-size:1rem;margin:0 10px;padding:7px 16px;cursor:pointer;color:#1e1d28}.autocomplete-items div:first-child{margin-top:10px}.autocomplete-items div:last-child{margin-bottom:10px}.autocomplete-active,.autocomplete-items div:hover{background-color:#f9f9f9}.search__field{background:0 0;border:none;border-bottom:1px solid rgba(30,29,40,.15);color:#373737;font-size:1.25rem;outline:0;padding:12px 0 12px 40px;width:540px}@media (max-width:1440px){.search__field{font-size:1.143rem;padding:7px 0 7px 35px;width:300px}}@media (max-width:960px){.search__field{font-size:1rem;padding-left:25px;width:100%}}.search__field:-webkit-autofill{-webkit-text-fill-color:#373737!important;-webkit-box-shadow:0 0 0 1000px #f9f9f9 inset!important;border-bottom-color:#dddddf}.search__field:-webkit-autofill:focus,.search__field:-webkit-autofill:hover{-webkit-text-fill-color:#373737!important;-webkit-box-shadow:0 0 0 1000px #f9f9f9 inset!important;border-bottom-color:#dddddf}.search__submit{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiMxRTFEMjgiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE5LjAxNiAxOC4yMTdsLTQuNzYtNC45NWE4LjA0OSA4LjA0OSAwIDAgMCAxLjg5NC01LjE5MkMxNi4xNSAzLjYyMyAxMi41MjcgMCA4LjA3NSAwIDMuNjIzIDAgMCAzLjYyMyAwIDguMDc1YzAgNC40NTIgMy42MjMgOC4wNzUgOC4wNzUgOC4wNzVhNy45ODkgNy45ODkgMCAwIDAgNC42MjYtMS40NjFsNC43OTYgNC45ODhjLjIuMjA4LjQ3LjMyMy43Ni4zMjNhMS4wNTUgMS4wNTUgMCAwIDAgLjc1OS0xLjc4M3pNOC4wNzUgMi4xMDdhNS45NzUgNS45NzUgMCAwIDEgNS45NjggNS45NjggNS45NzUgNS45NzUgMCAwIDEtNS45NjggNS45NjggNS45NzUgNS45NzUgMCAwIDEtNS45NjgtNS45NjggNS45NzUgNS45NzUgMCAwIDEgNS45NjgtNS45Njh6Ii8+Cjwvc3ZnPgo=);background-size:contain;border:none;height:20px;left:0;outline:0;padding:0;position:absolute;top:14px;width:20px}@media (max-width:1440px){.search__submit{top:7px}}.search--new,.search__progress{display:none;position:fixed;left:0}.search--new__submit:before{margin-right:-24px}.search__filter .selectric-wrapper{width:420px}@media (max-width:960px){.search__submit{height:13px;top:9px;width:13px}.search__filter .selectric-wrapper{width:350px}.search--new{padding-left:8px;padding-right:8px}}@media (max-width:767px){.title-h2 br{display:none}.search__filter .selectric-wrapper{width:100%}.contact-us-new .section__row{padding-left:0}}.search__filter .selectric-wrapper .selectric .label{font-size:1.25rem;height:50px;line-height:50px}.search--new__form{align-items:flex-end}.search__progress{background:#0045e6;height:4px;top:0;transition:width .2s linear;width:0%}.search--new{background-color:#fff;border-radius:8px 8px 0 0;bottom:0;padding-bottom:52px;padding-top:80px;right:0;z-index:1}.search--new__icon{display:block;height:16px;vertical-align:top;width:16px}.search--new__icon-stroke{stroke:#fff}@media (min-width:961px){.search--new{border-radius:0 0 8px 8px;bottom:auto;margin-top:-1px;position:absolute;top:100%}.search--new__icon-stroke{stroke:#1e1d28}}.search--new__icon-wrap{background-color:#2c2a39;border-radius:40px;border:1px solid transparent;cursor:pointer;margin-left:8px;padding:11px 19px;transition-duration:.3s;transition-property:background-color,border-color}.search--new__icon-wrap:focus-visible,.search--new__icon-wrap:hover{background-color:transparent;border-color:#c7c7d6}.search--new__icon-wrap:focus-visible{outline-offset:1px;outline:#0045E6 solid 2px}.search--new__icon-wrap.active:after{background-color:rgba(0,0,0,.4);content:"";cursor:default;height:100vh;left:0;position:fixed;right:0;top:0}.search--new__icon-wrap.active .search--new__icon{opacity:0}.search--new__icon-wrap.active~.search--new{display:block}@media (min-width:961px){.search--new__icon-wrap{background-color:#e9edf3}.search--new__icon-wrap.active,.search--new__icon-wrap:focus-visible,.search--new__icon-wrap:hover{background-color:#c7c7d6}.search--new__icon-wrap.active:after{top:100%}.search--new__icon-wrap.active~.search--new .search--new__close{top:-51px}}@media (min-width:1280px){.form .formrow--checkbox .gfield_checkbox label:after{top:1px}.form .gform_wrapper .gform_footer input[type=submit]{background-position:calc(100% - 20px) center;font-size:15px;line-height:24px;padding-left:20px;padding-right:36px}.search--new__icon-wrap{padding:15px 24px}.search--new__icon-wrap.active~.search--new .search--new__close{right:36px;top:-55px}}@media (min-width:1440px){.form .atachfile input[type=file]{top:-80px}.search--new__icon-wrap.active~.search--new .search--new__close{right:69px;top:-63px}}@media (min-width:1920px){.form .gform_wrapper .gform_footer input[type=submit]{background-position:calc(100% - 24px) center;font-size:16px;line-height:24px;padding:16px 40px 16px 24px}.search--new__icon-wrap{padding:19px 27px}.search--new__icon-wrap.active~.search--new .search--new__close{right:72px}}@media (min-width:2560px){.form .gform_wrapper .gform_footer input[type=submit]{background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6569 13.6566L13.6569 2.34291M2.34314 2.34292L13.6569 2.34291M13.6569 2.34291L2.34314 13.6566' stroke='%231E1D28'/%3E%3C/svg%3E%0A");background-position:calc(100% - 32px) center;background-size:16px;font-size:20px;line-height:32px;padding-left:32px;padding-right:56px}.search--new__icon-wrap{padding:23px 31px}.search--new__icon-wrap.active~.search--new .search--new__close{right:108px;top:-67px}}.search--new__close{cursor:pointer;position:absolute;right:16px;top:16px}.search--new__form{display:flex;gap:8px;position:relative}.search--new__label{color:#1e1d28;font-size:12px;left:16px;line-height:16px;opacity:.4;position:absolute;top:-10px}.search--new__field{background:0 0;border:none;border-bottom:1px solid #c7c7d6;color:#1e1d28;flex:1;font-size:16px;line-height:24px;outline:0;padding:0 16px 8px}.search--new__field:-webkit-autofill{-webkit-text-fill-color:#1e1d28!important;-webkit-box-shadow:0 0 0 1000px #fff inset!important}.search--new__field:-webkit-autofill:focus,.search--new__field:-webkit-autofill:hover{-webkit-text-fill-color:#1e1d28!important;-webkit-box-shadow:0 0 0 1000px #fff inset!important}@media (max-width:960px){.search--new__submit .btn-n__text{display:none}.search--new__submit{background-color:#e9edf3;justify-content:center;width:56px}.search--new__submit:after,.search--new__submit:before{filter:brightness(1) invert(1)}}@media (min-width:961px){.search--new__submit{padding-left:56px;padding-right:56px}}@media (min-width:1280px){.search--new__label{top:-4px}.search--new__submit{padding-left:65px;padding-right:65px}}@media (min-width:1920px){.search--new__label{top:6px}.search--new__submit{padding-left:74px;padding-right:74px}}@media (min-width:2560px){.search--new__label{top:12px}.search--new__submit{padding-left:90px;padding-right:90px}}.search--new__submit:after,.search--new__submit:before{background-image:url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.5009 15L11.2676 10.7667' stroke='white'/%3E%3Ccircle cx='7' cy='6.5' r='6' stroke='white'/%3E%3C/svg%3E%0A");flex-basis:16px;height:16px;width:16px}.search--new__submit:hover .btn-n__text{transform:translateX(24px)}.slick-dots li button,.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{background:0 0;color:transparent;outline:0}.slick-slide{outline:0}.slick-next,.slick-prev{border:none;cursor:pointer;display:block;font-size:0;height:20px;line-height:0;padding:0;position:absolute;top:50%;transform:translate(0,-50%);width:20px}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:#fff;font-size:20px;line-height:1;opacity:.75}.slick-prev{left:-25px}.slick-prev:before{content:"←"}.slick-next{right:-25px}.slick-next:before{content:"→"}.slick-dots{bottom:-25px;display:block;list-style:none;margin:0;padding:0;position:absolute;text-align:center;width:100%}.slick-dots li{cursor:pointer;display:inline-block;height:20px;margin:0 5px;padding:0;position:relative;width:20px}.slick-dots li button,.video{display:block;cursor:pointer}.slick-dots li button:after,.slick-dots li button:before{content:"";position:absolute;top:50%}.slick-dots li button{border:0;font-size:0;height:22px;line-height:0;padding:5px;width:22px}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:.7}.slick-dots li button:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;border-radius:50%;height:10px;left:50%;opacity:.2;transform:translate(-5px,-5px);transition:opacity .3s;width:10px}.slick-dots li button:after{border:1px solid;border-radius:50%;left:50%;transform:translate3d(-50%,-50%,0) scale(0);width:120%}.slick-dots li.slick-active button:before{opacity:1}.slick-dots li.slick-active button:after{transform:translate3d(-50%,-50%,0) scale(1);transition:transform .45s cubic-bezier(.6,.01,0,1.38)}.dots--white .slick-dots li button:before{background-color:#fff}.dots--white .slick-dots li.slick-active button:after{border-color:#fff}.dots--black .slick-dots li.slick-active button:after{border-color:#000}.dots--black .slick-dots li button:before{background-color:#000}.dots--top .slick-dots{bottom:auto;top:0}.video{height:100%;position:relative}.popup,.popup__bg{right:0;top:0;left:0;bottom:0}.video:focus-visible{outline:0}.popup{display:none;position:fixed;z-index:999}.popup.open{display:flex}.popup.open .popup__bg{animation:.3s fadeIn}.popup__bg{background-color:rgba(0,0,0,.25);position:absolute}.popup__bg.darken{background-color:rgba(0,0,0,.8)}.popup__close{cursor:pointer;height:50px;position:absolute;right:10px;top:10px;width:50px;z-index:2}.popup__close:after,.popup__close:before{background-color:#fff;content:"";display:block;height:2px;position:absolute;right:9px;top:23px;transition-property:background-color,opacity;transition-duration:.3s;width:32px}.popup__close:after{transform:rotate(45deg)}.popup__close:before{transform:rotate(-45deg)}.testimonial-new__author-name{font-weight:700}.popup__content{margin:auto;padding:40px;position:relative;z-index:1}@media (max-width:560px){.popup__content{padding:20px}}.popup__content iframe{max-width:100%;position:relative;z-index:1}@media (max-width:960px){.search--new__submit:focus-visible:after,.search--new__submit:focus-visible:before,.search--new__submit:hover:after,.search--new__submit:hover:before{filter:none}.popup__content iframe{height:490px}}@media (max-width:640px){.popup__content iframe{height:320px}}@media (max-width:420px){.popup__content iframe{height:220px}}@media (max-height:600px){.popup__content iframe{height:400px}}@media (max-height:450px){.popup__content iframe{height:300px}}@media (max-height:380px){.popup__content iframe{height:260px}}.popup--download .popup__close:after,.popup--download .popup__close:before{background-color:#d2d2d4;height:3px}.loader{height:60px;left:50%;width:60px;top:50%}.popup--download .popup__close:hover:after,.popup--download .popup__close:hover:before{background-color:#969697}.loader{animation:1.1s ease-in-out infinite load;border-bottom:5px solid rgba(255,255,255,.2);border-left:5px solid #fff;border-radius:50%;border-right:5px solid rgba(255,255,255,.2);border-top:5px solid rgba(255,255,255,.2);margin:-30px 0 0 -30px;position:absolute}@keyframes load{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.lang{position:relative}.social{list-style:none;margin:30px 0 0;padding:0;display:flex}.social__item{margin-right:20px}.social__link{align-items:center;background-color:#1e1d28;border-radius:50%;display:flex;height:48px;justify-content:center;outline:0;transition:background-color .3s;width:48px}@media (max-width:1440px){.social__link{height:40px;width:40px}}.social__link:hover{background-color:#0045e6}.social__link:focus-visible{outline-offset:1px;outline:#0045E6 solid 2px}.lang{width:72px}.header__menu>li>.dropdown-menu__wrapper:after{background:linear-gradient(to bottom,rgba(0,0,0,.1) 0,rgba(0,0,0,0) 100%);height:5px}.no-js .lang:hover .lang__items{display:block;margin:0}.lang--new{color:#54575e;display:flex;padding-left:4px;padding-right:4px;align-self:flex-end}@media (min-width:961px){.lang--new{align-self:center;border-radius:8px;border:1px solid transparent;color:#1e1d28;padding-left:0;padding-right:0;position:relative}}.lang--new__item.selected{color:#fff}.lang--new__link{cursor:pointer;display:block;font-size:15px;line-height:24px;outline:0;padding:8px 12px;text-align:center;text-transform:uppercase}@media (min-width:961px){.lang--new__item.selected{color:#1e1d28}.lang--new__link{padding:7px 20px;position:relative}}@media (min-width:1280px){.lang--new__link{padding:11px 23px}}@media (min-width:1440px){.lang--new__link{font-size:16px}}@media (min-width:1920px){.lang--new__link{padding:15px 26px}}.lang--new__link:hover{color:#fff}@media (min-width:961px){.lang--new__link:hover{color:#0045e6}.lang--new__link:before{border-radius:20px;border:2px solid #0045e6;content:"";height:32px;left:50%;opacity:0;position:absolute;top:50%;transform:translate(-50%,-50%);transition:opacity .1s cubic-bezier(.4,.2,.4,1);width:48px}}.lang--new__link:focus-visible:before{opacity:1}@media (min-width:2560px){.lang--new__link{font-size:20px;line-height:32px;padding-top:19px;padding-bottom:19px}.lang--new__link:before{height:40px;width:56px}}.lang--new__items{list-style:none;margin:0;padding:0;display:flex}@media (min-width:961px){.lang--new__items{background-color:#fff;border-radius:0 0 8px 8px;border:1px solid #c7c7d6;border-top:0;display:none;left:-1px;position:absolute;right:-1px;top:100%;z-index:1}.lang--new.active{background-color:#fff;border-radius:8px 8px 0 0;border-color:#c7c7d6}.lang--new.active .lang--new__items{display:block}.lang--new.active .lang--new__items .lang--new__item{margin-top:-6px}}.no-js .header--new__lang:hover .lang--new__items{display:block}.testimonial-new:not(:first-child){display:none}.link-n:after,.link-n:before{transition-duration:.2s;transition-property:filter,transform;transition-timing-function:cubic-bezier(.4,.2,.4,1)}.testimonial__slider{margin-left:-10px;margin-right:-10px}.testimonial__slider.slick-dotted.slick-slider{margin-bottom:60px}.testimonial__slider .slick-dots{bottom:-55px}.testimonial__slider .slick-track{display:flex}.testimonial__slider .slick-slide{height:auto}.testimonial__slider.slick-initialized .testimonial{display:flex;flex-direction:column}.testimonial-new__position,.testimonial-new__text{color:#373737}.testimonial-new{margin-left:8px;margin-right:8px;position:relative}.testimonial-new__title{margin-bottom:24px}.testimonial-new__slider{margin-left:-8px;margin-right:-8px;max-width:100%}.testimonial-new__text:before{content:url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.8664 0C23.4389 1.65442 22.9877 3.43945 22.5128 5.3551C22.0378 7.27075 21.6104 9.14286 21.2304 10.9714C20.8504 12.8 20.5417 14.4762 20.3043 16H13.5362L13.0375 15.2816C13.4649 13.7578 14.0111 12.1252 14.6761 10.3837C15.341 8.59864 16.0772 6.81361 16.8846 5.02857C17.692 3.24354 18.4757 1.56735 19.2356 0H23.8664ZM10.6864 0C10.259 1.65442 9.80778 3.43945 9.33283 5.3551C8.85788 7.27075 8.43042 9.14286 8.05046 10.9714C7.67049 12.8 7.36177 14.4762 7.1243 16H0.427458L0 15.2816C0.427458 13.7578 0.973654 12.1252 1.63859 10.3837C2.30352 8.59864 3.01595 6.81361 3.77588 5.02857C4.5833 3.24354 5.36697 1.56735 6.1269 0H10.6864Z' fill='%231E1D28'/%3E%3C/svg%3E%0A");display:block;margin-bottom:24px;transform:scale(.8);transform-origin:left center}@media (min-width:768px){.testimonial-new__title{margin-bottom:32px}.testimonial-new__text:before{transform:none;margin-bottom:32px}}@media (min-width:1440px){.testimonial-new__title{margin-bottom:40px}.testimonial-new__text:before{margin-bottom:40px}}.testimonial-new__photo{display:block;flex:0 0 80px;border-radius:8px;width:80px}@media (min-width:1920px){.testimonial-new__photo{flex-basis:128px;width:128px}}.testimonial-new__author{display:flex;gap:16px;margin-top:24px}@media (min-width:1280px){.lang--new.active .lang--new__items .lang--new__item{margin-top:-13px}.testimonial-new__author{margin-top:40px}.contact-us-new .container-n,.contact-us-new .search--new{padding-right:16px}.contact-us-new .container-n:has(.only-form),.contact-us-new .search--new:has(.only-form){padding-left:24px;padding-right:24px}}.testimonial-new__info{margin-top:auto}.testimonial-new__timeline{background-color:rgba(84,87,94,.4);height:1px;margin-bottom:16px;overflow:hidden;position:relative}.testimonial-new__timeline-line{background-color:#1e1d28;height:1px;left:0;position:absolute;right:0;top:0;transform:translateX(-100%)}.testimonial-new__timeline-line.animate{animation:10s linear autoplay-anim}.testimonial-new__arrows{align-items:center;display:flex;gap:16px}.testimonial-new__arrow{height:40px;transition:opacity .3s;vertical-align:top;width:auto}.testimonial-new__arrow-circle{transition:fill .3s}.testimonial-new__arrow-icon{transition:stroke .3s}.testimonial-new__arrow.slick-disabled{opacity:.24}.testimonial-new__arrow:not(.slick-disabled):hover{cursor:pointer}.testimonial-new__arrow:not(.slick-disabled):hover .testimonial-new__arrow-circle{fill:#1E1D28}.testimonial-new__arrow:not(.slick-disabled):hover .testimonial-new__arrow-icon{stroke:#fff}@keyframes autoplay-anim{from{transform:translateX(-100%)}to{transform:translateX(0)}}.contact-us{color:#fff;overflow:hidden}@media (max-width:960px){.contact-us .row{flex-wrap:wrap}}.contact-us .col-form{flex:0 0 63%;position:relative;z-index:1}@media (max-width:960px){.contact-us .col-form{flex-basis:100%}}.contact-us .col-testimonial{flex:0 0 32%;overflow:hidden}@media (max-width:960px){.contact-us .col-testimonial{padding-bottom:5px;padding-top:30px;flex-basis:100%}}@media (max-width:640px){.contact-us .col-testimonial{display:none}}.contact-us-new{overflow:hidden}@media (min-width:2600px){.contact-us-new .container-n,.contact-us-new .search--new{padding-right:88px}}.contact-us-new .section__title{color:#fff;margin-bottom:32px}@media (min-width:1440px){.contact-us-new .section__title{margin-bottom:40px}}@media (min-width:768px){.contact-us-new .section__row{padding-right:64px}}@media (min-width:960px){.contact-us-new .section__row{display:grid;grid-gap:16px;grid-template-columns:1.3fr 1fr;padding-right:0}}.contact-us-new .col-form{position:relative;z-index:1}.contact-us-new .col-testimonial{display:none}@media (min-width:960px){.contact-us-new .col-testimonial{background-color:#f8f8f9;border-radius:8px;display:flex;flex-direction:column;margin-bottom:-72px;margin-top:-72px;overflow:hidden;padding:80px 24px 72px}}@media (min-width:1280px){.contact-us-new .section__row{grid-gap:80px}.contact-us-new .col-testimonial{margin-bottom:-104px;margin-top:-104px;padding:120px 40px 104px}}@media (min-width:1920px){.contact-us-new .col-testimonial{margin-bottom:-144px;margin-top:-144px;padding-bottom:144px;padding-top:168px}}@media (min-width:2560px){.testimonial-new__arrow{height:56px}.contact-us-new .section__row{grid-template-columns:2fr 1fr}.contact-us-new .col-testimonial{margin-bottom:-224px;margin-top:-224px;padding-bottom:224px;padding-top:248px}}.header{align-items:center;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05);display:flex;position:relative;transition:background-color .3s;z-index:2}.header__menu{align-items:center;display:flex;list-style:none;margin:0;padding:0}.header__menu.active{overflow:visible;transform:translateX(-100%)}.header__menu>li{margin-left:60px}@media (max-width:1600px){.header__menu>li{margin-left:45px}}@media (max-width:1350px){.header__menu>li{margin-left:30px}}@media (max-width:1250px){.header__menu>li{margin-left:10px}}.header__menu>li>.active.nav-link:after,.header__menu>li>.maintainHover.nav-link:after{opacity:1}.header__menu>li>.active+.dropdown-menu__wrapper,.header__menu>li>.maintainHover+.dropdown-menu__wrapper{animation:.3s show-mobile-menu;display:block}.header__menu .nav-link{color:#373737;display:block;font-size:1rem;font-weight:600;padding:27px 10px;position:relative;white-space:nowrap}.header__menu .nav-link:after{background-color:#fff;top:0;content:"";height:3px;left:0;opacity:0;position:absolute;right:0;transition:opacity .3s}.header__menu>li>.dropdown-menu__wrapper{background-color:#fff;border-radius:0 0 6px 6px;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);display:none;margin-left:-20px;position:absolute;top:100%;width:180px}.header__menu>li>.dropdown-menu__wrapper:after{content:"";left:0;position:absolute;right:0;top:0;z-index:1}.header__menu>li>.dropdown-menu__wrapper .dropdown-item{margin:0;padding:20px 30px}@media (max-width:1440px){.header__menu>li>.dropdown-menu__wrapper .dropdown-item{padding-bottom:15px;padding-top:15px}}@media (max-width:960px){.header{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);height:50px;left:0;position:fixed;right:0;top:0;z-index:2}.header__menu{display:none;overflow:auto;position:relative;transition:transform .3s;width:100%}.header__menu>li{margin-left:0}.header__menu>li:first-child{margin-top:16px}.header__menu .nav-link{color:#1e1d28;font-size:1.143rem;line-height:1.5;margin:3px 0;padding:12px 20px;transition-duration:.3s;transition-property:background-color,color}.header__menu .nav-link:after{background-color:transparent!important;border-left:1px solid #1e1d28;border-top:1px solid #1e1d28;height:6px;left:auto;opacity:1;right:28px;top:21px;transform:rotate(135deg);transition-duration:.3s;transition-property:border-color,transform,top;width:6px}.header__menu .nav-link:before{background-color:#f9f9f9;border-radius:50%;content:"";height:20px;position:absolute;right:20px;top:14px;width:20px}.header__menu .nav-link:hover{background-color:#0045e6;color:#fff!important}.header__menu .nav-link:hover:after{border-color:#0045e6}.header__menu .nav-link.active+.dropdown-menu__wrapper{display:block}.header__menu>li>.dropdown-menu__wrapper{box-shadow:none;position:static;margin-left:0;width:100%}.header__menu>li>.dropdown-menu__wrapper:after{display:none}.header__menu>li>.dropdown-menu__wrapper .dropdown-item{color:#373737;display:block;font-size:1rem;line-height:1.5;padding:8px 20px;position:relative;transition-duration:.3s;transition-property:font-weight,color}.header__menu>li>.dropdown-menu__wrapper .dropdown-item:hover{color:#0045e6}}.header__menu>li>.dropdown-menu__wrapper li:not(.menu-title) .dropdown-item{transition-duration:.3s;transition-property:color,font-weight}.header__menu>li>.dropdown-menu__wrapper li:not(.menu-title) .dropdown-item:hover{color:#0045e6}.header__menu>li.full-width>.dropdown-menu__wrapper{border-radius:0;margin-left:0;left:0;width:100%}.header__menu>li.full-width .dropdown-menu{margin-left:280px;padding:50px 0}@media (max-width:1600px){.header__menu>li.full-width .dropdown-menu{margin-left:265px}}@media (max-width:1440px){.header__menu>li.full-width .dropdown-menu{margin-left:210px;padding-bottom:25px;padding-top:25px}}@media (max-width:1350px){.header__menu>li.full-width .dropdown-menu{margin-left:200px}}@media (max-width:1250px){.header__menu>li.full-width .dropdown-menu{margin-left:180px}}@media (max-width:1200px){.header__menu>li.full-width .dropdown-menu{margin-left:150px}}@media (max-width:1100px){.header__menu>li.full-width .dropdown-menu{margin-left:10px;padding-bottom:20px;padding-top:20px}}@media (max-width:960px){.header__menu>li.full-width .dropdown-menu{margin-left:0;padding-top:0;padding-bottom:0}}.header__menu>li.full-width .dropdown-item{padding:10px}.header__menu>li.about-us>.dropdown-menu__wrapper>.dropdown-menu{display:grid;grid-template-columns:1fr 1fr 1fr;padding-bottom:70px;width:37%}@media (max-width:1100px){.header__menu>li.about-us>.dropdown-menu__wrapper>.dropdown-menu{width:48%}}.header__menu>li.about-us>.dropdown-menu__wrapper>.dropdown-menu .dropdown-menu{background-color:#f9f9f9;left:100%;margin-left:0;padding-left:8%;position:absolute;top:0;width:100%;z-index:1}.header__menu>li.about-us .dropdown-menu{height:100%}@media (max-width:960px){.header__menu>li.full-width .dropdown-item{padding:8px 20px}.header__menu>li.about-us>.dropdown-menu__wrapper>.dropdown-menu{display:block;padding-bottom:0;width:100%}.header__menu>li .block-group>.dropdown-item{font-weight:600;padding-bottom:14px;padding-top:14px}.header__menu>li .block-group>.dropdown-item:after{border-left:1px solid #1e1d28;border-top:1px solid #1e1d28;content:"";height:6px;position:absolute;right:27px;top:20px;transform:rotate(225deg);transition-duration:.3s;transition-property:border-color,transform,top;width:6px}.header__menu>li .block-group>.dropdown-item:before{background-color:#f9f9f9;border-radius:50%;content:"";height:20px;position:absolute;right:20px;top:14px;width:20px}.header__menu>li .block-group>.dropdown-item:hover{background-color:#0045e6;color:#fff}.header__menu>li .block-group>.dropdown-item:hover:after{border-color:#0045e6}.header__menu>li .block-group>.dropdown-item.active{background-color:#0045e6;color:#fff}.header__menu>li .block-group>.dropdown-item.active:after{border-color:#0045e6;top:22px;transform:rotate(45deg)}.header__menu>li .block-group>.dropdown-item.active+.dropdown-menu__wrapper{display:block}.header__menu>li .block-group .dropdown-menu__wrapper{left:0!important;margin-bottom:7px;margin-top:7px;position:relative!important}}.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu{display:grid;grid-template-columns:25% 25% 25% 25%;padding-bottom:0;width:70%}@media (max-width:1920px){.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu{width:75%}}@media (max-width:1600px){.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu{width:77%}}@media (max-width:1440px){.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu{width:81%}}@media (max-width:1200px){.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu{width:85%}}@media (max-width:1100px){.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu{width:95%}}.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu .dropdown-menu{margin-left:0}.header__menu>li.services .block-group .dropdown-menu{padding-top:0}.header__menu>li.services .block-group .dropdown-menu .dropdown-item{padding:5px 0 5px 10px;position:relative}@media (max-width:960px){.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu{display:block;width:100%}.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu .dropdown-menu .dropdown-item{padding-left:40px}.header__menu>li.services>.dropdown-menu__wrapper>.dropdown-menu .dropdown-menu .dropdown-item:after{left:20px;top:16px}.header__menu>li.services .block-group .dropdown-menu .dropdown-item{padding:8px 20px}.header__menu>li.services .block-group .submenu .dropdown-menu__wrapper{display:block}}.header__menu>li.services .block-group .submenu .dropdown-menu .dropdown-item{padding-left:36px}.header__menu>li.services .block-group .submenu .dropdown-menu .dropdown-item:before{background-color:#0045e6;content:"";height:1px;left:10px;position:absolute;top:50%;width:6px}.header__menu>li .submenu .dropdown-menu{padding-bottom:0}@media (max-width:960px){.header__menu>li.services .block-group .submenu .dropdown-menu .dropdown-item{padding-left:60px}.header__menu>li.services .block-group .submenu .dropdown-menu .dropdown-item:before{left:40px}.header__menu .dropdown-menu__wrapper{display:none;position:absolute!important;left:100%!important;top:0!important;bottom:0;width:100%;overflow:auto}}.header__menu .dropdown-menu{list-style:none;margin:0;padding:0;position:relative}.header__menu .menu-title>.dropdown-item{cursor:default;font-size:1.25rem;font-weight:700;margin-bottom:.5rem}.header__menu .dropdown-item{color:#373737;display:block;margin-bottom:5px;padding:5px 20px}.header__menu .back-item{display:none}.header__menu .back-item>.dropdown-item{background-color:#f8f8f9;color:#0045e6!important;position:relative;padding:14px 20px 15px 40px!important}.header__menu .back-item>.dropdown-item:after{border-left:1px solid #0045e6;border-top:1px solid #0045e6;content:"";height:14px;left:20px;position:absolute;top:17px;transform:rotate(-45deg);transition-duration:.3s;transition-property:border-color,transform,top;width:14px}.header__search{position:relative}.header--stick .header{animation:.3s header-translate;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05);left:0;position:fixed;right:0;top:0;z-index:6}.header--stick .header__menu .nav-link{color:#1e1d28}.header--stick .header__menu .nav-link:after{background-color:#0045e6}.header--stick .header__menu .nav-link:hover{color:#0045e6}.header--white .header{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.header--white .header__menu .nav-link{color:#1e1d28}.header--white .header__menu .nav-link:after{background-color:#0045e6}.header--white .header__menu .nav-link:hover{color:#0045e6}@media (max-width:960px){.header__menu .back-item{display:block}.mobile-menu-active .header__menu{display:block}.mobile-menu-active .header .lang{animation:.3s .3s forwards show-mobile-menu;background-color:#fff;bottom:0;display:inline-flex;left:20px;opacity:0;padding-bottom:20px;padding-top:80px;position:fixed;right:20px;width:auto}}@media (max-width:480px){.form .formrow--checkbox{grid-column:span 1}.mobile-menu-active .header .lang{max-width:100%}}@keyframes show-mobile-menu{0%{opacity:0;transform:translateY(-10%)}100%{opacity:1;transform:translateY(0)}}.footer--new__logo:focus-visible:after,.header--new__logo:focus-visible .header--new__logo-img-wrap:after{opacity:1}@keyframes header-translate{0%{transform:translateY(-80%)}100%{transform:translateY(0)}}.no-js .header__menu>li:hover .dropdown-menu__wrapper{display:block}.header--new{backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);background-color:rgba(255,255,255,.8);content-visibility:initial!important;left:0;position:fixed;right:0;top:0;transition:background-color .3s;z-index:6}.header--new__row{align-items:center;border-bottom:1px solid #c7c7d6;display:flex;padding-bottom:8px;padding-top:8px}.header--new__logo{align-items:center;align-self:stretch;display:flex;outline:0;position:relative}.header--new__logo-img{display:block;fill:#0045E6;height:20px;vertical-align:top;width:auto}@media (min-width:768px){.header--new__row{padding-bottom:12px;padding-top:12px}.header--new__logo-img{height:24px}}@media (min-width:2560px){.header__menu>li.full-width .dropdown-menu{max-width:2560px;margin-left:auto;margin-right:auto}.header--new__logo-img{height:40px}}.header--new__logo-img-wrap{display:block;position:relative}.header--new__logo-img-wrap:after{border-radius:20px;border:2px solid #0045e6;bottom:-7px;content:"";left:-11px;opacity:0;position:absolute;right:-11px;top:-4px;transition:opacity .1s cubic-bezier(.4,.2,.4,1)}.header--new__info{align-items:center;display:none}@media (min-width:961px){.header--new__row{padding-bottom:0;padding-top:0}.header--new__info{display:flex;flex:1}}.header--new__btn-wrap{border-radius:48px;overflow:hidden;position:relative}.header--new__btn-wrap:before{content:"";background-image:linear-gradient(105deg,#1e1d28 0,#9c86e4 24.38%,#5bbed1 49.55%,#0045e6 74.71%,#1e1d28 100%);position:absolute;left:0;top:0;bottom:0;width:1000%;transform:translateX(10%);transition:transform 1s}.header--new__btn-wrap .btn-n{grid-area:1/1}.header--new__btn-wrap--desktop{display:none}@media (min-width:961px){.header--new__btn-wrap--desktop{display:grid;margin-left:8px}}.header--new__btn-wrap--mobile{display:grid;margin-left:auto}@media (min-width:961px){.header--new__btn-wrap--mobile{display:none}}.header--new__btn-wrap.animate:before{animation:4s cubic-bezier(.4,.2,.4,1) forwards headerBtnGradientMove}.header--new__btn-wrap.animate .header--new__btn--mask-1{animation:.5s cubic-bezier(.4,.2,.4,1) 2.5s forwards headerBtnMove}.header--new__btn-wrap.animate .header--new__btn--mask-2 .btn-n__text,.header--new__btn-wrap.animate .header--new__btn--mask-2:after{animation:.5s cubic-bezier(.4,.2,.4,1) 2.5s forwards headerBtnTextMove}.header--new__btn--mask-1{background-color:transparent;transform:translateX(100%)}.header--new__mask{height:72px}@media (min-width:768px){.header--new__mask{height:80px}}.header--new:has(.search--new__icon-wrap.active)~.scroll-to-top{display:none}.header--new__screen-reader-shortcut{align-items:center;background-color:#0045e6;color:#fff;display:inline-flex;font-size:16px;font-weight:700;gap:8px;justify-content:center;left:0;line-height:24px;outline:0;position:fixed;right:0;transition:transform .3s;transform:translateY(-101%);top:0;z-index:7}.header--new__screen-reader-shortcut:focus-visible{transform:translateY(0)}.header__menu--new{list-style:none;margin:0;padding:0}.header__menu--newWrap{margin-right:auto}@media (min-width:961px){.header__menu--new{align-items:center;display:flex}.header__menu--new::after{background-color:rgba(0,0,0,.48);display:none;content:"";left:0;margin-top:-1px;min-height:100vh;position:absolute;right:0;top:100%}.header__menu--new:has(.menu-item-has-children:hover)::after{animation:.1s fade-anim;display:block}.header__menu--newWrap{margin-left:46px}.header__menu--new>li>.dropdown-menu__wrapper{display:none;left:0;margin-left:8px;margin-right:8px;margin-top:-1px;position:absolute;right:0;top:100%;z-index:1}.header__menu--new>li>.dropdown-menu__wrapper>.dropdown-menu{background-color:#fff;border-bottom-left-radius:8px;border-bottom-right-radius:8px}}@media (min-width:1280px){.header--new__mask{height:86px}.header__menu--newWrap{margin-left:102px}}@media (min-width:1440px){.header--new__mask{height:112px}.header__menu--newWrap{margin-left:114px}}@media (min-width:1280px){.header__menu--new>li>.dropdown-menu__wrapper{margin-left:24px;margin-right:24px}}@media (min-width:1600px){.header__menu--new>li>.dropdown-menu__wrapper{margin-left:168px;margin-right:168px}}@media (min-width:1920px){.header__menu--newWrap{margin-left:196px}.header__menu--new>li>.dropdown-menu__wrapper{margin-left:208px;margin-right:208px}}@media (min-width:2560px){.header--new__mask{height:136px}.header__menu--newWrap{margin-left:222px}.header__menu--new>li>.dropdown-menu__wrapper{margin-left:286px;margin-right:286px}}@media (min-width:2956px){.header__menu--new>li>.dropdown-menu__wrapper{margin-left:auto;margin-right:auto;max-width:2384px}}.header__menu--new .nav-link{display:flex;outline:0;position:relative}@media (min-width:961px){.header__menu--new>li.hover .dropdown-menu__wrapper,.header__menu--new>li:hover .dropdown-menu__wrapper{animation:.5s fade-anim;display:grid}.header__menu--new>li.active .menu-title:before,.header__menu--new>li.hover .menu-title:before,.header__menu--new>li:hover .menu-title:before{opacity:1;transform:translateY(0)}.header__menu--new .nav-link{padding:20px 12px}.header__menu--new .nav-link:focus-visible .menu-title:after{opacity:1}.header__menu--new .nav-link .menu-title{font-size:15px;font-weight:400;line-height:24px;position:relative}.header__menu--new .nav-link .menu-title:after{border-radius:20px;border:2px solid #0045e6;bottom:-2px;content:"";left:-11px;opacity:0;position:absolute;right:-11px;top:-3px;transition:opacity .1s cubic-bezier(.4,.2,.4,1)}.header__menu--new .nav-link .menu-title:before{background-color:#0045e6;border-radius:50%;bottom:-10px;content:"";height:8px;left:50%;margin-left:-4px;opacity:0;position:absolute;transition-duration:.3s;transition-property:opacity,transform;transform:translateY(8px);width:8px}.header__menu--new .dropdown-menu-opener{background-image:url("data:image/svg+xml,%3Csvg width='9' height='8' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 3L4.5 7L0.500001 3' stroke='%231E1D28'/%3E%3C/svg%3E%0A");background-position:center;background-repeat:no-repeat;border:2px solid #0045e6;border-radius:16px;height:29px;width:21px;position:absolute;flex:0 0 21px;outline:0;top:50%;right:0;transform:translateY(-50%);opacity:0;transition:opacity .1s cubic-bezier(.4,.2,.4,1)}}@media (min-width:1280px){.header__menu--new .nav-link{padding:24px 20px}.header__menu--new .nav-link .menu-title:before{bottom:-12px}}@media (min-width:1440px){.header__menu--new .nav-link{padding:32px 24px}.header__menu--new .nav-link .menu-title{font-size:16px}.header__menu--new .nav-link .menu-title:before{bottom:-16px}}@media (min-width:2560px){.header__menu--new .nav-link{padding:36px}.header__menu--new .nav-link .menu-title{font-size:20px;line-height:32px}.header__menu--new .nav-link .menu-title:before{bottom:-18px}}@media (min-width:961px) and (min-width:2560px){.header__menu--new .dropdown-menu-opener{flex-basis:26px;height:37px;width:26px}}.header__menu--new .icon{height:56px;transition:filter .3s;width:auto}.header__menu--new .icon-wrap{display:none}@media (min-width:961px){.header__menu--new .dropdown-menu-opener:focus-visible{opacity:1}.header__menu--new .icon-wrap{align-items:center;background-color:#c2d4ff;border-radius:8px;border:1px solid #c2d4ff;display:flex;flex:0 0 56px;height:56px;justify-content:center;overflow:hidden;width:56px;transition-duration:.3s;transition-property:background-color,border-color}}.header__menu--new .description{display:none}@media (min-width:961px){.header__menu--new .description{-webkit-box-orient:vertical;-webkit-line-clamp:3;color:#54575e;display:-webkit-box;font-size:12px;font-weight:400;height:42px;line-height:14px;margin:auto 0 0;max-width:360px;overflow:hidden;text-align:left}}@media (min-width:1440px){.header__menu--new .description{font-size:14px;height:48px;line-height:16px}}.header__menu--new .image{display:block;height:auto;width:100%}.header__menu--new .image-wrap{display:none}.header__menu--new .dropdown-menu{list-style:none;margin:0;padding:0;overflow:hidden}.header__menu--new .dropdown-item{display:block;outline:0}@media (min-width:961px){.header__menu--new .image-wrap{display:block}.header__menu--new .dropdown-menu a>.menu-title{padding-right:25px;position:relative;transition-duration:.3s;transition-property:color,padding-left,padding-right}.header__menu--new .dropdown-menu a>.menu-title:after{background-image:url("data:image/svg+xml,%3Csvg width='17' height='24' viewBox='0 0 17 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 20L16 12M8 4L16 12M16 12L-6.99382e-07 12' stroke='%230045E6'/%3E%3C/svg%3E");content:"";height:24px;opacity:0;position:absolute;transition:opacity .3s;width:17px;left:0;top:0}.header__menu--new .dropdown-menu a:focus-visible>.menu-title,.header__menu--new .dropdown-menu a:hover>.menu-title{color:#0045e6;padding-left:25px;padding-right:0}.header__menu--new .dropdown-menu a:focus-visible>.menu-title:after,.header__menu--new .dropdown-menu a:hover>.menu-title:after{opacity:1}.header__menu--new .dropdown-menu a:focus-visible>.icon-wrap,.header__menu--new .dropdown-menu a:hover>.icon-wrap{background-color:#0045e6;border-color:#0045e6}.header__menu--new .dropdown-menu a:focus-visible>.icon-wrap .icon,.header__menu--new .dropdown-menu a:hover>.icon-wrap .icon{filter:brightness(0) invert(1)}.header__menu--new .services .block-group{padding:8px 8px 0;width:20%}.header__menu--new .services .block-group:last-child{padding-bottom:8px}.header__menu--new .services .block-group.active>.dropdown-item,.header__menu--new .services .block-group:hover>.dropdown-item{background-color:#fff;color:#1e1d28}.header__menu--new .services .block-group.active>.dropdown-item .description,.header__menu--new .services .block-group:hover>.dropdown-item .description{color:#373737}.header__menu--new .services .block-group.active>.dropdown-menu__wrapper,.header__menu--new .services .block-group:hover>.dropdown-menu__wrapper{animation:.5s fade-anim;display:block}.header__menu--new .services .block-group.active>.dropdown-menu__wrapper .dropdown-item,.header__menu--new .services .block-group:hover>.dropdown-menu__wrapper .dropdown-item{animation:.5s menu-anim}.header__menu--new .services .block-group>.dropdown-item{border-radius:8px;color:#fff;display:block;min-height:86px;padding:8px;transition:background-color .3s}.header__menu--new .services .block-group>.dropdown-item:focus-visible{outline-offset:1px;outline:#0045E6 solid 2px}.header__menu--new .services .block-group>.dropdown-item>.menu-title{margin-bottom:8px}.header__menu--new .services .block-group>.dropdown-item>.description{color:#c7c7d6}.header__menu--new .services .block-group .dropdown-menu{background-color:#fff;bottom:0;display:grid;grid-template-rows:1fr 1fr;left:20%;overflow:hidden;position:absolute;right:0;top:0}.header__menu--new .services .block-group .dropdown-menu>.menu-item{border:1px solid #c7c7d6;margin:0 -1px -1px 0}.header__menu--new .services .block-group .dropdown-menu>.menu-item>.dropdown-item{display:flex;flex-direction:column;height:100%;padding:8px}.header__menu--new .services .block-group .dropdown-menu>.menu-item .icon-wrap{margin-bottom:16px}}.header__menu--new .services .block-group .dropdown-menu__wrapper{display:none}@media (min-width:1280px){.header__menu--new .services .block-group .dropdown-menu>.menu-item>.dropdown-item{padding:16px}}@media (min-width:1440px){.header__menu--new .services .block-group>.dropdown-item{min-height:106px}.header__menu--new .services .block-group .dropdown-menu>.menu-item>.dropdown-item{padding:24px}.header__menu--new .services .block-group .dropdown-menu>.menu-item .icon-wrap{margin-bottom:24px}}.header__menu--new .services .data-ai .ai-menu-item{grid-row:span 2;position:relative}.header__menu--new .services .data-ai .ai-solution-advisor .icon-wrap{background-color:transparent;border-color:#0045e6}.header__menu--new .services .data-ai .ai-solution-advisor:hover .icon-wrap{background-color:#0045e6}.header__menu--new .services .data-ai .ai-solution-advisor .btn-n{align-self:flex-start;margin-top:auto}.header__menu--new .industries .description,.header__menu--new .industries .image-wrap,.header__menu--new .industries .long-title{display:none}@media (min-width:961px){.header__menu--new .services .block-group .dropdown-menu>.menu-item .menu-title{min-height:40px;margin-bottom:14px}.header__menu--new .services .block-group .dropdown-menu>.menu-item.submenu .dropdown-menu{display:block;position:static}.header__menu--new .services .block-group .dropdown-menu>.menu-item.submenu .dropdown-menu__wrapper{display:block}.header__menu--new .services .block-group .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item{border:none}.header__menu--new .services .block-group .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item .dropdown-item{padding-bottom:0;padding-top:0}.header__menu--new .services .block-group .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item .menu-title{color:#9b9fad}.header__menu--new .services .block-group .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item .menu-title:hover{color:#0045e6}.header__menu--new .services .block-group .dropdown-menu>.menu-item.submenu>.dropdown-item{height:auto;padding-bottom:0}.header__menu--new .services .block-group .dropdown-menu>.menu-item.submenu .menu-title{margin-bottom:8px;min-height:initial}.header__menu--new .services .advisory .dropdown-menu,.header__menu--new .services .engineering .dropdown-menu{grid-template-columns:1fr 1fr 1fr}.header__menu--new .services .data-ai .dropdown-menu{grid-template-columns:1fr 1fr 1fr 1fr}.header__menu--new .services .data-ai .ai-menu-item .description{left:8px;position:absolute;right:8px;top:428px}.header__menu--new .services .optimisation .dropdown-menu{grid-template-columns:1fr 1fr}.header__menu--new .services .expertise .dropdown-menu{grid-template-columns:1fr 1fr 1fr 1fr}.header__menu--new .services>.dropdown-menu__wrapper>.dropdown-menu{background:linear-gradient(90deg,#1e1d28 0,#1e1d28 20%,#fff 20%,#fff 100%);position:relative}.header__menu--new .industries>.dropdown-menu__wrapper{grid-template-columns:1fr 1fr}.header__menu--new .industries>.dropdown-menu__wrapper .dropdown-menu{background-color:#1e1d28;display:grid;grid-template-columns:1fr 1fr;border-bottom-right-radius:0;color:#fff}.header__menu--new .industries .menu-title{padding-left:0!important;padding-right:0!important}.header__menu--new .industries .icon{filter:brightness(0) invert(1)}.header__menu--new .industries .icon-wrap{border-color:#fff;background-color:transparent}.header__menu--new .industries .dropdown-item{align-items:center;background-clip:padding-box;border-radius:16px;border:8px solid transparent;display:flex;gap:16px;padding:8px;transition:background-color .3s}.header__menu--new .industries .dropdown-item .menu-title:after{display:none}.header__menu--new .industries .dropdown-item:focus-visible,.header__menu--new .industries .dropdown-item:hover{background-color:#fff;color:#1e1d28}.header__menu--new .industries .dropdown-item:focus-visible .icon,.header__menu--new .industries .dropdown-item:hover .icon{filter:none!important}.header__menu--new .industries .dropdown-item:focus-visible .icon-wrap,.header__menu--new .industries .dropdown-item:hover .icon-wrap{border-color:#c2d4ff;background-color:#c2d4ff}.header__menu--new .industries .dropdown-item:focus-visible .menu-title,.header__menu--new .industries .dropdown-item:hover .menu-title{color:#1e1d28!important}.header__menu--new .industries .menu-item:nth-child(n+3){margin-top:-16px}.header__menu--new .industries__holder{background-color:#fff;border-bottom-right-radius:8px;border-top:1px solid #c7c7d6}.header__menu--new .industries__holder .image-wrap,.header__menu--new .industries__holder .long-title{display:block}.header__menu--new .industries__holder-item{display:none;flex-direction:column;height:100%;padding:8px}.header__menu--new .industries__holder-item .long-title{font-size:24px;font-weight:300;line-height:30px;margin-bottom:16px}}@media (min-width:1280px){.header__menu--new .services .data-ai .ai-menu-item .description{left:16px;right:16px;top:438px}.header__menu--new .industries .dropdown-item{gap:24px;padding:12px}}@media (min-width:961px){.header__menu--new .industries__holder-item .description{display:-webkit-box;margin-bottom:24px;max-width:356px}.header__menu--new .industries__holder-item .image{aspect-ratio:2;border-radius:8px;height:100%;-o-object-fit:cover;object-fit:cover}}@media (min-width:1280px){.header__menu--new .industries__holder-item{padding:16px}.header__menu--new .industries__holder-item .long-title{font-size:28px;line-height:34px}.header__menu--new .industries__holder-item .description{margin-bottom:32px}}@media (min-width:1440px){.header__menu--new .services .block-group .dropdown-menu>.menu-item .menu-title{margin-bottom:18px;min-height:48px}.header__menu--new .services .data-ai .ai-menu-item .description{left:24px;right:24px;top:506px}.header__menu--new .industries .dropdown-item{padding:20px}.header__menu--new .industries__holder-item{padding:24px}.header__menu--new .industries__holder-item .long-title{font-size:32px;line-height:40px}.header__menu--new .industries__holder-item .description{margin-bottom:42px}}@media (min-width:961px){.header__menu--new .industries__holder-item .image-wrap{flex:1;margin-bottom:-4px;margin-left:-4px;margin-right:-4px}.header__menu--new .industries__holder-item.active{display:flex}.header__menu--new .industries__holder-item.active .description,.header__menu--new .industries__holder-item.active .long-title{animation:.5s translate-anim}.header__menu--new .industries__holder-item.active .image{animation:.5s fade-anim}.header__menu--new .clients .dropdown-menu{display:grid;grid-template-columns:2fr 2fr 1fr}.header__menu--new .clients .dropdown-menu>.menu-item{border:1px solid #c7c7d6;margin:0 -1px -1px 0}.header__menu--new .clients .dropdown-menu>.menu-item>.dropdown-item{padding:8px;text-decoration:none}.header__menu--new .clients .dropdown-menu>.menu-item .menu-title{min-height:40px;margin-bottom:14px}}@media (min-width:1280px){.header__menu--new .industries__holder-item .image-wrap{margin-bottom:-8px;margin-left:-8px;margin-right:-8px}}@media (min-width:1280px){.header__menu--new .clients .dropdown-menu>.menu-item>.dropdown-item{padding:16px}}@media (min-width:1440px){.header__menu--new .industries__holder-item .image-wrap{margin-bottom:-12px;margin-left:-12px;margin-right:-12px}.header__menu--new .clients .dropdown-menu>.menu-item>.dropdown-item{padding:24px}.header__menu--new .clients .dropdown-menu>.menu-item .menu-title{margin-bottom:18px;min-height:48px}}@media (min-width:2560px){.header__menu--new .dropdown-menu a>.menu-title:after{top:3px}.header__menu--new .services .block-group>.dropdown-item{min-height:121px}.header__menu--new .services .block-group .dropdown-menu>.menu-item .menu-title{min-height:64px}.header__menu--new .services .data-ai .ai-menu-item .description{top:580px}.header__menu--new .clients .dropdown-menu>.menu-item .menu-title{min-height:64px}}@media (min-width:961px){.header__menu--new .clients .dropdown-menu>.menu-item .description{margin-bottom:36px}}@media (min-width:1440px){.header__menu--new .clients .dropdown-menu>.menu-item .description{margin-bottom:56px}}@media (min-width:961px){.header__menu--new .clients .dropdown-menu>.menu-item .image-wrap{aspect-ratio:2;background-color:#f8f8f9;border-radius:4px;margin-bottom:-4px;margin-left:-4px;margin-right:-4px;overflow:hidden;padding-left:24px;padding-right:24px}.header__menu--new .clients .dropdown-menu>.menu-item.submenu{display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:16px}.header__menu--new .clients .dropdown-menu>.menu-item.submenu .dropdown-menu{display:block}.header__menu--new .clients .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item{border:none}.header__menu--new .clients .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item .dropdown-item{padding-bottom:0;padding-top:0}.header__menu--new .clients .dropdown-menu>.menu-item.submenu>.dropdown-item{padding-bottom:0}.header__menu--new .clients .dropdown-menu>.menu-item.submenu .menu-title{font-size:26px;font-weight:300;line-height:36px;margin-bottom:0;margin-top:24px;min-height:initial}.header__menu--new .clients .dropdown-menu>.menu-item.submenu .description{height:auto;margin-bottom:0}}@media (min-width:1280px){.header__menu--new .clients .dropdown-menu>.menu-item .image-wrap{margin-bottom:-8px;margin-left:-8px;margin-right:-8px;padding-left:32px;padding-right:32px}}@media (min-width:1280px){.header__menu--new .clients .dropdown-menu>.menu-item.submenu .menu-title{font-size:30px;line-height:38px;margin-top:32px}}@media (min-width:1440px){.header__menu--new .clients .dropdown-menu>.menu-item .image-wrap{margin-bottom:-12px;margin-left:-12px;margin-right:-12px;padding-left:44px;padding-right:44px}.header__menu--new .clients .dropdown-menu>.menu-item.submenu .menu-title{font-size:40px;line-height:40px;margin-top:36px}}@media (min-width:961px){.header__menu--new .clients .dropdown-menu .clients-item .image{flex:0 0 22.33%;-o-object-fit:cover;object-fit:cover;-o-object-position:center top;object-position:center top;order:1;transition:object-position 1s;transition:object-position 1s,-o-object-position 1s}.header__menu--new .clients .dropdown-menu .clients-item .image-wrap{display:flex;gap:16%}.header__menu--new .clients .dropdown-menu .clients-item .image-wrap:before{background-image:url(https://eleks.com/wp-content/uploads/menu-clients-image-2.svg);background-position:center top;background-repeat:no-repeat;background-size:cover;content:"";flex:0 0 22.33%;order:2;transition:background-position 1s}.header__menu--new .clients .dropdown-menu .clients-item .image-wrap:after{background-image:url(https://eleks.com/wp-content/uploads/menu-clients-image-3.svg);background-position:center top;background-repeat:no-repeat;background-size:cover;content:"";flex:0 0 22.33%;order:3;transition:background-position 1s}.header__menu--new .clients .dropdown-menu .clients-item:hover .image{-o-object-position:center bottom;object-position:center bottom}.header__menu--new .clients .dropdown-menu .clients-item:hover .image-wrap:after,.header__menu--new .clients .dropdown-menu .clients-item:hover .image-wrap:before{background-position:center bottom}.header__menu--new .clients .dropdown-menu .case-studies-item .image{height:auto;-o-object-fit:cover;object-fit:cover;-o-object-position:center top;object-position:center top;transition:object-position 2.5s;transition:object-position 2.5s,-o-object-position 2.5s;width:100%}.header__menu--new .clients .dropdown-menu .case-studies-item .image-wrap{display:flex}.header__menu--new .clients .dropdown-menu .case-studies-item:hover .image{-o-object-position:center bottom;object-position:center bottom}.header__menu--new .about-us .dropdown-menu{display:grid;grid-template-rows:1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr 1fr}.header__menu--new .about-us .dropdown-menu>.menu-item{border:1px solid #c7c7d6;margin:0 -1px -1px 0}.header__menu--new .about-us .dropdown-menu>.menu-item>.dropdown-item{padding:8px}.header__menu--new .about-us .dropdown-menu>.menu-item .menu-title{min-height:40px;margin-bottom:14px}}@media (min-width:1280px){.header__menu--new .about-us .dropdown-menu>.menu-item>.dropdown-item{padding:16px}}@media (min-width:1440px){.header__menu--new .about-us .dropdown-menu>.menu-item>.dropdown-item{padding:24px}.header__menu--new .about-us .dropdown-menu>.menu-item .menu-title{margin-bottom:18px;min-height:48px}}@media (min-width:2560px){.header__menu--new .about-us .dropdown-menu>.menu-item .menu-title{min-height:64px}}@media (min-width:961px){.header__menu--new .about-us .dropdown-menu>.menu-item .description{margin-bottom:64px}.header__menu--new .about-us .dropdown-menu>.menu-item.submenu .dropdown-menu{display:block}.header__menu--new .about-us .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item{border:none}.header__menu--new .about-us .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item .dropdown-item{padding-bottom:0;padding-top:0}.header__menu--new .about-us .dropdown-menu>.menu-item.submenu>.dropdown-item{padding-bottom:0}.header__menu--new .about-us .dropdown-menu>.menu-item.submenu .menu-title{margin-bottom:16px;min-height:initial}.header__menu--new .about-us .big-size{grid-row:span 2}.header__menu--new .about-us .with-icon>.dropdown-item{display:flex;flex-direction:column-reverse;height:100%;justify-content:space-between}.header__menu--new .about-us .image-wrap{margin-bottom:-4px;margin-left:-4px;margin-right:-4px}.header__menu--new .blog .dropdown-menu{display:grid;grid-template-rows:1fr 1fr;grid-template-columns:1fr 1fr 1fr}.header__menu--new .blog .dropdown-menu>.menu-item{border:1px solid #c7c7d6;margin:0 -1px -1px 0}.header__menu--new .blog .dropdown-menu>.menu-item>.dropdown-item{align-items:center;display:flex;flex-wrap:wrap;gap:16px;padding:8px}.header__menu--new .blog .dropdown-menu>.menu-item .menu-title{flex:0 0 50%}}@media (min-width:1280px){.header__menu--new .about-us .image-wrap{margin-bottom:-8px;margin-left:-8px;margin-right:-8px}}@media (min-width:1280px){.header__menu--new .blog .dropdown-menu>.menu-item>.dropdown-item{gap:24px;padding:16px}}@media (min-width:961px){.header__menu--new .blog .dropdown-menu>.menu-item .description{min-height:64px}.header__menu--new .blog .dropdown-menu>.menu-item.submenu .dropdown-menu{display:block}}@media (min-width:1440px){.header__menu--new .about-us .dropdown-menu>.menu-item .description{margin-bottom:128px}.header__menu--new .about-us .image-wrap{margin-bottom:-12px;margin-left:-12px;margin-right:-12px}.header__menu--new .blog .dropdown-menu>.menu-item>.dropdown-item{padding:24px}.header__menu--new .blog .dropdown-menu>.menu-item .description{min-height:80px}}@media (min-width:961px){.header__menu--new .blog .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item{border:none}.header__menu--new .blog .dropdown-menu>.menu-item.submenu .dropdown-menu .menu-item .dropdown-item{padding-bottom:0;padding-top:0}.header__menu--new .blog .dropdown-menu>.menu-item.submenu>.dropdown-item{padding-bottom:0}.header__menu--new .blog .dropdown-menu>.menu-item.submenu .menu-title{margin-bottom:16px;min-height:initial}.header__menu--new .blog .big-size{grid-row:span 2}.header__menu--new .blog .image-wrap{margin:auto -4px -4px}.hide-show-menu{display:none}}@media (min-width:1280px){.header__menu--new .blog .image-wrap{margin-bottom:-8px;margin-left:-8px;margin-right:-8px}}@media (min-width:1440px){.header__menu--new .blog .image-wrap{margin-bottom:-12px;margin-left:-12px;margin-right:-12px}}.mobile-menu-active .header--new__logo-img{fill:#fff}.hide-show-menu{background-color:#e9edf3;border-radius:40px;cursor:pointer;margin-left:8px;padding:15px 20px 14px}.hide-show-menu:focus-visible{outline-offset:1px;outline:#0045E6 solid 2px}.hide-show-menu-icon{border-color:#1e1d28;border-style:solid;border-width:1px 0;height:11px;position:relative;transition:all .15s cubic-bezier(.67,-.03,.45,1.89);width:16px}.hide-show-menu-icon::after,.hide-show-menu-icon::before{background-color:#1e1d28;content:"";display:block;height:1px;position:absolute;top:4px;transition:all .35s cubic-bezier(.67,-.03,.45,1.89);width:16px}.mobile-menu-active{overflow:hidden}.mobile-menu-active .hide-show-menu{background-color:#2c2a39}.mobile-menu-active .hide-show-menu-icon{border-width:0;margin-left:-1px;transform:rotate(90deg)}.mobile-menu-active .hide-show-menu-icon::after,.mobile-menu-active .hide-show-menu-icon::before{background-color:#fff}.mobile-menu-active .hide-show-menu-icon::after{transform:rotate(45deg)}.mobile-menu-active .hide-show-menu-icon::before{transform:rotate(-45deg)}.mobile-menu-active .header--new{backdrop-filter:none;-webkit-backdrop-filter:none;background-color:#1e1d28}.mobile-menu-active .header--new__row{border-bottom-color:#54575e}.mobile-menu-active .header--new__info{align-items:flex-start;background-color:#1e1d28;bottom:0;display:flex;flex-wrap:wrap;justify-content:space-between;left:0;overflow:auto;padding:8px 8px 52px;position:fixed;right:0;top:57px}.mobile-menu-active .header__menu--newWrap{flex:0 0 100%;margin-bottom:48px}.mobile-menu-active .header__menu--new>.menu-item{background-color:#fff;border-radius:4px;margin-bottom:4px}.mobile-menu-active .header__menu--new>.menu-item.nav-link:focus-visible .menu-title{background-color:red}.mobile-menu-active .header__menu--new>.menu-item-has-children .block-group>.dropdown-item:after,.mobile-menu-active .header__menu--new>.menu-item-has-children .nav-link:after{content:url("data:image/svg+xml,%3Csvg width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4L5 8M9 4L5 8M5 8L5 1.74846e-07' stroke='%231E1D28'/%3E%3C/svg%3E%0A");height:20px;margin-right:8px;transition:transform .3s;transform-origin:center}.mobile-menu-active .header__menu--new .nav-link{align-items:center;display:flex;justify-content:space-between;padding:16px}.mobile-menu-active .header__menu--new .nav-link .menu-title{font-size:20px;font-weight:300;line-height:24px}.mobile-menu-active .header__menu--new .nav-link.active:after{transform:rotate(180deg)}.mobile-menu-active .header__menu--new .block-group{transition:background-color .3s}.mobile-menu-active .header__menu--new .block-group>.dropdown-item{align-items:center;display:flex;justify-content:space-between}.mobile-menu-active .header__menu--new .block-group.active{background-color:#1e1d28;border-radius:4px;color:#fff;margin-left:4px;margin-right:4px}.mobile-menu-active .header__menu--new .block-group.active>.dropdown-item:after{filter:brightness(0) invert(1);transform:rotate(180deg);transition-duration:.3s;transition-property:filter,transform}.footer__menu li a{transition-duration:.3s;transition-property:border-color,color;text-decoration:none}.mobile-menu-active .header__menu--new .block-group.active .dropdown-item{padding-left:12px;padding-right:12px}.mobile-menu-active .header__menu--new .block-group .dropdown-menu__wrapper .menu-title{font-weight:400}.mobile-menu-active .header__menu--new .block-group .dropdown-menu__wrapper .dropdown-menu__wrapper{display:block}.mobile-menu-active .header__menu--new .block-group .dropdown-menu__wrapper .dropdown-menu__wrapper .dropdown-menu{padding-left:32px}.mobile-menu-active .header__menu--new .block-group .dropdown-menu__wrapper .dropdown-menu__wrapper .dropdown-menu .menu-title{color:#c7c7d6}.mobile-menu-active .header__menu--new .dropdown-menu__wrapper{display:none}.mobile-menu-active .header__menu--new .dropdown-item{padding:10px 16px}.mobile-menu-active .header__menu--new .services .nav-link{border-bottom:1px solid transparent}.mobile-menu-active .header__menu--new .services .nav-link.active{border-bottom-color:#c7c7d6}.mobile-menu-active .header__menu--new .about-us .dropdown-menu{display:flex;flex-direction:column}.mobile-menu-active .header__menu--new .about-us .submenu{order:1}.mobile-menu-active .header__menu--new .about-us .submenu .dropdown-menu__wrapper{display:block}.mobile-menu-active .header__menu--new .clients .submenu,.mobile-menu-active .scroll-to-top{display:none}@keyframes fade-anim{0%{opacity:0}100%{opacity:1}}@keyframes menu-anim{0%{transform:translateY(16px)}100%{transform:translateY(0)}}@keyframes translate-anim{0%{transform:translateY(16px);opacity:0}100%{opacity:1;transform:translateY(0)}}@keyframes headerBtnMove{0%{transform:translateX(100%)}100%{transform:translateX(0)}}@keyframes headerBtnGradientMove{0%{transform:translateX(10%)}100%{transform:translateX(-100%)}}@keyframes headerBtnTextMove{0%{transform:translateX(0)}100%{transform:translateX(-180px)}}.footer{background-color:#f9f9f9;padding-top:60px}@media (max-width:960px){.header--new__search{align-self:flex-end}.footer .row{flex-wrap:wrap}}@media (max-width:680px){.footer{padding-top:40px}}.footer__menu{list-style:none;margin:0;padding:0}.footer__menu li a{border-bottom:1px solid transparent;color:#373737;font-size:1rem;display:inline-block}.footer__menu li a:hover{border-bottom-color:#1e1d28;color:#1e1d28}.footer__menu li+li{margin-top:1rem}.footer__closest-office{max-width:450px}@media (max-width:1700px){.footer__closest-office{max-width:430px}}.sitemap-list a{border-bottom:1px solid transparent;text-decoration:none}.footer__lang{margin-left:40px}@media (max-width:480px){.footer__lang{margin-left:20px}}@media (max-width:400px){.footer__lang{display:none}}.footer--en{padding-top:100px}@media (max-width:1440px){.footer__closest-office{max-width:360px}.footer--en{padding-top:60px}}@media (max-width:680px){.footer--en{padding-top:40px}}.footer--en .footer__closest-office{max-width:265px}@media (max-width:460px){.footer__menu{display:none}.footer .social{justify-content:center}.footer .social__item{margin-right:10px;margin-left:10px}.footer--en .footer__closest-office{max-width:100%}}.footer--en .footer__menu{display:flex}@media (max-width:640px){.footer--en .footer__menu{flex-wrap:wrap}}.footer--en .footer__menu>li{flex:1}@media (max-width:640px){.footer--en .footer__menu>li{flex-basis:50%}.footer--en .footer__menu>li:nth-child(n+3){margin-top:30px}}.footer--en .footer__menu>li>a{border-bottom:none;cursor:default;color:#1e1d28;font-size:1.25rem;font-weight:700;line-height:1.5;margin:5px 0 20px}.footer--en .footer__menu>li+li{margin-top:0}.footer--en .footer__menu .dropdown-menu{list-style:none;margin:0;padding:0}.footer--en .footer__menu .dropdown-menu li{margin-right:20px}.footer--en .footer__menu .dropdown-menu li a{font-size:.875rem}.footer--en .footer__menu .dropdown-menu li+li{margin-top:.25rem}.footer--en .social{margin-top:40px}@media (max-width:960px){.footer--en .footer__menu>li>a{margin-bottom:10px}.footer--en .social{margin-bottom:40px;margin-top:30px}}.scroll-to-top{bottom:2px;cursor:pointer;outline:0;position:fixed;right:2px;transform:translateY(150%);transition:transform .3s ease;z-index:100}.scroll-to-top__arrow{transition:d .3s}.scroll-to-top:hover .scroll-to-top__arrow{d:path("M32 24L28 20M24 24L28 20M28 20L28 36")}.scroll-to-top:focus-visible{border-radius:4px;outline-offset:1px;outline:#0045E6 solid 2px}.scroll-to-top--active{transform:translateY(0)}.footer--new{padding-top:40px}@media (min-width:768px){.mobile-menu-active .header--new__info{top:65px}.footer--new__row{display:grid;margin-left:64px;margin-right:64px}}@media (min-width:960px){.footer--new{padding-top:80px}.footer--new__row{align-items:flex-start;grid-template-columns:1fr 2fr;grid-gap:16px;margin-left:80px;margin-right:80px}}@media (min-width:1280px){.footer--new__row{margin-left:208px;margin-right:0}}@media (min-width:1440px){.footer--new__row{grid-template-columns:208px 1fr;margin-left:0}}@media (min-width:1920px){.header__menu--new .blog .dropdown-menu>.menu-item .description{min-height:90px}.footer--new__row{grid-template-columns:288px 1fr}}@media (min-width:2560px){.header__menu--new .blog .dropdown-menu>.menu-item .description{min-height:120px}.footer--new{padding-top:120px}.footer--new__row{grid-template-columns:384px 1fr}}@media (min-width:768px){.footer--new__col-1{display:grid;grid-gap:16px;grid-template-columns:1fr 1fr 1fr}}@media (min-width:960px){.footer--new__col-1{grid-gap:32px;grid-template-columns:1fr}}@media (min-width:1440px){.footer--new__col-1{grid-gap:40px}}.footer--new__logo{display:inline-block;outline:0;position:relative;vertical-align:top}.footer--new__logo-wrap{margin-bottom:40px}.footer--new__logo:after{border-radius:20px;border:2px solid #0045e6;bottom:-7px;content:"";left:-11px;opacity:0;position:absolute;right:-11px;top:-4px;transition:opacity .1s cubic-bezier(.4,.2,.4,1)}.footer--new__logo-image{height:24px;vertical-align:top;width:auto}.footer--new__menu a.dropdown-item:before,.footer--new__submenu li a:before{background-image:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L9 1M9 1H1M9 1V9' stroke='%231E1D28'/%3E%3C/svg%3E%0A");background-size:contain;background-position:center;background-repeat:no-repeat;height:10px;left:0;width:10px;content:""}.footer--new__menu{display:none}@media (min-width:768px){.footer--new__logo-wrap{margin-bottom:0}.footer--new__menu{display:grid;grid-gap:40px 16px;grid-template-columns:1fr 1fr 1fr;list-style:none;margin:40px 0 0;padding:0}}.footer--new__menu .title-h4 .nav-link{display:block;margin-bottom:24px}.footer--new__menu .submenu-title>.dropdown-item{font-weight:700}.footer--new__menu .dropdown-menu-opener{display:none}.footer--new__menu .services{grid-column:span 2}@media (min-width:960px){.footer--new__menu{margin-top:0}.footer--new__menu .services{grid-column:span 3;padding-right:33.333%}}@media (min-width:1440px){.footer--new__menu{grid-template-columns:1fr 1fr 1fr 1fr 1fr}.footer--new__menu .services{grid-column:span 2;padding-right:0}}@media (min-width:768px){.footer--new__menu .services>.dropdown-menu__wrapper>.dropdown-menu{display:grid;grid-gap:24px 16px;grid-template-columns:1fr 1fr}.footer--new__menu .dropdown-menu{list-style:none;margin:0;padding:0}}.footer--new__menu .dropdown-item{display:block;font-size:12px;font-weight:400;line-height:16px;padding-bottom:8px;padding-right:16px;padding-top:8px;text-decoration:none;transition:padding .3s;vertical-align:top}.footer--new__address-wrap,.footer--new__submenu{display:flex;gap:24px}.footer--new__menu a.dropdown-item{outline:0;position:relative}.footer--new__menu a.dropdown-item:before{opacity:0;position:absolute;top:50%;transition:opacity .3s;transform:translateY(-50%)}.footer--new__menu a.dropdown-item:focus-visible,.footer--new__menu a.dropdown-item:hover{padding-left:16px;padding-right:0}.footer--new__menu a.dropdown-item:focus-visible:before,.footer--new__menu a.dropdown-item:hover:before{opacity:1}.footer--new__address{flex:1;font-size:12px;line-height:16px}@media (min-width:1280px){.footer--new__menu .dropdown-item{font-size:14px;line-height:24px;padding-top:0;padding-bottom:0}.footer--new__address{font-size:14px;line-height:24px}}.footer--new__address-title{font-weight:700;margin-bottom:4px}.footer--new__address-text{max-width:200px}.footer--new__address-link{color:#373737;font-weight:400;font-size:12px;line-height:16px;margin-top:8px}@media (min-width:1280px){.footer--new__address-link{font-size:14px;line-height:24px}}.footer--new__address-link:before{transform:scale(1)}.footer--new__address-link:after{transform:scale(0)}.footer--new__address-link .link-n__text{transform:translateX(18px)}.footer--new__address-link:focus-visible:before,.footer--new__address-link:hover:before{transform:scale(0)}.footer--new__address-link:focus-visible:after,.footer--new__address-link:hover:after{transform:scale(1)}.footer--new__address-link:focus-visible .link-n__text,.footer--new__address-link:hover .link-n__text{transform:translateX(0)}.footer--new__info{margin-bottom:40px}@media (min-width:768px){.footer--new__address-wrap{grid-column:span 2;display:grid;grid-gap:16px;grid-template-columns:1fr 1fr}.footer--new__info{margin-top:40px}.footer--new__info .footer--new__row{grid-gap:16px;grid-template-columns:1fr 1fr 1fr;position:relative}}@media (min-width:960px){.footer--new__address-wrap{grid-gap:32px;grid-template-columns:1fr}.footer--new__info{margin-bottom:80px;margin-top:80px}}@media (min-width:1440px){.footer--new__info .footer--new__row{grid-template-columns:208px 1.6fr 1fr 1.5fr}}@media (min-width:1680px){.footer--new__info .footer--new__row{grid-template-columns:208px 1.8fr 1fr 1.75fr}}@media (min-width:1920px){.footer--new__info .footer--new__row{grid-template-columns:288px 1.76fr 1fr 1.7fr}}@media (min-width:2560px){.footer--new__address-link:after,.footer--new__address-link:before{background-image:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L9 1M9 1H1M9 1V9' stroke='%231E1D28'/%3E%3C/svg%3E%0A");flex-basis:10px;height:10px;width:10px}.footer--new__address-link:before{margin-right:-18px}.footer--new__info{margin-bottom:120px;margin-top:120px}.footer--new__info .footer--new__row{grid-template-columns:384px 1.96fr 1fr 2fr}}.footer--new__copyright{font-size:12px;line-height:16px;text-align:center}@media (min-width:768px){.footer--new__info .footer--new__row:not(:has(.lang--new)) .footer--new__copyright{top:8px}.footer--new__copyright{position:absolute;bottom:8px;right:0;text-align:right}}@media (min-width:960px){.footer--new__info .footer--new__row{align-items:center}.footer--new__info .footer--new__row:not(:has(.lang--new)) .footer--new__copyright{grid-column:span 1;padding-left:0;text-align:right}.footer--new__copyright{grid-column:span 3;padding-left:calc(33.333% + 5px);position:static;text-align:left}}@media (min-width:1440px){.footer--new__info .footer--new__row:not(:has(.lang--new)){grid-template-columns:208px 1fr 1.5fr}.footer--new__copyright{grid-column:span 1;padding-left:0;text-align:right}}.footer--new__submenu{align-items:center;justify-content:center;list-style:none;margin:0 0 16px;padding:0}@media (min-width:768px){.footer--new__submenu{align-items:flex-start;flex-direction:column;gap:0;margin-bottom:0}}@media (min-width:960px){.footer--new__submenu{flex-direction:row;justify-content:flex-start;gap:16px}.footer--new__lang .lang--new__items{border:none;display:flex;position:static}}@media (min-width:1280px){.footer--new__copyright{font-size:14px;line-height:24px}.footer--new__submenu{gap:24px}}@media (min-width:1920px){.footer--new__info .footer--new__row:not(:has(.lang--new)){grid-template-columns:288px 1fr 1.5fr}.footer--new__submenu{gap:32px}}.footer--new__submenu li a{display:inline-block;font-size:12px;line-height:16px;outline:0;padding-bottom:8px;padding-right:16px;padding-top:8px;position:relative;text-decoration:none;transition:padding .3s;vertical-align:top;white-space:nowrap}.footer--new__submenu li a:before{opacity:0;position:absolute;top:50%;transition:opacity .3s;transform:translateY(-50%)}.footer--new__submenu li a:focus-visible,.footer--new__submenu li a:hover{padding-left:16px;padding-right:0}.footer--new__submenu li a:focus-visible:before,.footer--new__submenu li a:hover:before{opacity:1}.footer--new__lang{align-items:center;gap:24px;justify-content:center;margin-bottom:24px;padding:0}@media (min-width:768px){.footer--new__lang{align-self:flex-start;gap:4px;justify-content:flex-end;margin-bottom:0}}@media (min-width:1440px){.footer--new__lang{justify-content:flex-start}}.footer--new__lang .lang--new__items{align-items:center;background-color:transparent;gap:24px}@media (min-width:768px){.footer--new__lang .lang--new__items{gap:4px}}.footer--new__lang .lang--new__link{font-size:14px;line-height:20px;padding:10px}.footer--new__lang .lang--new__item.selected,.footer--new__lang .lang--new__link:hover{color:#0045e6}.footer--new .social{gap:16px;justify-content:center;margin-bottom:40px;margin-top:40px}@media (min-width:768px){.footer--new .social{justify-content:flex-start;margin-bottom:0;margin-top:0}}.footer--new .social__item{margin:0}.footer--new .social__link{height:40px;width:40px}.sitemap-list{margin-top:40px;margin-bottom:40px}@media (max-width:767px){.sitemap-list{padding-left:0}}.sitemap-list .title-h1{margin-bottom:32px}.sitemap-list .title-h4{margin-bottom:16px}.sitemap-list ul{list-style:none;margin:0 0 30px;padding:0}.sitemap-list li{padding-left:24px;position:relative}.sitemap-list li:after{background-color:#0045e6;border-radius:50%;content:"";height:8px;left:6px;position:absolute;top:6px;width:8px}.sitemap-list li+li{margin-top:12px}.sitemap-list a{color:#373737;font-size:1rem;display:inline-block;transition-duration:.3s;transition-property:border-color,color}.sitemap-list a:hover{border-bottom-color:#0045e6;color:#0045e6}#CybotCookiebotDialog #CybotCookiebotDialogDetailFooter,#CybotCookiebotDialog #CybotCookiebotDialogHeader,#CybotCookiebotDialog #CybotCookiebotDialogNav,#CybotCookiebotDialog .CookieCard .CybotCookiebotDialogDetailBodyContentCookieTypeIntro{display:none}#CybotCookiebotDialog[name=CybotCookiebotDialog]{font-family:"Proxima Nova",Arial,SourceSansPro,"Segoe UI",Roboto,"Helvetica Neue",sans-serif}@media screen and (min-width:601px){#CybotCookiebotDialog[name=CybotCookiebotDialog]{max-width:640px}}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard{background-color:#f8f8f9;border-bottom:none;border-radius:8px;margin:0;padding:8px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard:not(:last-child){margin-bottom:8px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentCookieContainerButton:before,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentIABv2Tab:before,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard.CybotCookiebotDialogCollapsed:before{left:6px;margin-right:20px;top:10px;transition:border-color .3s}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentCookieContainerButton.CybotCookiebotDialogCollapsed:before,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentIABv2Tab.CybotCookiebotDialogCollapsed:before{top:6px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentCookieContainerButton,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard label{font-size:16px;font-weight:600;line-height:20px;transition:color .3s}@media (min-width:1280px){.footer--new__submenu li a{font-size:14px;line-height:24px}.sitemap-list{margin-bottom:80px;margin-top:80px}.sitemap-list li{padding-left:28px}.sitemap-list li:after{left:8px;top:8px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard{padding:16px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentCookieContainerButton:before,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentIABv2Tab:before,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard.CybotCookiebotDialogCollapsed:before{left:4px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentCookieContainerButton,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard label{line-height:24px}}@media (min-width:1920px){.sitemap-list li+li{margin-top:16px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentCookieContainerButton,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard label{font-size:20px;line-height:24px}}@media (min-width:2560px){.footer--new__info .footer--new__row:not(:has(.lang--new)){grid-template-columns:384px 1fr 1.5fr}.sitemap-list li:after{top:14px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBodyContentCookieContainerButton,#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard label{font-size:24px;line-height:32px}}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBulkConsentCount{background-color:#e9edf3;border-radius:16px;font-size:12px;font-weight:400;line-height:16px;margin-left:8px;padding:0 4px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogBodyLevelButtonSlider{background-color:#e9edf3;box-shadow:0 0 0 2px #54575e inset;transition:background-color .3s}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogBodyLevelButtonSlider:before{background-color:#54575e;transform:scale(.8);transition-duration:.3s;transition-property:background-color,transform}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard input:checked+.CybotCookiebotDialogBodyLevelButtonSlider{background-color:#0045e6;box-shadow:none}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard input:checked+.CybotCookiebotDialogBodyLevelButtonSlider:before{background-color:#e9edf3;transform:scale(1) translateX(26px)}.no-js .need-animate .fade-left,.no-js .need-animate .fade-up{transform:none!important}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogBodyLevelButtonSliderWrapperDisabled .CybotCookiebotDialogBodyLevelButtonSlider{box-shadow:0 0 0 2px rgba(29,27,32,.12) inset}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogBodyLevelButtonSliderWrapperDisabled .CybotCookiebotDialogBodyLevelButtonSlider:before{background-color:rgba(155,159,173,.38)}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogBodyLevelButtonSliderWrapperDisabled input:checked+.CybotCookiebotDialogBodyLevelButtonSlider{background-color:rgba(29,27,32,.12);box-shadow:none}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogBodyLevelButtonSliderWrapper:hover input[type=checkbox]:not(:disabled)+.CybotCookiebotDialogBodyLevelButtonSlider{opacity:1}#CybotCookiebotDialog #CybotCookiebotDialogTabContent .CybotCookiebotScrollContainer{border-bottom-color:#c7c7d6;padding:8px}#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes{padding:8px}#CybotCookiebotDialog #CybotCookiebotDialogBodyContent{padding:8px!important}#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentTitle{font-size:16px;font-weight:600;line-height:20px;margin-bottom:8px}@media (min-width:1280px){#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBulkConsentCount{font-size:14px;line-height:24px;padding-left:8px;padding-right:8px}#CybotCookiebotDialog #CybotCookiebotDialogTabContent .CybotCookiebotScrollContainer{padding:16px!important}#CybotCookiebotDialog #CybotCookiebotDialogTabContent #CybotCookiebotDialogBody .CybotCookiebotScrollContainer{max-height:300px}#CybotCookiebotDialog #CybotCookiebotDialogBodyContent{padding:8px 16px!important}#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentTitle{line-height:24px;margin-bottom:16px}}@media (min-width:1920px){#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentTitle{font-size:20px;line-height:24px}}@media (min-width:2560px){#CybotCookiebotDialog #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CookieCard .CybotCookiebotDialogDetailBulkConsentCount{font-size:16px;line-height:24px}#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentTitle{font-size:24px;line-height:32px}}#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentText,#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentText *{font-size:12px;line-height:16px}#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentText a{color:inherit;font-weight:400;text-decoration:underline;transition:text-decoration-color .3s}#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentText a:hover,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyButtonDecline:hover,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonCustomize:hover,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection:hover{opacity:1;text-decoration-color:transparent}.no-js .need-animate .fade,.no-js .need-animate .fade-left,.no-js .need-animate .fade-up{opacity:1!important;animation:none!important}#CybotCookiebotDialog #CybotCookiebotDialogFooter{padding:16px}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyButtonsWrapper{display:grid;grid-template-columns:1fr 1fr;grid-gap:16px}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyButtonDecline,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonCustomize,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection{border:none;color:#54575e;font-size:14px;font-weight:700;line-height:16px;margin:0;padding:0;text-decoration:underline;transition:text-decoration-color .3s;width:auto}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyButtonDecline .CybotCookiebotDialogArrow,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonCustomize .CybotCookiebotDialogArrow,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection .CybotCookiebotDialogArrow{display:none}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonCustomize,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection{text-align:right}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll{align-items:center;border-radius:48px;display:inline-flex;font-size:14px;font-weight:700;gap:8px;grid-column:span 2;justify-content:center;line-height:16px;margin:0;order:-1;padding:12px 16px;text-align:center;transition-duration:.3s;transition-property:background-color,border-color,color;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;width:auto}@media (min-width:601px){#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyButtonsWrapper{display:flex;gap:16px}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyButtonDecline{order:1}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll{margin-right:auto}}@media (min-width:1280px){#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentText,#CybotCookiebotDialog #CybotCookiebotDialogBodyContent #CybotCookiebotDialogBodyContentText *{font-size:14px;line-height:24px}#CybotCookiebotDialog #CybotCookiebotDialogFooter{padding:24px 32px!important}#CybotCookiebotDialog #CybotCookiebotDialogFooter .CybotCookiebotScrollArea{padding:0!important}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll{font-size:15px;line-height:24px;padding-left:20px;padding-right:20px}}@media (min-width:1920px){#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll{font-size:16px;line-height:24px;padding:16px 24px}}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll:after{background-image:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L9 1M9 1H1M9 1V9' stroke='%231E1D28'/%3E%3C/svg%3E%0A");background-size:contain;background-repeat:no-repeat;background-position:center;content:"";filter:brightness(0) invert(1);flex:0 0 10px;height:10px;transition:transform .3s;width:10px}@media (min-width:2560px){#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll{font-size:20px;line-height:32px;padding-left:32px;padding-right:32px}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll:after{background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6569 13.6566L13.6569 2.34291M2.34314 2.34292L13.6569 2.34291M13.6569 2.34291L2.34314 13.6566' stroke='%231E1D28'/%3E%3C/svg%3E%0A");flex-basis:16px;height:16px;width:16px}}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll:focus-visible,#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll:hover{background-color:#0045e6;border-color:#0045e6}#CybotCookiebotDialog #CybotCookiebotDialogFooter #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll:focus-visible{outline-offset:1px;outline:#0045E6 solid 2px}.no-js .need-animate .draw-right,.no-js .need-animate .draw-up{clip-path:none!important;animation:none!important}.need-animate.start-animate .draw-up,.need-animate.start-animate .fade-up{animation-timing-function:cubic-bezier(.22,.22,.22,.91);animation-fill-mode:forwards}@keyframes fadeUp{0%{opacity:0;transform:translateY(80px)}100%{opacity:1;transform:translateY(0)}}@keyframes curtainUp{0%{clip-path:inset(100% 0 0 0)}100%{clip-path:inset(0 0 0 0)}}@keyframes curtainRight{0%{clip-path:inset(0 100% 0 0)}100%{clip-path:inset(0 0 0 0)}}@keyframes fadeLeft{0%{opacity:0;transform:translateX(-100%)}100%{opacity:1;transform:translateX(0)}}@keyframes fade{0%{opacity:0}100%{opacity:1}}.need-animate .fade-up{opacity:0}.need-animate .draw-up{clip-path:inset(100% 0 0 0)}.need-animate .draw-right{clip-path:inset(0 100% 0 0)}.need-animate .fade-left{opacity:0;transform:translateX(-80px)}.need-animate .fade{opacity:0}.need-animate.start-animate .fade-up{animation-name:fadeUp;animation-duration:.8s}.need-animate.start-animate .fade-up:first-child{animation-delay:0s}.need-animate.start-animate .fade-up:nth-child(2){animation-delay:.4s}.need-animate.start-animate .fade-up:nth-child(3){animation-delay:.8s}.need-animate.start-animate .fade-up:nth-child(4){animation-delay:1.2s}.need-animate.start-animate .fade-up:nth-child(5){animation-delay:1.6s}.need-animate.start-animate .fade-up:nth-child(6){animation-delay:2s}.need-animate.start-animate .fade-up:nth-child(7){animation-delay:2.4s}.need-animate.start-animate .fade-up:nth-child(8){animation-delay:2.8s}.need-animate.start-animate .fade-up:nth-child(9){animation-delay:3.2s}.need-animate.start-animate .fade-up:nth-child(10){animation-delay:3.6s}.need-animate.start-animate .draw-up{animation-name:curtainUp;animation-duration:1s}.need-animate.start-animate .draw-right{animation-name:curtainRight;animation-duration:1s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(.22,.22,.22,.91)}.need-animate.start-animate .fade,.need-animate.start-animate .fade-left{animation-duration:.8s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(.22,.22,.22,.91)}.need-animate.start-animate .fade-left{animation-name:fadeLeft}.need-animate.start-animate .fade{animation-name:fade}.need-animate .animate-done.draw-right,.need-animate .animate-done.draw-up,.need-animate .animate-done.fade,.need-animate .animate-done.fade-left,.need-animate .animate-done.fade-up{animation:none!important}.need-animate .animate-done.fade-up{opacity:1}.need-animate .animate-done.draw-right,.need-animate .animate-done.draw-up{clip-path:inset(0 0 0 0)}.need-animate .animate-done.fade-left{opacity:1;transform:translateX(0)}.need-animate .animate-done.fade{opacity:1}@media (prefers-reduced-motion:reduce){.need-animate .fade,.need-animate .fade-left,.need-animate .fade-up{animation:none!important;opacity:1!important}.need-animate .draw-right,.need-animate .draw-up{clip-path:none!important;animation:none!important}.need-animate .fade-left{transform:none!important}}@media print{li,table,ul{-moz-column-break-inside:avoid;break-inside:avoid}*,::after,::before{background:0 0!important;box-shadow:none!important;text-shadow:none!important;color:#000!important}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}.container-n,.search--new{padding-left:20mm;padding-right:20mm}.header--new__btn--mask,.pl-big{padding-right:0!important;padding-left:0!important}aside,button,footer,nav{display:none!important}.content,main{display:block;width:100%}.header__menu--new .menu-title,.title-h1,.title-h2,.title-h4,.title-h5,h1,h2,h3,h4,h5,h6{-moz-column-break-after:avoid;break-after:avoid;page-break-after:avoid;page-break-inside:avoid}p{orphans:3;widows:3}a,a:visited{text-decoration:underline!important}a[href]::before{display:none}li{page-break-inside:avoid}img{max-width:100%!important;page-break-inside:avoid}table{border-collapse:collapse;page-break-inside:avoid;width:100%}thead{display:table-header-group}#contact-us,.header--new__btn--mask,.header--new__btn--mask::after,.header--new__btn--mask::before,.header--new__mask,.header--new__screen-reader-shortcut,.header--new__search,.hide-show-menu,.scroll-to-top{display:none!important}@page{margin:15mm}.header--new{margin-bottom:12px;position:relative}.header--new__row{border-bottom:none!important}}.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.eleks-chat-input,button{font-family:inherit}html{scrollbar-gutter:stable}.eleks-chat-trigger{align-items:center;animation:25s ease-in-out infinite eleks-gradient-shift;background:linear-gradient(315deg,#0045e6,#9c86e4,#0045e6);background-size:200% 200%;border-radius:8px 8px 0 0;border:none;bottom:100%;color:#fff;cursor:pointer;display:flex;flex-direction:column;gap:8px;height:40px;justify-content:flex-end;left:50%;overflow:hidden;padding:8px 24px;pointer-events:auto;position:absolute;text-align:center;transform:translateX(-50%);transition:height .4s cubic-bezier(.32,.72,0,1),width .4s cubic-bezier(.32,.72,0,1),padding .4s cubic-bezier(.32,.72,0,1),border-radius .4s cubic-bezier(.32,.72,0,1),opacity .3s,margin-bottom .3s;width:129px}.eleks-chat-trigger.is-anim-out-fade .eleks-chat-trigger__arrow,.eleks-chat-trigger.is-anim-out-fade .eleks-chat-trigger__headline{transition:opacity .2s ease}.eleks-chat-trigger__headline{color:#fff;flex-shrink:0;font-family:Signifier,Georgia,serif;font-size:24px;font-weight:275;line-height:26px}.eleks-chat-trigger__arrow{flex-shrink:0}@media (min-width:960px){.eleks-chat-trigger{height:124px;padding:16px 24px 8px;width:206px}.eleks-chat-trigger.is-small{border-radius:8px 8px 0 0;height:40px;margin-bottom:0;padding:8px 24px;width:129px}.eleks-chat-trigger.is-small:hover{height:48px;padding-bottom:16px}.eleks-chat-trigger.is-anim-h{height:40px;padding:8px 62px;width:205px}.eleks-chat-trigger.is-anim-h:hover{height:40px;padding-bottom:8px}.eleks-chat-trigger.is-anim-v{height:124px;padding:16px 24px 8px;width:206px}.eleks-chat-trigger.is-anim-v:hover{height:124px;padding-bottom:8px}.eleks-chat-trigger:not(.is-small):not(.is-anim-out-fade):not(.is-anim-out-v):not(.is-anim-out-h) .eleks-chat-trigger__arrow,.eleks-chat-trigger:not(.is-small):not(.is-anim-out-fade):not(.is-anim-out-v):not(.is-anim-out-h) .eleks-chat-trigger__headline{opacity:1;transition:opacity .3s ease}.eleks-chat-trigger.is-anim-out-v{height:40px;padding:8px 24px;width:206px}.eleks-chat-trigger.is-anim-out-h{height:40px;padding:8px 24px;width:129px}.eleks-chat-trigger__arrow,.eleks-chat-trigger__headline{opacity:0;transition:none}}.eleks-chat-trigger__row{align-items:center;display:flex;flex-shrink:0;gap:4px}.eleks-chat-active-footer,.eleks-chat-trigger__icon{flex-shrink:0}.eleks-chat-trigger__text{font-size:16px;font-weight:400;line-height:24px;white-space:nowrap}.eleks-chat-overlay{background:#fff;bottom:0;height:calc(100dvh - var(--eleks-chat-header-h,60px));left:0;overflow:visible;pointer-events:none;position:fixed;right:0;transform:translateY(100%);transition:transform .4s cubic-bezier(.32,.72,0,1),height .35s ease,bottom .35s ease;z-index:5}@media (min-width:960px){.eleks-chat-overlay{border-bottom-left-radius:8px;border-bottom-right-radius:8px;box-shadow:0 0 2px 0 rgba(2,16,44,.08),0 16px 90px 0 rgba(2,16,44,.12);height:calc(100dvh - 8px - var(--eleks-chat-header-h,60px));left:8px;right:8px}.eleks-chat-overlay.is-open{bottom:8px}.eleks-chat-overlay.is-open:not(.is-collapsed) .eleks-chat-trigger{animation:.2s 350ms both eleks-chat-trigger-bar-in;background:#f8f8f9;border-radius:0 0 8px 8px;bottom:auto;color:#0045e6;top:0;--eleks-icon-grad-start:#0045e6;--eleks-icon-grad-end:#9c86e4}.eleks-chat-overlay.is-open:not(.is-collapsed) .eleks-chat-trigger.is-small:hover{height:40px;padding-bottom:8px}.eleks-chat-overlay.is-open:not(.is-collapsed) .eleks-chat-trigger .eleks-chat-trigger__text{background:linear-gradient(315deg,#0045e6 0,#9c86e4 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.eleks-chat-overlay.is-collapsed{height:328px}.eleks-chat-overlay.is-collapsed .eleks-chat-disclaimer,.eleks-chat-overlay.is-collapsed .eleks-chat-popular,.eleks-chat-overlay.is-collapsed .eleks-chat-rec-panel__cta,.eleks-chat-overlay.is-collapsed .eleks-chat-start__title{display:none}}@media (min-width:1280px){.eleks-chat-overlay{height:calc(100dvh - 16px - var(--eleks-chat-header-h,60px));left:24px;right:24px}.eleks-chat-overlay.is-open{bottom:16px}}.eleks-chat-overlay.is-open{pointer-events:auto;transform:translateY(0)}@media (min-width:1440px){.eleks-chat-overlay{height:calc(100dvh - 48px - var(--eleks-chat-header-h,60px));left:56px;right:56px}.eleks-chat-overlay.is-open{bottom:48px}}@media (min-width:2560px){.eleks-chat-overlay{height:calc(100dvh - 56px - var(--eleks-chat-header-h,60px));left:88px;margin-left:auto;margin-right:auto;max-width:2560px;right:88px}.eleks-chat-overlay.is-open{bottom:56px}}@media (max-width:959px){.eleks-chat-overlay.is-open .eleks-chat-trigger{display:none}}@media (min-width:960px) and (min-width:960px){.eleks-chat-overlay.is-collapsed{border-radius:8px 8px 0 0;bottom:0;left:0;padding-left:8px;padding-right:8px;right:0}.eleks-chat-overlay.is-collapsed .eleks-chat-messages-panel,.eleks-chat-overlay.is-collapsed .eleks-chat-rec-panel,.eleks-chat-overlay.is-collapsed .eleks-chat-start__scroll{padding-bottom:32px;padding-top:32px}.eleks-chat-overlay.is-collapsed #eleks-chat-start .eleks-chat-input-wrap{border-radius:32px;margin-bottom:0;padding:0 52px 0 16px}.eleks-chat-overlay.is-collapsed #eleks-chat-start .eleks-chat-input-wrap .eleks-chat-input{min-height:24px;padding:7px 0}.eleks-chat-overlay.is-collapsed #eleks-chat-start .eleks-chat-input-wrap .eleks-chat-input-row{align-items:center;left:4px;pointer-events:none;right:4px;top:0}.eleks-chat-overlay.is-collapsed #eleks-chat-start .eleks-chat-input-wrap .eleks-chat-send{pointer-events:auto}.eleks-chat-overlay.is-collapsed .eleks-chat-rec-panel__more-wrap{padding-bottom:16px;padding-top:16px}}@media (min-width:960px) and (min-width:1280px){.eleks-chat-overlay.is-collapsed{padding-left:24px;padding-right:24px}}@media (min-width:960px) and (min-width:1440px){.eleks-chat-overlay.is-collapsed{padding-left:56px;padding-right:56px}}@media (min-width:960px) and (min-width:1280px){.eleks-chat-overlay.is-collapsed #eleks-chat-start .eleks-chat-input-wrap .eleks-chat-input{padding-bottom:11px;padding-top:11px}}@media (min-width:960px) and (min-width:1920px){.eleks-chat-overlay.is-collapsed #eleks-chat-start .eleks-chat-input-wrap{padding-bottom:4px;padding-top:4px}}@media (min-width:960px) and (min-width:2560px){.eleks-chat-overlay.is-collapsed{padding-left:88px;padding-right:88px}.eleks-chat-overlay.is-collapsed #eleks-chat-start .eleks-chat-input-wrap{padding-bottom:8px;padding-top:8px}}@media (min-width:960px){.eleks-chat-overlay.is-collapsed .eleks-chat-rec-panel__more-wrap{align-items:center;display:flex;justify-content:space-between}.eleks-chat-overlay.is-collapsed .eleks-chat-rec-slider-nav{display:flex}.eleks-chat-overlay.is-collapsed .eleks-chat-rec-panel__scroll{overflow:hidden}.eleks-chat-overlay.is-collapsed .eleks-chat-rec-panel__scroll-wrap::after,.eleks-chat-overlay.is-collapsed .eleks-chat-rec-panel__scroll-wrap::before{display:none}}#eleks-chat-expand,#eleks-chat-minimize{display:none}#eleks-chat-close{background-color:#fff}.eleks-chat-popup{display:flex;flex-direction:column;height:100%;overflow:hidden;position:relative;width:100%}.eleks-chat-controls{align-items:center;display:flex;left:8px;position:absolute;top:16px;z-index:2}.eleks-chat-btn-icon{align-items:center;background:0 0;border-radius:6px;border:none;color:#1e1d28;cursor:pointer;display:inline-flex;height:40px;justify-content:center;transition:color .2s;width:40px}.eleks-chat-btn-icon:hover{color:#0045e6}.eleks-chat-content{padding-right:16px}@media (min-width:960px){#eleks-chat-minimize{display:flex}.eleks-chat-controls{left:auto;right:16px}.eleks-chat-content{padding-right:72px}.eleks-chat-start .eleks-chat-input-wrap{box-shadow:none}}@media (min-width:1280px){.eleks-chat-content{padding-right:104px}}@media (min-width:1920px){.eleks-chat-content{padding-right:154px}}@media (min-width:2560px){.eleks-chat-content{padding-right:400px}}.eleks-chat-start{display:flex;flex-direction:column;flex:1;min-height:0;overflow:hidden;position:relative;width:100%}.eleks-chat-start::after,.eleks-chat-start::before{content:"";height:80px;left:0;opacity:0;pointer-events:none;position:absolute;right:0;transition:opacity 250ms ease;z-index:1}.eleks-chat-start::before{background:linear-gradient(to bottom,#fff 0,transparent 100%);top:0}.eleks-chat-start::after{background:linear-gradient(to top,#fff 0,transparent 100%);bottom:0}.eleks-chat-input-wrap,.eleks-chat-input-wrap::before{background:linear-gradient(#fff,#fff) padding-box,linear-gradient(315deg,#0045e6 0,#9c86e4 100%) border-box}.eleks-chat-start.has-fade-bottom::after,.eleks-chat-start.has-fade-top::before{opacity:1}.eleks-chat-start__scroll{display:flex;flex-direction:column;flex:1;justify-content:flex-start;min-height:0;overflow-y:auto;padding-bottom:16px;padding-top:80px;scrollbar-width:none;width:100%}.eleks-chat-start__scroll::-webkit-scrollbar{display:none}@media (min-width:768px){.eleks-chat-start__scroll{justify-content:safe center}}.eleks-chat-start__title{font-family:Signifier}.eleks-chat-start__title br{display:block}.eleks-chat-input-wrap{border-radius:8px;border:1px solid transparent;box-shadow:0 0 2px 0 rgba(2,16,44,.08),0 16px 90px 0 rgba(2,16,44,.12);display:flex;flex-direction:column;margin-bottom:32px;padding:16px 16px 60px;position:relative;width:100%}.eleks-chat-input-wrap::before{border:2px solid transparent;border-radius:inherit;bottom:-1px;content:"";left:-1px;opacity:0;pointer-events:none;position:absolute;right:-1px;top:-1px;transition:opacity .2s ease}.eleks-chat-input-wrap:focus-within::before,.eleks-chat-input-wrap:hover::before{opacity:1}@media (min-width:960px){.eleks-chat-input-wrap{margin-bottom:48px}}@media (max-width:959px){#eleks-chat-active .eleks-chat-input-wrap,#eleks-chat-start .eleks-chat-input-wrap{border-radius:24px;padding:12px;transition-duration:.3s;transition-property:border-radius,padding-bottom,box-shadow}#eleks-chat-active .eleks-chat-input-wrap .eleks-chat-input,#eleks-chat-start .eleks-chat-input-wrap .eleks-chat-input{min-height:24px;transition:min-height .3s ease}#eleks-chat-active .eleks-chat-input-wrap .eleks-chat-input-row,#eleks-chat-start .eleks-chat-input-wrap .eleks-chat-input-row{opacity:0;pointer-events:none;transition:opacity 250ms ease}#eleks-chat-active .eleks-chat-input-wrap.is-expanded,#eleks-chat-start .eleks-chat-input-wrap.is-expanded{border-radius:8px;padding-bottom:48px}#eleks-chat-active .eleks-chat-input-wrap.is-expanded .eleks-chat-input,#eleks-chat-start .eleks-chat-input-wrap.is-expanded .eleks-chat-input{min-height:72px}#eleks-chat-active .eleks-chat-input-wrap.is-expanded .eleks-chat-input-row,#eleks-chat-start .eleks-chat-input-wrap.is-expanded .eleks-chat-input-row{opacity:1;pointer-events:auto}}@media (min-width:960px){#eleks-chat-active .eleks-chat-input-wrap{border-radius:32px;margin-bottom:0;padding:0 52px 0 16px}#eleks-chat-active .eleks-chat-input-wrap .eleks-chat-input{min-height:24px;padding:7px 0}#eleks-chat-active .eleks-chat-input-wrap .eleks-chat-input-row{align-items:center;left:4px;pointer-events:none;right:4px;top:0}#eleks-chat-active .eleks-chat-input-wrap .eleks-chat-send{pointer-events:auto}}@media (min-width:1280px){.eleks-chat-input-wrap{margin-bottom:64px}#eleks-chat-active .eleks-chat-input-wrap .eleks-chat-input{padding-bottom:11px;padding-top:11px}}@media (min-width:1920px){.eleks-chat-input-wrap{margin-bottom:72px}#eleks-chat-active .eleks-chat-input-wrap{padding-bottom:4px;padding-top:4px}}@media (min-width:2560px){.eleks-chat-input-wrap{margin-bottom:80px}#eleks-chat-active .eleks-chat-input-wrap{padding-bottom:8px;padding-top:8px}}.eleks-chat-input{background:0 0;border:none;color:#1e1d28;font-size:16px;line-height:24px;max-height:180px;min-height:96px;padding:0;position:relative;outline:0;resize:none;width:100%}.eleks-chat-input::-moz-placeholder{color:#6b7280}.eleks-chat-input::placeholder{color:#6b7280}.eleks-chat-input-row{align-items:center;bottom:0;display:flex;justify-content:flex-end;left:0;position:absolute;right:0}.eleks-chat-send{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:48px;height:48px;border:none;background:0 0;cursor:pointer;color:#1e1d28;border-radius:6px;transition:color .2s}.eleks-chat-send:hover{color:#0045e6}.eleks-chat-send:disabled{color:#c7c7d6;cursor:default}.eleks-chat-send:disabled:hover{color:#c7c7d6}.eleks-chat-popular__label{margin-bottom:16px}.eleks-chat-popular__cards{display:flex;flex-direction:row;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}.eleks-chat-popular__cards::-webkit-scrollbar{display:none}@media (max-width:959px){.eleks-chat-popular__cards{margin-right:-16px;padding-right:16px}}@media (min-width:960px){.eleks-chat-popular__cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;overflow-x:visible;padding-right:0;scroll-snap-type:none}}.eleks-chat-popular__card{align-items:flex-start;background:#f8f8f9;border:1px solid transparent;border-radius:8px;color:#54575e;cursor:pointer;display:flex;flex:0 0 280px;font-size:16px;justify-content:flex-start;line-height:24px;min-height:160px;padding:16px;scroll-snap-align:start;text-align:left;transition:border-color .3s}.eleks-chat-popular__card:hover{border-color:#c7c7d6}.eleks-chat-popular__scroll-track{background:#c7c7d6;height:1px;margin-top:16px;position:relative}@media (min-width:960px){.eleks-chat-popular__card{flex:unset}.eleks-chat-popular__scroll-track{display:none}}.eleks-chat-popular__scroll-progress{position:absolute;top:0;left:0;height:100%;width:33.33%;background:#0045e6;transition:width 80ms linear}.eleks-chat-active{display:none;flex:1;flex-direction:column;overflow:auto;min-height:0}.eleks-chat-active.is-visible{display:flex}@media (max-width:959px){.eleks-chat-active{padding-bottom:var(--chat-footer-h,160px)}}@media (min-width:960px){.eleks-chat-active{flex-direction:row;gap:4px;overflow:hidden}}.eleks-chat-active .eleks-chat-input-wrap{margin-bottom:0}.eleks-chat-active .eleks-chat-disclaimer{margin-top:8px}.eleks-chat-messages-panel{flex:1;display:flex;flex-direction:column;min-width:0;padding-top:40px}.eleks-chat-messages-wrap{flex:1;min-height:0;overflow:hidden;position:relative}.eleks-chat-messages-wrap::after,.eleks-chat-messages-wrap::before{content:"";height:60px;left:0;opacity:0;pointer-events:none;position:absolute;right:0;transition:opacity 250ms ease;z-index:1}.eleks-chat-messages-wrap::before{background:linear-gradient(to bottom,#fff,transparent);top:0}.eleks-chat-messages-wrap::after{background:linear-gradient(to top,#fff,transparent);bottom:0}.eleks-chat-messages-wrap.has-fade-bottom::after,.eleks-chat-messages-wrap.has-fade-top::before{opacity:1}.eleks-chat-messages{display:flex;flex-direction:column;gap:16px;height:100%;overflow-y:auto;padding-right:4px;scrollbar-color:transparent transparent;scrollbar-width:thin}.eleks-chat-messages:hover{scrollbar-color:#C7C7D6 transparent}.eleks-chat-messages::-webkit-scrollbar{width:4px}.eleks-chat-messages::-webkit-scrollbar-track{background:0 0}.eleks-chat-messages::-webkit-scrollbar-thumb{background:0 0;border-radius:2px}.eleks-chat-messages:hover::-webkit-scrollbar-thumb{background:#c7c7d6}.eleks-chat-msg{display:flex;flex-direction:column;gap:4px}.eleks-chat-msg--user{align-items:flex-end}.eleks-chat-msg--assistant{align-items:flex-start}.eleks-chat-msg--user .eleks-chat-msg__bubble{background-color:#f8f8f9;border-radius:8px 0 8px 8px;max-width:88%;padding:16px;text-align:right}@media (min-width:960px){.eleks-chat-messages-panel{padding-bottom:42px;padding-top:54px}.eleks-chat-msg--assistant .eleks-chat-msg__bubble{border-radius:8px;padding:16px;transition:box-shadow .3s}.eleks-chat-msg--assistant .eleks-chat-msg__bubble:hover{box-shadow:0 0 0 1px #c7c7d6 inset}}.eleks-chat-msg__bubble .answer ol,.eleks-chat-msg__bubble .answer p,.eleks-chat-msg__bubble .answer ul,.eleks-chat-msg__bubble .follow-up ol,.eleks-chat-msg__bubble .follow-up p,.eleks-chat-msg__bubble .follow-up ul{margin-top:0;margin-bottom:16px}.eleks-chat-msg__bubble .answer ol:last-child,.eleks-chat-msg__bubble .answer p:last-child,.eleks-chat-msg__bubble .answer ul:last-child,.eleks-chat-msg__bubble .follow-up ol:last-child,.eleks-chat-msg__bubble .follow-up p:last-child,.eleks-chat-msg__bubble .follow-up ul:last-child{margin-bottom:0}.eleks-chat-msg__bubble ol,.eleks-chat-msg__bubble ul{padding-left:1.4em;margin:.4em 0 .6em}.eleks-chat-msg__bubble li{margin:.2em 0}.eleks-chat-msg__bubble a{color:#0045e6;text-decoration:underline}.eleks-chat-msg__bubble a:hover{color:#0035b5;text-decoration:none}.eleks-chat-msg__bubble strong{font-weight:600}.eleks-chat-msg__bubble .follow-up{margin-top:10px;font-size:.92em;color:#6b7280}.eleks-chat-followup-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}.eleks-chat-followup-chip{background:#fff;border-radius:48px;border:1px solid #c7c7d6;color:#1e1d28;cursor:pointer;font-size:16px;line-height:24px;padding:7px 15px;transition:border-color .3s}.eleks-chat-followup-chip:hover{border-color:#0045e6}.eleks-chat-typing span{animation:.9s ease-in-out infinite eleks-bounce;background:#6b7280;border-radius:50%;display:inline-block;height:6px;margin:0 2px;width:6px}.eleks-chat-typing span:nth-child(2){animation-delay:.15s}.eleks-chat-typing span:nth-child(3){animation-delay:.3s}@keyframes eleks-bounce{0%,100%,60%{transform:translateY(0)}30%{transform:translateY(-5px)}}@keyframes eleks-chat-trigger-bar-in{from{opacity:0}to{opacity:1}}@keyframes eleks-gradient-shift{0%,100%{background-position:0 0}50%{background-position:100% 100%}}@media (max-width:959px){.eleks-chat-active-footer{background:#fff;bottom:0;left:0;padding:0 16px 8px;position:fixed;right:0;z-index:10}}.eleks-chat-active-input{flex-shrink:0;padding-top:16px}.eleks-chat-rec-panel{display:flex;flex-direction:column;flex-shrink:0;gap:16px;overflow:hidden;padding-top:40px}.eleks-chat-rec-panel--empty{visibility:hidden;pointer-events:none}@media (min-width:960px){.eleks-chat-active-footer{padding-right:12px}.eleks-chat-rec-panel{padding-bottom:74px;padding-top:52px;width:43%}}.eleks-chat-rec-panel__more-wrap,.eleks-chat-rec-panel__title{padding-bottom:16px;padding-top:16px}.eleks-chat-rec-panel__body{background:#fff;border-radius:8px;display:flex;flex-direction:column;min-height:0;overflow:hidden}.eleks-chat-rec-panel__title{border-bottom:1px solid #c7c7d6;color:#1e1d28;flex-shrink:0;font-size:16px;line-height:24px}.eleks-chat-rec-panel__scroll-wrap{min-height:0;overflow:visible;position:relative}@media (min-width:960px){.eleks-chat-rec-panel__body{background:#f8f8f9}.eleks-chat-rec-panel__title{padding-left:16px;padding-right:16px}.eleks-chat-rec-panel__scroll-wrap{overflow:hidden}.eleks-chat-rec-panel__scroll-wrap::after,.eleks-chat-rec-panel__scroll-wrap::before{content:"";height:60px;left:0;opacity:0;pointer-events:none;position:absolute;right:0;transition:opacity 250ms ease;z-index:1}.eleks-chat-rec-panel__scroll-wrap::before{background:linear-gradient(to bottom,#f8f8f9,transparent);top:0}.eleks-chat-rec-panel__scroll-wrap::after{background:linear-gradient(to top,#f8f8f9,transparent);bottom:0}.eleks-chat-rec-panel__scroll-wrap.has-fade-bottom::after,.eleks-chat-rec-panel__scroll-wrap.has-fade-top::before{opacity:1}}.eleks-chat-rec-panel__scroll{height:auto;overflow:visible;padding-top:16px}@media (min-width:960px){.eleks-chat-rec-panel__scroll{height:100%;overflow-y:auto;padding-left:16px;padding-right:16px;scrollbar-color:#C7C7D6 transparent;scrollbar-width:thin}.eleks-chat-rec-panel__scroll::-webkit-scrollbar{width:4px}.eleks-chat-rec-panel__scroll::-webkit-scrollbar-track{background:0 0}.eleks-chat-rec-panel__scroll::-webkit-scrollbar-thumb{background:#c7c7d6;border-radius:2px}.eleks-chat-rec-panel__more-wrap{padding:24px 16px}}@media (max-width:959px){.eleks-chat-rec-panel__more-wrap{display:none}}.eleks-chat-rec-panel__more{background:0 0;border:none;cursor:pointer;flex-shrink:0}.eleks-chat-rec-panel__cta{flex-shrink:0;justify-content:center;margin-top:auto;white-space:normal;width:100%}.eleks-chat-rec-list{display:flex;flex-direction:column;gap:16px}@media (max-width:959px){.eleks-chat-rec-list{flex-direction:row;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-color:transparent transparent;scrollbar-width:thin}.eleks-chat-rec-list:hover{scrollbar-color:#C7C7D6 transparent}.eleks-chat-rec-list::-webkit-scrollbar{height:4px}.eleks-chat-rec-list::-webkit-scrollbar-track{background:0 0}.eleks-chat-rec-list::-webkit-scrollbar-thumb{background:0 0;border-radius:2px}.eleks-chat-rec-list:hover::-webkit-scrollbar-thumb{background:#c7c7d6}}.eleks-chat-rec-item{align-items:flex-start;color:inherit;display:flex;gap:16px;text-decoration:none}.eleks-chat-rec-item--hidden{display:none}@media (max-width:959px){.eleks-chat-rec-item{background-color:#f8f8f9;border-radius:8px;flex-direction:column;flex-shrink:0;gap:0;padding:16px;scroll-snap-align:start;width:280px}.eleks-chat-rec-item.eleks-chat-rec-item--hidden{display:flex}.eleks-chat-rec-item__thumb{display:none}}.eleks-chat-rec-item:hover .eleks-chat-rec-item__title{color:#0045e6}.eleks-chat-rec-item__thumb{background:#e5e7eb;border-radius:8px;flex-shrink:0;height:120px;overflow:hidden;position:relative;width:120px}@media (min-width:1440px){.eleks-chat-rec-item__thumb{width:200px}}.eleks-chat-rec-item__thumb img{display:block;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.eleks-chat-rec-item__tag{align-items:center;background-color:#fff;border-radius:24px;color:#1e1d28;display:inline-flex;font-size:14px;gap:12px;left:8px;line-height:16px;padding:4px 6px;position:absolute;top:8px}@media (min-width:1280px){.eleks-chat-rec-item__tag{font-size:15px;line-height:24px;padding:2px 8px}}@media (min-width:1920px){.eleks-chat-rec-item__tag{font-size:16px;gap:16px;padding:4px 10px}}@media (min-width:2560px){.eleks-chat-rec-item__thumb{width:250px}.eleks-chat-rec-item__tag{font-size:20px;line-height:32px;padding-left:12px;padding-right:12px}}.eleks-chat-rec-item__tag::before{border-radius:50%;border:1px solid #1e1d28;content:"";height:10px;width:10px}.eleks-chat-rec-item__tag--mobile{display:none}@media (max-width:959px){.eleks-chat-rec-item__tag--mobile{background-color:transparent;border:1px solid #54575e;color:#1e1d28;display:inline-flex;margin-bottom:24px;position:static}.eleks-chat-rec-item__tag--mobile::before{border-color:#1e1d28}}.eleks-chat-rec-item__desc,.eleks-chat-rec-item__title{font-size:16px;line-height:24px;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.eleks-chat-rec-item__body{flex:1;min-width:0}.eleks-chat-rec-item__title{font-weight:700;margin-bottom:8px;transition:color .15s;-webkit-line-clamp:3}.eleks-chat-rec-item__desc{color:#54575e;-webkit-line-clamp:2}.eleks-chat-rec-item.has-title-lines-1 .eleks-chat-rec-item__desc{-webkit-line-clamp:3}.eleks-chat-rec-item.has-title-lines-3 .eleks-chat-rec-item__desc{-webkit-line-clamp:1}.eleks-chat-rec-slider-nav{display:none;flex-shrink:0;gap:8px}.eleks-chat-rec-slider-btn{align-items:center;background-color:transparent;border-radius:50%;border:1px solid #c7c7d6;color:#1e1d28;cursor:pointer;display:inline-flex;flex-shrink:0;height:40px;justify-content:center;padding:0;transition:background-color .2s,border-color .2s,color .2s;width:40px}.eleks-chat-rec-slider-btn:not(.slick-disabled):hover{background-color:#1e1d28;border-color:#1e1d28;color:#fff}.eleks-chat-rec-slider-btn.slick-disabled{cursor:default}.eleks-chat-rec-slider-btn.slick-disabled svg{color:#c7c7d6}#eleks-chat-rec-list.slick-initialized{display:block}#eleks-chat-rec-list .slick-list{overflow:hidden}#eleks-chat-rec-list .slick-slide{border:0;display:flex!important;overflow:hidden}.eleks-chat-disclaimer{color:#54575e;flex-shrink:0;font-size:12px;line-height:16px;margin:32px 0 0;text-align:center;width:100%}@media (min-width:960px){.eleks-chat-disclaimer{font-size:14px;line-height:24px;margin-top:40px}}.eleks-chat-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}iframe,img,video{max-width:100%}</style>
<style id="wp-img-auto-sizes-contain-inline-css"></style>
<style id="classic-theme-styles-inline-css"></style>
<style></style>
<style id="wp-custom-css"></style>
<style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src]{display:none !important;}</style>
<style id="rocket-lazyrender-inline-css">[data-wpr-lazyrender] {content-visibility: auto;}</style>
 
<meta charset="UTF-8">
    
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="True"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0061ff">
    
    <!-- GTM  -->
    <meta name='robots' content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

<!-- schema-rendered: 2026-06-28 10:15:47 UTC | site_url: https://eleks.com | home_url: https://eleks.com/ -->

	<!-- This site is optimized with the Yoast SEO plugin v27.8 - https://yoast.com/product/yoast-seo-wordpress/ -->
	
<link data-rocket-prefetch href="https://diffuser-cdn.app-us1.com" rel="dns-prefetch">
<link data-rocket-prefetch href="https://js.hs-analytics.net" rel="dns-prefetch">
<link data-rocket-prefetch href="https://www.googletagmanager.com" rel="dns-prefetch">

	
	<link rel="canonical" href="/site-map" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="| Glenn Tech: Enterprise Software Development, Technology Consulting | Glenn Tech: Enterprise Software Development, Technology Consulting" />
	<meta property="og:description" content="Glenn Tech Site Map" />
	<meta property="og:url" content="https://eleks.com/site-map/" />
	<meta property="og:site_name" content="Glenn Tech: Enterprise Software Development, Technology Consulting" />
	<meta property="article:publisher" content="http://www.facebook.com/ELEKS.Software" />
	<meta property="article:modified_time" content="2022-06-01T14:07:25+00:00" />
	<meta property="og:image" content="https://eleks.com/wp-content/uploads/app-development.jpg" />
	<meta property="og:image:width" content="3840" />
	<meta property="og:image:height" content="1900" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@ELEKSSoftware" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="1 minute" />
	
	<!-- / Yoast SEO plugin. -->











<link rel="https://api.w.org/" href="/wp-json" /><link rel="alternate" title="JSON" type="application/json" href="/wp-json/wp/v2/pages/12343" /><meta name="generator" content="WPML ver:4.9.5 stt:5,1,4,3,28,65;" />
<link rel="mask-icon" href="https://eleks.com/wp-content/uploads/favicon/safari-pinned-tab.svg" color="#0045E6"><meta name="msapplication-TileColor" content="#0045E6"><meta name="theme-color" content="#0045E6">    





<noscript></noscript>    
    <link rel="manifest" href="/manifest.json">
    
    <meta name="generator" content="WP Rocket 3.21.3" data-wpr-features="wpr_remove_unused_css wpr_delay_js wpr_defer_js wpr_minify_js wpr_lazyload_images wpr_lazyload_iframes wpr_preconnect_external_domains wpr_automatic_lazy_rendering wpr_image_dimensions wpr_minify_css wpr_preload_links wpr_desktop" />

    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TCFZF7" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>        <a class="header--new__screen-reader-shortcut" href="#main-content">
        Skip to main content
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M0.5 4L4.5 8M8.5 4L4.5 8M4.5 8L4.5 1.74846e-07" stroke="white"/>
        </svg>
    </a>
    <header  class="header--new">
        <div  class="container-n">
            <div  class="header--new__row">
                <a href="/" class="header--new__logo" aria-label="Logo">
    <span class="header--new__logo-img-wrap">
        <img src="/logo.png" alt="Glenn Tech Logo" style="height: 22px; width: auto; display: block; object-fit: contain;" />
    </span>
</a>
                <div class="header--new__info">
                    <nav class="header__menu--newWrap"><ul id="menu-header-menu-redesigned" class="header__menu--new"><li id="menu-item-80344" class="services menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-80344"><a href="/services" class="nav-link"><div class="menu-title">Services</div><div class="dropdown-menu-opener" tabindex="0"></div></a>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-80351" class="menu-title block-group engineering active menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80351"><span class="dropdown-item"><div class="menu-title">Engineering</div><span class="description">End-to-end engineering services for seamless software delivery.</span></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-80397" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80397"><a href="/services/custom-application-development" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Application development" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/application-development-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/application-development-icon-blue.svg" alt="Application development" class="icon"></noscript></div><div class="menu-title">Application development</div><span class="description">Bring your software vision to life with a tailored solution and deliver an industry-leading user experience.</span></a></li>
		<li id="menu-item-80400" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80400"><a href="/services/poc-development" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="PoC development" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/poc-development-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/poc-development-icon-blue.svg" alt="PoC development" class="icon"></noscript></div><div class="menu-title">PoC development</div><span class="description">Safely explore business-boosting concepts with robust testing and expert road mapping.</span></a></li>
		<li id="menu-item-98440" class="submenu menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-98440"><a href="/services/cloud-computing" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="cloud computing services" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/cloud-computing-services-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/cloud-computing-services-icon-blue.svg" alt="cloud computing services" class="icon"></noscript></div><div class="menu-title">Cloud computing</div></a>
		<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
			<li id="menu-item-80406" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80406"><a href="/services/cloud-migration-services" class="dropdown-item"><div class="menu-title">Cloud migration</div></a></li>
		</ul></div>
</li>
		<li id="menu-item-80402" class="submenu menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-80402"><a href="/services/enterprise-applications" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Enterprise applications" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/enterprise-applications-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/enterprise-applications-icon-blue.svg" alt="Enterprise applications" class="icon"></noscript></div><div class="menu-title">Enterprise applications</div></a>
		<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
			<li id="menu-item-80404" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80404"><a href="/services/enterprise-applications/erp-consulting" class="dropdown-item"><div class="menu-title">ERP consulting</div></a></li>
			<li id="menu-item-80403" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80403"><a href="/services/enterprise-applications/crm-consulting" class="dropdown-item"><div class="menu-title">CRM consulting</div></a></li>
		</ul></div>
</li>
		<li id="menu-item-99967" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-99967"><a href="/services/legacy-software-modernization-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Application re‑engineering" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/application-re‑engineering-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/application-re‑engineering-icon-blue.svg" alt="Application re‑engineering" class="icon"></noscript></div><div class="menu-title">Legacy software modernization</div><span class="description">Transform your core legacy systems to elevate performance, agility, scalability, and UX.</span></a></li>
	</ul></div>
</li>
	<li id="menu-item-80471" class="menu-title block-group advisory menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80471"><span class="dropdown-item"><div class="menu-title">Advisory</div><span class="description">Strategic guidance for top-notch products and services.</span></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-80472" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80472"><a href="/services/product-design" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Product and service design" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/product-service-design-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/product-service-design-icon-blue.svg" alt="Product and service design" class="icon"></noscript></div><div class="menu-title">Product and service design</div><span class="description">Validate niche ideas and create innovative products and services that scale as your business does.</span></a></li>
		<li id="menu-item-80473" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80473"><a href="/services/cyber-security-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Cyber security" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/cyber-security-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/cyber-security-icon-blue.svg" alt="Cyber security" class="icon"></noscript></div><div class="menu-title">Cyber security</div><span class="description">Proactively identify threats to your digital infrastructure to futureproof your IT ecosystem.</span></a></li>
		<li id="menu-item-80474" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80474"><a href="/services/technical-feasibility-study-rd-engineering" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Technical feasibility study" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/technical-feasibility-study-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/technical-feasibility-study-icon-blue.svg" alt="Technical feasibility study" class="icon"></noscript></div><div class="menu-title">Technical feasibility study</div><span class="description">Explore new technologies and their potential for your business before making an investment.</span></a></li>
		<li id="menu-item-80475" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80475"><a href="/services/sustainability-consulting" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Sustainability consulting" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/sustainability-consulting-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/sustainability-consulting-icon-blue.svg" alt="Sustainability consulting" class="icon"></noscript></div><div class="menu-title">Sustainability consulting</div><span class="description">Reach your net-zero goals and seize new, sustainable business growth opportunities.</span></a></li>
		<li id="menu-item-80476" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80476"><a href="/services/agile-transformation-consulting" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Agile transformation" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/agile-transformation-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/agile-transformation-icon-blue.svg" alt="Agile transformation" class="icon"></noscript></div><div class="menu-title">Agile transformation</div><span class="description">Transform your organization to achieve agility, resilience, and sustainable business growth.</span></a></li>
		<li id="menu-item-88704" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-88704"><a href="/services/ai-consulting-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="ai-consulting-blue-icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/ai-consulting-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/ai-consulting-blue-icon.svg" alt="ai-consulting-blue-icon" class="icon"></noscript></div><div class="menu-title">AI consulting</div><span class="description">Get strategic guidance on implementing AI solutions for scalable business growth.</span></a></li>
	</ul></div>
</li>
	<li id="menu-item-80507" class="menu-title block-group data-ai menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80507"><span class="dropdown-item"><div class="menu-title">Data &#038; AI</div><span class="description">Custom solutions to maximize the value of your data.</span></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-97117" class="ai-solution-advisor menu-item menu-item-type-post_type menu-item-object-page menu-item-97117"><a href="/ai-solutions-advisor" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="ai solution advisor" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/ai-solution-advisor-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/ai-solution-advisor-icon-blue.svg" alt="ai solution advisor" class="icon"></noscript></div><div class="menu-title">AI solutions advisor</div></a></li>
		<li id="menu-item-80509" class="submenu ai-menu-item menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-80509"><a href="/services/ai-development-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Artificial intelligence" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/artificial-intelligence-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/artificial-intelligence-icon-blue.svg" alt="Artificial intelligence" class="icon"></noscript></div><div class="menu-title">Artificial intelligence</div><span class="description">Get expert support and guidance at every stage of your AI journey.</span></a>
		<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
			<li id="menu-item-80510" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80510"><a href="/services/generative-ai" class="dropdown-item"><div class="menu-title">Generative AI</div></a></li>
			<li id="menu-item-80511" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80511"><a href="/services/data-science-services/machine-learning-services" class="dropdown-item"><div class="menu-title">Machine learning</div></a></li>
			<li id="menu-item-80512" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80512"><a href="/services/conversational-ai-solutions" class="dropdown-item"><div class="menu-title">Conversational AI</div></a></li>
			<li id="menu-item-96139" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-96139"><a href="/services/ai-development-services/agentic-ai-development" class="dropdown-item"><div class="menu-title">Agentic AI</div></a></li>
			<li id="menu-item-100314" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-100314"><a href="/services/ai-development-services/data-anonymization" class="dropdown-item"><div class="menu-title">Data anonymization</div></a></li>
		</ul></div>
</li>
		<li id="menu-item-80508" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80508"><a href="/services/data-science-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Data science" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/data-science-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/data-science-icon-blue.svg" alt="Data science" class="icon"></noscript></div><div class="menu-title">Data science</div><span class="description">Boost your business performance and achieve optimization through tailored data-driven solutions.</span></a></li>
		<li id="menu-item-80513" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80513"><a href="/services/mlops" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="MLOps" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/mlops-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/mlops-icon-blue.svg" alt="MLOps" class="icon"></noscript></div><div class="menu-title">MLOps</div><span class="description">Achieve seamless integration and maximum ROI for your machine learning models.</span></a></li>
		<li id="menu-item-96138" class="submenu menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-96138"><a href="/services/data-engineering-solutions" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Data strategy" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/data-strategy-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/data-strategy-icon-blue.svg" alt="Data strategy" class="icon"></noscript></div><div class="menu-title">Data engineering</div></a>
		<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
			<li id="menu-item-80515" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80515"><a href="/services/data-strategy" class="dropdown-item"><div class="menu-title">Data strategy</div></a></li>
			<li id="menu-item-80514" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80514"><a href="/services/data-platforms" class="dropdown-item"><div class="menu-title">Data platforms</div></a></li>
			<li id="menu-item-80516" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80516"><a href="/services/business-intelligence" class="dropdown-item"><div class="menu-title">Business intelligence</div></a></li>
		</ul></div>
</li>
		<li id="menu-item-80517" class="submenu menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-80517"><a href="/services/intelligent-automation" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Intelligent automation" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/intelligent-automation-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/intelligent-automation-icon-blue.svg" alt="Intelligent automation" class="icon"></noscript></div><div class="menu-title">Intelligent automation</div></a>
		<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
			<li id="menu-item-80518" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80518"><a href="/services/intelligent-automation/intelligent-document-processing" class="dropdown-item"><div class="menu-title">Intelligent document processing</div></a></li>
		</ul></div>
</li>
		<li id="menu-item-96632" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-96632"><a href="/services/llmops-consulting" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="llmops" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/llmops-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/llmops-icon-blue.svg" alt="llmops" class="icon"></noscript></div><div class="menu-title">LLMOps</div><span class="description">Streamline deployment, optimize performance, and maximize ROI for your large language models.</span></a></li>
	</ul></div>
</li>
	<li id="menu-item-80577" class="menu-title block-group optimisation menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80577"><span class="dropdown-item"><div class="menu-title">Optimisation</div><span class="description">Expert help for flawless performance of your products and services.</span></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-80578" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80578"><a href="/services/software-audit" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Software audit" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/software-audit-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/software-audit-icon-blue.svg" alt="Software audit" class="icon"></noscript></div><div class="menu-title">Software audit</div><span class="description">Assess your software products and processes to mitigate risks and minimize revenue loss.</span></a></li>
		<li id="menu-item-80579" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80579"><a href="/services/quality-assurance-and-testing-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Quality assurance" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/quality-assurance-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/quality-assurance-icon-blue.svg" alt="Quality assurance" class="icon"></noscript></div><div class="menu-title">Quality assurance</div><span class="description">Delver flawless products and seamless user experiences with our expert QA services.</span></a></li>
		<li id="menu-item-80580" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80580"><a href="/services/it-technical-support-maintenance-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Support" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/support-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/support-icon-blue.svg" alt="Support" class="icon"></noscript></div><div class="menu-title">Support</div><span class="description">Efficiently handle technical issues and system changes with our IT support services.</span></a></li>
		<li id="menu-item-88966" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-88966"><a href="/services/finops-cloud-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="finops-blue-icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/finops-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/finops-blue-icon.svg" alt="finops-blue-icon" class="icon"></noscript></div><div class="menu-title">FinOps</div><span class="description">Get expert guidance to maximise your cloud infrastructure value, optimise costs, and boost ROI.</span></a></li>
	</ul></div>
</li>
	<li id="menu-item-80599" class="menu-title block-group expertise menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80599"><span class="dropdown-item"><div class="menu-title">Expertise</div><span class="description">Latest technologies and innovative approaches to drive your business growth forward.</span></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-80600" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-80600"><a href="/expertise/devops-consulting" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="DevOps" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/devops-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/devops-icon-blue.svg" alt="DevOps" class="icon"></noscript></div><div class="menu-title">DevOps</div><span class="description">Full-cycle DevOps solutions to optimise your SDLC for greater agility and cost-efficiency.</span></a></li>
		<li id="menu-item-80607" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-80607"><a href="/expertise/vr-software-development" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="VR AR MR" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/vr-ar-mr-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/vr-ar-mr-icon-blue.svg" alt="VR AR MR" class="icon"></noscript></div><div class="menu-title">VR/AR/MR</div><span class="description">Utilize virtual reality technologies to deliver brand-defining, immersive user experiences.</span></a></li>
		<li id="menu-item-80603" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-80603"><a href="/expertise/iot-software-development" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Internet of Things" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/iot-icon-blue-1.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/iot-icon-blue-1.svg" alt="Internet of Things" class="icon"></noscript></div><div class="menu-title">Internet of Things</div><span class="description">Embrace the potential of IoT for better efficiency, smoother collaboration and powerful data insights.</span></a></li>
		<li id="menu-item-80604" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-80604"><a href="/expertise/market-research-services" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Market research" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/market-research-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/market-research-icon-blue.svg" alt="Market research" class="icon"></noscript></div><div class="menu-title">Market research</div><span class="description">Evaluate your business landscape to capitalise on promising niches and get ahead of the competition.</span></a></li>
		<li id="menu-item-80632" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-80632"><a href="/expertise/customer-experience-consulting" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="customer experience consulting" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/customer-experience-cunsulting-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/customer-experience-cunsulting-icon-blue.svg" alt="customer experience consulting" class="icon"></noscript></div><div class="menu-title">Customer experience</div><span class="description">Refine every customer interaction to enhance satisfaction and drive sustainable revenue growth.</span></a></li>
		<li id="menu-item-80602" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-80602"><a href="/expertise/enterprise-digital-transformation" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Digital enterprise" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/digital-enterprise-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/digital-enterprise-icon-blue.svg" alt="Digital enterprise" class="icon"></noscript></div><div class="menu-title">Digital enterprise</div><span class="description">Introduce digital transformation to your enterprise to drive efficiency, productivity, and revenue.</span></a></li>
		<li id="menu-item-80606" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-80606"><a href="/expertise/ux-consulting" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="UX consulting" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/ux-consulting-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/ux-consulting-icon-blue.svg" alt="UX consulting" class="icon"></noscript></div><div class="menu-title">UX consulting</div><span class="description">Launch successful products and deliver services that your customers will truly want to use.</span></a></li>
		<li id="menu-item-80605" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-80605"><a href="/expertise/nearshore-software-development-company" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="nearshore-blue-icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/nearshore-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/nearshore-blue-icon.svg" alt="nearshore-blue-icon" class="icon"></noscript></div><div class="menu-title">Nearshore development</div><span class="description">Partner with a trusted nearshore software development company to deliver your software project.</span></a></li>
	</ul></div>
</li>
</ul></div>
</li>
<li id="menu-item-80645" class="industries menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80645"><span class="nav-link"><div class="menu-title">Industries</div><span class="long-title">Innovative solutions across industries</span><span class="description">Expert software services tailored to meet the unique needs of every sector.</span><div class="image-wrap"><img width="1442" height="716" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201442%20716'%3E%3C/svg%3E" alt="menu industry default" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-default-image.jpg"><noscript><img width="1442" height="716" src="https://eleks.com/wp-content/uploads/menu-industry-default-image.jpg" alt="menu industry default" class="image"></noscript></div><div class="dropdown-menu-opener" tabindex="0"></div></span>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-80655" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80655"><a href="/industries/fintech-solutions" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="fintech" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/fintech-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/fintech-icon-blue.svg" alt="fintech" class="icon"></noscript></div><div class="menu-title">Fintech</div><span class="long-title">Fintech</span><span class="description">Effectively manage risks, protect your assets against fraud and maximize the potential of your data.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Fintech" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-fintech.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-fintech.jpg" alt="Fintech" class="image"></noscript></div></a></li>
	<li id="menu-item-102248" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-102248"><a href="/industries/pharma-software" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="pharma" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/pharma-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/pharma-icon-blue.svg" alt="pharma" class="icon"></noscript></div><div class="menu-title">Pharma</div><span class="long-title">Pharma</span><span class="description">We transform pharmaceutical operations across the entire value chain through custom development or seamless system integration.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="pharma" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-pharma.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-pharma.jpg" alt="pharma" class="image"></noscript></div></a></li>
	<li id="menu-item-80654" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80654"><a href="/industries/energy" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="gas-and-energy-blue-icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/gas-and-energy-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/gas-and-energy-blue-icon.svg" alt="gas-and-energy-blue-icon" class="icon"></noscript></div><div class="menu-title">Energy</div><span class="long-title">Energy</span><span class="description">Elevate your power system’s productivity, safety and sustainability with energy management software.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Energy" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-energy.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-energy.jpg" alt="Energy" class="image"></noscript></div></a></li>
	<li id="menu-item-80657" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80657"><a href="/industries/healthcare-software" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="healthcare icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/healthcare-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/healthcare-blue-icon.svg" alt="healthcare icon" class="icon"></noscript></div><div class="menu-title">Healthcare</div><span class="long-title">Healthcare</span><span class="description">Leverage new technologies to provide outstanding patient care focused on improving clinical results.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Healthcare" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-healthcare.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-healthcare.jpg" alt="Healthcare" class="image"></noscript></div></a></li>
	<li id="menu-item-80658" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80658"><a href="/industries/insurance-software-solutions" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="insurance-blue-icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/insurance-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/insurance-blue-icon.svg" alt="insurance-blue-icon" class="icon"></noscript></div><div class="menu-title">Insurance</div><span class="long-title">Insurance</span><span class="description">Adopt data-driven insurance software solutions boosting efficiency, profitability, and security in your sector.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Insurance" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-insurance.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-insurance.jpg" alt="Insurance" class="image"></noscript></div></a></li>
	<li id="menu-item-80656" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80656"><a href="/industries/government-software-solutions" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="government" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/government-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/government-icon-blue.svg" alt="government" class="icon"></noscript></div><div class="menu-title">Government</div><span class="long-title">Government</span><span class="description">Digitise your public services to create a transparent, efficient, and data-centric government agency.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Government" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-government.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-government.jpg" alt="Government" class="image"></noscript></div></a></li>
	<li id="menu-item-80659" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80659"><a href="/industries/logistics-software-solutions" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="logistics icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/logistics-blue-icon-1.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/logistics-blue-icon-1.svg" alt="logistics icon" class="icon"></noscript></div><div class="menu-title">Logistics</div><span class="long-title">Logistics</span><span class="description">Streamline your supply chain, fleets, and warehousing for industry-leading logistics services.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Logistics" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-logistic.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-logistic.jpg" alt="Logistics" class="image"></noscript></div></a></li>
	<li id="menu-item-99381" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-99381"><a href="/industries/hospitality-software-development" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="hospitality" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/hospitality-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/hospitality-icon-blue.svg" alt="hospitality" class="icon"></noscript></div><div class="menu-title">Hospitality</div><span class="long-title">Hospitality</span><span class="description">Implement tailored hospitality solutions designed to maximize revenue and guest satisfaction.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="hospitality" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-hospitality.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-hospitality.jpg" alt="hospitality" class="image"></noscript></div></a></li>
	<li id="menu-item-80653" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80653"><a href="/industries/automotive-software-engineering" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="automotive" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/automotive-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/automotive-icon-blue.svg" alt="automotive" class="icon"></noscript></div><div class="menu-title">Automotive</div><span class="long-title">Automotive</span><span class="description">Introduce intelligent features and process optimizations to deliver a new level of driver experience.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Automotive" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-automotive.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-automotive.jpg" alt="Automotive" class="image"></noscript></div></a></li>
	<li id="menu-item-80661" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80661"><a href="/industries/retail-software-development" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="retail-blue-icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/retail-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/retail-blue-icon.svg" alt="retail-blue-icon" class="icon"></noscript></div><div class="menu-title">Retail</div><span class="long-title">Retail</span><span class="description">Transform customer journeys and engage shoppers in new ways, increasing sales and enhancing profitability.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Retail" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-retail.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-retail.jpg" alt="Retail" class="image"></noscript></div></a></li>
	<li id="menu-item-80652" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80652"><a href="/industries/software-development-agriculture" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="Agriculture" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/agriculture-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/agriculture-icon-blue.svg" alt="Agriculture" class="icon"></noscript></div><div class="menu-title">Agriculture</div><span class="long-title">Agriculture</span><span class="description">Adopt data-driven innovations to balance supply and optimise production under increasing pressures.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Agriculture" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-agriculture.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-agriculture.jpg" alt="Agriculture" class="image"></noscript></div></a></li>
	<li id="menu-item-80660" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-80660"><a href="/industries/media-entertainment-software-development" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="media-blue-icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/media-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/media-blue-icon.svg" alt="media-blue-icon" class="icon"></noscript></div><div class="menu-title">Media &#038; Entertainment</div><span class="long-title">Media &amp; Entertainment</span><span class="description">Reach wider audiences with unparalleled digital experiences crafted for maximum engagement.</span><div class="image-wrap"><img width="1352" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201352%20800'%3E%3C/svg%3E" alt="Media & Entertainment" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-industry-media-entertainment.jpg"><noscript><img width="1352" height="800" src="https://eleks.com/wp-content/uploads/menu-industry-media-entertainment.jpg" alt="Media & Entertainment" class="image"></noscript></div></a></li>
</ul></div>
</li>
<li id="menu-item-80773" class="clients menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80773"><span class="nav-link"><div class="menu-title">Clients</div><div class="dropdown-menu-opener" tabindex="0"></div></span>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-80774" class="clients-item menu-item menu-item-type-post_type menu-item-object-page menu-item-80774"><a href="/our-clients" class="dropdown-item"><div class="menu-title">Our clients</div><span class="description">We are proud of contributing to the success of the world’s leading brands.</span><div class="image-wrap"><img width="90" height="578" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2090%20578'%3E%3C/svg%3E" alt="clients" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-clients-image-1.svg"><noscript><img width="90" height="578" src="https://eleks.com/wp-content/uploads/menu-clients-image-1.svg" alt="clients" class="image"></noscript></div></a></li>
	<li id="menu-item-80775" class="case-studies-item menu-item menu-item-type-post_type menu-item-object-page menu-item-80775"><a href="/case-studies" class="dropdown-item"><div class="menu-title">Case studies</div><span class="description">See how Glenn Tech has helped its clients achieve their vision of digital innovation.</span><div class="image-wrap"><img width="961" height="2392" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20961%202392'%3E%3C/svg%3E" alt="case study" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-case-studies-image.png"><noscript><img width="961" height="2392" src="https://eleks.com/wp-content/uploads/menu-case-studies-image.png" alt="case study" class="image"></noscript></div></a></li>
	<li id="menu-item-80788" class="submenu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80788"><span class="dropdown-item"><div class="menu-title">20+</div><span class="description">years of partnership with clients</span></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-80789" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-80789"><span class="dropdown-item"><div class="menu-title">120+</div><span class="description">active client accounts</span></span></li>
		<li id="menu-item-80790" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-80790"><span class="dropdown-item"><div class="menu-title">1000+</div><span class="description">end-to-end projects</span></span></li>
	</ul></div>
</li>
</ul></div>
</li>
<li id="menu-item-80793" class="full-width about-us menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-80793"><span class="nav-link"><div class="menu-title">About us</div><div class="dropdown-menu-opener" tabindex="0"></div></span>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-80794" class="big-size menu-item menu-item-type-post_type menu-item-object-page menu-item-80794"><a href="/about-glanntech" class="dropdown-item"><div class="menu-title">About us</div><span class="description">Meet Glenn Tech, a trusted partner for software engineering and technology consulting services.</span><div class="image-wrap"><img width="272" height="168" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20272%20168'%3E%3C/svg%3E" alt="about us" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-about-us-image.svg"><noscript><img width="272" height="168" src="https://eleks.com/wp-content/uploads/menu-about-us-image.svg" alt="about us" class="image"></noscript></div></a></li>
	<li id="menu-item-80795" class="big-size menu-item menu-item-type-post_type menu-item-object-page menu-item-80795"><a href="/about-glanntech/how-we-work" class="dropdown-item"><div class="menu-title">How we work</div><span class="description">Learn how we help our clients address complex business problems with technology solutions.</span><div class="image-wrap"><img width="272" height="168" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20272%20168'%3E%3C/svg%3E" alt="how we work" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/menu-how-we-work-image.svg"><noscript><img width="272" height="168" src="https://eleks.com/wp-content/uploads/menu-how-we-work-image.svg" alt="how we work" class="image"></noscript></div></a></li>
	<li id="menu-item-80797" class="with-icon menu-item menu-item-type-post_type menu-item-object-page menu-item-80797"><a href="/about-glanntech/awards-partners" class="dropdown-item"><div class="icon-wrap"><img width="56" height="57" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2057'%3E%3C/svg%3E" alt="thumb up" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/thumb-up-icon-blue.svg"><noscript><img width="56" height="57" src="https://eleks.com/wp-content/uploads/thumb-up-icon-blue.svg" alt="thumb up" class="icon"></noscript></div><div class="menu-title">Awards and partners</div></a></li>
	<li id="menu-item-80796" class="with-icon menu-item menu-item-type-post_type menu-item-object-page menu-item-80796"><a href="/about-glanntech/leadership-team" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="team" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/team-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/team-icon-blue.svg" alt="team" class="icon"></noscript></div><div class="menu-title">Leadership team</div></a></li>
	<li id="menu-item-80798" class="submenu big-size menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-80798"><a href="/about-glanntech/corporate-social-responsibility" class="dropdown-item"><div class="menu-title">CSR</div></a>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-80833" class="global-link menu-item menu-item-type-custom menu-item-object-custom menu-item-80833"><a target="_blank" href="https://careers.eleks.com/" class="dropdown-item"><div class="menu-title">Careers</div></a></li>
		<li id="menu-item-80800" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-80800"><a href="/about-glanntech/press-kit" class="dropdown-item"><div class="menu-title">Press kit</div></a></li>
	</ul></div>
</li>
	<li id="menu-item-104485" class="with-icon menu-item menu-item-type-post_type menu-item-object-page menu-item-104485"><a href="/trust-center" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="trust" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/icon-blue-trust.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/icon-blue-trust.svg" alt="trust" class="icon"></noscript></div><div class="menu-title">Glenn Tech’ Trust Centre</div></a></li>
	<li id="menu-item-80799" class="with-icon menu-item menu-item-type-post_type menu-item-object-page menu-item-80799"><a href="/about-glanntech/our-products" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="products" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/products-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/products-icon-blue.svg" alt="products" class="icon"></noscript></div><div class="menu-title">Our products</div></a></li>
</ul></div>
</li>
<li id="menu-item-107012" class="blog menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-107012"><span class="nav-link"><div class="menu-title">Insights</div><div class="dropdown-menu-opener" tabindex="0"></div></span>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-80801" class="big-size menu-item menu-item-type-post_type menu-item-object-page menu-item-80801"><a href="/blog" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="blog" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/blog-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/blog-icon-blue.svg" alt="blog" class="icon"></noscript></div><div class="menu-title">Blog</div><span class="description">Insights, opinions, and practical guidance from Glenn Tech experts on software engineering, AI, and enterprise technology.</span><div class="image-wrap"><img width="908" height="400" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20908%20400'%3E%3C/svg%3E" alt="blog" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/blog-menu-image.png"><noscript><img width="908" height="400" src="https://eleks.com/wp-content/uploads/blog-menu-image.png" alt="blog" class="image"></noscript></div></a></li>
	<li id="menu-item-107011" class="big-size menu-item menu-item-type-post_type menu-item-object-page menu-item-107011"><a href="/events" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="events" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/events-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/events-icon-blue.svg" alt="events" class="icon"></noscript></div><div class="menu-title">Events</div><span class="description">Meetups, conferences, and roundtables where Glenn Tech experts speak, exhibit, and connect with the global technology community.</span><div class="image-wrap"><img width="908" height="400" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20908%20400'%3E%3C/svg%3E" alt="events" class="image" data-lazy-src="https://eleks.com/wp-content/uploads/events-menu-image.png"><noscript><img width="908" height="400" src="https://eleks.com/wp-content/uploads/events-menu-image.png" alt="events" class="image"></noscript></div></a></li>
	<li id="menu-item-107013" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-107013"><a href="/blog/?type=research" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="rd-consulting-blue-icon" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/rd-consulting-blue-icon.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/rd-consulting-blue-icon.svg" alt="rd-consulting-blue-icon" class="icon"></noscript></div><div class="menu-title">R&#038;D</div><span class="description">Hands-on findings from our engineers exploring emerging technologies through real-world experiments and proof-of-concepts.</span></a></li>
	<li id="menu-item-107014" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-107014"><a href="/blog/?type=news" class="dropdown-item"><div class="icon-wrap"><img width="56" height="56" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2056'%3E%3C/svg%3E" alt="news" class="icon" data-lazy-src="https://eleks.com/wp-content/uploads/news-icon-blue.svg"><noscript><img width="56" height="56" src="https://eleks.com/wp-content/uploads/news-icon-blue.svg" alt="news" class="icon"></noscript></div><div class="menu-title">News</div><span class="description">The latest announcements, press releases, and updates from across the Glenn Tech organisation.</span></a></li>
</ul></div>
</li>
<li id="menu-item-99082" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-99082"><a href="/ai-solutions-advisor" class="nav-link"><div class="menu-title">AI solutions advisor</div></a></li>
</ul></nav>                    <div class="header--new__lang lang--new"><div class="lang--new__item selected">
                        <span tabindex="0" class="lang--new__link">en</span></div><ul class="lang--new__items"><li class="lang--new__item">
                            <a class="lang--new__link" href="/de/seitenverzeichnis">de</a></li><li class="lang--new__item">
                            <a class="lang--new__link" href="/ar/site-map">ar</a></li><li class="lang--new__item">
                            <a class="lang--new__link" href="/ja/site-map">ja</a></li></ul></div>                    <div class="header--new__btn-wrap header--new__btn-wrap--desktop">
                        <span class="header--new__btn--mask header--new__btn--mask-1 btn-n btn-n--black"><span class="btn-n__text">Contact us</span></span>
                        <a class="header--new__btn--mask header--new__btn--mask-2 btn-n btn-n--black" href="/contact-us"><span class="btn-n__text">Contact us</span></a>
                    </div>
                    <div class="header--new__search">
                        <div class="search--new__btn search--new__icon-wrap" tabindex="0">
                            <svg class="search--new__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
                                <path class="search--new__icon-stroke" d="M14.9989 15L10.7656 10.7667" stroke="#1E1D28"/>
                                <circle class="search--new__icon-stroke" cx="6.5" cy="6.5" r="6" stroke="#1E1D28"/>
                            </svg>
                        </div>
                            <div class="search--new">
        <svg class="search--new__close" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3434 25.6569L20.0002 20M25.6571 14.3431L20.0002 20M20.0002 20L14.3434 14.3431M20.0002 20L25.6571 25.6569" stroke="#1E1D28"/>
        </svg>
        <form role="search" method="get" class="search--new__form" action="https://eleks.com/">
            <label class="search--new__label" for="search--new__field">Search request</label>
            <input type="text" class="search--new__field" id="search--new__field" maxlength="150" placeholder="What are you looking for?" value="" name="s" title="Search for:" />
            <button type="submit" class="search--new__submit btn-n btn-n--black" value=""><span class="btn-n__text">Search</span></button>
            <input type="hidden" name="lang" value="en"/>
        </form>
    </div>
<div class="search__progress"></div>                    </div>
                </div>
                <div class="header--new__btn-wrap header--new__btn-wrap--mobile">
                    <span class="header--new__btn--mask header--new__btn--mask-1 btn-n btn-n--black"><span class="btn-n__text">Contact us</span></span>
                    <a class="header--new__btn--mask header--new__btn--mask-2 btn-n btn-n--black" href="/contact-us"><span class="btn-n__text">Contact us</span></a>
                </div>
                <div class="hide-show-menu hide_show_menu_btn" tabindex="0">
                    <div class="hide-show-menu-icon"></div>
                </div>
            </div>
        </div>
    </header>
    <div  class="header--new__mask"></div>
    <main  id="main-content" role="main">
    
<div  id="pl-12343" class="container-n">
    <div  class="pl-big sitemap-list">
        <h1 class="title-h1">Site Map</h1>
                        <div class="title-h4">Pages</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/design/virtual-experience-of-a-cars-interior">
                                        A Virtual Experience of a Car’s Interior                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech">
                                        About us                                    </a>
                                </li>
                                                            <li>
                                    <a href="/design/agricultural-holding">
                                        Agricultural holding                                    </a>
                                </li>
                                                            <li>
                                    <a href="/ai-solutions-advisor">
                                        AI Solutions Advisor                                    </a>
                                </li>
                                                            <li>
                                    <a href="/design/aircraft-configurator-pace">
                                        Aircraft Configurator                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/awards-partners">
                                        Awards and partners                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog">
                                        Blog                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies">
                                        Case studies                                    </a>
                                </li>
                                                            <li>
                                    <a href="/contact-us">
                                        Contact Us                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/corporate-social-responsibility">
                                        CSR                                    </a>
                                </li>
                                                            <li>
                                    <a href="/design/aramex">
                                        Delivering across the midlle east                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/awards-partners/microsoft">
                                        Glenn Tech as Microsoft Solutions Partner                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/awards-partners/aws">
                                        Glenn Tech AWS Expertise                                    </a>
                                </li>
                                                            <li>
                                    <a href="/compliance-automation-platform">
                                        Glenn Tech Compliance Automation Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/trust-center">
                                        Glenn Tech’ Trust Centre                                    </a>
                                </li>
                                                            <li>
                                    <a href="/ui-framework">
                                        Glenn Tech’ UI framework                                    </a>
                                </li>
                                                            <li>
                                    <a href="/events">
                                        Events                                    </a>
                                </li>
                                                            <li>
                                    <a href="/">
                                        Home                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/how-we-work">
                                        How we work                                    </a>
                                </li>
                                                            <li>
                                    <a href="/imprint">
                                        Imprint                                    </a>
                                </li>
                                                            <li>
                                    <a href="/e-excise-integration">
                                        Integrate e-Excise with the technical partner who engineered it                                    </a>
                                </li>
                                                            <li>
                                    <a href="/design/blackboard">
                                        Inventory planning for college bookstores                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/leadership-team">
                                        Leadership team                                    </a>
                                </li>
                                                            <li>
                                    <a href="/our-clients">
                                        Our clients                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/our-products">
                                        Our products                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/press-kit">
                                        Press kit                                    </a>
                                </li>
                                                            <li>
                                    <a href="/privacy-policy">
                                        Privacy policy                                    </a>
                                </li>
                                                            <li>
                                    <a href="/design">
                                        Product Design Office                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research">
                                        R&#038;D                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services">
                                        Services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/site-map">
                                        Site Map                                    </a>
                                </li>
                                                            <li>
                                    <a href="/software-cost-calculator">
                                        Software cost calculator                                    </a>
                                </li>
                                                            <li>
                                    <a href="/terms-of-use">
                                        Terms of Use                                    </a>
                                </li>
                                                            <li>
                                    <a href="/design/appygas">
                                        The Gas Market Made Easy                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers">
                                        Whitepapers                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">Services</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/services/ai-development-services/agentic-ai-development">
                                        Agentic AI development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/agile-transformation-consulting">
                                        Agile Transformation Consulting                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/ai-consulting-services">
                                        AI consulting services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/ai-development-services">
                                        AI Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/custom-application-development">
                                        Application development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/application-re-engineering-service">
                                        Application re‑engineering                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/business-intelligence">
                                        Business Intelligence Services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/technology-innovation-ceo">
                                        CEO                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/innovative-software-solutions-cfo">
                                        CFO                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/cloud-computing">
                                        Cloud computing services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/cloud-migration-services">
                                        Cloud migration                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/custom-digital-marketing-solutions-cmo">
                                        CMO                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/conversational-ai-solutions">
                                        Conversational AI Solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/enterprise-software-solution-coo">
                                        COO                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/enterprise-applications/crm-consulting">
                                        CRM consulting and implementation services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/technology-solutions-cto-cio">
                                        CTO                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/cyber-security-services">
                                        Cyber security                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/ai-development-services/data-anonymization">
                                        Data anonymization                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/data-engineering-solutions">
                                        Data engineering solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/data-platforms">
                                        Data platforms                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/data-science-services">
                                        Data science                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/data-strategy">
                                        Data Strategy Consulting                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/quality-assurance-and-testing-services/independent-testing/desktop-application-testing">
                                        Desktop application testing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/product-design/digital-accessibility-solutions">
                                        Digital accessibility solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/digital-product-delivery">
                                        Digital Product Delivery                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/enterprise-applications">
                                        Enterprise Applications                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/enterprise-applications/erp-consulting">
                                        ERP consulting and implementation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/finops-cloud-services">
                                        FinOps Cloud Services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/generative-ai">
                                        Generative AI                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/quality-assurance-and-testing-services/independent-testing">
                                        Independent testing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/intelligent-automation">
                                        Intelligent Automation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/intelligent-automation/intelligent-document-processing">
                                        Intelligent Document Processing Solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/llmops-consulting">
                                        LLMOps consulting services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/intelligent-automation/low-code-applications">
                                        Low-code applications                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/data-science-services/machine-learning-services">
                                        Machine Learning                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/mlops">
                                        MLOps services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/quality-assurance-and-testing-services/independent-testing/mobile-application-testing">
                                        Mobile application testing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/quality-assurance-and-testing-services/performance-testing">
                                        Performance testing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/poc-development">
                                        PoC development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/product-design">
                                        Product design                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/product-innovation-strategy-product-leader">
                                        Product leader                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/quality-assurance-and-testing-services">
                                        Quality assurance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/smart-development-team">
                                        Smart team                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/software-audit">
                                        Software audit                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/legacy-software-modernization-services">
                                        Software modernization                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/sustainability-consulting">
                                        Sustainability Consulting                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/technical-feasibility-study-rd-engineering">
                                        Technical feasibility study                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/it-technical-support-maintenance-services">
                                        Technical support                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/quality-assurance-and-testing-services/software-test-automation-services">
                                        Test automation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/services/quality-assurance-and-testing-services/independent-testing/web-application-testing-services">
                                        Web application testing                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">Industries</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/industries/software-development-agriculture">
                                        Agriculture                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/automotive-software-engineering">
                                        Automotive                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/fintech-solutions/banking">
                                        Custom Banking Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/healthcare-software/ehr-and-emr-software-development">
                                        EHR and EMR Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/energy">
                                        Energy                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/fintech-solutions">
                                        Fintech                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/fintech-solutions/fraud-detection-finance">
                                        Fraud Detection Solutions for Finance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/government-software-solutions">
                                        Government                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/healthcare-software">
                                        Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/fintech-solutions/hedge-funds-asset-management">
                                        Hedge Funds &#038; Asset Management                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/hospitality-software-development">
                                        Hospitality                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/insurance-software-solutions">
                                        Insurance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/fintech-solutions/investment-and-brokerage">
                                        Investment and Brokerage Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/logistics-software-solutions">
                                        Logistics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/media-entertainment-software-development">
                                        Media &#038; Entertainment                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/healthcare-software/mhealth">
                                        mHealth App Development Services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/healthcare-software/patient-engagement-platform-development">
                                        Patient engagement platform development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/healthcare-software/patient-experience-services-in-healthcare">
                                        Patient Experience Services in Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/pharma-software">
                                        Pharma software solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/retail-software-development">
                                        Retail                                    </a>
                                </li>
                                                            <li>
                                    <a href="/industries/healthcare-software/telemedicine">
                                        Telemedicine Software Development Services                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">Expertise</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/expertise/customer-experience-consulting">
                                        Customer Experience                                    </a>
                                </li>
                                                            <li>
                                    <a href="/expertise/devops-consulting">
                                        DevOps                                    </a>
                                </li>
                                                            <li>
                                    <a href="/expertise/enterprise-digital-transformation">
                                        Digital enterprise                                    </a>
                                </li>
                                                            <li>
                                    <a href="/expertise/iot-software-development">
                                        IoT                                    </a>
                                </li>
                                                            <li>
                                    <a href="/expertise/market-research-services">
                                        Market research                                    </a>
                                </li>
                                                            <li>
                                    <a href="/expertise/nearshore-software-development-company">
                                        Nearshore development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/expertise/ux-consulting">
                                        UX consulting                                    </a>
                                </li>
                                                            <li>
                                    <a href="/expertise/vr-software-development">
                                        VR/AR/MR                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">Case studies</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/case-studies/havas-smartwatch-apps">
                                        47 Smartwatches Powered by Data Science to Augment Event Experience                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/development-healthcare-application-fleming">
                                        4x Acceleration of Delivery for Healthcare Application                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/data-management-platfrom-for-recycling-processes">
                                        A Comprehensive Data Management Platform to Manage Recycling Processes Data from End to End                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/fresh-brand-identity-and-website-for-management-consultancy">
                                        A Fresh Brand Identity and Website for a US Management Consultancy Firm                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/teleologica-jersey-tax-revenue-administration-system">
                                        A Government Agency Achieves 50x Productivity Growth through Digitalisation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/one-stop-event-automation-solution">
                                        A one-stop event automation solution for end-to-end attendee journey mapping                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/virtual-environment-to-elevate-your-team-building-experience">
                                        A Smart, Virtual Environment to Elevate Your Team-Building Experience, Wherever Your Teams Are                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/advanced-saas-solution-for-content-management-system-xyleme">
                                        Advanced SaaS Solution for Content Authoring, Publishing and Distribution                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/easy-access-marketplace-for-investment-research">
                                        An easy-access marketplace for investment research                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/cybersecurity-platform-devops-cloud-migration">
                                        Augmenting DevOps Expertise to Optimise a Continuous Controls Monitoring Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/compliance-automation-platform-for-internal-audits">
                                        Automating the Internal Audit of a Healthcare Company​ with Glenn Tech Compliance Automation Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/aws-migration-for-a-pca-climate-analytics-platform">
                                        AWS Migration for a Climate Analytics Platform and its Extensive Dataset                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/boosting-enterprise-efficiency-with-integrated-solutions">
                                        Boosting Enterprise Efficiency with a&nbsp;Suite of Integrated Web and Mobile Products                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/new-ground-in-csr-with-a-blockchain-powered-crowdfunding-charity-platform">
                                        Breaking New Ground in CSR with a Blockchain-powered Crowdfunding Charity Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/medusabusiness-cloud-network-routing-solution">
                                        Bringing a Complex Network Routing Solution to the Cloud                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/building-a-comprehensive-digital-experience-for-an-aircraft-configurator">
                                        Building a Comprehensive Digital Experience for an Aircraft Configurator                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/showcasing-potential-cloud-industrial-iot">
                                        Building a demo for showcasing the business-boosting potential of the cloud for industrial IoT                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/machine-learning-global-carbon-emissions-estimator">
                                        Building a global CO₂ emissions estimator using Machine Learning                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/eagle-financial-services-software-development">
                                        Building an Enterprise Suite for the Financial Services Industry                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/integrated-pos-and-retail-erp-solution">
                                        Building an Integrated POS and Retail ERP Solution for a Middle Eastern Construction Leader                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/event-management-automation-tait">
                                        Building TAIT Navigator, the World’s Leading Entertainment Automation Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/david-lloyd-it-ecosystem-support">
                                        Comprehensive IT Ecosystem Support for a Leading European Leisure Club Chain                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/russmann-data-driven-digital-transformation-of-a-car-rental-business">
                                        Data-Driven Digital Transformation of a Car Rental Business                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/delivering-cutting-edge-swiss-software-platform-for-digital-pure-life-insurance">
                                        Delivering a Cutting-edge Swiss Software Platform for Digital Pure Life Insurance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/delivering-robust-white-label-digital-insurance-platform">
                                        Delivering a robust white-label digital insurance platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/self-service-kiosk-bookstore-management-system-blackboard">
                                        Delivering Six Retail Projects with Rapid Team Scaling                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/carbon-neutrality-in-logistics">
                                        Delving into research and opportunities for carbon neutrality in logistics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/design-consultancy-for-the-government-of-reykjavik">
                                        Design Consultancy: Paving the Road Towards Process Improvement and Digital Transformation for the Government of Reykjavik                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/developing-an-advanced-referral-and-reward-platform-for-faster-recruitment">
                                        Developing an Automated Referral Recruitment Solution to Reach Best Talent Quicker and Cheaper                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/david-lloyd-mobile-application-for-members">
                                        Digitising Fitness: Transforming Member Experience for Europe&#8217;s Largest Leisure Club Chain                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/david-lloyd-medical-information-system-for-spa-clubs-operations">
                                        Doctor Glenn Tech: Transforming SPA Club Operations with a Customisable Software Solution                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/database-optimisation-and-agile-transformation">
                                        Efficient Database Optimization and Agile Transformation for a US Trading Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/enabling-proxy-voting-with-mobile-app-for-solo-investors">
                                        Empowering Shareholder Voters with a&nbsp;Mobile Fintech App                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/talent-marketplace-platform-research">
                                        Enabling informed technology adoption with custom Talent Marketplace platform&nbsp;research                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/energy-efficient-smart-cities">
                                        Energy-efficient Smart Cities: A Research and Opportunity Study for NRI                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/ecommerce-platform-aws-migration-support">
                                        Enhancing an E-commerce Platform with Functional Improvements, AWS Migration and Continuous Support                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/enhancing-customer-support-efficiency-with-ms-copilot">
                                        Enhancing Customer Support Efficiency with AI-Powered Knowledge Management                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/eset-benefits-from-hiring-a-flexible-qa-team-and-assessing-it-security-risks">
                                        ESET Benefits from Hiring a Flexible QA Team and Assessing IT Security Risks                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/sayenko-gdpr-readiness-assessment">
                                        GDPR Readiness Assessment and Guidelines for a Law Firm                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/optimising-waste-to-energy-plant-operations">
                                        Helping Wasteer innovate the waste industry with a cutting-edge waste management app                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/european-natural-gas-market-portal-appygas-grtgaz">
                                        How European Gas Market Data Went Digital for the First Time                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/how-savservice-increased-sales-with-b2b-marketplace-platform">
                                        How Retail Distributor SAVSERVICE Increased Sales and Order Frequency with a New B2B Marketplace                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/migration-from-siloed-websites-to-harmonised-digital-ecosystem">
                                        Imerys.com: Migration From 60+ Siloed Websites to One Harmonised Digital Ecosystem                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/coras-task-management-platform-addons">
                                        Innovative Add-ons to SaaS Organisation Management Software                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/knowledge-transfer-and-support-of-pharma-it-infrastructure">
                                        Knowledge Transfer and Support of Pharma IT Infrastructure                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/l2-support-of-a-cloud-based-aircraft-flight-optimisation-product">
                                        L2 Support of a Cloud-Based Aircraft Flight-Optimisation Product                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/support-and-enhancement-of-agriculture-analytics-platform">
                                        L2/L3 Support and Enhancement of an&nbsp;Agriculture Analytics Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/aramex-digital-logistics-enterprise">
                                        Optimising a Logistics Enterprise’s Digital Ecosystem                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/eleks-double-materiality-esrs-alignment">
                                        Preparing for CSRD: Glenn Tech’ Journey Through Double Materiality and ESRS Alignment                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/data-science-expertise-for-ai-startup">
                                        Providing Data Science Expertise to Help Edge AI Startup Mature and Meet Market Demand                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/insurance-crm-software-re-engineering">
                                        Rebuilding an Insurance CRM Software with a Stronger Technological Foundation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/verifiable-credentials-research">
                                        Research and Opportunity Study into Verifiable Credentials and Digital Identity                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/migration-of-sap-business-objects-platform-for-a-global-metals-trading-enterprise">
                                        Seamless Migration of SAP BusinessObjects platform for a Global Metals Trading Enterprise                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/seamless-ux-for-smart-air-disinfectors-device-display-iot-remote-control-app">
                                        Seamless UХ for a Smart Air Disinfector’s Device Display and an IoT Remote Control App                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/specialized-market-research-for-energy-sector-innovators">
                                        Specialized Market Research for Energy Sector Innovators                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/agile-transformation-for-leading-aerospace-software-provider">
                                        Streamlining Agile Transformation for a Leading Aerospace Software Provider                                    </a>
                                </li>
                                                            <li>
                                    <a href="/case-studies/reactoo-interactive-emotions-recognition-app">
                                        Unique AWS Serverless Architecture for Emotion Recognition App                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">Products</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/about-glanntech/our-products/dakar-system">
                                        DAKAR System                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/our-products/doctor-eleks">
                                        Doctor Glenn Tech                                    </a>
                                </li>
                                                            <li>
                                    <a href="/about-glanntech/our-products/statr">
                                        STATR                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">Articles</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/blog/where-is-my-parcel-or-why-logistics-shouldnt-ignore-chatbot-technology">
                                        &#8220;Where is My Parcel?&#8221; or Why Logistics Shouldn’t Ignore Chatbot Technology                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/healthcare-technology-trends">
                                        10 Key Healthcare Technology Trends Driving Change in The Sector                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/agile-enterprise-architecture">
                                        10 Steps for Migrating to Agile Enterprise Architecture                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/2025-tech-recap">
                                        2025 Tech Recap: Major Industry Shifts, Expert Takes, and What’s Ahead                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/bpm-technology-trends">
                                        3 BPM Technology Trends to Supercharge Your Core Business Processes                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/enterprise-digital-strategy-pitfalls">
                                        3 Enterprise Digital Strategy Pitfalls And How to Avoid Them                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/benefits-data-tokenization-highly-regulated-industries">
                                        3 Key Benefits of Data Tokenization in Highly Regulated Industries                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/artificial-intelligence-customer-service-next-big-thing">
                                        3 Reasons Why AI-powered Customer Service is the Next Big Thing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/3-things-businesses-need-to-know-about-digital-twins">
                                        3 Things Businesses Need to Know About Digital Twins                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/data-science-in-finance">
                                        4 Powerful Use Cases for Data Science in Finance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/investing-in-blockchain-infographic">
                                        4 Questions to Ask Yourself Before Investing In Blockchain [Infographic]                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/4-retail-technology-trends">
                                        4 Retail Technology Trends Shaped by Consumer Behaviour                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/steps-to-successful-agile-transformation">
                                        4 Steps to a Successful Agile Transformation: A Practical Guide                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/design-workshop-online">
                                        5 Business Problems Solved by Hosting Your Design Workshop Online                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/5-in-store-experience-solutions-to-challenge-online-competitors">
                                        5 In-Store Experience Solutions to Challenge Online Competitors                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/types-of-cyber-security-threats">
                                        5 Key Types of Cyber Security Threats and How to Stay on Top of Them                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/innovations-that-failed">
                                        5 Recent Innovations That Failed: What Product Leaders Can Learn From Them                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/building-digital-transformation-strategy">
                                        5 Steps for Building a Digital Transformation Strategy that Works                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/5g-iot-connectivity">
                                        5G IoT: A New Level of Connectivity for the Internet of Things?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-banking-strategy">
                                        6 Trends to Shape a Winning Digital Banking Strategy                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/enterprise-software-development-trends">
                                        8 Biggest Enterprise Software Development Trends                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/guide-to-software-product-development-life-cycle">
                                        A Comprehensive Guide to Software Product Development Life Cycle                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/blockchain-based-dlt-finance">
                                        A Critical Assessment of Blockchain-based DLT in Financial Services and How to Make It Work                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/unlocking-the-potential-mastering-the-art-of-ai-system-development">
                                        A Practical Guide to AI System Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/security-as-a-service-benefits">
                                        A Quick Introduction to Security as a Service and its Benefits                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/guide-cloud-strategy">
                                        A Step-by-Step Guide to an Effective Cloud Strategy                                     </a>
                                </li>
                                                            <li>
                                    <a href="/blog/enterprise-augmented-analytics">
                                        Accelerating Enterprise Insights With Augmented Analytics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/cypress-framework-playwright-selenium-injections">
                                        Addressing The Limitations of Cypress Framework with Playwright and Selenium Injections                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/agile-product-management">
                                        Agile Product Management: Navigating the Dynamic Landscape of Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-adoption-risks">
                                        AI Adoption Risks and Challenges: What the Data Actually Shows                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-agents-for-erp">
                                        AI Agents for ERP in Modern Business Operations                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-and-medical-imaging">
                                        AI and Medical Imaging: Enhancing Accuracy and Efficiency in Diagnosis                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-ml-finance">
                                        AI and ML in Finance: Future Smart Banking and Insurance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-budgeting-system">
                                        AI Budgeting System: How AI Is Giving C-Suite Leaders Real-Time Control Over Enterprise Budgeting                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-coding-agents">
                                        AI Coding Agents: Boosting Productivity in Modern Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-clinical-trials">
                                        AI in Clinical Trials: Improving Patient Recruitment and Retention                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-manufacturing-industry-4-0">
                                        AI in Manufacturing and Its Top Applications in the Era of Industry 4.0                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-in-space-exploration-artemis2">
                                        AI in Space Exploration: What NASA&#8217;s Artemis II Reveals About Building Mission-Critical Intelligent Systems                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-integration-agile-practices">
                                        AI Integration into Scaling Agile Practices: Benefits and Risks                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-in-healthcare-applications-benefits">
                                        AI Revolution in Healthcare: Exploring the Applications and Benefits                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-voiceover">
                                        AI Voiceover vs. Human Talent – Choose Who Will Speak For You                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-functional-concepts-software-prototyping">
                                        AI-Based Functional Concepts: Moving Beyond Traditional Software Prototyping                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/aws-ai-dlc-explained">
                                        AI-DLC Explained: How AWS Labs Brings Structure to AI Coding                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-native-delivery-reshapes-lifecycle">
                                        AI-Native Delivery: When AI Reshapes the Entire Lifecycle                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-sdlc-predictions-expert-assessment">
                                        AI-SDLC Predictions for Enterprise Leaders: Glenn Tech Expert Assessment                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/apples-vision-pro-revolutionising-industries-through-spatial-computing">
                                        Apple&#8217;s Vision Pro: Revolutionising Industries Through Spatial Computing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/voice-technology">
                                        Are You Going to Touch This? Voice Technology Offers an Option                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/attention-models-amplifying-machine-learning-benefits">
                                        Attention Models: Amplifying Machine Learning Benefits for Enterprise                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/augmented-reality-for-business">
                                        Augmented Reality for Business: How Immersive Tech Disrupts Enterprise                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/software-product-management-prioritization">
                                        Balancing User Needs and Business Goals: A Primer on Software Product Management Prioritization                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/where-xr-actually-works-in-business">
                                        Beyond the Hype: Where Extended Reality Actually Works in Business                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/bitcoin-gold-another-dud">
                                        Bitcoin Gold: Will an Announced Breakthrough Become Another Dud?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/blockchain-for-agriculture-supply-chain">
                                        Blockchain for Agriculture: Redefining the Supply Chain                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/blockchain-for-connected-cars">
                                        Blockchain for Сonnected Сars: a New Era for the Automotive Industry                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/blockchain-use-cases-regulated-industries">
                                        Blockchain Use Cases for Regulated Industries                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/mlops-vs-devops">
                                        Breaking it Down: MLOps vs DevOps &#8211; What You Need to Know                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/erp-in-supply-chain-management">
                                        Business-boosting Benefits of ERP in Supply Chain Management                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/can-ai-cut-drug-development-time">
                                        Can AI Really Cut Drug Development Time from Years to Months?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/cloud-automation-tools">
                                        Cloud Automation Tools: Benefits, Risks and Prospects of Adoption                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/cloud-computing-security-issues">
                                        Cloud Computing Security Issues And How to Meet Them Head On                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/cloud-migration-tips-business-continuity-planning">
                                        Cloud Migration Tips for Better Business Continuity Planning                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/iot-and-blockchain-digital-transformation">
                                        Combining IoT and Blockchain for Secure Digital Transformation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/connected-car-security">
                                        Connected Car Security: The New Imperative for Automotive and Logistics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/connected-care-iot-healthcare-industry">
                                        Connected Care: How IoT is Transforming the Healthcare Industry                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/countering-iot-security-issues-an-enterprise-guide">
                                        Countering IoT Security Issues: an Enterprise Guide                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/custom-vs-ready-made-ai-solutions">
                                        Custom AI Solution vs Off-the-Shelf: How to Know Which Is Right for Your Business                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/customer-centric-retail-quick-guide-beginners">
                                        Customer-Centric Retail: a Quick Guide for Beginners                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/cyber-threats-digital-age">
                                        Cybersecurity in the Digital Age: Addressing Emerging Threats                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/data-lake-vs-data-warehouse">
                                        Data Lake vs Data Warehouse: Key Differences and Use Cases                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/data-mesh-distributed-architecture">
                                        Data Mesh: The Four Principles of the Distributed Architecture                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/data-monetization-profit-driving-asset">
                                        Data Monetization: Turning Data into Profit-Driving Assets                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/data-roi-data-analytics-projects">
                                        Data ROI: How to Estimate the Value of Your Data &#038; Analytics Projects                                     </a>
                                </li>
                                                            <li>
                                    <a href="/blog/dataops-efficient-data-ecosystem">
                                        DataOps: Building an Efficient Data Ecosystem                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/scrum-master-project-manager-agile-delivery-lead">
                                        Decoding the Roles: Scrum Master vs Project Manager vs Agile Delivery Lead                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/designing-a-sustainable-future-our-user-centred-approach-for-covere%c2%b2">
                                        Designing a Sustainable Future: Our User-Centred Approach for COVERE²                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/user-centric-software-product-design">
                                        Designing User-Centric Software Products: Best Practices and Case Studies                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-biology-new-technological-frontier">
                                        Digital Biology: The New Technological Frontier                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-sovereignty-in-government-balancing-transformation-with-independence">
                                        Digital Sovereignty in Government: Balancing Transformation with Independence                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-token-financial-services">
                                        Digital Token and Financial Services: a Perfect Match?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-workplace-iot-ai-smart-spaces">
                                        Digital Workplace: How AI, Big Data and IoT Enable Smart Spaces                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/docs-as-code">
                                        Docs as Code as a New Industry Standard in Documentation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/does-bdd-testing-live-up-to-its-hype">
                                        Does BDD Testing Live Up to its Hype?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/edge-computing-industry-5-0">
                                        Edge Computing for Industry 5.0: Enabling Next-Generation Industrial Intelligence                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/healthcare-data-analysis-edge-computing">
                                        Edge Computing: Enhancing Real-Time Data Processing and Analysis in Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/rfid-in-healthcare">
                                        Efficiency and Accuracy: The Role of RFID Technology in Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/eleks-github-copilot-investigation">
                                        Glenn Tech&#8217; GitHub Copilot Investigation – Exploring the Potential of AI in Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/healthcare-product-design-insights">
                                        Elevate Your Healthcare Product Design: Insights from Industry Experts                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/energy-and-power-technology">
                                        Energy and Power Technology: Transforming the Industry with AI, Automation, and Other Innovations                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/patient-care-software-solutions">
                                        Enhancing Medical Services with Innovative Patient Care Software Solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/enhancing-productivity-apples-vision-goggles-in-the-workplace">
                                        Enhancing Productivity: Apple&#8217;s Vision Goggles in the Workplace                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/enterprise-infrastructure-cloud">
                                        Enterprise Infrastructure in the Cloud: Benefits and Migration Principles                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/enterprise-mobility-solutions">
                                        Enterprise Mobility Solutions: Adoption Drivers and Security Highlights                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/choose-vector-database">
                                        Essential Guide to Choosing the Right Vector Database for Your Needs                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/guide-to-llmops">
                                        Essential Guide to LLMOps: Key Insights and Implementation Strategies                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-to-build-software-product">
                                        Essential Steps in Building a Successful Software Product                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/benefits-of-healthcare-software-systems">
                                        Exploring the Benefits of Healthcare Software Systems                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/drone-inspection-for-aircraft-maintenance-checks">
                                        Exploring the Potential of Drone Inspection for Aircraft Maintenance Checks                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/blockchain-technology-in-healthcare">
                                        Five Promising Applications for Blockchain Technology in Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/nearshore-software-outsourcing">
                                        Five Reasons to Consider Nearshore Software Outsourcing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/your-nearshore-software-development-team">
                                        Five Tips for Getting the Most from Your Nearshore Software Development Team                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/six-ways-technology-is-improving-healthcare">
                                        From Diagnosis to Treatment: Six Ways Technology is Revolutionizing Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/future-shop-10-innovations-in-retail-store-of-future">
                                        Future Shop: 10 Innovations in the Retail Store of the Future                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/gdpr-compliance-checklist">
                                        GDPR Compliance Checklist for Businesses: Legal and Tech Aspects                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/github-copilot-review-development-speed">
                                        GitHub Copilot: A 55% Speed Boost in Development – Myth or Reality?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/gitops-vs-devops">
                                        GitOps vs DevOps &#8211; What’s the difference?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/guaranteed-software-delivery">
                                        Guaranteed Delivery: How We Ensure On-Time Software Releases                                     </a>
                                </li>
                                                            <li>
                                    <a href="/blog/cloud-computing-in-healthcare-sector">
                                        Harnessing the Benefits of Cloud Computing in the Healthcare Sector                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/behavioural-data-analytics-insurance">
                                        Harnessing the Power of Behavioural Data Analytics in the Insurance Industry                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-ai-is-transforming-learning-management-systems">
                                        How AI is transforming Learning Management Systems                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/augmented-reality-apps-for-education-employee-training">
                                        How Augmented Reality Apps for Education Transform Employee Training                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/blockchain-data-storage-enterprise-data-management">
                                        How Blockchain Data Storage Can Work for Enterprise Data Management                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-innovation">
                                        How Businesses Can Minimise the Risk and Cost of Digital Innovation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/car-sharing-business-model-shape-future-urban-mobility">
                                        How Car Sharing Business Model Will Shape the Future of Urban Mobility                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-conversational-commerce-will-shape-future-of-retail">
                                        How Conversational Commerce Will Shape the Future of Retail                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-crowdsourcing-apps-pep-up-the-capabilities-of-big-businesses">
                                        How Crowdsourcing Apps Pep Up the Capabilities of Big Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-dataverse-becomes-data-layer">
                                        How Dataverse Becomes the Data Layer Your AI Strategy Needs                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-factories-new-normal-for-manufacturers">
                                        How Digital Factories Can Address the New Normal for Manufacturers                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/energy-industry-trends">
                                        How Energy Industry Trends Are Driving Innovative Power Products                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-llms-think">
                                        How LLMs Think: Understanding the Power of Attention Mechanisms                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/machine-learning-data-defines-ai-solution-success">
                                        How Machine Learning Data Defines the Success of Your AI Solution                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/online-loyalty-programs-changing-way-shop">
                                        How Online Loyalty Programs Are Changing the Way We Shop                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/coupon-fraud-during-black-friday">
                                        How Retailers Can Ward Off Coupon Fraud During Black Friday and After                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/smart-car-rental-management-software-drive-business-forward">
                                        How Smart Car Rental Management Software Can Drive Your Business Forward                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/build-successful-cloud-migration-strategy">
                                        How to Build a Successful Cloud Migration Strategy                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/agile-transformation-strategy">
                                        How to Build an Agile Transformation Strategy that Works                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/nearshore-software-development-company">
                                        How to Choose a Nearshore Software Development Company                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/sustainability-management-software">
                                        How to Choose the Best Software for Sustainability Management                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-to-create-vr-app">
                                        How to Create a VR App That Adds True Business Value                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-to-create-software-product-roadmap">
                                        How to Create a Winning Software Product Roadmap                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-to-design-retail-apps">
                                        How to Design Business-boosting Retail Apps That Really Help Customers                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/legacy-software-modernisation">
                                        How to Get Legacy Software Modernisation Right                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/get-the-most-from-predictive-analytics-tools">
                                        How to Get the Most out of Your Predictive Analytics Tools [Infographic]                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/data-science-and-analytics">
                                        How to Improve Your Business Efficiency with Data Science and Analytics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-transformation-in-banking">
                                        How to Kick-Start Digital Transformation in Banking                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/siem-cybersecurity-system">
                                        How to Stop Losing Money to Cybercrime with SIEM Cybersecurity System                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/iot-enabled-smart-warehouse">
                                        How to Сreate IoT-enabled Smart Warehouse                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/hyperautomation-key-to-agile-business">
                                        Hyperautomation: The Key to an Agile Business in 2021 and Beyond                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/improving-quality-of-care-with-healthcare-industry-software">
                                        Improving the Efficiency and Quality of Care with Healthcare Industry Software                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/industry-4-0-definition-benefits-enterprise">
                                        Industry 4.0 Definition And The Benefits of Digitalisation For Manufacturing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-for-supply-chain-workforce-optimisation">
                                        Industry 5.0: AI-driven Solutions for Energy, Supply Chain, and Workforce Optimisation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/innovative-product-development">
                                        Innovative Product Development: The Product Leader’s Cheat Sheet                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/insurance-risk-management">
                                        Insurance and Risk Management: Why the Traditional Playbook No Longer Works                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-insurance-solutions">
                                        InsurTech: Transforming the Insurance Landscape with Digital Solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/expert-analysis-ai-security-risks">
                                        International AI Safety Report: Expert Analysis of AI Security Risks and Mitigation Gaps                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/internet-of-energy-new-energy-business-model">
                                        Internet of Energy: The New Energy Business Model Enabled by IoT                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/iot-healthcare-finance">
                                        Internet of Things (IoT) and Connected Devices: Advancements and Opportunities in Healthcare and Finance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/iot-energy-management-systems-futureproofing-energy-market">
                                        IoT Energy Management Systems: Futureproofing the Energy Market                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/blockchain-identity-management-self-sovereign-identity">
                                        Is Blockchain Identity Management A Key to Self-Sovereign Identity?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/life-cycle-assessment-explained">
                                        Life Cycle Assessment: A Key to Effective Sustainability Management                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/logistics-automation-shipping-sector">
                                        Logistics Automation: How to Adapt and Revive the Shipping Sector Post-pandemic                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/machine-learning-in-marketing-helping-cmos-generate-smarter-insights">
                                        Machine Learning in Marketing: Helping CMOs Generate Smarter Insights                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/machine-learning-innovations-sales-industry">
                                        Machine Learning: Innovations In The Sales Industry                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/metaverse-problems-ux-design">
                                        Metaverse Problems: Unmasking the Flaws in UX Design                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-sdlc-maturity-model">
                                        Navigating the AI-SDLC Maturity Model: From Traditional Practices to AI-Autonomous Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/navigating-the-modernisation-maze-developing-an-effective-application-strategy">
                                        Navigating the Modernisation Maze: Developing an Effective Application Strategy                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/software-product-life-cycle-stages-challenges-best-practices">
                                        Navigating the Software Product Life Cycle: Stages, Challenges, and Best Practices                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/nuclear-power-plants-ai-data-centres">
                                        Nuclear Power Plants for AI Data Centres: a Solution to Growing Energy Challenge                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/offshore-outsourcing-challenges-how-to-hire-development-team">
                                        Offshore Outsourcing Challenges Part 1: How to Hire an Effective Team                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/on-device-ai">
                                        On-Device AI Explained: Benefits, Evolution, and Business Advantages                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/open-ai-cybersecurity-grant-program">
                                        OpenAI Empowers Cybersecurity Professionals with New Grant Program Launch                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/keeping-organisations-running-conflict-zones-crisis">
                                        Operating in an Age of Permanent Instability: Keeping Organisations Running in Conflict Zones and Crisis Conditions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/outsourcing-challenges-part-2-offshore-software-development-team-structure">
                                        Outsourcing Challenges Part 2: Offshore Software Development Team Structure                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/knowledge-transfer-plan-for-it-projects">
                                        Outsourcing Challenges Part 3: Building a No-fail Knowledge Transfer Plan for IT Projects                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/software-development-contract-warning-flags">
                                        Outsourcing Challenges Part 4: Software Development Contract Warning Flags                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/penetration-testing-vs-vulnerability-scanning">
                                        Penetration Testing vs Vulnerability Scanning: Which One Should I Use?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/personalized-banking">
                                        Personalized Banking: How Technology Enables Customer-centric Finance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/power-flow-tracing">
                                        Power Flow Tracing: Scientific Method for Power Footprint Assessment                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/predictive-emissions-monitoring-system">
                                        Predictive Emissions Monitoring System: Elevating Emission Analytics with Machine Learning                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-to-price-software-product">
                                        Pricing Strategies for Software Products: Striking the Rights Balance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/quantum-computing-unlocking-unprecedented-computational-power-in-healthcare-and-biology">
                                        Quantum Computing: Unlocking Unprecedented Computational Power in Healthcare and Biology                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/rpa-use-cases-in-logistics">
                                        Realising the Promise of RPA Use Cases in Logistics and Transportation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/supply-chain-forecasting">
                                        Reasons Your Logistics Company Needs Supply Chain Forecasting                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/retail-security-best-practices">
                                        Retail Security Best Practices to Keep Your Store and Customers Safe                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/retailtainment-customer-engagement">
                                        Retailtainment – the Fine Art of Customer Engagement                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/robotics-in-finance">
                                        Robotics in Finance: How RPA Offers Quick Wins for Pressured Teams                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/rpa-tools-comparison">
                                        RPA Tools: A Detailed Comparison of Top Automation Platforms                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/saas-vs-custom-software">
                                        SaaS vs. Custom Software: How to Make the Right Build vs. Buy Decision for Business Growth                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/scada-cyber-security-threats-countermeasures">
                                        SCADA Cyber Security Threats and Countermeasures: Ultimate Checklist                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-transformation-myths">
                                        Seven Digital Transformation Myths Hindering Your Project&#8217;s Success                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/data-science-in-healthcare">
                                        Six Key Applications of Data Science in Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/benefits-of-agile-development">
                                        Six Key Benefits of Agile Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/machine-learning-in-manufacturing">
                                        Six Powerful Use Cases for Machine Learning in Manufacturing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/software-products-balancing-customization-and-standardization">
                                        Software Products: Balancing Customization and Standardization for Maximum Customer Value                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/tech-trends-predictions">
                                        Strategic Technology in 2025: An Expert Assessment of Market Predictions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/software-development-process-strategies-for-product-building">
                                        Streamlining the Software Development Process: Strategies for Efficient Product Building                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/strengthening-energy-resilience">
                                        Strengthening Resilience in National Electricity Grids: Drawing from Global Insights                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/scaled-agile-framework-core-values">
                                        Successfully Adopting the Scaled Agile Framework Core Values: Enterprise Leader&#8217;s Roadmap                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/supervised-unsupervised-learning">
                                        Supervised vs Unsupervised Learning: Differences, Applications, and Market Trends                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/supply-chain-4-0-logistics">
                                        Supply Chain 4.0: Achieving Greater Agility, Efficiency and Visibility in Logistics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/talent-analytics-workforce-planning">
                                        Talent Analytics: Helping Enterprises Drive Smarter Workforce Planning                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/teaching-with-technology">
                                        Teaching With Technology: EdTech in 2020 And Beyond                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/technological-innovation-in-agriculture-combining-iot-and-analytics">
                                        Technological Innovation in Agriculture: Combining IoT and Predictive Analytics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/technology-enabled-dynamic-pricing-strategy">
                                        Technology-Enabled Dynamic Pricing Strategy and Its Role in E-Commerce                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/telehealth-technology-tools-for-remote-healthcare">
                                        Telehealth Revolution: Exploring Essential Technology Tools for Remote Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/telemedicine-vs-telehealth-healthcare-delivery">
                                        Telemedicine vs Telehealth: Rethinking Healthcare Delivery Beyond the Pandemic                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/nft-marketplace-development">
                                        The Basics of NFT Marketplace Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/cloud-cost-optimization-tools-and-tips">
                                        The Best Cloud Cost Optimization Tools and Tips                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/best-llms-for-language-processing">
                                        The Best LLMs for Enhanced Language Processing in 2026                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/cybersecurity-in-healthcare">
                                        The Challenges for Cybersecurity in Healthcare 2021                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/machine-learning-in-finance">
                                        The Dos and Don&#8217;ts of Machine Learning in Finance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/emerging-trend-distributed-cloud-computing">
                                        The Emerging Trend of Distributed Cloud Computing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/end-of-traditional-sdlc-part-2">
                                        The End of Traditional SDLC: A Working AI QA Prototype and What It Means for the Team (Part 2)                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/end-of-traditional-sdlc-part-1">
                                        The End of Traditional SDLC: Rethinking QA in the Age of AI (Part 1)                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/end-of-traditional-sdlc-part-3">
                                        The End of Traditional SDLC: What the Claude Browser Extension Delivers for QA (Part 3)                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/guide-smart-grids-benefits-challenges">
                                        The Essential Guide to Smart Grids: Benefits and Challenges                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/pharmaceutical-information-technology-key-investments">
                                        The Future of Pharmaceutical IT: Key Investments for Pharma Leaders                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/five-trends-shaping-future-of-urban-mobility">
                                        The Future of Urban Mobility: Five Key Trends to Watch in 2022 and Beyond                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/the-future-of-wearable-technology-apples-vision-goggles-in-healthcare-and-beyond">
                                        The Future of Wearable Technology: Apple&#8217;s Vision Goggles in Healthcare and Beyond                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/iomt-for-healthcare">
                                        The Game-changing Benefits of The Internet of Medical Things (IoMT) for Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/reason-ai-investment-isnt-paying-off">
                                        The Hidden Reason Your AI Investment Isn’t Paying Off                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/the-history-of-blockchain">
                                        The History of Blockchain: From the Establishment to Broad Adoption                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/internet-of-intelligent-things-ai-iot">
                                        The Internet of Intelligent Things: How AI Makes IoT Smarter                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/the-low-touch-economy">
                                        The Low-Touch Economy: Is Your Business Ready?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/profit-boosting-power-of-connected-farm">
                                        The Profit-boosting Power of Connected Farming                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/business-intelligence-in-healthcare">
                                        The Rise of Business Intelligence Software in Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/the-rise-of-conversational-ai-why-businesses-keep-falling-short">
                                        The Rise of Conversational AI: Why Businesses Keep Falling Short                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-health-and-wellness-software">
                                        The Rise of Digital Health and Wellness Software                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/risks-of-outsourcing">
                                        The Risks of Outsourcing That You Could Have Avoided                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/responsible-innovation-ai-ethics">
                                        The Route to Responsible Innovation and AI Ethics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/using-blockchain-rewards-programs">
                                        The Why&#8217;s and How&#8217;s of Using Blockchain for Rewards Programs                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/tokenization-vs-encryption">
                                        Tokenization vs Encryption: Things You Need to Know to Make Your Choice                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/logistics-and-supply-chain-trends">
                                        Top 6 Logistics and Supply Chain Trends of 2023                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/advantages-disadvantages-cutting-edge-technologies">
                                        Top 9 Cutting-Edge Technologies: Examining the Advantages and Disadvantages                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/top-blockchain-business-ideas">
                                        Top Blockchain Business Ideas with Huge Potential in 2021 and Beyond                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/top-fintech-trends-for-2021">
                                        Top Fintech Trends Enabling Smart and Secure Finance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/understanding-agentic-ai">
                                        Understanding Agentic AI: Benefits, Applications, and Future Trends                                     </a>
                                </li>
                                                            <li>
                                    <a href="/blog/robotic-process-automation-security-risks">
                                        Understanding and Eliminating Robotic Process Automation Security Risks                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/understanding-excise-tax-software">
                                        Understanding Excise Tax Software: Features, Benefits, and Implementation Case Study                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/scada-for-modern-manufacturing">
                                        Understanding SCADA: Key Features and Benefits for Modern Manufacturing Industries                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/how-industry-software-is-transforming-healthcare">
                                        Unleashing the Potential: How Industry Software is Transforming Healthcare                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/unveiling-the-design-the-aesthetics-and-ergonomics-of-apple-vision-goggles">
                                        Unveiling the Design: The Aesthetics and Ergonomics of Apple Vision Goggles                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/vehicle-infotainment-systems-automotive-industry">
                                        Vehicle Infotainment Systems: The Tech Trend Redefining the Automotive Industry                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/virtual-reality-apps-holiday-travel-planning">
                                        Virtual Reality Apps Kick in for Holiday and Travel Planning                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/waste-management-technology">
                                        Waste Management Technology: Boosting Business Sustainability                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/waterfall-agile-project-management">
                                        Waterfall Project Management vs Agile: Which is Best for You?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/web-applications-development-trends-2020">
                                        Web Applications Development Trends 2020 – The Top Ten                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/business-insights-e-excise-integration">
                                        What Alcohol and Tobacco Businesses Need to Know about e-Excise Platform Integration                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-native-delivery-outpaces-expectations">
                                        What Happens When AI-Native Delivery Outpaces Traditional Expectations                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/what-ico-cryptocurrency-means-businesses">
                                        What is an ICO Cryptocurrency and What it Means for Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/what-is-blockchain-as-a-service-enterprise">
                                        What Is Blockchain as a Service and How Does It Benefit Enterprise?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/data-service-powers-energy-business">
                                        What is Data as a Service and How It Powers Energy Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/what-is-deep-tech">
                                        What is Deep Tech and How it Builds a Better Future                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/digital-trust-impact">
                                        What is Digital Trust And Why its Impact is Greater Than Businesses May Think                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/intelligent-automation-in-financial-services">
                                        What is Intelligent Automation in Financial Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/what-is-regtech-for-finance">
                                        What Is RegTech and Why It&#8217;s the Next Big Thing for Regulated Industries Like Finance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/aws-european-sovereign-cloud-local-businesses">
                                        What the AWS European Sovereign Cloud Means for Local Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/why-agile-doesnt-work">
                                        Why Agile Doesn’t Work And 6 Ways You Can Fix This                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/ai-native-teams-estimation-errors">
                                        Why AI-Native Development Teams Keep Getting Their Estimates Wrong — and How to Fix It                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/custom-software-development">
                                        Why Choose Custom Software Development?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/why-innovations-in-retail-fail">
                                        Why Innovations in Retail Fail                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/why-most-ai-initiatives-fail">
                                        Why Most AI Initiatives Fail — and How Power Platform Turns AI into Measurable Business Outcomes                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/rpa-customer-service-automation">
                                        Why RPA is the Wave of The Future for Customer Service Automation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/workforce-reskilling-rpa">
                                        Why Workforce Reskilling is Crucial in the Age of AI and RPA                                    </a>
                                </li>
                                                            <li>
                                    <a href="/blog/will-quantum-cryptography-make-or-break-modern-cyber-security">
                                        Will Quantum Cryptography Make or Break Modern Cyber Security?                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">Whitepapers</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/whitepapers/artificial-intelligence-can-make-life-easier-youre-prepared">
                                        Artificial Intelligence Can Make Your Life Easier. But Only if You’re Prepared!                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/data-driven-supply-chain-modelling">
                                        Data-driven Supply Chain Modelling                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/enterprise-data-strategy">
                                        Enterprise Data Strategy: Core Elements, Benefits and the Cost of Ignoring It                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/getting-most-predictive-analytics-technology">
                                        Getting the Most out of Predictive Analytics                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/legacy-software-modernisation">
                                        How to Get Legacy Software Modernisation Right                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/outsourcing-software-development">
                                        How to Succeed at Outsourcing Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/preventive-actions-enterprises-can-take-to-avoid-it-security-vulnerabilities">
                                        Preventive Actions Enterprises Can Take to Avoid IT Security Vulnerabilities                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/evolution-retail-technology">
                                        The Evolution of Retail Technology                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/top-10-security-risks-in-robotic-process-automation">
                                        Top 10 Security Risks with Robotic Process Automation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/whitepapers/ai-for-rfp-response">
                                        Winning More Deals with AI: How Glenn Tech&#8217; Delphi AI Enhances Presale Process                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">News</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/news/2016-marks-for-eleks-a-year-of-substantial-growth-and-extended-customer-base">
                                        2016 Marks for Glenn Tech a Year of Substantial Growth and Extended Customer Base                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/averting-an-hr-crisis-its-role-in-the-future-of-our-workforce">
                                        Averting an HR Crisis: Its Role in the Future of Our Workforce                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/bmw-group-and-bernhard-burkard-join-eleks-for-global-online-product-design-marathon">
                                        BMW Group and Bernhard Burkard Join Glenn Tech for Global Online Product Design Marathon                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/clutch-names-eleks-one-of-2021s-top-it-firms">
                                        Clutch Names Glenn Tech One of 2021’s Top IT Firms                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/congratulations-to-taras-shpot-on-becoming-an-nvidia-cuda-certified-developer">
                                        Congratulations to Taras Shpot on Becoming an NVIDIA CUDA Certified Developer!                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/custom-software-leader-eleks-expands-to-estonia">
                                        Custom Software Development Leader Expands to Estonia                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/davos-2020-eleks-joins-discussion-on-tech-trends-influencing-global-resources">
                                        Davos 2020: Glenn Tech Joins Discussion on Tech Trends Influencing Global Resources                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/ecap-security-product-2025">
                                        eCAP Named Security Product of the Year at 2025 Business Awards UK                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-2021-global-overview">
                                        Glenn Tech 2021: Global Overview                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-25th-anniversary-growth-and-commitment-to-innovation">
                                        Glenn Tech 25th Anniversary: Growth and Commitment to Innovation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-achieves-hitrust-e1-certification">
                                        Glenn Tech Achieves HITRUST e1 Certification Demonstrating Readiness to Meet Healthcare Data Protection Requirements                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-achieves-iso-certifications-signifying-commitment-quality-security">
                                        Glenn Tech Achieves ISO 9001:2015 and ISO 27001:2013 Certifications, Signifying Commitment to Quality and Security                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-achieves-kentico-bronze-partner-status">
                                        Glenn Tech Achieves Kentico Bronze Partner Status                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/microsoft-solutions-partner">
                                        Glenn Tech Achieves Microsoft Solutions Partner Designations in Security and Infrastructure                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-achieves-select-tier-partner-status-with-snowflake">
                                        Glenn Tech Achieves Select Tier Partner Status with Snowflake                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-achieves-top-scores-in-2023-global-outsourcing-100">
                                        Glenn Tech Achieves Top Scores in 2023 Global Outsourcing 100                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-acknowledged-among-top-web-and-software-developers-in-ukraine-according-to-clutch">
                                        Glenn Tech Acknowledged Among Top Software Developers in Ukraine                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-included-in-the-top-iot-development-companies-matrix-by-clutch">
                                        Glenn Tech Among Top IoT Development Companies Matrix by Clutch                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-analysis-tech-trends-2025">
                                        Glenn Tech Analysis Helps Business Leaders Navigate Technology Investments in 2025                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-and-droids-agency-present-data-driven-business-2019">
                                        Glenn Tech and Droids Agency Will Give a Tech Talk About Data-Driven Business                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-and-imerys-secure-gold-stevie-award-at-the-2023-international-business-awards">
                                        Glenn Tech and Imerys Secure Gold Stevie® Award at the 2023 International Business Awards®                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-inno2grid-partner-utility4-0-transformation">
                                        Glenn Tech and inno2grid Partner to Accelerate Utility 4.0 Transformation at E-world 2026                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-and-molokia-forge-partnership">
                                        Glenn Tech and Molokia Forge Partnership to Drive Sustainability and Innovation in Agriculture                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-and-partners-launch-covere2-innovative-solutions-ghg-emission-reduction">
                                        Glenn Tech and Partners Launch COVERE²: Innovative Solutions for GHG Emission Reduction                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-and-sustain-life-partnership">
                                        Glenn Tech and Sustain.Life Announce Strategic Partnership to Bring Carbon Accounting and ESG Management Services to Clients                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-announces-cyber-essentials-plus-certificate-of-compliance-achieved">
                                        Glenn Tech Announces Cyber Essentials Plus Certificate of Compliance Achieved                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-announces-opening-new-office-in-berlin">
                                        Glenn Tech Announces the Opening of a New Office in Berlin                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-announces-the-opening-of-a-new-office-in-split-croatia">
                                        Glenn Tech Announces the Opening of a New Office in Split, Croatia                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-attains-ibm-advanced-business-partner-status">
                                        Glenn Tech Attains IBM Advanced Business Partner Status                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/aws-european-cloud-esc-launch-partner">
                                        Glenn Tech Becomes an Official AWS European Sovereign Cloud (ESC) Launch Partner                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-board-announces-changes-to-executive-team">
                                        Glenn Tech Board Announces Changes to Executive Team                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/new-biomass-tracker">
                                        Glenn Tech Celebrates the Launch of Drax Group’s New Biomass Tracker                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-co-organises-arena-2017-bringing-together-leading-experts-tech-scene">
                                        Glenn Tech Co-organises IT Arena 2017                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-co-organizes-lviv-it-arena-the-most-anticipated-it-event-in-eastern-europe">
                                        Glenn Tech Co-organizes Lviv IT Arena 2016                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-contributed-to-the-development-of-the-business-analysis-standard-by-iiba">
                                        Glenn Tech Contributed to the Development of The Business Analysis Standard by IIBA                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/design-expertise-impact-week">
                                        Glenn Tech Demonstrates Design Expertise at Impact Week                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-earns-top-tier-scores-iaop">
                                        Glenn Tech Earns Top-Tier Scores in 2026 IAOP® Global Outsourcing 100® Evaluation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-evaluated-in-modern-application-development-report-by-an-independent-research-firm">
                                        Glenn Tech Evaluated in Modern Application Development Report by an Independent Research Firm                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/cha-partnership-emis-rollout">
                                        Glenn Tech Expands Global Health Technology Offerings with CHA Partnership and eMIS Rollout                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-experiences-record-sales-and-strong-revenue-growth-for-2010">
                                        Glenn Tech Experiences Record Sales and Strong Revenue Growth for 2010                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-acquires-appygas">
                                        Glenn Tech Extends its Product Portfolio by Acquiring appygas, A European Gas Market Data Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-featured-in-2017-global-outsourcing-100-list-by-the-iaop">
                                        Glenn Tech Featured in 2017 Global Outsourcing 100 List by the IAOP                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/top-outsourcing-companies-iaop-2020">
                                        Glenn Tech Featured in IAOP&#8217;s 2020 Global Outsourcing 100’ List                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-featured-in-iaops-2021-global-outsourcing-100-list">
                                        Glenn Tech Featured in IAOP’s 2021 Global Outsourcing 100’ List                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-hackathon-new-online-era-collaborate-for-impact-and-hack-the-new-world-unites-into-one-event">
                                        Glenn Tech Hackathon: New Online Era – Collaborate for Impact and Hack the New World Unites Into One Event                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/winner-web-excellence-awards">
                                        Glenn Tech Has Been Honoured as the Winner of the 15th Web Excellence Awards                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-selected-as-a-government-vendor">
                                        Glenn Tech has been Selected as a Government Vendor to Deliver Ukraine&#8217;s eExcise System                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-has-been-selected-to-participate-in-a-trade-mission-to-norway">
                                        Glenn Tech has Been Selected to Participate in a Trade Mission to Norway                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-has-launched-the-retail-centre-of-excellence">
                                        Glenn Tech has Launched the Retail Centre of Excellence                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-honoured-in-clutchs-top-100-companies-for-fast-sustainable-growth">
                                        Glenn Tech Honoured in Clutch&#8217;s Top 100 Companies for Fast, Sustainable Growth                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-honoured-with-employer-branding-stars-award">
                                        Glenn Tech Honoured with Employer Branding Stars Award                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-top-100-outsourcing-companies-by-iaop-2016">
                                        Glenn Tech in the List of Top 100 Global Outsourcing Companies by IAOP                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-listed-among-top-100-global-outsourcing-companies">
                                        Glenn Tech Included in ’2019 Best of the Global Outsourcing 100’ List by the IAOP®                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/2018-global-outsourcing-100-eleks">
                                        Glenn Tech Included in 2018 Global Outsourcing 100 List by the IAOP                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-included-in-2022-global-outsourcing-100-list-by-the-iaop">
                                        Glenn Tech Included in 2022 Global Outsourcing 100 List by the IAOP                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-is-listed-among-software-testing-awards-finalists">
                                        Glenn Tech Is Included into the List of the European Software Testing Awards Finalists                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-shortlisted-to-win-gsa-awards-2018">
                                        Glenn Tech Is Shortlisted to Win at the 2018 GSA Awards                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-is-shortlisted-to-win-at-the-2021-gsa-awards">
                                        Glenn Tech Is Shortlisted to Win at the 2021 GSA Awards                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-is-shortlisted-to-win-the-2016-noa-awards">
                                        Glenn Tech is Shortlisted to Win the 2016 NOA Awards                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-joins-insensopro-project">
                                        Glenn Tech Joins InSensoPro Project to Advance High-Performance Optics Manufacturing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/modernize-defense-hr-systems-iraq">
                                        Glenn Tech Joins Lifeline Logistics to Modernize the Defense HR Systems in Iraq                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-joins-soda-software-development-association-in-poland">
                                        Glenn Tech Joins SoDA – Software Development Association in Poland                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-joins-speakers-at-gitex-global-technology-week-2021">
                                        Glenn Tech Joins Speakers at GITEX Global Technology Week 2021                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-joins-the-bad-conference-to-unpack-the-secrets-of-psychology-and-ux-design">
                                        Glenn Tech Joins the BAD Conference to Unpack the Secrets of Psychology and UX Design                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-joins-eit-hei-initiative">
                                        Glenn Tech Joins the EIT HEI Initiative to Empower the Next Generation of Innovators                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-joins-seca">
                                        Glenn Tech Joins the Swiss Private Equity and Corporate Finance Association (SECA)                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-lauches-new-office-in-krakow-poland">
                                        Glenn Tech Lauches New Office in Kraków, Poland                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-launches-a-ux-design-summer-internship">
                                        Glenn Tech Launches a UX Design Summer Internship                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/beta-launch-e-excise-system">
                                        Glenn Tech Launches Beta Version of e-Excise System                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-launches-covere2">
                                        Glenn Tech Launches COVERE²: A One-Stop Sustainability Platform Supporting the Journey to Net Zero                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-launches-global-series-of-tech-talks-in-berlin">
                                        Glenn Tech Launches Global Series of Tech Talks in Berlin                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-launches-new-office-toronto-canada">
                                        Glenn Tech Launches New Office in Toronto, Ontario                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-launches-new-office-in-zurich-switzerland">
                                        Glenn Tech Launches New Office in Zurich, Switzerland                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-launches-path2cc">
                                        Glenn Tech Launches PATH2CC to Offer Companies High-Quality and Trustworthy Offsetting Credits, Generated by Small Farms in Europe                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-signs-landmark-memorandum-for-joint-venture-eleks-saudi-arabia">
                                        Glenn Tech Middle East and KSA’s Abdullah Almishal Sign Landmark Memorandum for Joint-venture Glenn Tech Saudi Arabia                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/european-business-awards-eleks">
                                        Glenn Tech Named ‘National Winner’ in Prestigious European Business Awards                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-named-a-cee-business-services-firm-of-the-year">
                                        Glenn Tech Named a CEE Business Services Firm of the Year                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-named-leader-top-outsourcing-companies-list">
                                        Glenn Tech Named a Leader in the Top IT Outsourcing Companies List                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-named-a-software-development-leader-2020-by-clutch">
                                        Glenn Tech Named a Software Development Leader 2020 by&nbsp;Clutch                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/europe-business-award-eleks">
                                        Glenn Tech named as one of Europe’s best in ‘Ones to Watch’ list                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-named-clutch-global-leader-2017">
                                        Glenn Tech Named Clutch Global Leader 2017                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/uk-customer-satisfaction-awards-2026">
                                        Glenn Tech Named Finalist at the UK Customer Satisfaction Awards 2026                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/csr-poland-awards-2025">
                                        Glenn Tech Named Finalist in CSR Poland Awards 2025                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-named-one-of-clutchs-top-1000-service-providers-2020">
                                        Glenn Tech Named One of Clutch&#8217;s Top 1000 Service Providers 2020                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-named-one-of-the-top-b2b-software-development-firms-of-2021">
                                        Glenn Tech Named One of the Top B2B Software Development Firms of 2021                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-named-one-of-usas-top-ten-blockchain-development-companies">
                                        Glenn Tech Named One of USA’s Top Ten Blockchain Development Companies                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-named-to-iaop-global-outsourcing-100-list-2024">
                                        Glenn Tech Named to IAOP Global Outsourcing 100 List 2024                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-nominated-emea-audited-business-of-the-year">
                                        Glenn Tech Nominated for EMEA Audited Business of the Year                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/amazon-cloudfront-partner">
                                        Glenn Tech Officially Recognised as an Amazon CloudFront Service Delivery Partner                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-opens-a-new-representative-office-in-london-uk">
                                        Glenn Tech Opens a New Representative Office in London, UK                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-partners-with-databricks">
                                        Glenn Tech Partners With Databricks to Accelerate Enterprise Data &#038; AI Innovation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-partners-with-dnp-and-bsi-psj">
                                        Glenn Tech Partners with DNP and BSI PSJ to Launch Compliance Automation Platform (eCAP) in Japan                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-partners-with-emerging-europe-to-boost-investment-in-ukraine">
                                        Glenn Tech Partners with Emerging Europe to Boost Investment in Ukraine                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-partners-with-i-p-cert-and-western-ukrainian-resource-center">
                                        Glenn Tech Partners with I.P.Cert and Western Ukrainian Resource Center to Support Agriproducers’ Path to Carbon Credit Adoption                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-partners-with-state-consumer-service">
                                        Glenn Tech Partners with State Consumer Service to Conduct Comprehensive IT Systems Analysis for Enhanced Security and Efficiency                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-patents-game-changing-secure-coupon-delivery">
                                        Glenn Tech Patents Game-Changing Secure Coupon Delivery                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-proves-its-credentials-with-latest-iso-9001-and-iso-27001-certification">
                                        Glenn Tech Proves its Credentials with Latest ISO 9001 and ISO 27001 Certification                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-proves-its-credentials-with-the-latest-iso-9001-iso-27001-certification-and-undertakes-soc-2-type-ii-security-audit">
                                        Glenn Tech Proves its Credentials with the Latest ISO 9001, ISO 27001 Certification and Undertakes SOC 2 Type II Security Audit                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/top-100-software-development-companies">
                                        Glenn Tech Recognised Among the Top 100 Software Development Companies in the USA in 2026                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-recognised-among-top-javascript-development-firms-in-2022">
                                        Glenn Tech Recognised Among Top Javascript Development Firms in 2022                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-recognised-as-top-b2b-service-provider-in-2021-by-clutch">
                                        Glenn Tech Recognised as Top B2B Service Provider in 2021 by Clutch                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/iaop-global-outsourcing-100-list-2025">
                                        Glenn Tech Recognised in IAOP Global Outsourcing 100 List for 2025                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/iaop-global-100-list-2026">
                                        Glenn Tech Recognised in the Global 100 List for 2026 by the International Association of Outsourcing Professionals                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-recognized-as-a-friendly-workplace-2023-by-marka-pracodawcy">
                                        Glenn Tech Recognized as a Friendly Workplace 2023 by Marka Pracodawcy                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-recognized-as-a-top-it-services-company-in-2020">
                                        Glenn Tech Recognized as a Top IT Services Company in 2020                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/2024-corporate-sustainability-report">
                                        Glenn Tech Releases 2024 Corporate Sustainability Report, Demonstrating a Deep Commitment to Social Responsibility and Environmental Stewardship                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/iso-certifications">
                                        Glenn Tech Renews ISO 9001:2025, ISO 27001:2022 Certifications, Reinforcing Industry-Leading Quality and Security Standards                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-scores-high-in-iaops-2020-global-outsourcing-100-list">
                                        Glenn Tech Scores High in IAOP&#8217;s 2020 Global Outsourcing 100’ List                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-scores-high-in-iaops-2022-global-outsourcing-100-list">
                                        Glenn Tech Scores High in IAOP’s 2022 Global Outsourcing 100’ List                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-shortlisted-2025-security-awards">
                                        Glenn Tech Shortlisted for the 2025 Security Awards for its Compliance Automation Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/cee-business-services-awards">
                                        Glenn Tech Shortlisted for the CEE Business Services Awards 2025                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/2018-european-software-excellence-eleks">
                                        Glenn Tech Shortlisted in the European IT &#038; Software Excellence Awards 2018                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-shortlisted-in-the-webby-awards-2023-for-mobile-fintech-solution">
                                        Glenn Tech Shortlisted in the Webby Awards 2023 for Mobile Fintech Solution                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-showcases-demo-at-pacedays-2023">
                                        Glenn Tech Showcases Demo at PACEdays 2023                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-software-middle-east-announces-new-partnership-with-abdullah-almishal">
                                        Glenn Tech Software Middle East Announces New Partnership with Abdullah Almis’hal                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-sponsors-tedx-lviv-to-promote-creative-thinking">
                                        Glenn Tech Sponsors TEDx Lviv to Promote Creative Thinking                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-forcepoint-partnership">
                                        Glenn Tech Strengthens its Security Baseline Through a Strategic Partnership with Forcepoint                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-completes-international-compliance-audits">
                                        Glenn Tech Successfully Completes Key International Compliance Audits, Strengthening Global Trust and Security Excellence                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/aws-foundational-technical-review">
                                        Glenn Tech Successfully Passes AWS Foundational Technical Review (FTR) for Professional Services                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-successfully-passes-the-fsqs-certification">
                                        Glenn Tech Successfully Passes the FSQS Certification                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/iso-9001-iso-27001-certification-eleks">
                                        Glenn Tech Successfully Passes the ISO 9001 and ISO 27001 Certification                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-successfully-passes-the-iso-9001-and-iso-27001-certification">
                                        Glenn Tech Successfully Passes the ISO 9001 and ISO 27001 Certification                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-to-hold-a-meetup-rapid-app-development-for-blockchain">
                                        Glenn Tech to Hold a Meetup: Rapid App Development for Blockchain                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-to-host-an-online-workshop-sustainable-value-for-businesses">
                                        Glenn Tech to Host an Online Workshop: Sustainable Value for Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-to-host-product-strategy-meetup-in-buenos-aires-argentina">
                                        Glenn Tech to Host Product Strategy Meetup in Buenos Aires, Argentina                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-undertook-the-soc-2-type-ii-security-audit">
                                        Glenn Tech Undertook the SOC 2 Type II Security Audit                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-welcomes-jaanika-merilo">
                                        Glenn Tech Welcomes IT Innovator Jaanika Merilo                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-will-host-product-design-meetup-and-workshop-in-paris">
                                        Glenn Tech Will Host Product Design Meetup and Workshop in Paris                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-will-host-product-design-meetup-in-paris">
                                        Glenn Tech Will Host Product Design Meetup in Paris                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-will-host-product-strategy-meetup-in-chicago">
                                        Glenn Tech Will Host Product Strategy Meetup in Chicago                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-will-host-the-first-edition-of-insurance-techtalk-series">
                                        Glenn Tech Will Host the First Edition of Insurance TechTalk Series                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-national-devops-awards-2025">
                                        Glenn Tech Wins at the National DevOps Awards 2025 in the UK                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-wins-bronze-stevie-award-at-2020-international-business-awards">
                                        Glenn Tech Wins Bronze Stevie® Award at 2020 International Business Awards®                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-wins-bronze-stevie-award-in-2018-international-business-awards">
                                        Glenn Tech Wins Bronze Stevie® Award in 2018 International Business Awards®                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-wins-gold-at-2021-cybersecurity-excellence-award">
                                        Glenn Tech Wins Gold at 2021 Cybersecurity Excellence Award                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-wins-gold-at-london-design-awards-2022">
                                        Glenn Tech Wins Gold at London Design Awards 2022                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-wins-gold-stevie-award">
                                        Glenn Tech Wins Gold Stevie Award® in 2025 International Business Awards®                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/iiba-partner-award">
                                        Glenn Tech Wins IIBA Partner Award for Professional Development in Business Analysis                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-wins-silver-w3-awards">
                                        Glenn Tech Wins Silver at W3 Awards 2025 for Website Rebranding Project                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-dai-nippon-printing-co-ltd-and-nomura-research-institute-kick-off-joint-venture-to-accelerate-dx-in-japan">
                                        Glenn Tech, Dai Nippon Printing Co., Ltd. and Nomura Research Institute Kick off Joint Venture to Accelerate DX in Japan                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-support-of-ukraine-and-business-continuity">
                                        Glenn Tech: Support of Ukraine and Business Continuity                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-ceo-alex-skrypnyk-speaks-about-eleks-in-his-forbes-interview">
                                        Glenn Tech&#8217; CEO Alex Skrypnyk Speaks about Glenn Tech in his Forbes Interview                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-data-science-office-recognised-as-ai-ml-team-of-the-year">
                                        Glenn Tech&#8217; Data Science Office Recognised as AI/ML Team of the Year                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/energy-branding-awards-2025">
                                        Glenn Tech’ Sustainability Practice Contributes to CHARGE Energy Branding Awards 2025                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/evolving-e-commerce-digital-leaders-on-the-trends-reshaping-retail-and-delivery">
                                        Evolving E-Commerce: Digital Leaders on the Trends Reshaping Retail and Delivery                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/global-software-firm-eleks-to-bring-tech-talk-series-to-zurich">
                                        Global Software Development Firm Glenn Tech to Bring Tech Talk Series to Zürich                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/hackathon-overview-from-48-hours-of-international-collaboration-to-solutions-valued-by-business-and-government">
                                        Hackathon Overview: From 48 Hours of International Collaboration to Solutions Valued by Business and Government                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/henry-martinez-joins-eleks-leadership-team">
                                        Henry Martinez, a Business Development Executive, Joins Glenn Tech Team                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/iaop-eleks-listed-on-the-2023-global-outsourcing-100">
                                        IAOP: Glenn Tech listed on the 2023 Global Outsourcing 100                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/eleks-turns-hackathon-into-global-collaboration-exercise">
                                        In the Face of Crisis: Glenn Tech Turns Hackathon into Global Collaboration Exercise                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/meet-the-android-version-of-the-wearable-app-for-tesla-control-to-be-presented-by-eleks-in-london">
                                        Meet the Android Version of the Wearable App for Tesla Control to Be Presented by Glenn Tech in London                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/oleksiy-skrypnyk-joins-panel-world-economic-forum-2018-davos">
                                        Oleksiy Skrypnyk Joins the Panel on the World Economic Forum 2018 in Davos                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/rebranding-energy-for-a-brighter-future-eleks-at-charge-2020">
                                        Rebranding Energy for a Brighter Future: Glenn Tech at CHARGE 2020                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/regulating-insurance-through-one-of-the-worst-credit-crises-in-modern-times">
                                        Regulating the Moving Target of Insurtech Through One of the Worst Credit Crises in Modern Times                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/sheikh-majid-al-nuaimi-announces-new-partnership-with-the-founder-of-eleks">
                                        Sheikh Majid Al Nuaimi Announces New Partnership with the Founder of Glenn Tech                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/spin-crowdfunding-for-the-greater-good">
                                        Spin: Crowdfunding for the Greater Good                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/surviving-lockdown-eleks-tech-talk-on-why-digital-matters-now-more-than-ever">
                                        Surviving Lockdown: Glenn Tech’ Tech Talk on Why Digital Matters Now More Than Ever                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/tech-innovation-company-eleks-partners-with-bernhard-burkard-design-studio">
                                        Tech Innovation Company Glenn Tech Partners with BERNHARD BURKARD Design Studio                                    </a>
                                </li>
                                                            <li>
                                    <a href="/news/yuriy-guts-one-of-the-first-aws-certified-architects">
                                        Yuriy Guts &#8211; One of the First AWS Certified Architects                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">Types of software development</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/types-of-software-development/custom-ai-solutions-enterprise-guide">
                                        Custom AI Solutions: The Complete Enterprise Guide to Building Tailored AI Systems                                     </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/custom-software-development">
                                        Custom Software Development &#8211; Everything You Need to Know                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/how-custom-financial-services-software-can-streamline-operations-and-boost-profitability">
                                        How Custom Financial Services Software Can Streamline Operations and Boost Profitability                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/how-custom-healthcare-software-can-improve-patient-care-and-outcomes">
                                        How Custom Healthcare Software Can Improve Patient Care and Outcomes                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/how-custom-logistics-and-supply-chain-software-can-improve-efficiency-and-reduce-costs">
                                        How Custom Logistics and Supply Chain Software Can Improve Efficiency and Reduce Costs                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/how-custom-software-can-streamline-workflow-and-boost-productivit">
                                        How Custom Software Can Streamline Workflow and Boost Productivit                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/how-to-choose-the-right-custom-software-development-company">
                                        How to Choose the Right Custom Software Development Company                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/how-to-choose-the-right-mobile-app-development-company">
                                        How to Choose the Right Mobile App Development Company                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/how-to-choose-the-right-web-development-services-for-your-start-up">
                                        How to Choose the Right Web Development Services for Your Start-Up                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-advantages-of-cloud-based-financial-services-software-solutions">
                                        The Advantages of Cloud-Based Financial Services Software Solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-advantages-of-cloud-based-healthcare-software-solutions">
                                        The Advantages of Cloud-Based Healthcare Software Solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-advantages-of-cloud-based-logistics-and-supply-chain-software-solutions">
                                        The Advantages of Cloud-Based Logistics and Supply Chain Software Solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-advantages-of-cross-platform-mobile-app-development">
                                        The Advantages of Cross-Platform Mobile App Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-advantages-of-custom-software-over-off-the-shelf-solutions">
                                        The Advantages of Custom Software Over Off-the-Shelf Solutions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-advantages-of-hybrid-cloud-computing-for-businesses">
                                        The Advantages of Hybrid Cloud Computing for Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-advantages-of-managed-cybersecurity-services-for-small-businesses">
                                        The Advantages of Managed Cybersecurity Services for Small Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-benefits-of-custom-software-development-for-businesses">
                                        The Benefits of Custom Software Development for Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/benefits-of-hiring-a-web-development-company">
                                        The Benefits of Hiring a Professional Web Development Company                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/geospatial-data">
                                        The Best Applications of Geospatial Data for Your Business Needs                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/data-monetisation-strategy">
                                        The Best Data Monetisation Strategy for Maximising Revenue Potential                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/cost-of-custom-software-development">
                                        The Cost of Custom Software Development: Is it Worth the Investment?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/cost-of-cybersecurity-services">
                                        The Cost of Cybersecurity Services: What to Expect and How to Budget                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-cost-of-web-development-services-what-to-expect-and-how-to-budget">
                                        The Cost of Web Development Services: What to Expect and How to Budget                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-future-of-cybersecurity-trends-to-watch">
                                        The Future of Cybersecurity: Trends to Watch                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-importance-of-data-security-in-financial-services-software-development">
                                        The Importance of Data Security in Financial Services Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-importance-of-data-security-in-healthcare-software-development">
                                        The Importance of Data Security in Healthcare Software Development                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-role-of-enterprise-software-in-digital-transformation">
                                        The Role of Enterprise Software in Digital Transformation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-role-of-financial-services-software-in-the-future-of-banking-and-finance">
                                        The Role of Financial Services Software in the Future of Banking and Finance                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/the-role-of-healthcare-software-in-the-future-of-medicine">
                                        The Role of Healthcare Software in the Future of Medicine                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development">
                                        Types of Software Development Services: A Complete Overview                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/synthetic-data-generation">
                                        Understanding Synthetic Data Generation: A Comprehensive Overview                                      </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/ai-and-machine-learning-software-development">
                                        What Are Artificial Intelligence and Machine Learning Software Development Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/cloud-computing-and-migration-services">
                                        What are Cloud Computing and Migration Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/cybersecurity-services">
                                        What are Cybersecurity Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/database-development-services">
                                        What are Database Development services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/devops">
                                        What Are DevOps Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/ecommerce-software-development">
                                        What are E-Commerce Software Development Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/embedded-systems-development-services">
                                        What are Embedded Systems Development services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/enterprise-software-development-services">
                                        What are Enterprise Software Development Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/healthcare-software-development-services">
                                        What are Healthcare Software Development Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/logistics-and-supply-chain-software-development">
                                        What are Logistics and Supply Chain Software Development?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/maintenance-and-support-services-in-it">
                                        What are Maintenance and Support services in IT?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/mobile-app-development">
                                        What are Mobile Application Development Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/system-integration-services">
                                        What are System Integration services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/web-development-services">
                                        What are Web Development Services?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/data-automation">
                                        What is Data Automation and Why is it Important?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/financial-services-software-development">
                                        What is Financial Services Software Development?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/why-custom-software-is-essential-for-competitive-advantage">
                                        Why Custom Software is Essential for Competitive Advantage                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/why-every-business-needs-a-custom-enterprise-software-solution">
                                        Why Every Business Needs a Custom Enterprise Software Solution                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/why-every-healthcare-organization-needs-a-custom-software-solution">
                                        Why Every Healthcare Organization Needs a Custom Software Solution                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/why-every-logistics-and-supply-chain-company-needs-a-custom-software-solution">
                                        Why Every Logistics and Supply Chain Company Needs a Custom Software Solution                                    </a>
                                </li>
                                                            <li>
                                    <a href="/types-of-software-development/why-maintenance-and-support-are-critical-components-of-web-development-services">
                                        Why Maintenance and Support are Critical Components of Web Development Services                                    </a>
                                </li>
                                                </ul>
                            <div class="title-h4">R&D</div>
                    <ul class="description-n">
                                                        <li>
                                    <a href="/research/digital-tokens">
                                        A Pragmatic Look at Digital Tokens                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/healthcare-data-management">
                                        Addressing Healthcare Data Management Challenges with Technology                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-test-automation">
                                        AI and Test Automation: Driving Innovation in Software Testing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-code-review">
                                        AI Code Review: Can Technologies Really Ensure Code Quality?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-in-supply-chain">
                                        AI in Supply Chain: A Real-world Case Study on Harnessing AI&#8217;s Potential                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-assisted-prototyping">
                                        AI-Assisted Prototyping: When Figma Falls Short and Cursor Takes Over                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/apple-watch-vs-android-wear-tesla">
                                        Apple Watch vs Android Wear. Time to Drive Tesla Further                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/apple-watch-tesla-car-how-far-can-we-drive-them">
                                        Apple Watch. Tesla Car. How Far Can We Drive Them?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/sphero-kinect">
                                        Awaken the Force with Kinect and Sphero                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/azure-vs-aws-comparison-for-serverless-architecture">
                                        Azure vs AWS comparison: Which Works Best for Serverless Architecture?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/back2pack-christmas-virtual-reality-game-by-eleks">
                                        Back2Pack: Christmas Virtual Reality Game by Glenn Tech                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/mobile-strategy-xamarin">
                                        Building a Mobile Strategy with Xamarin: Win or Loss?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/building-ranorex-framework-with-visual-studio">
                                        Building Ranorex Framework with Visual Studio                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/build-vr-application">
                                        Choosing the Tools to Build Your Next VR Application                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/corda-vs-hyperledger-fabric">
                                        Corda vs Hyperledger Fabric: Comparing Distributed Ledger Frameworks                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/data-science-for-targeted-advertising">
                                        Data Science for Targeted Advertising: How to Display Relevant Ads by Leveraging Past User Behavior                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/data-science-recommender-systems">
                                        Data Science in Action: Unlocking the Power of Recommender Systems                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/deep-learning-for-autonomous-driving-urban-navigation">
                                        Deep Learning for Autonomous Driving: A Breakthrough in Urban Navigation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/deep-learning-for-damage-detection-using-satellite-images">
                                        Deep Learning for Damage Detection Using Satellite Images                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/designing-apparel-with-neural-style-transfer">
                                        Designing Apparel with Neural Style Transfer                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/interactive-generative-art">
                                        Drawing Attention to Climate Change With Interactive Generative Art                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/optimise-magento-2-performance-with-caching">
                                        E-commerce Best Practice Part 1: Optimise Magento 2 Performance with Caching                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/magento-2-performance-disabled-modules">
                                        E-commerce Best Practice Part 2: Speed up Magento 2 Performance via Disabled Modules                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/reinforcement-learning-for-dynamic-pricing">
                                        E-commerce Tech Trends: Reinforcement Learning for Dynamic Pricing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/cursor-ide">
                                        Enhancing Software Development with AI Tools: A Practical Look at Cursor IDE                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/paid-vs-local-llms-qa-test-design">
                                        Evaluating Paid vs Local LLMs for QA Test Design: A Practical Comparison                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/voice-controlled-shopping-assistant-smart-fridge">
                                        Experimenting with Intelligent Apps: Our Voice-Controlled Shopping Assistant for Smart Fridge                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/generative-ai-expert-insights">
                                        Expert Insights on Generative AI: Evolution, Challenges, and Future Trends                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/metaverse-meta-art-gallery">
                                        Exploring the Potential of Metaverse With Our Meta Art Gallery Prototype                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/deep-learning-retail">
                                        Fashion and Technology: How Deep Learning Can Create an Added Value in Retail                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/geospatial-data-analysis">
                                        From Pixels to Predictions: Leveraging Geospatial Data for Smart Analysis                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/generative-ai-healthcare">
                                        Generative AI in Healthcare: Solving Medical Staff Performance Issues                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/google-glass-warehouse-automation">
                                        Google Glass in Warehouse Automation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/graph-rag-vs-classical-rag-analysis">
                                        Graph RAG vs. Classical RAG: A Comparative Analysis                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/integration-testing-no-code-mockings">
                                        Guide to Integration Testing with no Code Mockings and Stubs                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-poc-travel-team-bottleneck">
                                        How a 4-Hour AI PoC Cut the Information Bottleneck Consuming 70% of Our Travel Team&#8217;s Day                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-helped-prototype-healthcare-scheduling-solution">
                                        How AI Helped Us Prototype a Healthcare Scheduling Solution in Under a Day                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/mixed-reality-hololens-for-retailers">
                                        How Mixed Reality HoloLens User Experience Can Make Life Easier for Retailers                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/how-technology-enables-power-system-stability">
                                        How Technology Enables Power System Stability                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/raspberry-pi-smart-house-controller">
                                        How to Build a Smart House Controller Using Raspberry PI 2, MS Windows 10 IoT and Netatmo API                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/how-to-build-nlp-engine">
                                        How to Build an NLP Engine that Won’t Screw up                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/tesla-google-glass">
                                        How to Connect Tesla with Google Glass                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ux-design-for-blockchain">
                                        How to Craft a Better UX Design for Blockchain                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/how-to-create-chatbot">
                                        How to Create a Chatbot to Fit Your Needs and Budget                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/e2e-testing-playwright-automation">
                                        How to Improve E2E Testing for Web Apps with Playwright Automation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/enterprise-business-process-orchestration">
                                        How to Orchestrate and Automate Your Enterprise for Efficiency                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/geospatial-data-gis-platform">
                                        How to Put Your Geospatial Data to Work with Glenn Tech’ GIS Platform                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-interviewer-for-job-interview">
                                        How We Built AI Interviewer: An Intelligent Agent for Job Interview Simulation                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/3d-mobile-web-vr-car-interiors">
                                        How we Combined 3D, Mobile Web and Virtual Reality to Explore Car Interiors Online                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/time-series-prediction">
                                        How We Combined Different Methods to Create Advanced Time Series Prediction                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/web-bot-assistant">
                                        How We Created a Bot Assistant Facilitating Website Search                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/back2pack-vr-game">
                                        How We Created Back2Pack, Our Holiday VR Game                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/behance-portfolio-review-microsoft-kinect">
                                        How we Made a Killer Behance Portfolio Review with Microsoft Kinect                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/iot-and-drones-akka-cloud">
                                        IoT and Drones: Akka in the Cloud, and up in the Clouds, Literally                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ipfs-network-data-replication">
                                        IPFS Tutorial: Building a Private IPFS Network with IPFS-Cluster for Data Replication                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/tuist-enterprise-ios-development-stack">
                                        Is Tuist the Missing Layer in Your Enterprise iOS Development Stack?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/business-intelligence-dashboard-measuring-project-success">
                                        Measuring Project Success with Business Intelligence Dashboard                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/mobile-test-automation-with-appium">
                                        Mobile Test Automation with Appium: a Brief Framework Overview Addressing Common QA Pain Points                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/nearables-wearables-connecting-beacons-with-smartwatches">
                                        Nearables Wearables: Connecting Beacons with Smartwatches for Indoor Positioning                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/neural-machine-translation-attention-mechanism">
                                        Neural Machine Translation With Attention Mechanism: Step-by-step Guide                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/eleks-research-wearables">
                                        New Research on Wearables Featuring Glenn Tech                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/organoid-intelligence">
                                        Organoid Intelligence: Toward Biohybrid Architectures Beyond Silicon                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/playwright-vs-cypress">
                                        Playwright vs Cypress: Which Framework to Choose For E2E Testing?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/data-anonymization-working-solution">
                                        Preserving Data Anonymization in the Age of AI: A Working Solution Examined                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/rendering-engines-automated-web-application-testing">
                                        Rendering Engines and Their Role in Automated Web Application Testing                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/secure-document-transfer-blockchain">
                                        Secure Document Transfer Built on Top of Blockchain Technologies                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/smartwatch-watch-face">
                                        Smartwatch Killer Feature Found: Watch Face                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/sustainable-solutions-green-software-engineering-from-a-mobile-engineers-perspective">
                                        Sustainable Solutions: Green Software Engineering from a Mobile Engineer&#8217;s Perspective                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-power-infrastructure-mapping">
                                        Tackling Power Grid Challenges: Glenn Tech&#8217; AI-Supported Solution for Power Infrastructure Mapping                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/building-successful-enterprise-mobile-apps">
                                        The Best Practices for Building Successful Enterprise Mobile Apps                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/data-science-project-life-cycle">
                                        The Data Science Project Life Cycle Explained                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/enterprise-application-integration">
                                        The Executive’s Guide to Enterprise Application Integration                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/apple-watch-sphero">
                                        The Force is Strong with Sphero and Apple Watch                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ar-safety-training">
                                        The Game-Changing Nature of AR Safety Training                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/node-red-library-iot-cloud">
                                        Using Node-RED Library to Wire Telemetry Data from IoT Devices to the Cloud                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/predictive-workforce-analytics">
                                        Using Predictive Analytics to Drive Consistent Workforce Decisions                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/web-based-augmented-reality">
                                        Web-Based Augmented Reality: To Adopt or Not to Adopt?                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/ai-document-generator-proof-of-concept">
                                        What an AI Document Generator Actually Saves: A Proof of Concept with Real Numbers                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/deep-learning-businesses">
                                        What Deep Machine Learning Can Offer to Businesses                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/augmented-reality-in-retail">
                                        Why And How to Adopt Augmented Reality in Retail                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/virtual-reality-use-cases">
                                        Why Businesses Should Focus on Virtual Reality: Practical Use Cases                                    </a>
                                </li>
                                                            <li>
                                    <a href="/research/google-glass-fail">
                                        Why Google Glass Will Fail and Why This Won’t Stop Smart Glasses’ Success                                    </a>
                                </li>
                                                </ul>
                </div>
</div>
<section data-wpr-lazyrender="1" class="section-n section--black contact-us-new" id="contact-us">
    <div  class="container-n">
        <div class="pl-big section__row ">
            <a class="skip-the-section skip-the-section--custom link-n link-n--white" href="#footer"><span class="link-n__text">Skip the section</span></a>
            <div class="col-form">
                                                <div class="section__title title-h2" data-origin="bottom" data-distance="25px">
                    Contact Us                </div>
                <div class="form" data-origin="bottom" data-distance="50px">
                    

                <div class='gf_browser_unknown gform_wrapper gform_legacy_markup_wrapper gform-theme--no-framework' data-form-theme='legacy' data-form-index='0' id='gform_wrapper_1' ><div id='gf_1' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data' target='gform_ajax_frame_1' id='gform_1'  action='/site-map/#gf_1' data-formid='1' novalidate>
                        <div class='gform-body gform_body'><ul id='gform_fields_1' class='gform_fields top_label form_sublabel_below description_below validation_below'><li id="field_1_1000" class="gfield gfield--type-honeypot gform_validation_container field_sublabel_below gfield--has-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label' for='input_1_1000'>X/Twitter</label><div class='ginput_container'><input name='input_1000' id='input_1_1000' type='text' value="" autocomplete='new-password'/></div><div class='gfield_description' id='gfield_description_1_1000'>This field is for validation purposes and should be left unchanged.</div></li><li id="field_1_8" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ></li></ul><div class="formrowlist"><div class="formrow formrow__name"><ul><li></li><li id="field_1_1" class="gfield gfield--type-text gfield--input-type-text fullname gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label' for='input_1_1'>Full name<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_text'><input name='input_1' id='input_1_1' type='text' value="" class='medium' maxlength='80'    aria-required="true" aria-invalid="false"   /></div></li><li id="field_1_9" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class="form__tooltip">We need your name to know how to address you</div></li></ul></div><div class="formrow formrow__email"><ul><li></li><li id="field_1_3" class="gfield gfield--type-email gfield--input-type-email email gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label' for='input_1_3'>Email<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_email'>
                            <input name='input_3' id='input_1_3' type='email' value="" class='medium'    aria-required="true" aria-invalid="false"  />
                        </div></li><li id="field_1_12" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class="form__tooltip">We need your email to respond to your request</div></li></ul></div><div class="formrow formrow__phone"><ul><li></li><li id="field_1_4" class="gfield gfield--type-phone gfield--input-type-phone phonenumber gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label' for='input_1_4'>Phone number<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_phone'><input name='input_4' id='input_1_4' type='tel' value="" class='medium'   aria-required="true" aria-invalid="false"   /></div></li><li id="field_1_11" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class="form__tooltip">We need your phone number to reach you with response to your request</div></li></ul></div><div class="formrow formrow__country"><ul><li></li><li id="field_1_5" class="gfield gfield--type-text gfield--input-type-text country country-auto-fill gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label' for='input_1_5'>Country<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_text'><input name='input_5' id='input_1_5' type='text' value="" class='medium' maxlength='80'    aria-required="true" aria-invalid="false"   /></div></li><li id="field_1_13" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class="form__tooltip">We need your country of business to know from what office to contact you</div></li></ul></div><div class="formrow formrow__company"><ul><li></li><li id="field_1_2" class="gfield gfield--type-text gfield--input-type-text company gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label' for='input_1_2'>Company<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_text'><input name='input_2' id='input_1_2' type='text' value="" class='medium' maxlength='80'    aria-required="true" aria-invalid="false"   /></div></li><li id="field_1_10" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class="form__tooltip">We need your company name to know your background and how we can use our experience to help you</div></li></ul></div><div class="formrow formrow__message"><ul><li></li><li id="field_1_17" class="gfield gfield--type-textarea gfield--input-type-textarea message gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label' for='input_1_17'>Message<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class='ginput_container ginput_container_textarea'><textarea name='input_17' id='input_1_17' class='textarea medium'   maxlength='5000'  aria-required="true" aria-invalid="false"   rows='10' cols='50'></textarea></div></li><li id="field_1_14" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ></li></ul></div><div class="formrow formrow__attach"><div class="atachfile"><ul><li></li><li id="field_1_7" class="gfield gfield--type-fileupload gfield--input-type-fileupload uploadfile field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label' for='input_1_7'>Attach file</label><div class='ginput_container ginput_container_fileupload'><input type='hidden' name='MAX_FILE_SIZE' value="10485760" /><input name='input_7' id='input_1_7' type='file' class='medium' aria-describedby="gfield_upload_rules_1_7" onchange='javascript:gformValidateFileSize( this, 10485760 );'  /><span class='gfield_description gform_fileupload_rules' id='gfield_upload_rules_1_7'>Accepted file types: jpg, gif, png, pdf, doc, docx, xls, xlsx, ppt, pptx, Max. file size: 10 MB.</span><div class='gfield_description validation_message gfield_validation_message validation_message--hidden-on-empty' id='live_validation_message_1_7'></div> </div></li><li id="field_1_15" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ></li></ul><div class="atachfile_cont"><p class="atachfile_link">Add an attachment</p> <span class="atachfile_text">(jpg, gif, png, pdf, doc, docx, xls, xlsx, ppt, pptx, PNG)</span></div><p class="atachfile_filename"></p><span class="atachfile_remove"></span></div></div><div class="formrow--checkbox"><ul><li></li><li id="field_1_21" class="gfield gfield--type-checkbox gfield--type-choice gfield--input-type-checkbox field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><label class='gfield_label gform-field-label screen-reader-text gfield_label_before_complex' ></label><div class='ginput_container ginput_container_checkbox'><ul class='gfield_checkbox' id='input_1_21'><li class='gchoice gchoice_1_21_1'>
								<input class='gfield-choice-input' name='input_21.1' type='checkbox'  value="I want to receive news and updates once in a while"  id='choice_1_21_1'   />
								<label for='choice_1_21_1' id='label_1_21_1' class='gform-field-label gform-field-label--type-inline'>I want to receive news and updates once in a while</label>
							</li></ul></div></li><li id="field_1_20" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ></li></ul></div><div class="form__info">
                We will add your info to our CRM for contacting you regarding your request. For more info please consult our <a href="/privacy-policy">privacy policy</a>
            </div></div><ul><li></li><li id="field_1_18" class="gfield gfield--type-hidden gfield--input-type-hidden gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='correct-referer-url ginput_container ginput_container_text'><input name='input_18' id='input_1_18' type='hidden' class='correct-referer-url gform_hidden'  aria-invalid="false" value="" /></div></li><li id="field_1_19" class="gfield gfield--type-hidden gfield--input-type-hidden gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='customuserid ginput_container ginput_container_text'><input name='input_19' id='input_1_19' type='hidden' class='customuserid gform_hidden'  aria-invalid="false" value="" /></div></li><li id="field_1_22" class="gfield gfield--type-hidden gfield--input-type-hidden gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='currentdate ginput_container ginput_container_text'><input name='input_22' id='input_1_22' type='hidden' class='currentdate gform_hidden'  aria-invalid="false" value="" /></div></li><li id="field_1_23" class="gfield gfield--type-hidden gfield--input-type-hidden gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='datemonthago ginput_container ginput_container_text'><input name='input_23' id='input_1_23' type='hidden' class='datemonthago gform_hidden'  aria-invalid="false" value="" /></div></li><li id="field_1_24" class="gfield gfield--type-hidden gfield--input-type-hidden gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='firstname ginput_container ginput_container_text'><input name='input_24' id='input_1_24' type='hidden' class='firstname gform_hidden'  aria-invalid="false" value="" /></div></li><li id="field_1_25" class="gfield gfield--type-hidden gfield--input-type-hidden gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='lastname ginput_container ginput_container_text'><input name='input_25' id='input_1_25' type='hidden' class='lastname gform_hidden'  aria-invalid="false" value="" /></div></li><li id="field_1_26" class="gfield gfield--type-hidden gfield--input-type-hidden gfield--width-full gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='submitted-on-a-page ginput_container ginput_container_text'><input name='input_26' id='input_1_26' type='hidden' class='submitted-on-a-page gform_hidden'  aria-invalid="false" value="" /></div></li><li id="field_1_27" class="gfield gfield--type-hidden gfield--input-type-hidden gfield--width-full gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='user-ip-address ginput_container ginput_container_text'><input name='input_27' id='input_1_27' type='hidden' class='user-ip-address gform_hidden'  aria-invalid="false" value="175.100.79.198" /></div></li><li id="field_1_999" class="gfield gfield--type-hidden eleks-chat-session-id-field gform_hidden field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"  ><div class='chat-session-id ginput_container ginput_container_text'><input name='input_999' id='input_1_999' type='hidden' class='chat-session-id gform_hidden'  aria-invalid="false" value="" /></div></li></ul></div>
        <div class='gform-footer gform_footer top_label'> <input type='submit' id='gform_submit_button_1' class='gform_button button' onclick='gform.submission.handleButtonClick(this);' data-submission-type='submit' value="Contact us"  /> <input type='hidden' name='gform_ajax' value="form_id=1&amp;title=&amp;description=&amp;tabindex=0&amp;theme=legacy&amp;hash=036d8bc2de2c65c71131ae920675665d" />
            <input type='hidden' class='gform_hidden' name='gform_submission_method' data-js='gform_submission_method_1' value="iframe" />
            <input type='hidden' class='gform_hidden' name='gform_theme' data-js='gform_theme_1' id='gform_theme_1' value="legacy" />
            <input type='hidden' class='gform_hidden' name='gform_style_settings' data-js='gform_style_settings_1' id='gform_style_settings_1' value="" />
            <input type='hidden' class='gform_hidden' name='is_submit_1' value="1" />
            <input type='hidden' class='gform_hidden' name='gform_submit' value="1" />
            
            <input type='hidden' class='gform_hidden' name='gform_currency' data-currency='USD' value="Dkks7qOlDb+Zer4a7uHzXlHCVVTE3Sm/6npN+pZfXxrAE6j7MkpwE12iTrx4XAgcK/R93N/TvzBu4hGV3ypnb32iDYCaV717x8JYODqpxYWeZhw=" />
            <input type='hidden' class='gform_hidden' name='gform_unique_id' value="" />
            <input type='hidden' class='gform_hidden' name='state_1' value="WyJbXSIsIjNlOTlhNWE2YTg1NDNmZTc0MGEzM2VkOThiZmI4OGRjIl0=" />
            <input type='hidden' autocomplete='off' class='gform_hidden' name='gform_target_page_number_1' id='gform_target_page_number_1' value="0" />
            <input type='hidden' autocomplete='off' class='gform_hidden' name='gform_source_page_number_1' id='gform_source_page_number_1' value="1" />
            <input type='hidden' name='gform_field_values' value="" />
            
        </div>
                        <p style="display: none !important;" class="akismet-fields-container" data-prefix="ak_"><label>&#916;<textarea name="ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="ak_js" value="106"/>
</p></form>
                        </div>
		                <iframe style='display:none;width:0px;height:0px;' src='about:blank' name='gform_ajax_frame_1' id='gform_ajax_frame_1' title="This iframe contains the logic required to handle Ajax powered Gravity Forms."></iframe>
		                
                </div>
            </div>
                                    <div class="col-testimonial">
                <div class="testimonial-new__title title-h5">What our customers say</div>
                <div class="testimonial-new__slider description-n">
                                            <div class="testimonial-new" data-origin="bottom" data-distance="50px">
                            <div class="testimonial-new__text">
                                <p>The breadth of knowledge and understanding that Glenn Tech has within its walls allows us to leverage that expertise to make superior deliverables for our customers. When you work with Glenn Tech, you are working with the top 1% of the aptitude and engineering excellence of the whole country.</p>
                            </div>
                            <div class="testimonial-new__author">
                                <img width="240" height="240" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20240%20240'%3E%3C/svg%3E" class="img-fluid testimonial-new__photo wp-post-image" alt="sam fleming" decoding="async" data-lazy-srcset="https://eleks.com/wp-content/uploads/sam-fleming.jpg 240w, https://eleks.com/wp-content/uploads/sam-fleming-150x150.jpg 150w" data-lazy-sizes="(max-width: 240px) 100vw, 240px" data-lazy-src="https://eleks.com/wp-content/uploads/sam-fleming.jpg" /><noscript><img width="240" height="240" src="https://eleks.com/wp-content/uploads/sam-fleming.jpg" class="img-fluid testimonial-new__photo wp-post-image" alt="sam fleming" decoding="async" srcset="https://eleks.com/wp-content/uploads/sam-fleming.jpg 240w, https://eleks.com/wp-content/uploads/sam-fleming-150x150.jpg 150w" sizes="(max-width: 240px) 100vw, 240px" /></noscript>                                <div>
                                    <div class="testimonial-new__author-name">Sam Fleming</div>
                                    <div class="testimonial-new__position">President, Fleming-AOD</div>
                                </div>
                            </div>
                        </div>
                                            <div class="testimonial-new" data-origin="bottom" data-distance="50px">
                            <div class="testimonial-new__text">
                                <p>Right from the start, we really liked Glenn Tech&#8217; commitment and engagement. They came to us with their best people to try to understand our context, our business idea, and developed the first prototype with us. They were very professional and very customer oriented. I think, without Glenn Tech it probably would not have been possible to have such a successful product in such a short period of time.</p>
                            </div>
                            <div class="testimonial-new__author">
                                <img width="160" height="160" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20160%20160'%3E%3C/svg%3E" class="img-fluid testimonial-new__photo wp-post-image" alt="Caroline Aumeran" decoding="async" data-lazy-srcset="https://eleks.com/wp-content/uploads/caroline-aumeran-1.jpg 160w, https://eleks.com/wp-content/uploads/caroline-aumeran-1-150x150.jpg 150w" data-lazy-sizes="(max-width: 160px) 100vw, 160px" data-lazy-src="https://eleks.com/wp-content/uploads/caroline-aumeran-1.jpg" /><noscript><img width="160" height="160" src="https://eleks.com/wp-content/uploads/caroline-aumeran-1.jpg" class="img-fluid testimonial-new__photo wp-post-image" alt="Caroline Aumeran" decoding="async" srcset="https://eleks.com/wp-content/uploads/caroline-aumeran-1.jpg 160w, https://eleks.com/wp-content/uploads/caroline-aumeran-1-150x150.jpg 150w" sizes="(max-width: 160px) 100vw, 160px" /></noscript>                                <div>
                                    <div class="testimonial-new__author-name">Caroline Aumeran</div>
                                    <div class="testimonial-new__position">Head of Product Development, appygas</div>
                                </div>
                            </div>
                        </div>
                                            <div class="testimonial-new" data-origin="bottom" data-distance="50px">
                            <div class="testimonial-new__text">
                                <p>Glenn Tech has been involved in the development of a number of our consumer-facing websites and mobile applications that allow our customers to easily track their shipments, get the information they need as well as stay in touch with us. We&#8217;ve appreciated the level of Glenn Tech&#8217; expertise, responsiveness and attention to details.</p>
                            </div>
                            <div class="testimonial-new__author">
                                <img width="256" height="256" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20256%20256'%3E%3C/svg%3E" class="img-fluid testimonial-new__photo wp-post-image" alt="samer-min" decoding="async" data-lazy-srcset="https://eleks.com/wp-content/uploads/samer-min.jpg 256w, https://eleks.com/wp-content/uploads/samer-min-150x150.jpg 150w" data-lazy-sizes="(max-width: 256px) 100vw, 256px" data-lazy-src="https://eleks.com/wp-content/uploads/samer-min.jpg" /><noscript><img width="256" height="256" src="https://eleks.com/wp-content/uploads/samer-min.jpg" class="img-fluid testimonial-new__photo wp-post-image" alt="samer-min" decoding="async" srcset="https://eleks.com/wp-content/uploads/samer-min.jpg 256w, https://eleks.com/wp-content/uploads/samer-min-150x150.jpg 150w" sizes="(max-width: 256px) 100vw, 256px" /></noscript>                                <div>
                                    <div class="testimonial-new__author-name">Samer Awajan</div>
                                    <div class="testimonial-new__position">CTO, Aramex</div>
                                </div>
                            </div>
                        </div>
                                    </div>
                <div class="testimonial-new__info">
                    <div class="testimonial-new__timeline">
                        <div id="testimonial-new__timeline-line" class="testimonial-new__timeline-line"></div>
                    </div>
                    <div class="testimonial-new__arrows">
                        <svg class="testimonial-new__arrow testimonial-new__arrow--prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="https://www.w3.org/2000/svg">
                            <rect class="testimonial-new__arrow-circle" x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#1E1D28"/>
                            <path class="testimonial-new__arrow-icon" d="M20 12L12 20M20 28L12 20M12 20L28 20" stroke="#1E1D28"/>
                        </svg>
                        <svg class="testimonial-new__arrow testimonial-new__arrow--next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="https://www.w3.org/2000/svg">
                            <rect class="testimonial-new__arrow-circle" x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#1E1D28"/>
                            <path class="testimonial-new__arrow-icon" d="M20 28L28 20M20 12L28 20M28 20L12 20" stroke="#1E1D28"/>
                        </svg>
                    </div>
                </div>
            </div>
                    </div>
    </div>
</section>
</main>
<footer data-wpr-lazyrender="1" id="footer" class="footer--new">
    <div  class="container-n">
        <div  class="footer--new__row">
            <div class="footer--new__col-1">
                <div class="footer--new__logo-wrap">
                    <a class="footer--new__logo" href="/" aria-label="Logo">
    <img src="/logo.png" alt="Glenn Tech Logo" style="height: 29px; width: auto; display: block; object-fit: contain;" />
</a>
                </div>
                <div class="footer--new__address-wrap">
                    <div class="footer--new__address">
                        <div class="footer--new__address-title">Glenn Tech' office near you:</div>
                        <div class="footer--new__address-text footer__closest-office">Viru väljak 2, Tallinn, Harju maakond, 10111</div>
                        <a href="/contact-us" class="footer--new__address-link link-n"><span class="link-n__text">Our offices worldwide</span></a>
                    </div>
                    <div class="footer--new__address">
                        <div class="footer--new__address-title">Glenn Tech, Inc.</div>
                        <div class="footer--new__address-text">
                            CAGE/NCAGE: 7W6F0 <br>
                            SAM Unique Entity ID: NQ9PRQMMSJG4
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer--new__col-2">
                <div class="footer--new__menuWrapper"><ul id="menu-footer-menu-new" class="footer--new__menu"><li id="menu-item-86644" class="title-h4 services menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86644"><span class="nav-link"><div class="menu-title">Services</div><div class="dropdown-menu-opener" tabindex="0"></div></span>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-86645" class="submenu-title menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86645"><span class="dropdown-item"><div class="menu-title">Engineering</div></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-86650" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86650"><a href="/services/poc-development" class="dropdown-item"><div class="menu-title">PoC development</div></a></li>
		<li id="menu-item-86646" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86646"><a href="/services/custom-application-development" class="dropdown-item"><div class="menu-title">Application development</div></a></li>
		<li id="menu-item-86649" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86649"><a href="/services/enterprise-applications" class="dropdown-item"><div class="menu-title">Enterprise applications</div></a></li>
		<li id="menu-item-99979" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-99979"><a href="/services/legacy-software-modernization-services" class="dropdown-item"><div class="menu-title">Legacy software modernization</div></a></li>
		<li id="menu-item-98481" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-98481"><a href="/services/cloud-computing" class="dropdown-item"><div class="menu-title">Cloud computing</div></a></li>
	</ul></div>
</li>
	<li id="menu-item-86652" class="submenu-title menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86652"><span class="dropdown-item"><div class="menu-title">Data &#038; AI</div></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-86657" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86657"><a href="/services/data-science-services" class="dropdown-item"><div class="menu-title">Data science</div></a></li>
		<li id="menu-item-98482" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-98482"><a href="/services/data-engineering-solutions" class="dropdown-item"><div class="menu-title">Data engineering</div></a></li>
		<li id="menu-item-86653" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86653"><a href="/services/ai-development-services" class="dropdown-item"><div class="menu-title">Artificial intelligence</div></a></li>
		<li id="menu-item-86659" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86659"><a href="/services/generative-ai" class="dropdown-item"><div class="menu-title">Generative AI</div></a></li>
		<li id="menu-item-86662" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86662"><a href="/services/data-science-services/machine-learning-services" class="dropdown-item"><div class="menu-title">Machine learning</div></a></li>
		<li id="menu-item-86655" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86655"><a href="/services/conversational-ai-solutions" class="dropdown-item"><div class="menu-title">Conversational AI</div></a></li>
		<li id="menu-item-86660" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86660"><a href="/services/intelligent-automation" class="dropdown-item"><div class="menu-title">Intelligent automation</div></a></li>
		<li id="menu-item-86661" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86661"><a href="/services/mlops" class="dropdown-item"><div class="menu-title">MLOps</div></a></li>
		<li id="menu-item-86654" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86654"><a href="/services/business-intelligence" class="dropdown-item"><div class="menu-title">Business intelligence</div></a></li>
		<li id="menu-item-86656" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86656"><a href="/services/data-platforms" class="dropdown-item"><div class="menu-title">Data platforms</div></a></li>
	</ul></div>
</li>
	<li id="menu-item-86663" class="submenu-title menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86663"><span class="dropdown-item"><div class="menu-title">Advisory</div></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-86666" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86666"><a href="/services/product-design" class="dropdown-item"><div class="menu-title">Product and service design</div></a></li>
		<li id="menu-item-86665" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86665"><a href="/services/cyber-security-services" class="dropdown-item"><div class="menu-title">Cyber security</div></a></li>
		<li id="menu-item-86668" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86668"><a href="/services/technical-feasibility-study-rd-engineering" class="dropdown-item"><div class="menu-title">Technical feasibility study</div></a></li>
		<li id="menu-item-86667" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86667"><a href="/services/sustainability-consulting" class="dropdown-item"><div class="menu-title">Sustainability consulting</div></a></li>
		<li id="menu-item-86664" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86664"><a href="/services/agile-transformation-consulting" class="dropdown-item"><div class="menu-title">Agile transformation</div></a></li>
		<li id="menu-item-98483" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-98483"><a href="/services/ai-consulting-services" class="dropdown-item"><div class="menu-title">AI consulting</div></a></li>
	</ul></div>
</li>
	<li id="menu-item-86669" class="submenu-title menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86669"><span class="dropdown-item"><div class="menu-title">Optimisation</div></span>
	<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
		<li id="menu-item-89019" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-89019"><a href="/services/finops-cloud-services" class="dropdown-item"><div class="menu-title">FinOps</div></a></li>
		<li id="menu-item-86671" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86671"><a href="/services/software-audit" class="dropdown-item"><div class="menu-title">Software audit</div></a></li>
		<li id="menu-item-86670" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86670"><a href="/services/quality-assurance-and-testing-services" class="dropdown-item"><div class="menu-title">Quality assurance</div></a></li>
		<li id="menu-item-86672" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-86672"><a href="/services/it-technical-support-maintenance-services" class="dropdown-item"><div class="menu-title">Support</div></a></li>
	</ul></div>
</li>
</ul></div>
</li>
<li id="menu-item-86673" class="title-h4 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86673"><span class="nav-link"><div class="menu-title">Expertise</div><div class="dropdown-menu-opener" tabindex="0"></div></span>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-86675" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-86675"><a href="/expertise/devops-consulting" class="dropdown-item"><div class="menu-title">DevOps</div></a></li>
	<li id="menu-item-86681" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-86681"><a href="/expertise/vr-software-development" class="dropdown-item"><div class="menu-title">VR/AR/MR</div></a></li>
	<li id="menu-item-86677" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-86677"><a href="/expertise/iot-software-development" class="dropdown-item"><div class="menu-title">Internet of Things</div></a></li>
	<li id="menu-item-86678" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-86678"><a href="/expertise/market-research-services" class="dropdown-item"><div class="menu-title">Market research</div></a></li>
	<li id="menu-item-86674" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-86674"><a href="/expertise/customer-experience-consulting" class="dropdown-item"><div class="menu-title">Customer experience</div></a></li>
	<li id="menu-item-86676" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-86676"><a href="/expertise/enterprise-digital-transformation" class="dropdown-item"><div class="menu-title">Digital enterprise</div></a></li>
	<li id="menu-item-86679" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-86679"><a href="/expertise/nearshore-software-development-company" class="dropdown-item"><div class="menu-title">Nearshore development</div></a></li>
	<li id="menu-item-86680" class="menu-item menu-item-type-post_type menu-item-object-expertise menu-item-86680"><a href="/expertise/ux-consulting" class="dropdown-item"><div class="menu-title">UX consulting</div></a></li>
	<li id="menu-item-86703" class="menu-item menu-item-type-post_type menu-item-object-types-of-software menu-item-86703"><a href="/types-of-software-development" class="dropdown-item"><div class="menu-title">Software development</div></a></li>
</ul></div>
</li>
<li id="menu-item-86682" class="title-h4 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86682"><span class="nav-link"><div class="menu-title">Industries</div><div class="dropdown-menu-opener" tabindex="0"></div></span>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-86686" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86686"><a href="/industries/fintech-solutions" class="dropdown-item"><div class="menu-title">Fintech</div></a></li>
	<li id="menu-item-102247" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-102247"><a href="/industries/pharma-software" class="dropdown-item"><div class="menu-title">Pharma</div></a></li>
	<li id="menu-item-86688" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86688"><a href="/industries/healthcare-software" class="dropdown-item"><div class="menu-title">Healthcare</div></a></li>
	<li id="menu-item-86685" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86685"><a href="/industries/energy" class="dropdown-item"><div class="menu-title">Energy</div></a></li>
	<li id="menu-item-86687" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86687"><a href="/industries/government-software-solutions" class="dropdown-item"><div class="menu-title">Government</div></a></li>
	<li id="menu-item-86689" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86689"><a href="/industries/insurance-software-solutions" class="dropdown-item"><div class="menu-title">Insurance</div></a></li>
	<li id="menu-item-86692" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86692"><a href="/industries/retail-software-development" class="dropdown-item"><div class="menu-title">Retail</div></a></li>
	<li id="menu-item-86690" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86690"><a href="/industries/logistics-software-solutions" class="dropdown-item"><div class="menu-title">Logistics</div></a></li>
	<li id="menu-item-86684" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86684"><a href="/industries/automotive-software-engineering" class="dropdown-item"><div class="menu-title">Automotive</div></a></li>
	<li id="menu-item-86683" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86683"><a href="/industries/software-development-agriculture" class="dropdown-item"><div class="menu-title">Agriculture</div></a></li>
	<li id="menu-item-86691" class="menu-item menu-item-type-post_type menu-item-object-industries menu-item-86691"><a href="/industries/media-entertainment-software-development" class="dropdown-item"><div class="menu-title">Media &#038; Entertainment</div></a></li>
</ul></div>
</li>
<li id="menu-item-86693" class="title-h4 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86693"><span class="nav-link"><div class="menu-title">Company</div><div class="dropdown-menu-opener" tabindex="0"></div></span>
<div class="dropdown-menu__wrapper"><ul class="dropdown-menu">
	<li id="menu-item-86695" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86695"><a href="/about-glanntech" class="dropdown-item"><div class="menu-title">About us</div></a></li>
	<li id="menu-item-86701" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86701"><a href="/services" class="dropdown-item"><div class="menu-title">Services</div></a></li>
	<li id="menu-item-86696" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86696"><a href="/about-glanntech/how-we-work" class="dropdown-item"><div class="menu-title">How we work</div></a></li>
	<li id="menu-item-86697" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86697"><a href="/about-glanntech/awards-partners" class="dropdown-item"><div class="menu-title">Awards and partners</div></a></li>
	<li id="menu-item-104486" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104486"><a href="/trust-center" class="dropdown-item"><div class="menu-title">Glenn Tech’ Trust Centre</div></a></li>
	<li id="menu-item-86698" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86698"><a href="/our-clients" class="dropdown-item"><div class="menu-title">Our clients</div></a></li>
	<li id="menu-item-86699" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86699"><a href="/case-studies" class="dropdown-item"><div class="menu-title">Case studies</div></a></li>
	<li id="menu-item-86700" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86700"><a href="/blog" class="dropdown-item"><div class="menu-title">Blog</div></a></li>
	<li id="menu-item-86702" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-86702"><a target="_blank" href="https://careers.eleks.com/" class="dropdown-item"><div class="menu-title">Careers</div></a></li>
	<li id="menu-item-86694" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86694"><a href="/contact-us" class="dropdown-item"><div class="menu-title">Contact us</div></a></li>
</ul></div>
</li>
</ul></div>            </div>
        </div>
    </div>
    <div  class="footer--new__info">
        <div  class="container-n">
            <div class="footer--new__row">
                <div class="footer--new__social">
                    <ul class="social">
                        <li class="social__item">
                            <a class="social__link" href="https://www.facebook.com/ELEKS.Software" target="_blank" aria-label="Glenn Tech on Facebook" rel="nofollow noopener">
                                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.38917 14.8396V7.58559H7.3916L7.65697 5.08581H5.38917L5.39257 3.83464C5.39257 3.18266 5.45452 2.83332 6.39095 2.83332H7.64279V0.333252H5.64008C3.23449 0.333252 2.38779 1.54592 2.38779 3.58523V5.08609H0.888306V7.58587H2.38779V14.8396H5.38917Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://x.com/ELEKSSoftware" target="_blank" aria-label="Glenn Tech on X" rel="nofollow noopener">
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1171 0.333252H14.379L9.43744 5.98111L15.2508 13.6666H10.699L7.13385 9.00539L3.05453 13.6666H0.791282L6.07675 7.62556L0.5 0.333252H5.16735L8.38991 4.59376L12.1171 0.333252ZM11.3232 12.3127H12.5766L4.48632 1.61599H3.14137L11.3232 12.3127Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://www.linkedin.com/company/eleks/" target="_blank" aria-label="Glenn Tech on LinkedIn" rel="nofollow noopener">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28908 1.90142C4.28908 2.77314 3.63291 3.47067 2.57932 3.47067H2.56001C1.54558 3.47067 0.889771 2.77314 0.889771 1.90142C0.889771 1.01125 1.56555 0.333252 2.59923 0.333252C3.63291 0.333252 4.26947 1.01125 4.28908 1.90142ZM4.08962 4.70988V13.7886H1.06799V4.70988H4.08962ZM14.9865 13.7886L14.9866 8.58311C14.9866 5.79452 13.4959 4.49666 11.5076 4.49666C9.9033 4.49666 9.18503 5.37785 8.78399 5.99602V4.71009H5.762C5.80183 5.56199 5.762 13.7888 5.762 13.7888H8.78399V8.71851C8.78399 8.44718 8.8036 8.1765 8.8835 7.98224C9.10188 7.44017 9.59911 6.87895 10.4339 6.87895C11.5277 6.87895 11.965 7.71145 11.965 8.93145V13.7886H14.9865Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer--new__submenuWrapper"><ul id="menu-footer-submenu" class="footer--new__submenu"><li id="menu-item-9762" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9762"><a href="/terms-of-use">Terms of Use</a></li>
<li id="menu-item-9763" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-9763"><a rel="privacy-policy" href="/privacy-policy">Privacy policy</a></li>
<li id="menu-item-12432" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-12343 current_page_item menu-item-12432"><a href="/site-map" aria-current="page">Site Map</a></li>
</ul></div>                <div class="footer--new__lang lang--new"><div class="lang--new__item selected">
                        <span tabindex="0" class="lang--new__link">en</span></div><ul class="lang--new__items"><li class="lang--new__item">
                            <a class="lang--new__link" href="/de/seitenverzeichnis">de</a></li><li class="lang--new__item">
                            <a class="lang--new__link" href="/ar/site-map">ar</a></li><li class="lang--new__item">
                            <a class="lang--new__link" href="/ja/site-map">ja</a></li></ul></div>                <div class="footer--new__copyright">&copy; <span>1991-2026</span> Glenn Tech, All rights reserved</div>
            </div>
        </div>
    </div>
</footer>

<div  class="popup popup--video">
    <div  class="popup__bg darken"></div>
    <div  class="popup__close"></div>
    <div  class="popup__content">
        <div  class="loader"></div>
        <iframe id="videoIframe" width="1024" height="576" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" src=""></iframe>
    </div>
</div>

<svg tabindex="0" class="scroll-to-top" aria-label="Scroll To Top" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.25 12H25C20.5817 12 17 15.5817 17 20V36C17 40.4183 20.5817 44 25 44H31C35.4183 44 39 40.4183 39 36V20C39 15.5817 35.4183 12 31 12H29.75" stroke="#0045E6"/>
    <path class="scroll-to-top__arrow" d="M32 28L28 24M24 28L28 24M28 24L28 32" stroke="#0045E6"/>
</svg>

					<!-- Start of Async HubSpot Analytics Code -->
					
					<!-- End of Async HubSpot Analytics Code -->
				
































<!-- ═══════════════════════════════════════════════════════
     Chat Overlay / Popup
     Trigger lives inside the overlay so it slides with the panel.
     position:absolute; bottom:100% keeps it flush above the panel top.
═════════════════════════════════════════════════════════ -->
<div
  id="eleks-chat-overlay"
  class="eleks-chat-overlay"
  role="dialog"
  aria-modal="true"
  aria-label="AI Guide Chat"
>

  <!-- Trigger: position:absolute; bottom:100% — sits above panel top, slides with it -->
  <!-- Always small (.is-small); JS removes it temporarily for the intro animation -->
  <button
    id="eleks-chat-trigger"
    class="eleks-chat-trigger is-small"
    aria-label="Open Glenn Tech AI Guide"
  >
    <span class="eleks-chat-trigger__headline" aria-hidden="true">Find your solution faster</span>
    <svg class="eleks-chat-trigger__arrow" width="9" height="8" viewBox="0 0 9 8" fill="none">
      <path d="M8.35156 3L4.35156 7L0.351564 3" stroke="currentColor"/>
    </svg>
    <span class="eleks-chat-trigger__row">
      <span class="eleks-chat-trigger__text">AI Guide</span>
      <svg class="eleks-chat-trigger__icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="eleks-chat-icon-gradient" x1="1" y1="1" x2="0.175" y2="-0.166" gradientUnits="objectBoundingBox">
            <stop offset="0%" style="stop-color: var(--eleks-icon-grad-start, #fff)"/>
            <stop offset="100%" style="stop-color: var(--eleks-icon-grad-end, #fff)"/>
          </linearGradient>
        </defs>
        <path d="M8.59766 0.339125C8.74154 -0.113042 9.38135 -0.113042 9.52523 0.339125L10.0016 1.83627C10.4803 3.34084 11.6592 4.51968 13.1637 4.99841L14.6609 5.47477C15.113 5.61865 15.113 6.25846 14.6609 6.40234L13.1637 6.8787C11.6592 7.35743 10.4803 8.53627 10.0016 10.0408L9.52523 11.538C9.38135 11.9902 8.74154 11.9902 8.59766 11.538L8.1213 10.0408C7.64257 8.53627 6.46373 7.35743 4.95916 6.8787L3.46202 6.40234C3.00985 6.25846 3.00985 5.61865 3.46202 5.47477L4.95916 4.99841C6.46373 4.51968 7.64257 3.34084 8.1213 1.83627L8.59766 0.339125Z" fill="url(#eleks-chat-icon-gradient)"/>
        <path d="M2.27801 9.84888C2.4348 9.42516 3.03411 9.42516 3.1909 9.84888L3.25436 10.0204C3.55013 10.8197 4.18033 11.4499 4.97963 11.7456L5.15112 11.8091C5.57484 11.9659 5.57484 12.5652 5.15112 12.722L4.97963 12.7854C4.18033 13.0812 3.55013 13.7114 3.25436 14.5107L3.1909 14.6822C3.03411 15.1059 2.4348 15.1059 2.27801 14.6822L2.21455 14.5107C1.91879 13.7114 1.28859 13.0812 0.489284 12.7854L0.317792 12.722C-0.10593 12.5652 -0.105931 11.9659 0.317792 11.8091L0.489284 11.7456C1.28858 11.4499 1.91878 10.8197 2.21455 10.0204L2.27801 9.84888Z" fill="url(#eleks-chat-icon-gradient)"/>
      </svg>
    </span>
  </button>

  <div  class="eleks-chat-popup">

    <!-- Controls -->
    <div  class="eleks-chat-controls">
      <!-- Minimize (collapse to bottom bar) — desktop only, shown by JS when active -->
      <button id="eleks-chat-minimize" class="eleks-chat-btn-icon" aria-label="Minimize">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M14 7H9M9 7V2M9 7L15 1" stroke="currentColor"/>
          <path d="M2 9H7M7 9V14M7 9L1 15" stroke="currentColor"/>
        </svg>
      </button>
      <!-- Expand — desktop only, shown by JS when collapsed -->
      <button id="eleks-chat-expand" class="eleks-chat-btn-icon" aria-label="Expand">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 1H15M15 1V6M15 1L9 7" stroke="currentColor"/>
          <path d="M6 15H1M1 15V10M1 15L7 9" stroke="currentColor"/>
        </svg>
      </button>
      <button id="eleks-chat-close" class="eleks-chat-btn-icon" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2.34435 13.6569L8.00121 8M13.6581 2.34315L8.00121 8M8.00121 8L2.34435 2.34315M8.00121 8L13.6581 13.6569" stroke="currentColor"/>
        </svg>
      </button>
    </div>

    <!-- ── Start Screen ─────────────────────────────── -->
    <!-- Outer: position:relative + overflow:hidden. ::before/::after fade overlays live here
         so they stay fixed (don't scroll with content). -->
    <div  id="eleks-chat-start" class="eleks-chat-start">

      <!-- Inner: the actual scroll container. JS watches its scroll to toggle
           has-fade-top / has-fade-bottom classes on the outer #eleks-chat-start. -->
      <div class="eleks-chat-start__scroll eleks-chat-content pl-big">

        <h2 class="eleks-chat-start__title title-h2">Share your goal —<br />
let&#039;s see how we can help.</h2>

        <div class="eleks-chat-input-wrap">
          <textarea
            id="eleks-chat-input"
            class="eleks-chat-input"
            rows="1"
            placeholder="Describe your project, ask about a specific technology, or request a case study..."
            maxlength="500"
            aria-label="Your message"
          ></textarea>
          <div class="eleks-chat-input-row">
                        <button id="eleks-chat-send" class="eleks-chat-send" disabled aria-label="Send">
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M0 11.8564L2 5.92772L5.18259e-07 0L12 5.92772L0 11.8564ZM1.71777 1.96386L2.94727 5.60838L3.05566 5.92772L1.71777 9.89157L9.74121 5.92772L1.71777 1.96386Z" fill="currentColor"/>
                <path d="M5.5 5.4282C5.77614 5.4282 6 5.65206 6 5.9282C6 6.20435 5.77614 6.4282 5.5 6.4282H2.5C2.22386 6.4282 2 6.20386 2 5.92772C2 5.65157 2.22386 5.4282 2.5 5.4282H5.5Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

                <div class="eleks-chat-popular">
          <div class="eleks-chat-popular__label title-h5">The most popular requests</div>
          <div id="eleks-chat-popular-list" class="eleks-chat-popular__cards">
                                          <button class="eleks-chat-popular__card">How long would it take to add AI to our existing ERP system?</button>
                                                        <button class="eleks-chat-popular__card">Have you built AI solutions before and can I see some examples?</button>
                                                        <button class="eleks-chat-popular__card">What security certifications do you have?</button>
                                    </div>
          <div class="eleks-chat-popular__scroll-track">
            <div class="eleks-chat-popular__scroll-progress"></div>
          </div>
        </div>
        
        <div class="eleks-chat-disclaimer">
          AI Guide may make mistakes, so double-check outputs.        </div>

      </div><!-- /.eleks-chat-start__scroll -->
    </div><!-- /#eleks-chat-start -->

    <!-- ── Active Chat Screen ───────────────────────── -->
    <div  id="eleks-chat-active" class="eleks-chat-active  eleks-chat-content pl-big">

      <!-- Left: messages -->
      <div class="eleks-chat-messages-panel">
        <!-- Wrap provides position:relative for ::before/::after fade overlays -->
        <div id="eleks-chat-messages-wrap" class="eleks-chat-messages-wrap">
          <div id="eleks-chat-messages" class="eleks-chat-messages" role="log" aria-live="polite" aria-label="Chat messages"></div>
        </div>

        <!-- Footer: input + disclaimer — sticky at bottom on mobile -->
        <div class="eleks-chat-active-footer">

          <!-- Active input: same structure as start screen -->
          <div class="eleks-chat-active-input">
            <div class="eleks-chat-input-wrap">
              <textarea
                id="eleks-chat-input-active"
                class="eleks-chat-input"
                rows="1"
                placeholder="Continue the conversation..."
                maxlength="500"
                aria-label="Your message"
              ></textarea>
              <div class="eleks-chat-input-row">
                                <button id="eleks-chat-send-active" class="eleks-chat-send" disabled aria-label="Send message">
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M0 11.8564L2 5.92772L5.18259e-07 0L12 5.92772L0 11.8564ZM1.71777 1.96386L2.94727 5.60838L3.05566 5.92772L1.71777 9.89157L9.74121 5.92772L1.71777 1.96386Z" fill="currentColor"/>
                    <path d="M5.5 5.4282C5.77614 5.4282 6 5.65206 6 5.9282C6 6.20435 5.77614 6.4282 5.5 6.4282H2.5C2.22386 6.4282 2 6.20386 2 5.92772C2 5.65157 2.22386 5.4282 2.5 5.4282H5.5Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="eleks-chat-disclaimer">
            AI Guide may make mistakes, so double-check outputs.          </div>

        </div><!-- /.eleks-chat-active-footer -->
      </div><!-- /.eleks-chat-messages-panel -->

      <!-- Right: recommendations -->
      <aside id="eleks-chat-rec-panel" class="eleks-chat-rec-panel" aria-label="Recommended resources">

        <!-- Gray block: header + scrollable list + See more/less -->
        <div class="eleks-chat-rec-panel__body">

          <div id="eleks-chat-rec-title" class="eleks-chat-rec-panel__title">
            Recommended resources          </div>

          <!-- Scroll wrapper: overflow:hidden outer for fade overlays -->
          <div id="eleks-chat-rec-scroll-wrap" class="eleks-chat-rec-panel__scroll-wrap">
            <!-- Actual scroll container -->
            <div id="eleks-chat-rec-scroll" class="eleks-chat-rec-panel__scroll">
              <div id="eleks-chat-rec-list" class="eleks-chat-rec-list"></div>
            </div>
          </div>

          <!-- See more/less + slider nav (shown in collapsed state) -->
           <div class="eleks-chat-rec-panel__more-wrap">
            <button id="eleks-chat-rec-more" type="button" class="eleks-chat-rec-panel__more link-n" style="visibility:hidden;">
              <span class="link-n__text">See more</span>
            </button>
            <div class="eleks-chat-rec-slider-nav">
              <button id="eleks-chat-rec-prev" class="eleks-chat-rec-slider-btn" aria-label="Previous resource">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 10L8 4L2 10" stroke="currentColor"/>
                </svg>
              </button>
              <button id="eleks-chat-rec-next" class="eleks-chat-rec-slider-btn" aria-label="Next resource">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 6L8 12L14 6" stroke="currentColor"/>
                </svg>
              </button>
            </div>
          </div>

        </div><!-- /.eleks-chat-rec-panel__body -->

        <!-- CTA: pinned at very bottom, outside the gray block -->
        <a href="/contact-us" class="eleks-chat-rec-panel__cta btn-n btn-n--gray" target="_blank" rel="noopener">
          <span class="btn-n__text">Connect with an Glenn Tech specialist</span>
        </a>

      </aside><!-- /.eleks-chat-rec-panel -->

    </div><!-- /#eleks-chat-active -->
  </div><!-- /.eleks-chat-popup -->
</div><!-- /#eleks-chat-overlay -->
    
    


<script>
var gform;gform||(document.addEventListener("gform_main_scripts_loaded",function(){gform.scriptsLoaded=!0}),document.addEventListener("gform/theme/scripts_loaded",function(){gform.themeScriptsLoaded=!0}),window.addEventListener("DOMContentLoaded",function(){gform.domLoaded=!0}),gform={domLoaded:!1,scriptsLoaded:!1,themeScriptsLoaded:!1,isFormEditor:()=>"function"==typeof InitializeEditor,callIfLoaded:function(o){return!(!gform.domLoaded||!gform.scriptsLoaded||!gform.themeScriptsLoaded&&!gform.isFormEditor()||(gform.isFormEditor()&&console.warn("The use of gform.initializeOnLoaded() is deprecated in the form editor context and will be removed in Gravity Forms 3.1."),o(),0))},initializeOnLoaded:function(o){gform.callIfLoaded(o)||(document.addEventListener("gform_main_scripts_loaded",()=>{gform.scriptsLoaded=!0,gform.callIfLoaded(o)}),document.addEventListener("gform/theme/scripts_loaded",()=>{gform.themeScriptsLoaded=!0,gform.callIfLoaded(o)}),window.addEventListener("DOMContentLoaded",()=>{gform.domLoaded=!0,gform.callIfLoaded(o)}))},hooks:{action:{},filter:{}},addAction:function(o,r,e,t){gform.addHook("action",o,r,e,t)},addFilter:function(o,r,e,t){gform.addHook("filter",o,r,e,t)},doAction:function(o){gform.doHook("action",o,arguments)},applyFilters:function(o){return gform.doHook("filter",o,arguments)},removeAction:function(o,r){gform.removeHook("action",o,r)},removeFilter:function(o,r,e){gform.removeHook("filter",o,r,e)},addHook:function(o,r,e,t,n){null==gform.hooks[o][r]&&(gform.hooks[o][r]=[]);var d=gform.hooks[o][r];null==n&&(n=r+"_"+d.length),gform.hooks[o][r].push({tag:n,callable:e,priority:t=null==t?10:t})},doHook:function(r,o,e){var t;if(e=Array.prototype.slice.call(e,1),null!=gform.hooks[r][o]&&((o=gform.hooks[r][o]).sort(function(o,r){return o.priority-r.priority}),o.forEach(function(o){"function"!=typeof(t=o.callable)&&(t=window[t]),"action"==r?t.apply(null,e):e[0]=t.apply(null,e)})),"filter"==r)return e[0]},removeHook:function(o,r,t,n){var e;null!=gform.hooks[o][r]&&(e=(e=gform.hooks[o][r]).filter(function(o,r,e){return!!(null!=n&&n!=o.tag||null!=t&&t!=o.priority)}),gform.hooks[o][r]=e)}});
</script>
<script>if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\\/7\\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&nowprocket=1"}else{document.location.href=href.replace("#","&nowprocket=1#")}}}}</script>
<script>(()=>{class RocketLazyLoadScripts{constructor(){this.v="2.0.5",this.userEvents=["keydown","keyup","mousedown","mouseup","mousemove","mouseover","mouseout","touchmove","touchstart","touchend","touchcancel","wheel","click","dblclick","input"],this.attributeEvents=["onblur","onclick","oncontextmenu","ondblclick","onfocus","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onscroll","onsubmit"]}async t(){this.i(),this.o(),/iP(ad|hone)/.test(navigator.userAgent)&&this.h(),this.u(),this.l(this),this.m(),this.k(this),this.p(this),this._(),await Promise.all([this.R(),this.L()]),this.lastBreath=Date.now(),this.S(this),this.P(),this.D(),this.O(),this.M(),await this.C(this.delayedScripts.normal),await this.C(this.delayedScripts.defer),await this.C(this.delayedScripts.async),await this.T(),await this.F(),await this.j(),await this.A(),window.dispatchEvent(new Event("rocket-allScriptsLoaded")),this.everythingLoaded=!0,this.lastTouchEnd&&await new Promise(t=>setTimeout(t,500-Date.now()+this.lastTouchEnd)),this.I(),this.H(),this.U(),this.W()}i(){this.CSPIssue=sessionStorage.getItem("rocketCSPIssue"),document.addEventListener("securitypolicyviolation",t=>{this.CSPIssue||"script-src-elem"!==t.violatedDirective||"data"!==t.blockedURI||(this.CSPIssue=!0,sessionStorage.setItem("rocketCSPIssue",!0))},{isRocket:!0})}o(){window.addEventListener("pageshow",t=>{this.persisted=t.persisted,this.realWindowLoadedFired=!0},{isRocket:!0}),window.addEventListener("pagehide",()=>{this.onFirstUserAction=null},{isRocket:!0})}h(){let t;function e(e){t=e}window.addEventListener("touchstart",e,{isRocket:!0}),window.addEventListener("touchend",function i(o){o.changedTouches[0]&&t.changedTouches[0]&&Math.abs(o.changedTouches[0].pageX-t.changedTouches[0].pageX)<10&&Math.abs(o.changedTouches[0].pageY-t.changedTouches[0].pageY)<10&&o.timeStamp-t.timeStamp<200&&(window.removeEventListener("touchstart",e,{isRocket:!0}),window.removeEventListener("touchend",i,{isRocket:!0}),"INPUT"===o.target.tagName&&"text"===o.target.type||(o.target.dispatchEvent(new TouchEvent("touchend",{target:o.target,bubbles:!0})),o.target.dispatchEvent(new MouseEvent("mouseover",{target:o.target,bubbles:!0})),o.target.dispatchEvent(new PointerEvent("click",{target:o.target,bubbles:!0,cancelable:!0,detail:1,clientX:o.changedTouches[0].clientX,clientY:o.changedTouches[0].clientY})),event.preventDefault()))},{isRocket:!0})}q(t){this.userActionTriggered||("mousemove"!==t.type||this.firstMousemoveIgnored?"keyup"===t.type||"mouseover"===t.type||"mouseout"===t.type||(this.userActionTriggered=!0,this.onFirstUserAction&&this.onFirstUserAction()):this.firstMousemoveIgnored=!0),"click"===t.type&&t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),"touchstart"===this.lastEvent&&"touchend"===t.type&&(this.lastTouchEnd=Date.now()),"click"===t.type&&(this.lastTouchEnd=0),this.lastEvent=t.type,t.composedPath&&t.composedPath()[0].getRootNode()instanceof ShadowRoot&&(t.rocketTarget=t.composedPath()[0]),this.savedUserEvents.push(t)}u(){this.savedUserEvents=[],this.userEventHandler=this.q.bind(this),this.userEvents.forEach(t=>window.addEventListener(t,this.userEventHandler,{passive:!1,isRocket:!0})),document.addEventListener("visibilitychange",this.userEventHandler,{isRocket:!0})}U(){this.userEvents.forEach(t=>window.removeEventListener(t,this.userEventHandler,{passive:!1,isRocket:!0})),document.removeEventListener("visibilitychange",this.userEventHandler,{isRocket:!0}),this.savedUserEvents.forEach(t=>{(t.rocketTarget||t.target).dispatchEvent(new window[t.constructor.name](t.type,t))})}m(){const t="return false",e=Array.from(this.attributeEvents,t=>"data-rocket-"+t),i="["+this.attributeEvents.join("],[")+"]",o="[data-rocket-"+this.attributeEvents.join("],[data-rocket-")+"]",s=(e,i,o)=>{o&&o!==t&&(e.setAttribute("data-rocket-"+i,o),e["rocket"+i]=new Function("event",o),e.setAttribute(i,t))};new MutationObserver(t=>{for(const n of t)"attributes"===n.type&&(n.attributeName.startsWith("data-rocket-")||this.everythingLoaded?n.attributeName.startsWith("data-rocket-")&&this.everythingLoaded&&this.N(n.target,n.attributeName.substring(12)):s(n.target,n.attributeName,n.target.getAttribute(n.attributeName))),"childList"===n.type&&n.addedNodes.forEach(t=>{if(t.nodeType===Node.ELEMENT_NODE)if(this.everythingLoaded)for(const i of[t,...t.querySelectorAll(o)])for(const t of i.getAttributeNames())e.includes(t)&&this.N(i,t.substring(12));else for(const e of[t,...t.querySelectorAll(i)])for(const t of e.getAttributeNames())this.attributeEvents.includes(t)&&s(e,t,e.getAttribute(t))})}).observe(document,{subtree:!0,childList:!0,attributeFilter:[...this.attributeEvents,...e]})}I(){this.attributeEvents.forEach(t=>{document.querySelectorAll("[data-rocket-"+t+"]").forEach(e=>{this.N(e,t)})})}N(t,e){const i=t.getAttribute("data-rocket-"+e);i&&(t.setAttribute(e,i),t.removeAttribute("data-rocket-"+e))}k(t){Object.defineProperty(HTMLElement.prototype,"onclick",{get(){return this.rocketonclick||null},set(e){this.rocketonclick=e,this.setAttribute(t.everythingLoaded?"onclick":"data-rocket-onclick","this.rocketonclick(event)")}})}S(t){function e(e,i){let o=e[i];e[i]=null,Object.defineProperty(e,i,{get:()=>o,set(s){t.everythingLoaded?o=s:e["rocket"+i]=o=s}})}e(document,"onreadystatechange"),e(window,"onload"),e(window,"onpageshow");try{Object.defineProperty(document,"readyState",{get:()=>t.rocketReadyState,set(e){t.rocketReadyState=e},configurable:!0}),document.readyState="loading"}catch(t){console.log("WPRocket DJE readyState conflict, bypassing")}}l(t){this.originalAddEventListener=EventTarget.prototype.addEventListener,this.originalRemoveEventListener=EventTarget.prototype.removeEventListener,this.savedEventListeners=[],EventTarget.prototype.addEventListener=function(e,i,o){o&&o.isRocket||!t.B(e,this)&&!t.userEvents.includes(e)||t.B(e,this)&&!t.userActionTriggered||e.startsWith("rocket-")||t.everythingLoaded?t.originalAddEventListener.call(this,e,i,o):(t.savedEventListeners.push({target:this,remove:!1,type:e,func:i,options:o}),"mouseenter"!==e&&"mouseleave"!==e||t.originalAddEventListener.call(this,e,t.savedUserEvents.push,o))},EventTarget.prototype.removeEventListener=function(e,i,o){o&&o.isRocket||!t.B(e,this)&&!t.userEvents.includes(e)||t.B(e,this)&&!t.userActionTriggered||e.startsWith("rocket-")||t.everythingLoaded?t.originalRemoveEventListener.call(this,e,i,o):t.savedEventListeners.push({target:this,remove:!0,type:e,func:i,options:o})}}J(t,e){this.savedEventListeners=this.savedEventListeners.filter(i=>{let o=i.type,s=i.target||window;return e!==o||t!==s||(this.B(o,s)&&(i.type="rocket-"+o),this.\$(i),!1)})}H(){EventTarget.prototype.addEventListener=this.originalAddEventListener,EventTarget.prototype.removeEventListener=this.originalRemoveEventListener,this.savedEventListeners.forEach(t=>this.\$(t))}\$(t){t.remove?this.originalRemoveEventListener.call(t.target,t.type,t.func,t.options):this.originalAddEventListener.call(t.target,t.type,t.func,t.options)}p(t){let e;function i(e){return t.everythingLoaded?e:e.split(" ").map(t=>"load"===t||t.startsWith("load.")?"rocket-jquery-load":t).join(" ")}function o(o){function s(e){const s=o.fn[e];o.fn[e]=o.fn.init.prototype[e]=function(){return this[0]===window&&t.userActionTriggered&&("string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=i(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach(t=>{const e=arguments[0][t];delete arguments[0][t],arguments[0][i(t)]=e})),s.apply(this,arguments),this}}if(o&&o.fn&&!t.allJQueries.includes(o)){const e={DOMContentLoaded:[],"rocket-DOMContentLoaded":[]};for(const t in e)document.addEventListener(t,()=>{e[t].forEach(t=>t())},{isRocket:!0});o.fn.ready=o.fn.init.prototype.ready=function(i){function s(){parseInt(o.fn.jquery)>2?setTimeout(()=>i.bind(document)(o)):i.bind(document)(o)}return"function"==typeof i&&(t.realDomReadyFired?!t.userActionTriggered||t.fauxDomReadyFired?s():e["rocket-DOMContentLoaded"].push(s):e.DOMContentLoaded.push(s)),this},s("on"),s("one"),s("off"),t.allJQueries.push(o)}e=o}t.allJQueries=[],o(window.jQuery),Object.defineProperty(window,"jQuery",{get:()=>e,set(t){o(t)}})}P(){const t=new Map;document.write=document.writeln=function(e){const i=document.currentScript,o=document.createRange(),s=i.parentElement;let n=t.get(i);void 0===n&&(n=i.nextSibling,t.set(i,n));const c=document.createDocumentFragment();o.setStart(c,0),c.appendChild(o.createContextualFragment(e)),s.insertBefore(c,n)}}async R(){return new Promise(t=>{this.userActionTriggered?t():this.onFirstUserAction=t})}async L(){return new Promise(t=>{document.addEventListener("DOMContentLoaded",()=>{this.realDomReadyFired=!0,t()},{isRocket:!0})})}async j(){return this.realWindowLoadedFired?Promise.resolve():new Promise(t=>{window.addEventListener("load",t,{isRocket:!0})})}M(){this.pendingScripts=[];this.scriptsMutationObserver=new MutationObserver(t=>{for(const e of t)e.addedNodes.forEach(t=>{"SCRIPT"!==t.tagName||!t.src||t.noModule||t.isWPRocket||this.pendingScripts.push({script:t,promise:new Promise(e=>{const i=()=>{const i=this.pendingScripts.findIndex(e=>e.script===t);i>=0&&this.pendingScripts.splice(i,1),e()};t.addEventListener("load",i,{isRocket:!0}),t.addEventListener("error",i,{isRocket:!0}),setTimeout(i,1e3)})})})}),this.scriptsMutationObserver.observe(document,{childList:!0,subtree:!0})}async F(){await this.X(),this.pendingScripts.length?(await this.pendingScripts[0].promise,await this.F()):this.scriptsMutationObserver.disconnect()}D(){this.delayedScripts={normal:[],async:[],defer:[]},document.querySelectorAll("script[type\$=rocketlazyloadscript]").forEach(t=>{t.hasAttribute("data-rocket-src")?t.hasAttribute("async")&&!1!==t.async?this.delayedScripts.async.push(t):t.hasAttribute("defer")&&!1!==t.defer||"module"===t.getAttribute("data-rocket-type")?this.delayedScripts.defer.push(t):this.delayedScripts.normal.push(t):this.delayedScripts.normal.push(t)})}async _(){await this.L();let t=[];document.querySelectorAll("script[type\$=rocketlazyloadscript][data-rocket-src]").forEach(e=>{let i=e.getAttribute("data-rocket-src");if(i&&!i.startsWith("data:")){i.startsWith("//")&&(i=location.protocol+i);try{const o=new URL(i).origin;o!==location.origin&&t.push({src:o,crossOrigin:e.crossOrigin||"module"===e.getAttribute("data-rocket-type")})}catch(t){}}}),t=[...new Map(t.map(t=>[JSON.stringify(t),t])).values()],this.Y(t,"preconnect")}async G(t){if(await this.K(),!0!==t.noModule||!("noModule"in HTMLScriptElement.prototype))return new Promise(e=>{let i;function o(){(i||t).setAttribute("data-rocket-status","executed"),e()}try{if(navigator.userAgent.includes("Firefox/")||""===navigator.vendor||this.CSPIssue)i=document.createElement("script"),[...t.attributes].forEach(t=>{let e=t.nodeName;"type"!==e&&("data-rocket-type"===e&&(e="type"),"data-rocket-src"===e&&(e="src"),i.setAttribute(e,t.nodeValue))}),t.text&&(i.text=t.text),t.nonce&&(i.nonce=t.nonce),i.hasAttribute("src")?(i.addEventListener("load",o,{isRocket:!0}),i.addEventListener("error",()=>{i.setAttribute("data-rocket-status","failed-network"),e()},{isRocket:!0}),setTimeout(()=>{i.isConnected||e()},1)):(i.text=t.text,o()),i.isWPRocket=!0,t.parentNode.replaceChild(i,t);else{const i=t.getAttribute("data-rocket-type"),s=t.getAttribute("data-rocket-src");i?(t.type=i,t.removeAttribute("data-rocket-type")):t.removeAttribute("type"),t.addEventListener("load",o,{isRocket:!0}),t.addEventListener("error",i=>{this.CSPIssue&&i.target.src.startsWith("data:")?(console.log("WPRocket: CSP fallback activated"),t.removeAttribute("src"),this.G(t).then(e)):(t.setAttribute("data-rocket-status","failed-network"),e())},{isRocket:!0}),s?(t.fetchPriority="high",t.removeAttribute("data-rocket-src"),t.src=s):t.src="data:text/javascript;base64,"+window.btoa(unescape(encodeURIComponent(t.text)))}}catch(i){t.setAttribute("data-rocket-status","failed-transform"),e()}});t.setAttribute("data-rocket-status","skipped")}async C(t){const e=t.shift();return e?(e.isConnected&&await this.G(e),this.C(t)):Promise.resolve()}O(){this.Y([...this.delayedScripts.normal,...this.delayedScripts.defer,...this.delayedScripts.async],"preload")}Y(t,e){this.trash=this.trash||[];let i=!0;var o=document.createDocumentFragment();t.forEach(t=>{const s=t.getAttribute&&t.getAttribute("data-rocket-src")||t.src;if(s&&!s.startsWith("data:")){const n=document.createElement("link");n.href=s,n.rel=e,"preconnect"!==e&&(n.as="script",n.fetchPriority=i?"high":"low"),t.getAttribute&&"module"===t.getAttribute("data-rocket-type")&&(n.crossOrigin=!0),t.crossOrigin&&(n.crossOrigin=t.crossOrigin),t.integrity&&(n.integrity=t.integrity),t.nonce&&(n.nonce=t.nonce),o.appendChild(n),this.trash.push(n),i=!1}}),document.head.appendChild(o)}W(){this.trash.forEach(t=>t.remove())}async T(){try{document.readyState="interactive"}catch(t){}this.fauxDomReadyFired=!0;try{await this.K(),this.J(document,"readystatechange"),document.dispatchEvent(new Event("rocket-readystatechange")),await this.K(),document.rocketonreadystatechange&&document.rocketonreadystatechange(),await this.K(),this.J(document,"DOMContentLoaded"),document.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this.K(),this.J(window,"DOMContentLoaded"),window.dispatchEvent(new Event("rocket-DOMContentLoaded"))}catch(t){console.error(t)}}async A(){try{document.readyState="complete"}catch(t){}try{await this.K(),this.J(document,"readystatechange"),document.dispatchEvent(new Event("rocket-readystatechange")),await this.K(),document.rocketonreadystatechange&&document.rocketonreadystatechange(),await this.K(),this.J(window,"load"),window.dispatchEvent(new Event("rocket-load")),await this.K(),window.rocketonload&&window.rocketonload(),await this.K(),this.allJQueries.forEach(t=>t(window).trigger("rocket-jquery-load")),await this.K(),this.J(window,"pageshow");const t=new Event("rocket-pageshow");t.persisted=this.persisted,window.dispatchEvent(t),await this.K(),window.rocketonpageshow&&window.rocketonpageshow({persisted:this.persisted})}catch(t){console.error(t)}}async K(){Date.now()-this.lastBreath>45&&(await this.X(),this.lastBreath=Date.now())}async X(){return document.hidden?new Promise(t=>setTimeout(t)):new Promise(t=>requestAnimationFrame(t))}B(t,e=window){return e===document&&"readystatechange"===t||(e===document&&"DOMContentLoaded"===t||(e===window&&"DOMContentLoaded"===t||(e===window&&"load"===t||e===window&&"pageshow"===t)))}static run(){(new RocketLazyLoadScripts).t()}}RocketLazyLoadScripts.run()})();
</script>
<script type="text/rocketlazyloadscript">(function (w, d, s, l, i) {w[l] = w[l] || [];w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true; j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', 'GTM-TCFZF7');</script>
<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https:\\/\\/schema.org","@graph":[{"@type":"WebPage","@id":"https:\\/\\/eleks.com\\/site-map\\/","url":"https:\\/\\/eleks.com\\/site-map\\/","name":"| ELEKS: Enterprise Software Development, Technology Consulting | ELEKS: Enterprise Software Development, Technology Consulting","isPartOf":{"@id":"https:\\/\\/eleks.com\\/#website"},"primaryImageOfPage":{"@id":"https:\\/\\/eleks.com\\/site-map\\/#primaryimage"},"image":{"@id":"https:\\/\\/eleks.com\\/site-map\\/#primaryimage"},"thumbnailUrl":"https:\\/\\/eleks.com\\/wp-content\\/uploads\\/app-development.jpg","datePublished":"2019-09-26T14:19:19+00:00","dateModified":"2022-06-01T14:07:25+00:00","description":"ELEKS Site Map","breadcrumb":{"@id":"https:\\/\\/eleks.com\\/site-map\\/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https:\\/\\/eleks.com\\/site-map\\/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https:\\/\\/eleks.com\\/site-map\\/#primaryimage","url":"https:\\/\\/eleks.com\\/wp-content\\/uploads\\/app-development.jpg","contentUrl":"https:\\/\\/eleks.com\\/wp-content\\/uploads\\/app-development.jpg","width":3840,"height":1900,"caption":"app-development"},{"@type":"BreadcrumbList","@id":"https:\\/\\/eleks.com\\/site-map\\/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https:\\/\\/eleks.com\\/"},{"@type":"ListItem","position":2,"name":"Site Map"}]},{"@type":"WebSite","@id":"https:\\/\\/eleks.com\\/#website","url":"https:\\/\\/eleks.com\\/","name":"ELEKS: Enterprise Software Development, Technology Consulting","description":"ELEKS is a trusted global organization that provides full-cycle software engineering outsourcing, from ideation to finished products.","publisher":{"@id":"https:\\/\\/eleks.com\\/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https:\\/\\/eleks.com\\/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https:\\/\\/eleks.com\\/#organization","name":"Eleks","url":"https:\\/\\/eleks.com\\/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https:\\/\\/eleks.com\\/#\\/schema\\/logo\\/image\\/","url":"https:\\/\\/eleks.com\\/wp-content\\/uploads\\/2017\\/09\\/eleks-logo-blue.png","contentUrl":"https:\\/\\/eleks.com\\/wp-content\\/uploads\\/2017\\/09\\/eleks-logo-blue.png","width":139,"height":42,"caption":"Eleks"},"image":{"@id":"https:\\/\\/eleks.com\\/#\\/schema\\/logo\\/image\\/"},"sameAs":["http:\\/\\/www.facebook.com\\/ELEKS.Software","https:\\/\\/x.com\\/ELEKSSoftware","https:\\/\\/www.instagram.com\\/elekssoftware\\/?hl=en","http:\\/\\/www.linkedin.com\\/company\\/13412?trk=NUS_CMPY_TWIT","https:\\/\\/www.youtube.com\\/channel\\/UC_sz-oAc71dsnryZAELdw4Q","https:\\/\\/en.wikipedia.org\\/wiki\\/Eleks"]}]}</script>
<script type="text/rocketlazyloadscript" id="wp-tinymce-root-js" data-rocket-src="https://eleks.com/wp-includes/js/tinymce/tinymce.min.js?ver=49110-20250317" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="wp-tinymce-js" data-rocket-src="https://eleks.com/wp-includes/js/tinymce/plugins/compat3x/plugin.min.js?ver=49110-20250317" data-rocket-defer defer></script>
<script>var criticalJS = 'critical-deleyed-js',
        browserWidth = window.innerWidth || document.documentElement.clientWidth,
        dirRTL = (document.getElementsByTagName("html")[0].getAttribute("dir") == "rtl") ? true : false,
        get_template_directory_uri = "https://eleks.com/wp-content/themes/eleks"</script>
<script type="text/rocketlazyloadscript">

</script>
<script type="text/rocketlazyloadscript">
document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );
</script>
<script type="text/rocketlazyloadscript">
gform.initializeOnLoaded( function() {gformInitSpinner( 1, 'https://eleks.com/wp-content/plugins/gravityforms/images/spinner.svg', true );jQuery('#gform_ajax_frame_1').on('load',function(){var contents = jQuery(this).contents().find('*').html();var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;if(!is_postback){return;}var form_content = jQuery(this).contents().find('#gform_wrapper_1');var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_1').length > 0;var is_redirect = contents.indexOf('gformRedirect(){') >= 0;var is_form = form_content.length > 0 && ! is_redirect && ! is_confirmation;var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;if(is_form){jQuery('#gform_wrapper_1').html(form_content.html());if(form_content.hasClass('gform_validation_error')){jQuery('#gform_wrapper_1').addClass('gform_validation_error');} else {jQuery('#gform_wrapper_1').removeClass('gform_validation_error');}setTimeout( function() { /* delay the scroll by 50 milliseconds to fix a bug in chrome */ jQuery(document).scrollTop(jQuery('#gform_wrapper_1').offset().top - mt); }, 50 );if(window['gformInitDatepicker']) {gformInitDatepicker();}if(window['gformInitPriceFields']) {gformInitPriceFields();}var current_page = jQuery('#gform_source_page_number_1').val();gformInitSpinner( 1, 'https://eleks.com/wp-content/plugins/gravityforms/images/spinner.svg', true );jQuery(document).trigger('gform_page_loaded', [1, current_page]);window['gf_submitting_1'] = false;}else if(!is_redirect){var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').html();if(!confirmation_content){confirmation_content = contents;}jQuery('#gform_wrapper_1').replaceWith(confirmation_content);jQuery(document).scrollTop(jQuery('#gf_1').offset().top - mt);jQuery(document).trigger('gform_confirmation_loaded', [1]);window['gf_submitting_1'] = false;wp.a11y.speak(jQuery('#gform_confirmation_message_1').text());}else{jQuery('#gform_1').append(contents);if(window['gformRedirect']) {gformRedirect();}}jQuery(document).trigger("gform_pre_post_render", [{ formId: "1", currentPage: "current_page", abort: function() { this.preventDefault(); } }]);        if (event && event.defaultPrevented) {                return;        }        const gformWrapperDiv = document.getElementById( "gform_wrapper_1" );        if ( gformWrapperDiv ) {            const visibilitySpan = document.createElement( "span" );            visibilitySpan.id = "gform_visibility_test_1";            gformWrapperDiv.insertAdjacentElement( "afterend", visibilitySpan );        }        const visibilityTestDiv = document.getElementById( "gform_visibility_test_1" );        let postRenderFired = false;        function triggerPostRender() {            if ( postRenderFired ) {                return;            }            postRenderFired = true;            gform.core.triggerPostRenderEvents( 1, current_page );            if ( visibilityTestDiv ) {                visibilityTestDiv.parentNode.removeChild( visibilityTestDiv );            }        }        function debounce( func, wait, immediate ) {            var timeout;            return function() {                var context = this, args = arguments;                var later = function() {                    timeout = null;                    if ( !immediate ) func.apply( context, args );                };                var callNow = immediate && !timeout;                clearTimeout( timeout );                timeout = setTimeout( later, wait );                if ( callNow ) func.apply( context, args );            };        }        const debouncedTriggerPostRender = debounce( function() {            triggerPostRender();        }, 200 );        if ( visibilityTestDiv && visibilityTestDiv.offsetParent === null ) {            const observer = new MutationObserver( ( mutations ) => {                mutations.forEach( ( mutation ) => {                    if ( mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null ) {                        debouncedTriggerPostRender();                        observer.disconnect();                    }                });            });            observer.observe( document.body, {                attributes: true,                childList: false,                subtree: true,                attributeFilter: [ 'style', 'class' ],            });        } else {            triggerPostRender();        }    } );} );
</script>
<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/eleks/*","/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>
<script type="text/rocketlazyloadscript" data-rocket-type="text/javascript">
					(function(d,s,i,r) {
					if (d.getElementById(i)){return;}
					var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
					n.id=i;n.src='//js.hs-analytics.net/analytics/'+(Math.ceil(new Date()/r)*r)+'/25009833.js';
					e.parentNode.insertBefore(n, e);
					})(document,"script","hs-analytics",300000);
					</script>
<script type="text/rocketlazyloadscript" id="jquery-js" data-rocket-src="https://eleks.com/wp-includes/js/jquery/jquery.min.js"></script>
<script id="site_tracking-js-extra">
var php_data = {"ac_settings":{"tracking_actid":251977649,"site_tracking_default":1,"site_tracking":1},"user_email":""};
//# sourceURL=site_tracking-js-extra
</script>
<script type="text/rocketlazyloadscript" data-minify="1" id="site_tracking-js" data-rocket-src="https://eleks.com/wp-content/cache/min/1/wp-content/plugins/activecampaign-subscription-forms/site_tracking.js?ver=1779961251" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="rocket-browser-checker-js-after">
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
//# sourceURL=rocket-browser-checker-js-after
</script>
<script id="rocket-preload-links-js-extra">
var RocketPreloadLinksConfig = {"excludeUris":"/lucky-wheel/|/(?:.+/)?feed(?:/(?:.+/?)?)?\$|/(?:.+/)?embed/|/(index.php/)?(.*)wp-json(/.*|\$)|/refer/|/go/|/recommend/|/recommends/","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm","siteUrl":"https://eleks.com","onHoverDelay":"100","rateThrottle":"3"};
//# sourceURL=rocket-preload-links-js-extra
</script>
<script type="text/rocketlazyloadscript" id="rocket-preload-links-js-after">
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")\$","i"),fileExt:RegExp(".("+this.config.fileExt+")\$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());

//# sourceURL=rocket-preload-links-js-after
</script>
<script id="critical_js-js" src="https://eleks.com/wp-content/themes/eleks/js/critical.min.js?ver=1.4.4" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="js-cookie-js" data-rocket-src="https://eleks.com/wp-content/themes/eleks/front-end/libs/cookies-js/cookies-js.min.js?ver=3.0.0" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="scrollreveal-js" data-rocket-src="https://eleks.com/wp-content/themes/eleks/front-end/libs/scrollreveal/dist/scrollreveal.min.js?ver=3.3.6" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" data-minify="1" id="menu-aim_scripts-js" data-rocket-src="https://eleks.com/wp-content/cache/min/1/wp-content/themes/eleks/js/menu-aim.js?ver=1779961251" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="slick-script-js" data-rocket-src="https://eleks.com/wp-content/themes/eleks/front-end/libs/slick-carousel/slick/slick.min.js?ver=1.8.0" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="ua-parser-js" data-rocket-src="https://eleks.com/wp-content/themes/eleks/front-end/libs/ua-parser-js/dist/ua-parser.min.js?ver=0.7.20" data-rocket-defer defer></script>
<script id="main_scripts-js-extra">
var global = {"url":"https://eleks.com/wp-admin/admin-ajax.php","nonce":"436543bf7d","rest_nonce":"ee76d859ef","geo_url":"https://eleks.com/geo.php","closest_office_url":"https://eleks.com/closest-office.php","geo_token":"e7a3f91d4c8b265a09d13e7c5f9b0238a74d15c236b4e890f12a65c0d89f3cb4","ssl":"true","template_directory_uri":"https://eleks.com/wp-content/themes/eleks"};
//# sourceURL=main_scripts-js-extra
</script>
<script type="text/rocketlazyloadscript" id="main_scripts-js" data-rocket-src="https://eleks.com/wp-content/themes/eleks/js/scripts.min.js?ver=1.4.4" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="forms_scripts-js" data-rocket-src="https://eleks.com/wp-content/themes/eleks/js/forms.min.js?ver=1.4.4" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="sliders_scripts-js" data-rocket-src="https://eleks.com/wp-content/themes/eleks/js/sliders.min.js?ver=1.4.4" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="location_scripts-js" data-rocket-src="https://eleks.com/wp-content/themes/eleks/js/location.min.js?ver=1.4.4" data-rocket-defer defer></script>
<script id="eleks-chat-js-extra">
var ELEKS_CHAT_CONFIG = {"apiBase":"https://eleks.com/ai-mode","popular":["How long would it take to add AI to our existing ERP system?","Have you built AI solutions before and can I see some examples?","What security certifications do you have?"],"contactUrl":"https://eleks.com/contact-us/","sectionMode":"both","defaultFeaturedImage":"https://eleks.com/wp-content/uploads/EO-gradient-1.png"};
//# sourceURL=eleks-chat-js-extra
</script>
<script id="eleks-chat-js" src="https://eleks.com/wp-content/themes/eleks/js/chat.min.js?ver=1.4.4"></script>
<script type="text/rocketlazyloadscript" id="wp-dom-ready-js" data-rocket-src="https://eleks.com/wp-includes/js/dist/dom-ready.min.js?ver=a06281ae5cf5500e9317" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="wp-hooks-js" data-rocket-src="https://eleks.com/wp-includes/js/dist/hooks.min.js?ver=7496969728ca0f95732d"></script>
<script type="text/rocketlazyloadscript" id="wp-i18n-js" data-rocket-src="https://eleks.com/wp-includes/js/dist/i18n.min.js?ver=781d11515ad3d91786ec"></script>
<script type="text/rocketlazyloadscript" id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after
</script>
<script type="text/rocketlazyloadscript" id="wp-a11y-js" data-rocket-src="https://eleks.com/wp-includes/js/dist/a11y.min.js?ver=af934e5259bc51b8718e" data-rocket-defer defer></script>
<script type="text/rocketlazyloadscript" id="gform_json-js" defer='defer' data-rocket-src="https://eleks.com/wp-content/plugins/gravityforms/js/jquery.json.min.js?ver=2.10.4"></script>
<script id="gform_gravityforms-js-extra">
var gform_i18n = {"datepicker":{"days":{"monday":"Mo","tuesday":"Tu","wednesday":"We","thursday":"Th","friday":"Fr","saturday":"Sa","sunday":"Su"},"months":{"january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December"},"firstDay":1,"iconText":"Select date"}};
var gf_legacy_multi = [];
var gform_gravityforms = {"strings":{"invalid_file_extension":"This type of file is not allowed. Must be one of the following:","file_uploaded":"File uploaded","delete_file":"Delete this file","in_progress":"in progress","file_exceeds_limit":"File exceeds size limit","illegal_extension":"This type of file is not allowed.","max_reached":"Maximum number of files reached","unknown_error":"There was a problem while saving the file on the server","currently_uploading":"Please wait for the uploading to complete","cancel":"Cancel","cancel_upload":"Cancel this upload","cancelled":"Cancelled","error":"Error","message":"Message"},"vars":{"images_url":"https://eleks.com/wp-content/plugins/gravityforms/images"}};
var gf_legacy = {"is_legacy":"1"};
var gf_global = {"gf_currency_config":{"name":"U.S. Dollar","symbol_left":"\$","symbol_right":"","symbol_padding":"","thousand_separator":",","decimal_separator":".","decimals":2,"code":"USD"},"base_url":"https://eleks.com/wp-content/plugins/gravityforms","number_formats":[],"spinnerUrl":"https://eleks.com/wp-content/plugins/gravityforms/images/spinner.svg","version_hash":"7505710d91fd7375348a969971e3a6d4","strings":{"newRowAdded":"New row added.","rowRemoved":"Row removed","formSaved":"The form has been saved.  The content contains the link to return and complete the form."}};
//# sourceURL=gform_gravityforms-js-extra
</script>
<script type="text/rocketlazyloadscript" id="gform_gravityforms-js" defer='defer' data-rocket-src="https://eleks.com/wp-content/plugins/gravityforms/js/gravityforms.min.js?ver=2.10.4"></script>
<script type="text/rocketlazyloadscript" id="gform_textarea_counter-js" defer='defer' data-rocket-src="https://eleks.com/wp-content/plugins/gravityforms/js/jquery.textareaCounter.plugin.min.js?ver=2.10.4"></script>
<script type="text/rocketlazyloadscript" id="gform_gravityforms_utils-js" defer='defer' data-rocket-src="https://eleks.com/wp-content/plugins/gravityforms/assets/js/dist/utils.min.js?ver=3f278756f0a3032bed328ff6a9f6c01d"></script>
<script type="text/rocketlazyloadscript" id="gform_gravityforms_theme_vendors-js" defer='defer' data-rocket-src="https://eleks.com/wp-content/plugins/gravityforms/assets/js/dist/vendor-theme.min.js?ver=7c651d0ba638ce98b9c65141edddd567"></script>
<script id="gform_gravityforms_theme-js-extra">
var gform_theme_config = {"common":{"form":{"honeypot":{"version_hash":"7505710d91fd7375348a969971e3a6d4"},"ajax":{"ajaxurl":"https://eleks.com/wp-admin/admin-ajax.php","ajax_submission_nonce":"9b403446e5","i18n":{"step_announcement":"Step %1\$s of %2\$s, %3\$s","unknown_error":"There was an unknown error processing your request. Please try again.","error_403":"The request was blocked (403 error) for unknown security reasons. Remove any code-like text (scripts or DB queries) and try again."}}}},"hmr_dev":"","public_path":"https://eleks.com/wp-content/plugins/gravityforms/assets/js/dist/","config_nonce":"e1d0e9bcf2"};
//# sourceURL=gform_gravityforms_theme-js-extra
</script>
<script type="text/rocketlazyloadscript" id="gform_gravityforms_theme-js" defer='defer' data-rocket-src="https://eleks.com/wp-content/plugins/gravityforms/assets/js/dist/scripts-theme.min.js?ver=301fdc9aa6144168f3b854c4c2c8f6d3"></script>
<script type="text/rocketlazyloadscript">
    (function () {
        function readChatSessionId() {
            try {
                var raw = localStorage.getItem('eleks_chat_session');
                if (!raw) return '';
                var parsed = JSON.parse(raw);
                return (parsed && typeof parsed.id === 'string') ? parsed.id : '';
            } catch (e) { return ''; }
        }
        function fillField(formId) {
            var sid = readChatSessionId();
            if (!sid) return;
            var selector = formId
                ? '#gform_' + formId + ' input[name="input_999"]'
                : 'form[id^="gform_"] input[name="input_999"]';
            var inputs = document.querySelectorAll(selector);
            for (var i = 0; i < inputs.length; i++) inputs[i].value = sid;
        }
        // Run once on DOM ready for any forms already in the page.
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () { fillField(); });
        } else {
            fillField();
        }
        // Re-run after every Gravity Forms render (AJAX, multi-page).
        if (window.jQuery) {
            jQuery(document).on('gform_post_render', function (event, formId) { fillField(formId); });
        }
    })();
    </script>
<script type="text/rocketlazyloadscript">
gform.initializeOnLoaded( function() { jQuery(document).on('gform_post_render', function(event, formId, currentPage){if(formId == 1) {if(!jQuery('#input_1_1+.ginput_counter').length){jQuery('#input_1_1').textareaCount(    {'maxCharacterSize': 80,    'originalStyle': 'ginput_counter gfield_description',	 'truncate': true,	 'errorStyle' : '',    'displayFormat' : '#input of #max max characters'    });jQuery('#input_1_1').next('.ginput_counter').attr('aria-live','polite');}if(!jQuery('#input_1_5+.ginput_counter').length){jQuery('#input_1_5').textareaCount(    {'maxCharacterSize': 80,    'originalStyle': 'ginput_counter gfield_description',	 'truncate': true,	 'errorStyle' : '',    'displayFormat' : '#input of #max max characters'    });jQuery('#input_1_5').next('.ginput_counter').attr('aria-live','polite');}if(!jQuery('#input_1_2+.ginput_counter').length){jQuery('#input_1_2').textareaCount(    {'maxCharacterSize': 80,    'originalStyle': 'ginput_counter gfield_description',	 'truncate': true,	 'errorStyle' : '',    'displayFormat' : '#input of #max max characters'    });jQuery('#input_1_2').next('.ginput_counter').attr('aria-live','polite');}if(!jQuery('#input_1_17+.ginput_counter').length){jQuery('#input_1_17').textareaCount(    {'maxCharacterSize': 5000,    'originalStyle': 'ginput_counter gfield_description',	 'truncate': true,	 'errorStyle' : '',    'displayFormat' : '#input of #max max characters'    });jQuery('#input_1_17').next('.ginput_counter').attr('aria-live','polite');}} } );jQuery(document).on('gform_post_conditional_logic', function(event, formId, fields, isInit){} ) } );
</script>
<script type="text/rocketlazyloadscript">
gform.initializeOnLoaded( function() {jQuery(document).trigger("gform_pre_post_render", [{ formId: "1", currentPage: "1", abort: function() { this.preventDefault(); } }]);        if (event && event.defaultPrevented) {                return;        }        const gformWrapperDiv = document.getElementById( "gform_wrapper_1" );        if ( gformWrapperDiv ) {            const visibilitySpan = document.createElement( "span" );            visibilitySpan.id = "gform_visibility_test_1";            gformWrapperDiv.insertAdjacentElement( "afterend", visibilitySpan );        }        const visibilityTestDiv = document.getElementById( "gform_visibility_test_1" );        let postRenderFired = false;        function triggerPostRender() {            if ( postRenderFired ) {                return;            }            postRenderFired = true;            gform.core.triggerPostRenderEvents( 1, 1 );            if ( visibilityTestDiv ) {                visibilityTestDiv.parentNode.removeChild( visibilityTestDiv );            }        }        function debounce( func, wait, immediate ) {            var timeout;            return function() {                var context = this, args = arguments;                var later = function() {                    timeout = null;                    if ( !immediate ) func.apply( context, args );                };                var callNow = immediate && !timeout;                clearTimeout( timeout );                timeout = setTimeout( later, wait );                if ( callNow ) func.apply( context, args );            };        }        const debouncedTriggerPostRender = debounce( function() {            triggerPostRender();        }, 200 );        if ( visibilityTestDiv && visibilityTestDiv.offsetParent === null ) {            const observer = new MutationObserver( ( mutations ) => {                mutations.forEach( ( mutation ) => {                    if ( mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null ) {                        debouncedTriggerPostRender();                        observer.disconnect();                    }                });            });            observer.observe( document.body, {                attributes: true,                childList: false,                subtree: true,                attributeFilter: [ 'style', 'class' ],            });        } else {            triggerPostRender();        }    } );
</script>
<script>window.lazyLoadOptions=[{elements_selector:"img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}},{elements_selector:".rocket-lazyload",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,}];window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(var i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)</script>
<script data-no-minify="1" async src="https://eleks.com/wp-content/plugins/wp-rocket/assets/js/lazyload/17.8.3/lazyload.min.js"></script>`;

export default function Page() {
  return (
    <PageWrapper
      title="| Glenn Tech: Enterprise Software Development, Technology Consulting | Glenn Tech: Enterprise Software Development, Technology Consulting"
      description="Glenn Tech Site Map"
      bodyClass="wp-singular page-template page-template-page-sitemap page-template-page-sitemap-php page page-id-12343 wp-theme-eleks"
      html={bodyHtml}
    />
  );
}
