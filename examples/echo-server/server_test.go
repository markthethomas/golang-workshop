package main

import (
	"bytes"
	"log"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestEchoPost(t *testing.T) {
	jsonStr := []byte(`{}`)
	req, err := http.NewRequest("POST", "/echo", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(JSONEcho)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
	expected := `{}` + "\n" // weird but the response body has a newline; probably due to the JSON encode/decode
	if strings.Compare(rr.Body.String(), string(expected)) != 0 {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}

func TestEchoGET(t *testing.T) {
	req, err := http.NewRequest("GET", "/echo", nil)
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(JSONEcho)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusBadRequest {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusBadRequest)
	}
	expected := `Error; invalid method. Use POST`
	if strings.Compare(rr.Body.String(), expected) != 0 {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}

func TestEchoBadInput(t *testing.T) {
	jsonStr := []byte(`{"bad":"bad JSON!!!"`)
	req, err := http.NewRequest("POST", "/echo", bytes.NewBuffer(jsonStr))
	if err != nil {
		log.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(JSONEcho)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusBadRequest {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusBadRequest)
	}
	expected := "Error; invalid JSON received"
	if rr.Body.String() != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}
