package main // import "tt"

import (
	"fmt"

	"github.com/pingcap/parser"

	_ "github.com/pingcap/tidb/types/parser_driver"
)

func main() {
	sql := "select 1"

	p := parser.New()

	node, err := p.ParseOneStmt(sql, "", "")
	if err != nil {
		fmt.Printf("parse one statement error: %s", sql)
		return
	}

}
