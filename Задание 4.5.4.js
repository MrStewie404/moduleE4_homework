// Класс для электроприборов
class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    plugIn() {
        if (!this.pluggedIn) {
            console.log(`${this.name} включен в розетку.`);
            this.pluggedIn = true;
        } else {
            console.log(`${this.name} уже включен в розетку.`);
        }
    }

    unplug() {
        if (this.pluggedIn) {
            console.log(`${this.name} выключен из розетки.`);
            this.pluggedIn = false;
        } else {
            console.log(`${this.name} уже выключен из розетки.`);
        }
    }
}

// Класс для настольной лампы
class DeskLamp extends ElectricDevice {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`Яркость настольной лампы установлена на ${this.brightness}%.`);
    }
}

// Класс для компьютера
class Computer extends ElectricDevice {
    constructor(name, power, type, screenSize) {
        super(name, power);
        this.type = type;
        this.screenSize = screenSize;
    }

    bootUp() {
        console.log(`Компьютер типа ${this.type} загружается.`);
    }
}

// Создание экземпляров приборов
const myDeskLamp = new DeskLamp('Настольная лампа', 50, 80);
const myComputer = new Computer('Компьютер', 300, 'Ноутбук', 15.6);

// Тестирование функциональности
myDeskLamp.plugIn();
myComputer.plugIn();
myDeskLamp.adjustBrightness(70);
myComputer.bootUp();
myDeskLamp.unplug();
myComputer.unplug();