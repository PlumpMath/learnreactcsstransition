(ns animation.events
    (:require [re-frame.core :as re-frame]
              [animation.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))
