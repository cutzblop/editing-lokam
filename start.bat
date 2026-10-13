@echo off
title Launching Editing Lokam (എഡിറ്റിംഗ് ലോകം)
echo ========================================================
echo    Launching Editing Lokam (എഡിറ്റിംഗ് ലോകം)
echo    All Editing Resources in One Place
echo ========================================================
echo.

set PROJECT_DIR=%~dp0
set INDEX_FILE=%PROJECT_DIR%index.html

if exist "%INDEX_FILE%" (
    echo Opening Editing Lokam in your default web browser...
    start "" "%INDEX_FILE%"
    echo.
    echo Website opened successfully!
) else (
    echo Error: index.html not found in %PROJECT_DIR%
)

echo.
pause

