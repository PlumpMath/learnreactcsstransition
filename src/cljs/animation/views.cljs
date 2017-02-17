(ns animation.views
    (:require [cljsjs.material-ui]
              [cljs-react-material-ui.core :as ui]
              [cljs-react-material-ui.icons :as ic]
              [reagent.core :as reagent]
              [re-frame.core :as re-frame]))

(def css-transition-group
  (reagent/adapt-react-class js/React.addons.CSSTransitionGroup))


(def style
  "li {
  background-color: #44ee22; padding: 10px; margin: 1px; width: 150px;
  border-radius: 5px;
  font-size: 24px;
  text-align: center;
  list-style: none;
  color: #fff;
  height: 2em;
  line-height: 2em;
  padding: 0 0.5em;
  overflow: hidden;
  }
  .foo-enter {
  height: 0;
  transition: height 0.27s ease-out;
  }
  .foo-leave {
  height: 0;
  transition: height 0.27s ease-out;
  }
  .foo-enter-active {
  height: 2em;
  opacity: 1;
  }")

(def app-state
  (reagent/atom {:items []
                 :items-counter 0}))

(defn add-item []
  (let [items (:items @app-state)]
    (swap! app-state update-in [:items-counter] inc)
    (swap! app-state assoc :items (conj items (:items-counter @app-state)))))

(defn delete-item []
  (let [items (:items @app-state)]
    (swap! app-state assoc :items (vec (butlast items)))))

(defn main-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div "Hello from " @name
       [:div (str "Total list items to date:  " (:items-counter @app-state))]
       [:button {:on-click #(add-item)} "add"]
       [:button {:on-click #(delete-item)} "delete"]
       [:style style]
       [:ul
        [css-transition-group {:transition-name "foo"}
         (map-indexed (fn [i x]
                        ^{:key i} [:li (str "List Item " x)])
                      (:items @app-state))]]])))





