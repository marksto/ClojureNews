// Compiled by ClojureScript 1.8.51 {}
goog.provide('view.list.newest');
goog.require('cljs.core');
goog.require('util.view');
goog.require('cljc.page_util');

view.list.newest.component_list_newest = (function view$list$newest$component_list_newest(entries,page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"itemlist",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"cellPadding","cellPadding",1918354169),"0",new cljs.core.Keyword(null,"cellSpacing","cellSpacing",-1305647157),"0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var page_as_int = window.parseInt(page);
var counter = cljs.core.atom.call(null,((page_as_int - (1)) * cljc.page_util.data_per_page));
var x__24827__auto__ = (function (){var iter__24773__auto__ = ((function (page_as_int,counter){
return (function view$list$newest$component_list_newest_$_iter__27588(s__27589){
return (new cljs.core.LazySeq(null,((function (page_as_int,counter){
return (function (){
var s__27589__$1 = s__27589;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27589__$1);
if(temp__4657__auto__){
var s__27589__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27589__$2)){
var c__24771__auto__ = cljs.core.chunk_first.call(null,s__27589__$2);
var size__24772__auto__ = cljs.core.count.call(null,c__24771__auto__);
var b__27591 = cljs.core.chunk_buffer.call(null,size__24772__auto__);
if((function (){var i__27590 = (0);
while(true){
if((i__27590 < size__24772__auto__)){
var entry = cljs.core._nth.call(null,c__24771__auto__,i__27590);
cljs.core.chunk_append.call(null,b__27591,(function (){var x__24827__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"athing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"title",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rank"], null),[cljs.core.str(cljs.core.swap_BANG_.call(null,counter,cljs.core.inc)),cljs.core.str(".")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votelinks",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),(cljs.core.truth_(view.list.newest.owner_QMARK_.call(null,entry,entries))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5fba7d"], null),"*"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/s.gif",new cljs.core.Keyword(null,"height","height",1025178622),"1",new cljs.core.Keyword(null,"width","width",-384071477),"14"], null)], null)], null):(cljs.core.truth_(view.list.newest.upvoted_QMARK_.call(null,entry,entries))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votearrow",new cljs.core.Keyword(null,"title","title",636505583),"upvote"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("id-upvote-"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"myClickableThingy",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visiblity","visiblity",46519839),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votearrow",new cljs.core.Keyword(null,"title","title",636505583),"upvote"], null)], null)], null)], null)
))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"deadmark"], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry),"story"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(entry)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/ask/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),[cljs.core.str("Ask CN: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry),"story"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sitebit comhead"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sitestr"], null),new cljs.core.Keyword(null,"pure-url","pure-url",-1569898938).cljs$core$IFn$_invoke$arity$1(entry)], null),")"], null):null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24827__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subtext"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"span",new cljs.core.Keyword(null,"class","class",-2030961996),"score"], null),util.view.generate_upvote_status.call(null,new cljs.core.Keyword(null,"upvote","upvote",1296279834).cljs$core$IFn$_invoke$arity$1(entry)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/user/"),cljs.core.str(new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(entry)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"age"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),util.view.generate_age_status.call(null,new cljs.core.Keyword(null,"created-date","created-date",929108256).cljs$core$IFn$_invoke$arity$1(entry))], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),util.view.generate_comment_status.call(null,new cljs.core.Keyword(null,"number-of-comments","number-of-comments",-1899004397).cljs$core$IFn$_invoke$arity$1(entry))], null),(cljs.core.truth_(view.list.newest.owner_QMARK_.call(null,entry,entries))?cljs.core._conj.call(null,(function (){var x__24827__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str("/edit/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),"edit"], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__24827__auto____$2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str("/delete/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),"delete"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24827__auto____$2);
})()," | "),x__24827__auto____$1);
})()," | "):null)], null)], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24827__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"spacer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"7"], null)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24827__auto____$2);
})(),x__24827__auto____$1);
})(),x__24827__auto__);
})());

