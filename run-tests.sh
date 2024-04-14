#!/bin/bash

####################################################################################################################################
echo "<================== [Inicio] Configuración ==================>"
TEST_PATH=tests-results
mkdir -p $TEST_PATH
echo "Se realiza la creación del directorio [$TEST_PATH]"
MIN_COVERAGE=80
echo "La cobertura minima establecida para pasar las pruebas es [$MIN_COVERAGE]"
COVERAGE_FILE=coverage-results.txt
echo "El archivo con los resultados de las pruebas de cobertura es [$COVERAGE_FILE]"
E2E_FILE=e2e-results.txt
echo "El archivo con los resultados de las pruebas E2E es [$E2E_FILE]"
COVERAGE_PATH=coverage
echo "El directorio con los resultados de las pruebas de cobertura es [$COVERAGE_PATH]"
echo "<================== [Fin] Configuración ==================>"
####################################################################################################################################
echo "<================== [Inicio] Ejecución de pruebas unitarias y cobertura ==================>"
ng test --watch=false --browsers=ChromeHeadlessNoSandbox --code-coverage=true > $TEST_PATH/$COVERAGE_FILE
cat $TEST_PATH/$COVERAGE_FILE
COVERAGE=$(grep -oP 'Statements\s+:\s+\K\d+\.\d+' $TEST_PATH/$COVERAGE_FILE)
echo "La cobertura total de las pruebas fue [$COVERAGE]"
decimal=$(awk "BEGIN {print $COVERAGE}")
if (( $(echo "$decimal < $MIN_COVERAGE" | bc -l) )); then
  echo "Error: La cobertura obtenida [$COVERAGE] es MENOR que la cobertura minima [$MIN_COVERAGE] requerida para pasar las pruebas"
  echo "<================== [Fin][Error] Ejecución de pruebas unitarias y cobertura ==================>"
  exit 1
fi
echo "La cobertura obtenida [$COVERAGE] CUMPLE con los criterios para pasar las pruebas"
mv $COVERAGE_PATH $TEST_PATH/
echo "Se mueve directorio [$COVERAGE_PATH] a [$TEST_PATH/$COVERAGE_PATH]"
echo "<================== [Fin][Exitoso] Ejecución de pruebas unitarias y cobertura ==================>"
####################################################################################################################################
echo "<================== [Inicio] Levantamiento del proyecto Angular ==================>"
nohup ng serve &
sleep 20
if ! curl -s localhost:4200; then
  echo "Error: NG serve no está escuchando en localhost:4200"
  echo "<================== [Fin][Error] Levantamiento del proyecto Angular ==================>"
  exit 1
fi
echo "<================== [Fin][Exitoso] Levantamiento del proyecto Angular ==================>"
####################################################################################################################################
echo "<================== [Inicio] Ejecución de pruebas e2e ==================>"
npx cypress run --headless --config viewportWidth=1920,viewportHeight=1080 > $TEST_PATH/$E2E_FILE
cat $TEST_PATH/$E2E_FILE
if grep -q "AssertionError" $TEST_PATH/$E2E_FILE; then
  echo "Error: Se presetaron fallas en la ejecución de las pruebas e2e"
  echo "<================== [Fin][Error] Ejecución de pruebas e2e  ==================>"
  exit 1
fi
echo "<================== [Fin][Exitoso] Ejecución de pruebas e2e  ==================>"
####################################################################################################################################
echo "<================== [Inicio] Resumen pruebas ==================>"
echo "<================== Resumen pruebas unitarias y de cobertura ==================>"
cat $TEST_PATH/$COVERAGE_FILE
echo "<================== Resumen pruebas e2e ==================>"
cat $TEST_PATH/$E2E_FILE
echo "<================== [Fin] Resumen pruebas ==================>"
####################################################################################################################################
