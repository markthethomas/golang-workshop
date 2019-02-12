package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type respsonse struct {
	received map[string]interface{}
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/echo", func(w http.ResponseWriter, r *http.Request) {
		received := map[string]interface{}{}
		json.NewDecoder(r.Body).Decode(&received)
		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(&received); err != nil {
			error 
			w.WriteHeader(http.StatusInternalServerError)
			w.Write()
		}
	})
	log.Println("Runnning JSON echo server...")
	http.ListenAndServe(":3000", mux)
}
