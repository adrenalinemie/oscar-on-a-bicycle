/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {   
    let output = '';
    
    if(params.minFontSize !== '1' || params.maxFontSize !== '1.1') {
        output += `
        html {
          font-size: ${params.minFontSize}rem;
        }

        @media screen and (min-width: 20rem) {
          html {
               font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 113));
          }
        }

        @media screen and (min-width: 133rem) {
          html {
               font-size: ${params.maxFontSize}rem;
            }
        }`;
    }

    if(params.lineHeight !== '1.7') {
       output += `
       body {
              line-height: ${params.lineHeight};
       }`;
   }

   if(params.fontNormalWeight !== '400') {
       output += `
       body,
       figcaption,
       btn, [type=button],
       [type=submit],
       button,
       option,
       .newsletter-popup__agree li label  {
              font-weight: ${params.fontNormalWeight};
       }`;
    }

    if(params.fontBoldWeight !== '600') {
       output += `
       b,
       strong,
       dl dt,
       table th,
       label,
       .post__related__wrap figcaption > a,
       .ordered-list li::before,
       .dropcap:first-letter {
              font-weight: ${params.fontBoldWeight};
       }`;
    }
    
    if(params.bodyBg !== '#F7F5EA') {
        output += `
        body {
               background: ${params.bodyBg};
        }`;
    }
   
    if(params.contentBoxShadowColor !== 'rgba(0, 0, 0, 0.08)' || params.contentBoxShadowRadius !== '30') {
        output += `
        .page {
                -webkit-box-shadow: 0 0 ${params.contentBoxShadowRadius}px ${params.contentBoxShadowColor};
                        box-shadow: 0 0 ${params.contentBoxShadowRadius}px ${params.contentBoxShadowColor};   
        }`;
    }
    
    if(params.textColor !== '#4A4A4F') {
        output += `
        body {
               color: ${params.textColor};
        }

        .btn--white {
               color: ${params.textColor} !important;
        }

        .post__share-popup a {
               color: ${params.textColor}
        }

        .pswp--light .pswp__caption__center {
               color: ${params.textColor};
        }`;
    }
    
    if(params.logoColor !== '#FFFFFF') {
        output += `
        .logo {
               color: ${params.logoColor} !important;
        }`;
    }

    if(params.headingColor !== '#2C2A29' || params.fontHeadignsWeight !== '600' || params.fontHeadingsTransform !== 'none') {
        output += `
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
               color: ${params.headingColor};
               font-weight: ${params.fontHeadignsWeight};
               text-transform: ${params.fontHeadingsTransform};  
        }

        .dropcap::first-letter{
               color: ${params.headingColor};
               font-weight: ${params.fontHeadignsWeight};               
        }`;
    }
    
    if(params.linkColor !== '#DE6B48') {
        output += `
        a {
               color: ${params.linkColor};
        }

        .invert:hover {
               color: ${params.linkColor}; 
        }

        .invert:active {
               color: ${params.linkColor}; 
        }

        .invert:focus {
               color: ${params.linkColor}; 
        }
        .post__entry a:hover,
        .post__entry a:active,
        .post__entry a:focus {
               color: ${params.linkColor}; 
        }`;
    } 
	
    if(params.linkHoverColor !== '#2C2A29') {
        output += `
        a:hover {
               color: ${params.linkHoverColor};
        }

        a:active {
               color: ${params.linkHoverColor};
        }

        a:focus {
               color: ${params.linkHoverColor};
        }

        .invert {
               color: ${params.linkHoverColor};
        }`;
    }
	
	if(params.primaryColor !== '#DE6B48') {
        output += `
        ::-moz-selection {
               background: ${params.primaryColor};    
        }

        ::selection {
               background: ${params.primaryColor};   
        }

        .btn:not(.btn--white):not(.btn--yellow):not(.btn--green):not(.btn--gray):not(.btn--color):not(.btn--outline),
        [type=button]:not(.btn--white):not(.btn--yellow):not(.btn--green):not(.btn--gray):not(.btn--color):not(.btn--outline),
        [type=submit]:not(.btn--white):not(.btn--yellow):not(.btn--green):not(.btn--gray):not(.btn--color):not(.btn--outline),
        button:not(.btn--white):not(.btn--yellow):not(.btn--green):not(.btn--gray):not(.btn--color):not(.btn--outline) {
               background: ${params.primaryColor};
               border-color: ${params.primaryColor};
        }

        [type=text]:focus,
        [type=url]:focus,
        [type=tel]:focus,
        [type=number]:focus,
        [type=email]:focus,
        [type=search]:focus,
        textarea:focus,
        select:focus {
               border-color: ${params.primaryColor};
        }

        input[type=checkbox]:checked + label:before,
        input[type=radio]:checked + label:before {  
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8'%3e%3cpolygon points='9.53 0 4.4 5.09 1.47 2.18 0 3.64 2.93 6.54 4.4 8 5.87 6.54 11 1.46 9.53 0' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");
               border-color: ${params.primaryColor};
        }

        select[multiple]:focus {
               border-color: ${params.primaryColor};
        }

        select[multiple]:focus option:checked {
               background: ${params.primaryColor} linear-gradient(0deg, ${params.primaryColor} 0%, ${params.primaryColor} 100%);

        }
       
        blockquote:before {
               color: ${params.primaryColor};
        }

        .ordered-list li::before {
               color: ${params.primaryColor}; 
        }

        .search__close:hover:before,
        .search__close:hover:after {
                background-color: ${params.primaryColor};
        }

        .subscribe input[type=email]:focus,
        .subscribe input[type=text]:focus {
               -webkit-box-shadow: inset 0 0 2px ${params.primaryColor}; 
               box-shadow: inset 0 0 2px ${params.primaryColor}; 
               border-color: ${params.primaryColor};   
        }
        .author__website svg {
              fill: ${params.primaryColor};
       }`;
    }
    
    
    if(params.buttonDarkBg !== '#6C6C6F' || params.buttonDarkColor !== '#FFFFFF') {
        output += `
        .btn--dark {              
               background: ${params.buttonDarkBg} !important; 
               border-color: ${params.buttonDarkBg} !important; 
               color: ${params.buttonDarkColor} !important;
        }`;
    }  
    
    if(params.buttonWhiteBg !== '#FFFFFF' || params.buttonWhiteColor !== '#4A4A4F') {
        output += `
        .btn--white {              
               background: ${params.buttonWhiteBg} !important; 
               border-color: ${params.buttonWhiteBg} !important; 
               color: ${params.buttonWhiteColor} !important;
        }`;
    }  
    
    if(params.buttonGreenBg !== '#83B692' || params.buttonGreenColor !== '#FFFFFF') {
        output += `
        .btn--green {              
               background: ${params.buttonGreenBg} !important; 
               border-color: ${params.buttonGreenBg} !important; 
               color: ${params.buttonGreenColor} !important;
        }`;
    }  
    
    if(params.buttonYellowBg !== '#FFC439' || params.buttonYellowColor !== '#FFFFFF') {
        output += `
        .btn--yellow {              
               background: ${params.buttonYellowBg} !important; 
               border-color: ${params.buttonYellowBg} !important; 
               color: ${params.buttonYellowColor} !important;
        }`;
    } 
    
   
    if(params.buttonOulineBorderColor !== '#6C6C6F' || params.buttonOulineBorderWidth !== '1' || params.buttonOulineBorderTextColor !== '#4A4A4F') {
        output += `
        .btn--outline {              
               border: ${params.buttonOulineBorderWidth}px solid ${params.buttonOulineBorderColor} !important; 
               color: ${params.buttonOulineBorderTextColor};
        }`;
    }  
    
    if(params.lightBg !== '#F7F5EA') {
        output += `
        .page__item-image__wrap {
               background: ${params.lightBg};
        }

        pre {
               background-color: ${params.lightBg};
        }

        code {
               background-color: ${params.lightBg};
        }

       .table-striped tr:nth-child(2n) {
               background: ${params.lightBg};
        }

        .table-title th {
               background: ${params.lightBg};
        }

        .post__tag li > a {
               background: ${params.lightBg};
        }`;
    }
    
    if(params.msgHighlightBg !== '#F7F5EA') {
        output += `
        .msg--highlight {
               background-color: ${params.msgHighlightBg}; 
               
        }`;
    }   
    
    if(params.msgInfoBg !== '#F2F9FF') {
        output += `
        .msg--info  {
               background-color: ${params.msgInfoBg}; 
              
        }`;
    }  
    
    if(params.msgSuccessBg !== '#F7FBF6') {
        output += `
        .msg--success {
               background-color: ${params.msgSuccessBg}; 
               
        }`;
    }  
    
    if(params.msgWarningBg !== '#FFF3F3') {
        output += `
        .msg--warning {
               background-color: ${params.msgWarningBg};                
        }`;
    }  
   
 if (params.linkColorMenu !== '#FFFFFF') {
        output += `
        .navbar .navbar__menu li a,
        .navbar .navbar__menu li span[aria-haspopup="true"] {
               color: ${params.linkColorMenu};
        }

        .navbar .navbar__menu li span {
               color: ${params.linkColorMenu};
        }`;
    }

    if (params.linkHoverColorMenu !== '#FFFFFF') {
        output += `
        .navbar .navbar__menu li a:active,
        .navbar .navbar__menu li a:focus,
        .navbar .navbar__menu li a:hover,
        .navbar .navbar__menu li span[aria-haspopup="true"]:active,
        .navbar .navbar__menu li span[aria-haspopup="true"]:focus,
        .navbar .navbar__menu li span[aria-haspopup="true"]:hover  {
               color: ${params.linkHoverColorMenu};
        }      

        .navbar .navbar__menu > li:hover > a,
        .navbar .navbar__menu > li:hover > span[aria-haspopup="true"] {
               color: ${params.linkHoverColorMenu};   
        }`;
    }
    
     if (params.linkHoverBgMenu !== 'rgba(255, 255, 255, 0.12)') {
        output += `       
        .navbar .navbar__menu > li:hover > a,
        .navbar .navbar__menu > li:hover > span[aria-haspopup="true"] {
               background: ${params.linkHoverBgMenu};            
        }`;
    }
    
    if (params.submenu === 'custom') {
        output += `
        .navbar .navbar__submenu {
               width: ${params.submenuWidth}px;     
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu {
               left: ${params.submenuWidth}px;  
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu.is-right-submenu {
               left: -${params.submenuWidth}px; 
        }`;
    }
    
    if(params.submenuBg !== '#FFFFFF') {
        output += `
         .navbar .navbar__submenu  {
               background: ${params.submenuBg};             
        }`;
    }
    
    if(params.submenuLinkColor !== '#4A4A4F') {
        output += `
         .navbar .navbar__submenu li a,
         .navbar .navbar__submenu li span[aria-haspopup="true"] {
               color: ${params.submenuLinkColor} !important;;  
         }

         .navbar .navbar__submenu li span {
               color: ${params.submenuLinkColor} !important; 
        }`;
    }
    
    if(params.submenuLinkHoverColor !== '#4A4A4F' || params.submenuLinkHoverBgMenu !== '#F7F5EA') {
        output += `
         .navbar .navbar__submenu li a:active,
         .navbar .navbar__submenu li a:focus,
         .navbar .navbar__submenu li a:hover,
         .navbar .navbar__submenu li span[aria-haspopup="true"]:active,
         .navbar .navbar__submenu li span[aria-haspopup="true"]:focus,
         .navbar .navbar__submenu li span[aria-haspopup="true"]:hover {
               background: ${params.submenuLinkHoverBgMenu};     
               color: ${params.submenuLinkHoverColor} !important;  
         }

         .navbar .navbar__submenu li:hover > a,
         .navbar .navbar__submenu li:hover > span[aria-haspopup="true"] {
               color: ${params.submenuLinkHoverColor} !important; 
        }`;
    } 
     
    if(params.stickyBg !== '#83B692') {
        output += `
        .header.is-visible {
               background: ${params.stickyBg};
        }

        .navbar__menu.is-visible {
                 background: ${params.stickyBg};
        }`;
    }
    
    if(params.stickyBoxShadowColor !== 'rgba(0, 0, 0, 0.2)' || params.stickyBoxShadowRadius !== '6') {
        output += `
        .header.is-visible {
                -webkit-box-shadow: 0 0 ${params.stickyBoxShadowRadius}px ${params.stickyBoxShadowColor};
                        box-shadow: 0 0 ${params.stickyBoxShadowRadius}px ${params.stickyBoxShadowColor};   
        }`;
    }
    
    if(params.stickyColorLogo) {
        output += `
        .header.is-visible .logo {
               color: ${params.stickyColorLogo} !important;
        }`;
    }
    
    if(params.stickyColorMenu) {
        output += `
        .navbar__menu.is-sticky li a,
        .navbar__menu.is-sticky li span[aria-haspopup="true"], 
        .navbar__menu.is-sticky li span,
        .navbar__menu.is-sticky > li:hover > a,
        .navbar__menu.is-sticky > li:hover > span[aria-haspopup="true"]  {
               color: ${params.stickyColorMenu};
        }`;
    }

    if(params.stickyHoverColorMenu) {
        output += `
       .navbar__menu.is-sticky li a:active,
       .navbar__menu.is-sticky li a:focus,
       .navbar__menu.is-sticky li a:hover,
       .navbar__menu.is-sticky li span[aria-haspopup="true"]:active,
       .navbar__menu.is-sticky li span[aria-haspopup="true"]:focus,
       .navbar__menu.is-sticky li span[aria-haspopup="true"]:hover{
               color: ${params.stickyHoverColorMenu};
        }`;
    }
    
    if(params.stickyHoverBgMenu) {
        output += `       
       .navbar__menu.is-sticky > li:hover > a,
       .navbar__menu.is-sticky > li:hover > span[aria-haspopup="true"]  {
               background: ${params.stickyHoverBgMenu};         
        }`;
    }
    
    if(params.mobilemenuBg !== '#83B692') {
        output += `
        .navbar_mobile_overlay {
               background: ${params.mobilemenuBg};
        }

        .navbar_mobile_sidebar {
               background: ${params.mobilemenuBg};
        }`;
    }

    if(params.mobilemenuLinkColor !== '#FFFFFF') {
        output += `
       .navbar_mobile_overlay .navbar__menu li a,
       .navbar_mobile_overlay .navbar__menu li span {
               color: ${params.mobilemenuLinkColor};
       }

       .navbar_mobile_overlay .navbar__menu li a[aria-haspopup="true"]::after,
       .navbar_mobile_overlay .navbar__menu li span[aria-haspopup="true"]::after {
               border-color: ${params.mobilemenuLinkColor} transparent transparent transparent;
       }

       .navbar_mobile_sidebar .navbar__menu li a,
       .navbar_mobile_sidebar .navbar__menu li span {
               color: ${params.mobilemenuLinkColor};
       }

       .navbar_mobile_sidebar .navbar__menu li a[aria-haspopup="true"]::after,
       .navbar_mobile_sidebar .navbar__menu li span[aria-haspopup="true"]::after {
               border-color: ${params.mobilemenuLinkColor} transparent transparent transparent;
        }`;
    }
    
    if(params.mobilemenuLinkHoverColor !== '#FFFFFF') {
        output += `       
       .navbar_mobile_overlay .navbar__menu li a:active,
       .navbar_mobile_overlay .navbar__menu li a:focus,
       .navbar_mobile_overlay .navbar__menu li a:hover,
       .navbar_mobile_overlay .navbar__menu li span:active,
       .navbar_mobile_overlay .navbar__menu li span:focus,
       .navbar_mobile_overlay .navbar__menu li span:hover {
               color: ${params.mobilemenuLinkHoverColor}; 
       }

       .navbar_mobile_sidebar .navbar__menu li a:active,
       .navbar_mobile_sidebar .navbar__menu li a:focus,
       .navbar_mobile_sidebar .navbar__menu li a:hover,
       .navbar_mobile_sidebar .navbar__menu li span:active,
       .navbar_mobile_sidebar .navbar__menu li span:focus,
       .navbar_mobile_sidebar .navbar__menu li span:hover {
               color: ${params.mobilemenuLinkHoverColor};
        }`;
    }
    
    
    if(params.pageWidth !== '63rem') {
        output += `     
         .wrapper {
                max-width: ${params.pageWidth};
         }

         .hero__inner {
               max-width: ${params.pageWidth};
         }

          .page__item {
               max-width: ${params.pageWidth}; 
         }
         
         .page__item-image--wide {
               max-width: ${params.pageWidth}; 
         }

         .header--narrow > div  {
               max-width: ${params.pageWidth};
         }

         .search__overlay--narrow > div{
               max-width: ${params.pageWidth};
         }
         .gallery-wrapper--wide .gallery {
              max-width: calc(${params.pageWidth} + 0.5666666667rem);       
         }`;
   } 
    
   if(params.entryWidth !== '41rem') {
        output += `        
         .hero__inner p {
               max-width: ${params.entryWidth};
        }

        .page__item > div {
               max-width: ${params.entryWidth};  
        }

        .page__grid {
                grid-template-columns: repeat(auto-fit, minmax(calc(${params.entryWidth} / 2), 1fr));
        }

        .post__inner {
                max-width: ${params.entryWidth};
        }`;
   } 
    
   if(params.heroOverlay === 'color') {
      if(params.heroOverlayColor) {
        output += `
           .hero__image--overlay::after { 
                  background: ${params.heroOverlayColor};
           }`;
       }
   }
    
   if(params.heroOverlay === 'gradient') {
      if(params.heroOverlayGradientDirection !== 'bottom' || params.heroOverlayGradient) {
        output += `
           .hero__image--overlay::after {              
                  background: linear-gradient(to ${params.heroOverlayGradientDirection}, ${params.heroOverlayGradient}, transparent);
           }`;
       }
   }
   
   if(params.heroHeight !== '51rem') {
        output += `
           @media all and (min-width: 37.5em) {
                  .hero {
                      height: ${params.heroHeight};
                  }
           }

           @media all and (min-width: 37.5em) {
                  .hero__wrapper {
                      height: ${params.heroHeight};
                  }
        }`;
   }
    
    if(params.heroBackground !== '#83B692') {
        output += `
        .header--flat-no-hero {
                background: ${params.heroBackground};
        }

        .hero {
               background: ${params.heroBackground};
        }

        .main::before {
               background: ${params.heroBackground};
        }`;
    }
   
    if(params.heroColorHeadings !== '#FFFFFF') {
        output += `
        .hero__inner h1,
        .hero__inner h2,
        .hero__inner h3,
        .hero__inner h4,
        .hero__inner h5,
        .hero__inner h6   {
               color: ${params.heroColorHeadings};
        }`;
    }
    
     if(params.heroColorText !== '#FFFFFF') {
        output += `
        .hero__inner > *  {
               color: ${params.heroColorText};
        }`;
    }
    
    if(params.heroColorLink !== '#FFFFFF') {
        output += `
        .hero__inner a  {
               color: ${params.heroColorLink};
        }`;
    }
    
    if(params.heroColorLinkHover !== '#FFFFFF') {
        output += `
        .hero__inner a:hover   {
               color: ${params.heroColorLinkHover};
        }

        .hero__inner a:active   {
               color: ${params.heroColorLinkHover};
        }

        .hero__inner a:focus   {
               color: ${params.heroColorLinkHover};
        }`;
    }
    
    if(params.heroColorButtonText || params.heroColorButtonBackground) {
        output += `
        .hero__button {
               background: ${params.heroColorButtonBackground} !important;
               border-color: ${params.heroColorButtonBackground} !important;
               color: ${params.heroColorButtonText} !important;
        }`;
    }
    
    if(params.paginationAlign !== 'left') {
        output += `
        .pagination {
               text-align: ${params.paginationAlign};
        }`;
    }
    
    if(params.bottomNewsBackground !== '#F3F0E2' || params.bottomNewsColorText !== '#6C6C6F') {
        output += `
        .bottom-news {
               background: ${params.bottomNewsBackground};
               color: ${params.bottomNewsColorText};
        }`;
    }
    
    if(params.bottomNewsColorLink !== '#2C2A29') {
        output += `
        .bottom-news h3 a   {
               color: ${params.bottomNewsColorLink};
        }`;
    }
    
    if(params.bottomNewsColorLogoHover !== '#DE6B48') {
        output += `
        .bottom-news h3 a:hover,
        .bottom-news h3 a:active,
        .bottom-news h3 a:focus {
               color: ${params.bottomNewsColorLogoHover} ;
        }`;
    }
    
    if(params.footerBackground !== '#F3F0E2' || params.footerColorText !== '#6C6C6F') {
        output += `
        .footer {
               background: ${params.footerBackground};
               color: ${params.footerColorText};
        }

        .footer__social a > svg {
               fill: ${params.footerColorText};
        }`;
    }
   
    if(params.footerColorLogo !== '#6C6C6F') {
        output += `
        .footer__logo   {
               color: ${params.footerColorLogo} !important;
        }`;
    }
    
    if(params.footerColorLogoHover !== '#DE6B48') {
        output += `
        .footer__logo:hover,
        .footer__logo:active,
        .footer__logo:focus {
               color: ${params.footerColorLogoHover} !important;
        }`;
    }
    
    if(params.footerColorLink !== '#6C6C6F') {
        output += `
        .footer a  {
               color: ${params.footerColorLink};
        }

        .footer__nav li::after {
               color: ${params.footerColorLink};
        }`;
    }
    
    if(params.footerColorLinkHover !== '#DE6B48') {
        output += `
        .footer a:hover,
        .footer a:active,
        .footer a:focus {
               color: ${params.footerColorLinkHover};
        
        }`;
    }
   
    if(params.dividerWidth !== '20') {
        output += `
        .divider::after {
               width: ${params.dividerWidth}%;
        }`;
    }
   
    if(params.dividerColor !== '#2C2A29') {
        output += `
        .divider::after {
               color: ${params.dividerColor};
        }

        .divider--line::after {
               border-color: ${params.dividerColor};
        }

        .divider--doubleline::after {
               border-color: ${params.dividerColor};
        }

        .divider--dottedline::after {
               border-color: ${params.dividerColor};
        }

        .divider--fadingline::after {
               background-image: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(${params.dividerColor}), to(transparent));
               background-image: -webkit-linear-gradient(left, transparent, ${params.dividerColor}, transparent);
               background-image: -o-linear-gradient(left, transparent, ${params.dividerColor}, transparent);
               background-image: linear-gradient(left, transparent, ${params.dividerColor}, transparent);
        }

        .divider--wave::after {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='utf-8'?%3e%3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 7 4' xml:space='preserve'%3e%3cpath d='M0,3h1v1H0V3z M1,3H0v1h1V3L1,3z M1,3h1V2H1V3z M2,2H1v1h1V2L2,2z M0,4h1V3H0V4z M1,3H0v1h1V3L1,3z M2,2h1V1H2V2z M3,1H2v1 h1V1L3,1z M3,0v1h1V0H3z M4,0H3v1h1V0L4,0z M4,1v1h1V1H4z M5,1H4v1h1V1L5,1z M5,2v1h1V2H5z M6,2H5v1h1V2L6,2z M6,3v1h1V3H6z M7,3H6 v1h1V3L7,3z' fill='${params.dividerColor.replace('#', '%23')}' /%3e%3c/svg%3e ");
        }

        .divider--decorative-1::after {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 46 2'%3e%3cpath d='M25.54.86v.28h0a3.92,3.92,0,0,0-1.27.29c-.68.28-.82.57-1.27.57s-.6-.29-1.27-.57a3.62,3.62,0,0,0-1.29-.28.63.63,0,0,1-1.23,0h-.13a2.12,2.12,0,0,0-1.34.71.14.14,0,0,1-.16,0,5.44,5.44,0,0,0-1.81-.39C11.32,1.14.14,1.14.14,1.14a.14.14,0,1,1,0-.28S11.32.86,15.77.5A5.44,5.44,0,0,0,17.58.11a.14.14,0,0,1,.16,0,2,2,0,0,0,.5.42,1.89,1.89,0,0,0,.84.29h.13a.63.63,0,0,1,1.23,0A3.62,3.62,0,0,0,21.73.57C22.4.29,22.54,0,23,0s.59.29,1.27.57a3.92,3.92,0,0,0,1.27.29Zm20.32,0S34.68.86,30.23.5A5.44,5.44,0,0,1,28.42.11a.14.14,0,0,0-.16,0,2,2,0,0,1-.5.42,1.89,1.89,0,0,1-.84.29h-.13A.63.63,0,0,0,25.54,1a.63.63,0,0,0,1.25.14h.13a2.12,2.12,0,0,1,1.34.71.14.14,0,0,0,.16,0,5.44,5.44,0,0,1,1.81-.39c4.45-.36,15.63-.36,15.63-.36a.14.14,0,0,0,0-.28Z' fill='${params.dividerColor.replace('#', '%23')}' /%3e%3c/svg%3e"); 
        }

        .divider--decorative-2::after {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 76 6'%3e%3cpath class='cls-1' d='M50,3A2.5,2.5,0,1,1,47.5.5,2.5,2.5,0,0,1,50,3Zm6-2a2,2,0,1,0,2,2A2,2,0,0,0,56,1Zm7.5.5A1.5,1.5,0,1,0,65,3,1.5,1.5,0,0,0,63.5,1.5ZM70,2a1,1,0,1,0,1,1A1,1,0,0,0,70,2Zm5.5.5A.5.5,0,1,0,76,3,.5.5,0,0,0,75.5,2.5ZM38,0a3,3,0,1,0,3,3A3,3,0,0,0,38,0ZM28.5.5A2.5,2.5,0,1,0,31,3,2.5,2.5,0,0,0,28.5.5ZM20,1a2,2,0,1,0,2,2A2,2,0,0,0,20,1Zm-7.5.5A1.5,1.5,0,1,0,14,3,1.5,1.5,0,0,0,12.5,1.5ZM6,2A1,1,0,1,0,7,3,1,1,0,0,0,6,2ZM.5,2.5a.5.5,0,0,0,0,1,.5.5,0,0,0,0-1Z' fill='${params.dividerColor.replace('#', '%23')}' /%3e%3c/svg%3e");
        }`;
    }
    
    if(params.gridColumns !== '2' || params.gridGap !== '2rem 3rem') {
        output += `
        .page__grid {              
               grid-gap: ${params.gridGap};
        }

        @media all and (min-width: 75em) {
               .page__grid {
                       grid-template-columns: repeat(${params.gridColumns}, 1fr);
               }        
        }`;
    }
    
    if(params.listingFeaturedImageBorderRadius !== '0') {
        output += `   
         .page__item-image {
               border-radius: ${params.listingFeaturedImageBorderRadius}px; 
        }`;    	 
    }
    
    
    if(params.galleryItemGap !== '0.28333rem') {
        output += `   
         .gallery__item {
               padding: ${params.galleryItemGap}; 
         } 

         .gallery {   
               margin: calc(1.7rem + 1vw) -${params.galleryItemGap}; 
        }`;    	 
    }

    if(params.galleryZoom !== true) {
       output += `   
       .pswp--zoom-allowed .pswp__img {
           cursor: default !important  
       }`;    	 
   }
    
    if(params.search) {
        output += ` 
         .search-page table { 
               border: none;
               margin: 0;
         }

         .search-page table td { 
               border: none;
               padding: 0;
         }

         .gsc-above-wrapper-area-container,
         .gsc-table-result {
               display: inline-table;
               margin-top: 0;
               white-space: normal;
         }

         .cse .gsc-control-cse, .gsc-control-cse {
               padding: 0 !important;
         }

         .gsc-thumbnail-inside,
         .gsc-url-top {
               padding: 0 !important;
         }

         .gsc-control-cse, .gsc-control-cse .gsc-table-result {
               font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;  
               font-size: 0.8888rem !important;
         }

         .gs-title  {                 
               height: auto !important; 
               text-decoration: none !important; 
         }

         .gsc-result{
               border-bottom: 1px solid #E9E9E9 !important; 
               padding: calc(1.06667rem + 0.25vw) 0 !important; 
 
        }`;    	 
    }	

	
    if(params.lazyLoadEffect === 'fadein') {
       output += ` 
        img[loading] {
              opacity: 0;
        }

        img.is-loaded {
              opacity: 1;
              transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
        }`;    	 
   } 

 return output;
}

module.exports = generateOverride;
