#!/bin/bash

echo "<================== [Inicio] Ejecución de pruebas unitarias y cobertura ==================>"
MIN_COVERAGE=80
echo "La cobertura minima establecida para pasar las pruebas es [$MIN_COVERAGE]"
ng test --watch=false --browsers=ChromeHeadlessNoSandbox --code-coverage=true > coverage-results.txt
COVERAGE=$(grep -oP 'Statements\s+:\s+\K\d+\.\d+' coverage-results.txt)
echo "La cobertura total de las pruebas fue [$COVERAGE]"
decimal=$(awk "BEGIN {print $COVERAGE}")
if (( $(echo "$decimal < $MIN_COVERAGE" | bc -l) )); then
  echo "La cobertura obtenida [$COVERAGE] es MENOR que la cobertura minima [$MIN_COVERAGE] requerida para pasar las pruebas"
  exit 1
fi
echo "La cobertura obtenida [$COVERAGE] CUMPLE con los criterios para pasar las pruebas"
echo "<================== [Fin] Ejecución de pruebas unitarias y cobertura ==================>"

echo "<================== [Inicio] Levantamiento del proyecto Angular ==================>"
nohup ng serve &
sleep 20
if ! curl -s localhost:4200; then
  echo "Error: ng serve no está escuchando en localhost:4200"
  exit 1
fi
echo "<================== [Fin] Levantamiento del proyecto Angular ==================>"

echo "<================== [Inicio] Ejecución de pruebas e2e ==================>"
npx cypress run --headless
echo "<================== [Fin] Ejecución de pruebas e2e  ==================>"
