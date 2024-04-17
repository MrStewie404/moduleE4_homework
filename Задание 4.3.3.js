function createEmptyObjectWithoutPrototype() {
    return Object.create(null);
}

const emptyObj = createEmptyObjectWithoutPrototype();
console.log(emptyObj.toString);