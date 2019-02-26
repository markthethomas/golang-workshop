package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type respsonse struct {
	received map[string]interface{}
}

// JSONEcho echoes back what you send to it (in JSON format)
func JSONEcho(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Error; invalid method. Use POST"))
		return
	}
	received := map[string]interface{}{}
	if err := json.NewDecoder(r.Body).Decode(&received); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Error; invalid JSON received"))
		return
	}
	// this is overkill in some ways becuase if we can decode the JSON,
	// we *should* be able to encode it
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(&received); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Error encoding JSON in response"))
	}
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/echo", JSONEcho)
	log.Println("Runnning JSON echo...")
	http.ListenAndServe(":3000", mux)
}
