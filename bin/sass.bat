@echo off

REM Change global CWD path!
pushd %~dp0..

setlocal
call :setBasename %~dp1
set CMD=sass src/%BASENAME%/scss/bootstrap.scss:src/%BASENAME%/bootstrap.css --watch --load-path node_modules

echo CWD: %CD%
echo CMD: %CMD%
%CMD%

exit /b

REM ======================================================
REM Functions:
REM ------------------------------------------------------
REM setBasename(path)
:setBasename
set "_path=%~dp1"
set "_path=%_path:~0,-1%"
for %%A in ("%_path%") do set BASENAME=%%~nxA
goto :eof
