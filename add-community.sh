#!/usr/bin/env bash

name=$1
category=$2
url=$3

git checkout -b add-$name

echo "---" >> src/content/communities/$name.md
echo "address: $url" >> src/content/communities/$name.md
echo "category: $category" >> src/content/communities/$name.md
echo "---" >> src/content/communities/$name.md

./bin/pull-data src/content/communities/$name.md

if git status | grep null;then
	exit 1
fi

git add .
git commit -m "Add $name."
git push -u origin add-$name
