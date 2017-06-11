/* @flow */

export class Employee {
    id: number;
    name: string;
    balance: number;

    constructor(id: number, name: string, balance: number) {
	this.id = id;
	this.name = name;
	this.balance = balance;
    }
};

export class Snack {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
	this.id = id;
	this.name = name;
	this.price = price;
    }
};

export let employees = () => [
    new Employee(0, 'Chris Spahr', 0),
    new Employee(1, 'Phil Cairns', 0),
    new Employee(2, 'Phil Nicolcev', 0),
    new Employee(3, "Gaelan D'costa", 20)
];

export let snacks = () => [
    new Snack(0, 'Perrier', 2.00),
    new Snack(1, 'Dr. Pepper', 0.50),
    new Snack(2, 'Soylent', 2.00)
];
