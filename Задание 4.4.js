// Родительская функция для электроприборов
function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

// Методы для родительской функции
ElectricDevice.prototype.plugIn = function() {
    if (!this.pluggedIn) {
        console.log(`${this.name} включен в розетку.`);
        this.pluggedIn = true;
    } else {
        console.log(`${this.name} уже включен в розетку.`);
    }
};

ElectricDevice.prototype.unplug = function() {
    if (this.pluggedIn) {
        console.log(`${this.name} выключен из розетки.`);
        this.pluggedIn = false;
    } else {
        console.log(`${this.name} уже выключен из розетки.`);
    }
};

// Конкретный электроприбор - настольная лампа
function DeskLamp(brightness) {
    ElectricDevice.call(this, 'Настольная лампа', 50);
    this.brightness = brightness;
}

// Наследование методов родительской функции
DeskLamp.prototype = Object.create(ElectricDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Дополнительный метод для настольной лампы
DeskLamp.prototype.adjustBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`Яркость настольной лампы установлена на ${this.brightness}%.`);
};

// Конкретный электроприбор - компьютер
function Computer(type, screenSize) {
    ElectricDevice.call(this, 'Компьютер', 300);
    this.type = type;
    this.screenSize = screenSize;
}

// Наследование методов родительской функции
Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

// Дополнительный метод для компьютера
Computer.prototype.bootUp = function() {
    console.log(`Компьютер типа ${this.type} загружается.`);
};

// Создание экземпляров приборов
const myDeskLamp = new DeskLamp(80);
const myComputer = new Computer('Ноутбук', 15.6);

// Тестирование функциональности
myDeskLamp.plugIn();
myComputer.plugIn();
myDeskLamp.adjustBrightness(70);
myComputer.bootUp();
myDeskLamp.unplug();
myComputer.unplug();
