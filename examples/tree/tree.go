package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
)

func main() {
	// get args from CLI
	args := []string{"."}
	if len(os.Args) > 1 {
		args = os.Args[1:]
	}

	// for each arg, recurse
	for _, arg := range args {
		err := tree(arg, "")
		if err != nil {
			log.Printf("tree %s: %v\n", arg, err)
		}
	}
}

// tree is called with a root and a
func tree(root, indent string) error {
	// check if the file handle is there
	fi, err := os.Stat(root)
	if err != nil {
		return fmt.Errorf("could not stat %s: %v", root, err)
	}

	// print out the name of the directory
	fmt.Println(fi.Name())
	// if it isn't a directory, stop and don't recurse anymore (base condition)
	if !fi.IsDir() {
		return nil
	}

	// get each of the files
	fis, err := ioutil.ReadDir(root)
	if err != nil {
		return fmt.Errorf("could not read dir %s: %v", root, err)
	}

	// get the names and exclude the '.' character
	var names []string
	for _, fi := range fis {
		if fi.Name()[0] != '.' {
			names = append(names, fi.Name())
		}
	}

	// for each one, print out the file name w/ a 'tree' character
	for i, name := range names {
		add := "│  "
		// print a different character for the last file in a subtree
		if i == len(names)-1 {
			fmt.Printf(indent + "└──")
			add = "   "
		} else {
			fmt.Printf(indent + "├──")
		}
		// recurse with each of the names and add the indentation
		if err := tree(filepath.Join(root, name), indent+add); err != nil {
			return err
		}
	}

	return nil
}
