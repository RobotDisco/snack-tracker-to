/* @flow */

export class Employee {
    name: string;
    balance: number;

    constructor(name: string) {
	this.name = name;
	this.balance = 0.0;
    }
};

export class Snack {
    name: string;
    price: number;

    constructor(name: string, price: number) {
	this.name = name;
	this.price = price;
    }
};

export let employees = [
    new Employee('Chris Spahr'),
    new Employee('Phil Cairns'),
    new Employee('Phil Nicolcev'),
    new Employee("Gaelan D'costa")
];

export let snacks = [
    new Snack('Perrier', 2.00),
    new Snack('Dr. Pepper', 0.50),
    new Snack('Soylent', 2.00)
];
