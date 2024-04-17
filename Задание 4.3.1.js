function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const exampleObj = {
    lang: 'javascript',
    task: '4.3.1'
};

printOwnProperties(exampleObj);