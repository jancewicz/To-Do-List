import "./style.css";

function greet(name: string): string {

    return `Hello, ${name}!`;

}

const user = 'TypeScript Developer';


console.log(greet(user));

// library date-fns installed by npm, check the documentation on github