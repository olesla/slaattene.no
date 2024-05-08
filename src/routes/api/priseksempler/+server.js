import { json } from '@sveltejs/kit';

const examples = [
	{
		title: 'Priseksempel 1',
		description: 'Gravferd i Arendal Gravlund',
		items: [
			{
				name: 'Basis med utstyr',
				price: 3860
			},
			{
				name: 'Administrasjonskostnader',
				price: 2000
			},
			{
				name: 'Bårebil med mannskap, 20 km',
				price: 2480
			},
			{
				name: 'Nedlegging i kiste',
				price: 1700
			},
			{
				name: 'Honorar',
				price: 2000
			}
		]
	},
	{
		title: 'Priseksempel 2',
		description: 'Seremoni i Arendal kapell',
		items: [
			{
				name: 'Hvit kiste',
				price: 6800
			},
			{
				name: 'Pynting, lys, utstyr i kirken',
				price: 900
			},
			{
				name: 'Sanghefter, 50 stk (+10,- pr. ekstra sangark)',
				price: 1400
			},
			{
				name: 'Administrasjonskostnader',
				price: 2000
			},
			{
				name: 'Bårebil med mannskap, 20 km',
				price: 2480
			},
			{
				name: 'Assistanse ved seremonien',
				price: 2000
			},
			{
				name: 'Nedlegging i kiste',
				price: 1700
			},
			{
				name: 'Honorar',
				price: 2000
			}
		]
	},
	{
		title: 'Priseksempel 3',
		description: 'Seremoni i kirker',
		items: [
			{
				name: 'Hvit kiste',
				price: 6800
			},
			{
				name: 'Pynting, lys, utstyr i kirken',
				price: 900
			},
			{
				name: 'Sanghefter, 50 stk (+10,- pr. ekstra sangark)',
				price: 1400
			},
			{
				name: 'Administrasjonskostnader',
				price: 2000
			},
			{
				name: 'Bårebil med mannskap, 20 km',
				price: 2480
			},
			{
				name: 'Bårebil med mannskap, 20 km',
				price: 2480
			},
			{
				name: 'Assistanse ved seremonien',
				price: 2000
			},
			{
				name: 'Nedlegging i kiste',
				price: 1700
			},
			{
				name: 'Honorar',
				price: 2000
			}
		]
	}
];

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return json(examples);
}
