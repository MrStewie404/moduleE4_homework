function checkPropertyExistence(str, obj) {
    return obj.hasOwnProperty(str);
}

const exampleObj = {
    lang: 'javascript',
    task: '4.3.1'
};

console.log(checkPropertyExistence('lang', exampleObj));
console.log(checkPropertyExistence('other', exampleObj));