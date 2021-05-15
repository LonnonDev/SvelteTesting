export let Representation: boolean = true;
export let Counter: number = 0b00000;
export let ChangeSystem: string = "Change to Decimal";

function Click() {
	Counter += 0b1;
	Display()
}

let CounterRepresentation = (Counter: number): string => {
	if (Representation === true) {
		return Counter.toString(2);
	} else {
		return Counter.toString(10);
	}
}

function Display() {
	document.getElementById("CounterDisplay").innerHTML = CounterRepresentation(Counter)
}

let ChangeFrom = (Rep: boolean): void => {
	if (Representation == true) {
		Representation = !Rep;
		ChangeSystem = "Change to Binary";
	} else {
		Representation = !Rep;
		ChangeSystem = "Change to Decimal";
	}
	Display();
}