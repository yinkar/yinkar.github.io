#!/bin/bash

if [ "$#" -gt 0 ]; then
    size=$1
else
    size=240
fi

pushd pixelart/images
for i in *.png; do
    convert "$i" -thumbnail "$size" "../thumbs/$i";
done;
popd