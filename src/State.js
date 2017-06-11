/* @flow */

export class Employee {
    name: string;
    balance: number;

    constructor(name: string, balance: number) {
	this.name = name;
	this.balance = balance;
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
    new Employee('Chris Spahr', 0),
    new Employee('Phil Cairns', 0),
    new Employee('Phil Nicolcev', 0),
    new Employee("Gaelan D'costa", 20)
];

export let snacks = [
    new Snack('Perrier', 2.00),
    new Snack('Dr. Pepper', 0.50),
    new Snack('Soylent', 2.00)
];
