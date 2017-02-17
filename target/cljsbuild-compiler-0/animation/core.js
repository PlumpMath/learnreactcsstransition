// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('animation.core');
goog.require('cljs.core');
goog.require('reagent.core');
animation.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$items,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$items_DASH_counter,(0)], null));
animation.core.css_transition_group = reagent.core.adapt_react_class(React.addons.CSSTransitionGroup);
animation.core.style = "li {\n  background-color: #44ee22; padding: 10px; margin: 1px; width: 150px;\n  border-radius: 5px;\n  font-size: 24px;\n  text-align: center;\n  list-style: none;\n  color: #fff;\n  height: 2em;\n  line-height: 2em;\n  padding: 0 0.5em;\n  overflow: hidden;\n  }\n\n  .foo-enter {\n  height: 0;\n  transition: height 0.27s ease-out;\n  }\n\n  .foo-leave {\n  height: 0;\n  transition: height 0.27s ease-out;\n  }\n\n  .foo-enter-active {\n  height: 2em;\n  opacity: 1;\n  }";
animation.core.add_item = (function animation$core$add_item(){
var items = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(animation.core.app_state) : cljs.core.deref.call(null,animation.core.app_state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(animation.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items_DASH_counter], null),cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(animation.core.app_state,cljs.core.assoc,cljs.core.cst$kw$items,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.cst$kw$items_DASH_counter.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(animation.core.app_state) : cljs.core.deref.call(null,animation.core.app_state)))));
});
animation.core.delete_item = (function animation$core$delete_item(){
var items = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(animation.core.app_state) : cljs.core.deref.call(null,animation.core.app_state)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(animation.core.app_state,cljs.core.assoc,cljs.core.cst$kw$items,cljs.core.vec(cljs.core.butlast(items)));
});
animation.core.home = (function animation$core$home(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str("Total list items to date:  "),cljs.core.str(cljs.core.cst$kw$items_DASH_counter.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(animation.core.app_state) : cljs.core.deref.call(null,animation.core.app_state))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return animation.core.add_item();
})], null),"add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return animation.core.delete_item();
})], null),"delete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,animation.core.style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [animation.core.css_transition_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition_DASH_name,"foo"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str("List Item "),cljs.core.str(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
}),cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(animation.core.app_state) : cljs.core.deref.call(null,animation.core.app_state))))], null)], null)], null);
});
animation.core.main = (function animation$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [animation.core.home], null),document.getElementById("app"));
});
goog.exportSymbol('animation.core.main', animation.core.main);
