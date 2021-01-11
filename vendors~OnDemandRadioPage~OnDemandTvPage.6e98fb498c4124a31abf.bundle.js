(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1453:function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_base_browser_esm=__webpack_require__(5),react=__webpack_require__(0),react_default=__webpack_require__.n(react),colours=__webpack_require__(3),spacings=__webpack_require__(2),prop_types=__webpack_require__(1),scripts=__webpack_require__(104);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var EpisodeContext=react_default.a.createContext({}),helpers_withEpisodeContext=function withEpisodeContext(Component){return function(props){return react_default.a.createElement(EpisodeContext.Consumer,null,(function(context){return react_default.a.createElement(Component,_extends({},context,props))}))}},tail=__webpack_require__(848),tail_default=__webpack_require__.n(tail),breakpoints=__webpack_require__(4),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),omit=__webpack_require__(757),omit_default=__webpack_require__.n(omit),mediaIcons=__webpack_require__(1441),typography=__webpack_require__(15),font_styles=__webpack_require__(16),esm=__webpack_require__(280);function Image_extends(){return(Image_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var Wrapper=Object(styled_base_browser_esm.a)("div",{target:"e148g7az0",label:"Wrapper"})("display:inline-block;position:relative;width:4.375rem;",(function(_ref){var dir=_ref.dir;return"margin-".concat("ltr"===dir?"right":"left",": ").concat(spacings.e,";")})," @media (min-width:",breakpoints.e,"){width:7.5rem;}@media (min-width:",breakpoints.g,"){",(function(_ref2){var dir=_ref2.dir;return"margin-".concat("ltr"===dir?"right":"left",": ").concat(spacings.f,";")})," width:14.375rem;}"),PlayWrapper=helpers_withEpisodeContext(Object(styled_base_browser_esm.a)("div",{target:"e148g7az1",label:"PlayWrapper"})("background-color:",colours.g,";padding:",spacings.g,";@media (min-width:",breakpoints.e,"){padding:",spacings.e,";}svg{margin:0 0 1px 0;height:0.6rem;width:0.7rem;color:",colours.s,";}@media (min-width:",breakpoints.e,"){position:absolute;bottom:0;}")),DurationWrapper=helpers_withEpisodeContext(Object(styled_base_browser_esm.a)("span",{target:"e148g7az2",label:"DurationWrapper"})((function(_ref3){var script=_ref3.script;return Object(typography.n)(script)})," ",(function(_ref4){var service=_ref4.service;return Object(font_styles.b)(service)})," color:",colours.s,";",(function(_ref5){return"rtl"===_ref5.dir?"padding: 0 ".concat(spacings.g," 0 0;"):"padding: 0 0 0 ".concat(spacings.g,";")}),"")),StyledImage=Object(styled_base_browser_esm.a)("img",{target:"e148g7az3",label:"StyledImage"})({name:"8atqhb",styles:"width:100%;"}),Image_EpisodeImage=function EpisodeImage(props){var duration=props.duration,alt=props.alt,dir=props.dir,selectImgProps=omit_default()(["alt","duration","classname","script","service","darkMode"]);return react_default.a.createElement(Wrapper,{dir:dir},react_default.a.createElement(esm.a,{ratio:56.25},react_default.a.createElement(StyledImage,Image_extends({alt:alt},selectImgProps(props)))),react_default.a.createElement(PlayWrapper,{"aria-hidden":"true"},mediaIcons.a.video,duration&&react_default.a.createElement(DurationWrapper,null,duration)))};Image_EpisodeImage.propTypes={alt:prop_types.string,duration:prop_types.string,dir:prop_types.string.isRequired},Image_EpisodeImage.defaultProps={alt:"",duration:""};var Image=helpers_withEpisodeContext(Image_EpisodeImage),Episode_Wrapper=Object(styled_base_browser_esm.a)("div",{target:"emzt7w80",label:"Wrapper"})("position:relative;",(function(_ref){var showMediaIndicator=_ref.showMediaIndicator,dir=_ref.dir;return showMediaIndicator&&"padding-".concat("ltr"===dir?"left":"right",": 4rem;")}),""),TextWrapper=Object(styled_base_browser_esm.a)("div",{target:"emzt7w81",label:"TextWrapper"})("display:inline-block;max-width:calc(100% - 4.375rem - ",spacings.f,");vertical-align:top;@media (min-width:",breakpoints.e,"){max-width:calc(100% - 7.5rem - ",spacings.f,");}@media (min-width:",breakpoints.g,"){max-width:calc(100% - 14.375rem - ",spacings.f,");}"),Episode_Episode=function Episode(_ref2){var children=_ref2.children,dir=_ref2.dir,showMediaIndicator=pathOr_default()({},"0",children).type!==Image;return react_default.a.createElement(Episode_Wrapper,{dir:dir,showMediaIndicator:showMediaIndicator},showMediaIndicator?react.Children.toArray(children).filter(Boolean).map((function(child){return Object(react.cloneElement)(child,{showMediaIndicator:showMediaIndicator})})):react_default.a.createElement(react_default.a.Fragment,null,Object(react.cloneElement)(children[0],{dir:dir}),react_default.a.createElement(TextWrapper,null,tail_default()(children))))};Episode_Episode.propTypes={children:prop_types.node.isRequired,dir:prop_types.string.isRequired};var esm_Episode=helpers_withEpisodeContext(Episode_Episode),MediaIndicator_Wrapper=Object(styled_base_browser_esm.a)("div",{target:"eoc8x1d0",label:"Wrapper"})("display:inline-block;width:",(function(props){return props.size}),";height:",(function(props){return props.size}),";"),MediaIndicator_MediaIndicator=function MediaIndicator(_ref){var size=_ref.size;return react_default.a.createElement(MediaIndicator_Wrapper,{"aria-hidden":"true",size:size,dangerouslySetInnerHTML:{__html:'\n      <svg class="rounded-play-button" focusable="false" width='.concat(size,' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">\n        <path class="rounded-play-button__inner" fill="transparent" d="M20,0C8.971,0,0,8.972,0,20c0,11.028,8.972,20,20,20c11.029,0,20.002-8.972,20.002-20C40.002,8.972,31.028,0,20,0z\n        M15.799,26.939V13.078l11.264,6.93L15.799,26.939z"/>\n        <path class="rounded-play-button__ring" fill="currentColor" d="M20,40C8.971,40,0,31.028,0,20C0,8.972,8.971,0,20,0c11.029,0,20.002,8.972,20.002,20C40.002,31.028,31.028,40,20,40z\n        M20,1.765C9.945,1.765,1.764,9.945,1.764,20S9.945,38.234,20,38.234c10.056,0,18.237-8.18,18.237-18.234S30.056,1.765,20,1.765z"/>\n        <polygon class="rounded-play-button__triangle" fill="currentColor" points="15.799,26.939 27.062,20.008 15.799,13.078 "/>\n      </svg>\n      ')}})};MediaIndicator_MediaIndicator.propTypes={size:prop_types.string.isRequired};var esm_MediaIndicator=MediaIndicator_MediaIndicator;function Link_extends(){return(Link_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var MediaIndicatorWrapper=Object(styled_base_browser_esm.a)("div",{target:"extg57c0",label:"MediaIndicatorWrapper"})("position:absolute;",(function(_ref){var dir=_ref.dir;return"".concat("ltr"===dir?"left":"right",": 0.5rem;")})," top:0;"),StyledAnchor=Object(styled_base_browser_esm.a)("a",{target:"extg57c1",label:"StyledAnchor"})(":before{position:absolute;top:0;bottom:0;left:0;right:0;content:'';overflow:hidden;z-index:1;}line-height:0;text-decoration:none;.rounded-play-button__ring,.rounded-play-button__triangle{color:#000;}&:focus,&:hover{[class*='--hover']{text-decoration:underline;}.rounded-play-button__ring,.rounded-play-button__inner{fill:currentColor;color:",colours.o,";}.rounded-play-button__triangle{fill:transparent;}}&:visited{[class*='--visited']{color:",(function(_ref2){return _ref2.darkMode?colours.r:colours.l}),";}}"),Link_Link=function Link(_ref3){var children=_ref3.children,showMediaIndicator=_ref3.showMediaIndicator,dir=_ref3.dir,props=_objectWithoutProperties(_ref3,["children","showMediaIndicator","dir"]);return react_default.a.createElement(StyledAnchor,Link_extends({showMediaIndicator:showMediaIndicator},props),showMediaIndicator&&react_default.a.createElement(MediaIndicatorWrapper,{dir:dir},react_default.a.createElement(esm_MediaIndicator,{size:"2.5rem"})),react_default.a.createElement("span",{role:"text"},children))};Link_Link.propTypes={children:prop_types.node.isRequired,dir:prop_types.string.isRequired,showMediaIndicator:prop_types.bool},Link_Link.defaultProps={showMediaIndicator:!1};var esm_Link=helpers_withEpisodeContext(Link_Link),esm_Title=helpers_withEpisodeContext(Object(styled_base_browser_esm.a)("span",{target:"e1bh4kp50",label:"Title"})((function(_ref){var script=_ref.script;return Object(typography.p)(script)})," ",(function(_ref2){var service=_ref2.service;return Object(font_styles.b)(service)})," color:",(function(_ref3){return _ref3.darkMode?colours.s:colours.g}),";display:inline-block;width:100%;font-weight:700;")),esm_Description=helpers_withEpisodeContext(Object(styled_base_browser_esm.a)("span",{target:"eapxui60",label:"Description"})((function(_ref){var script=_ref.script;return Object(typography.m)(script)})," ",(function(_ref2){var service=_ref2.service;return Object(font_styles.b)(service)})," color:",(function(_ref3){return _ref3.darkMode?colours.s:colours.g}),";display:inline-block;width:100%;margin:",spacings.g," 0;")),borderStyling="\n  padding-left: ".concat(spacings.e,";\n  margin-left: ").concat(spacings.e,";\n  border-left: 0.0625rem solid ").concat(colours.b,";\n"),esm_Metadata=helpers_withEpisodeContext(Object(styled_base_browser_esm.a)("span",{target:"eevk8w0",label:"Metadata"})((function(_ref){var script=_ref.script;return Object(typography.h)(script)})," ",(function(_ref2){var service=_ref2.service;return Object(font_styles.b)(service)})," color:",(function(_ref3){return _ref3.darkMode?colours.n:colours.l}),";",(function(_ref4){return _ref4.hasBorder&&borderStyling}),""));function esm_extends(){return(esm_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var StyledEpisodeList=Object(styled_base_browser_esm.a)("ul",{target:"e11bfr940",label:"StyledEpisodeList"})({name:"1rvtlej",styles:"list-style:none;padding:0;margin:0;"}),StyledEpisodeListItem=Object(styled_base_browser_esm.a)("li",{target:"e11bfr941",label:"StyledEpisodeListItem"})("padding:",spacings.f," 0;line-height:0;&:first-child{padding-top:0;}&:last-child{padding-bottom:0;}&:not(:last-child){border-bottom:1px ",colours.b," solid;}"),esm_EpisodeList=function EpisodeList(_ref){var children=_ref.children,script=_ref.script,service=_ref.service,dir=_ref.dir,darkMode=_ref.darkMode,ulProps=_ref.ulProps,liProps=_ref.liProps;if(!children.length)return null;var hasMultipleChildren=children.length>1;return react_default.a.createElement(EpisodeContext.Provider,{value:{script:script,service:service,dir:dir,darkMode:darkMode}},hasMultipleChildren?react_default.a.createElement(StyledEpisodeList,esm_extends({role:"list"},ulProps),children.map((function(child){return react_default.a.createElement(StyledEpisodeListItem,esm_extends({key:child.key},liProps),child)}))):children)};esm_EpisodeList.propTypes={children:Object(prop_types.arrayOf)(prop_types.element),script:Object(prop_types.shape)(scripts.a).isRequired,service:prop_types.string.isRequired,dir:Object(prop_types.oneOf)(["ltr","rtl"]),darkMode:prop_types.bool,ulProps:Object(prop_types.shape)({}),liProps:Object(prop_types.shape)({})},esm_EpisodeList.defaultProps={children:[],dir:"ltr",darkMode:!1,ulProps:{},liProps:{}},esm_EpisodeList.Episode=esm_Episode,esm_EpisodeList.Link=esm_Link,esm_EpisodeList.Title=esm_Title,esm_EpisodeList.Image=Image,esm_EpisodeList.MediaIndicator=esm_MediaIndicator,esm_EpisodeList.Description=esm_Description,esm_EpisodeList.Metadata=esm_Metadata;__webpack_exports__.a=esm_EpisodeList}}]);
//# sourceMappingURL=vendors~OnDemandRadioPage~OnDemandTvPage.6e98fb498c4124a31abf.bundle.js.map