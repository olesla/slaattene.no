import { json } from '@sveltejs/kit';

const monuments = [
	{
		name: 'Gravferdsmonument 01',
		img: 'gravstein-01.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 02',
		img: 'gravstein-02.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 03',
		img: 'gravstein-03.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 04',
		img: 'gravstein-04.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 05',
		img: 'gravstein-05.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 06',
		img: 'gravstein-06.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 07',
		img: 'gravstein-07.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 08',
		img: 'gravstein-08.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 09',
		img: 'gravstein-09.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 10',
		img: 'gravstein-10.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 11',
		img: 'gravstein-11.jpg',
		price: null,
		description: null
	},
	{
		name: 'Gravferdsmonument 12',
		img: 'gravstein-12.jpg',
		price: null,
		description: null
	}
];

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return json(monuments);
}
