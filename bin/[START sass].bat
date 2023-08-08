@echo off
pushd %~dp0..

sass src/scss/bootstrap.scss:bootstrap.css --watch --load-path node_modules
