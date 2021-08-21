// Object Destructuring
console.log('Object Destructuring\n');

const javaScript = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'Vue', 'Angular']
}

let {version, frameworks} = javaScript;
console.log(version.nueva);
console.log(frameworks[1]);

let {anterior} = javaScript.version;
console.log(anterior);

let {1: fw} = javaScript.frameworks;
console.log(fw);