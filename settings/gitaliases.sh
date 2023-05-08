#!/bin/bash

echo "Este script añadirá aliases de git para trabajar más cómodamente..."

git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

echo "Listo! Los comandos son:"
echo "----------------"
echo "st = status"
echo "co = checkout"
echo "ci = commit"
echo "br = branch"
echo "----------------"
