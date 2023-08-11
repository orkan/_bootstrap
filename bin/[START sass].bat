@echo off

setlocal
pushd %~dp0..
set NAME=%~1
set CMD=sass src/%NAME%/scss/bootstrap.scss:src/%NAME%/bootstrap.css --watch --load-path node_modules

echo %CMD%
%CMD%