var G__27592 = (i__27590 + (1));
i__27590 = G__27592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27591),view$list$newest$component_list_newest_$_iter__27588.call(null,cljs.core.chunk_rest.call(null,s__27589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27591),null);
}
} else {
var entry = cljs.core.first.call(null,s__27589__$2);
return cljs.core.cons.call(null,(function (){var x__24827__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"athing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"title",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rank"], null),[cljs.core.str(cljs.core.swap_BANG_.call(null,counter,cljs.core.inc)),cljs.core.str(".")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votelinks",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),(cljs.core.truth_(view.list.newest.owner_QMARK_.call(null,entry,entries))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5fba7d"], null),"*"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/s.gif",new cljs.core.Keyword(null,"height","height",1025178622),"1",new cljs.core.Keyword(null,"width","width",-384071477),"14"], null)], null)], null):(cljs.core.truth_(view.list.newest.upvoted_QMARK_.call(null,entry,entries))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votearrow",new cljs.core.Keyword(null,"title","title",636505583),"upvote"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("id-upvote-"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"myClickableThingy",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visiblity","visiblity",46519839),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votearrow",new cljs.core.Keyword(null,"title","title",636505583),"upvote"], null)], null)], null)], null)
))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"deadmark"], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry),"story"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(entry)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/ask/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),[cljs.core.str("Ask CN: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry),"story"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sitebit comhead"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sitestr"], null),new cljs.core.Keyword(null,"pure-url","pure-url",-1569898938).cljs$core$IFn$_invoke$arity$1(entry)], null),")"], null):null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24827__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subtext"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"span",new cljs.core.Keyword(null,"class","class",-2030961996),"score"], null),util.view.generate_upvote_status.call(null,new cljs.core.Keyword(null,"upvote","upvote",1296279834).cljs$core$IFn$_invoke$arity$1(entry)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/user/"),cljs.core.str(new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(entry)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"age"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),util.view.generate_age_status.call(null,new cljs.core.Keyword(null,"created-date","created-date",929108256).cljs$core$IFn$_invoke$arity$1(entry))], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),util.view.generate_comment_status.call(null,new cljs.core.Keyword(null,"number-of-comments","number-of-comments",-1899004397).cljs$core$IFn$_invoke$arity$1(entry))], null),(cljs.core.truth_(view.list.newest.owner_QMARK_.call(null,entry,entries))?cljs.core._conj.call(null,(function (){var x__24827__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str("/edit/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),"edit"], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__24827__auto____$2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str("/delete/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry))].join('')], null),"delete"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24827__auto____$2);
})()," | "),x__24827__auto____$1);
})()," | "):null)], null)], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24827__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"spacer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"7"], null)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24827__auto____$2);
})(),x__24827__auto____$1);
})(),x__24827__auto__);
})(),view$list$newest$component_list_newest_$_iter__27588.call(null,cljs.core.rest.call(null,s__27589__$2)));
}
} else {
return null;
}
break;
}
});})(page_as_int,counter))
,null,null));
});})(page_as_int,counter))
;
return iter__24773__auto__.call(null,new cljs.core.Keyword(null,"newest-entry","newest-entry",200989318).cljs$core$IFn$_invoke$arity$1(entries));
})();
return cljs.core._conj.call(null,(function (){var x__24827__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"spacer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10"], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24827__auto____$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"more?","more?",519437444).cljs$core$IFn$_invoke$arity$1(entries))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/new/p/"),cljs.core.str((page_as_int + (1)))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"morelink",new cljs.core.Keyword(null,"rel","rel",1378823488),"nofollow"], null),"More"], null)], null)], null):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24827__auto____$2);
})(),x__24827__auto____$1);
})(),x__24827__auto__);
})()], null)], null);
});
view.list.newest.owner_QMARK_ = (function view$list$newest$owner_QMARK_(entry,entries){
return util.view.in_QMARK_.call(null,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"newest-own-entries","newest-own-entries",973063281).cljs$core$IFn$_invoke$arity$1(entries));
});
view.list.newest.upvoted_QMARK_ = (function view$list$newest$upvoted_QMARK_(entry,entries){
return util.view.in_QMARK_.call(null,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"newest-upvoted-entries","newest-upvoted-entries",1127648269).cljs$core$IFn$_invoke$arity$1(entries));
});

//# sourceMappingURL=newest.js.map