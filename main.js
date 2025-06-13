function mod(n, m) {
	return ((n % m) + m) % m;
}

function getPoints(index, table, mod_const, max_points) {
	const solution = mod(index, mod_const);

	const result = table[solution];
	let points = 0;
	while ((index + result) % max_points != result && result != undefined) {
		points++;
	}
	return points;
}

function result(wyniki, mod_const, max_points, prog) {
	const index = Number(document.getElementById("index").value);
	let points = getPoints(index, wyniki, mod_const, max_points);
	const status = points >= prog ? "<div id=\"zdane\"> zdane </div>" : "<div id=\"uwalone\"> nie zdane </div>";
	document.getElementById("wyniki").innerHTML = `Kolos: ${points} <br> ${status}`;
}