let resultField = document.getElementById('result');
        function appendNumber(number) {
            resultField.value = resultField.value.toString() + number.toString();
        }
        function performOperation(operation) {
            resultField.value = resultField.value.toString() + operation.toString();
        }
        function clearResult() {
            resultField.value = '';
        }
        function calculateResult() {
            try {
                resultField.value = eval(resultField.value);
            } catch {
                resultField.value = 'Error';
            }
        }function performOperation(operation) {
            if (operation === 'sqrt') {
                resultField.value = Math.sqrt(resultField.value);
            } else {
                resultField.value = resultField.value.toString() + operation.toString();
            }
        }

        function performOperation(operation) {
            if (operation === 'sqrt') {
                resultField.value = Math.sqrt(resultField.value);
            } else if (operation === '%') {
                resultField.value = resultField.value.toString() + operation.toString();
            } else if (operation === '**') {
                resultField.value = resultField.value.toString() + operation.toString();
            } else {
                resultField.value = resultField.value.toString() + operation.toString();
            }
        }
        
        