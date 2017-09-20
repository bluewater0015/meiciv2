//index.js
import "../css/reset.less";
import "../css/common.less";
import "../css/index.less";
import { headerLoad,logoLoad,navLoad,footerLoad, } from "../../utils/common";
$( ()=>{
	headerLoad();
	footerLoad();
	logoLoad();
	navLoad();
})