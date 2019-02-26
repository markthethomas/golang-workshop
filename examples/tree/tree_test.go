package tree

import (
	"io/ioutil"
	"os"
	"testing"
)

func TestTree(t *testing.T) {
	// create a temporary file
	dir, _ := ioutil.TempDir("", "treedir")
	// clean up after we're done
	defer os.RemoveAll(dir)
	files := []string{"1", "2", "3"}
	for _, v := range files {
		tmpfile, _ := ioutil.TempFile(dir, v)
		// write data
		ioutil.WriteFile(tmpfile.Name(), []byte("filecontents"), 0644)
	}
	// try to run tree on our directory
	if err := Tree(dir, ""); err != nil {
		t.Errorf("Failed to run tree, err was: %v", err)
	}
}
