import { json } from '@sveltejs/kit';

const coffins = [
	{
		name: 'T8 Hvit kiste',
		img: 't8-hvitkiste-edit.jpg',
		price: 6800,
		description: 'Tillegg for valgfri farge: 1.500,-'
	},
	{
		name: 'T4 Hvit kiste - Standard',
		img: 't4-hvitkiste-edit.jpg',
		price: 8400,
		description: null
	},
	{
		name: 'T43 Bjørk',
		img: 'bjerk-edit.jpg',
		price: 19800,
		description: null
	},
	{
		name: 'T66 Furu',
		img: 'furu-edit.jpg',
		price: 8600,
		description: null
	},
	{
		name: 'Nordica 65',
		img: 'nordica-edit.jpg',
		price: 6990,
		description: null
	},
	{
		name: 'Prisme',
		img: 'prisme-edit.jpg',
		price: 3860,
		description: null
	},
	{
		name: 'Lilje 67',
		img: 'lilje-edit.jpg',
		price: 9900,
		description: null
	},
	{
		name: 'Ocean',
		img: 'ocean-edit.jpg',
		price: 19800,
		description: null
	},
	{
		name: 'Skandinavia 62',
		img: 'skandinavia-edit.jpg',
		price: 9825,
		description: null
	},
	{
		name: 'Diamant',
		img: 'diamant-edit.jpg',
		price: 48200,
		description: null
	}
];

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return json(coffins);
}
