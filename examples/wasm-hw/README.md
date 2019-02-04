# Hello World

Simple app that runs the classic "Hello World" console log using wasm.

## Building

run `GOOS=js GOARCH=wasm go build -o ./static/main.wasm ./src/wasm.go`

## Serving

run `go run server.go` and visit `http://localhost:3000`
