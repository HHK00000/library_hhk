#!/bin/bash


echo '============$=*==========='

for i in $*
do
	echo '传入的参数: '$i
done

echo '=================$=@=========='

for i in $@
do
	echo '传入的参数:'$i
done

echo '==========加引号后====$=*==='
for i in '$*'
do
	echo '传入的参数：'$i
done

echo '加引号后====$=@==='
for i in '$@'
do
	echo '传入的参数:'$i
done
~
