function GetCelsius() {
    return Number.parseFloat(prompt('Введите значение температуры в градусах Цельсия: '));
}

function ConvertCelsiusToFahrenheit(num) {

    result = ((9 / 5) * num + 32).toFixed(1);

    if (isNaN(result)) {
        return 'Ну вы и шутник! Попробуйте еще раз!';
    } else {
        return `${num.toFixed(1)} градуса(ов) Цельсия - это ${result} градуса(ов) Фаренгейта`;
    }
}

alert(ConvertCelsiusToFahrenheit(GetCelsius()));