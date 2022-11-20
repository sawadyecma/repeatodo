import type { PageServerLoad } from './$types';
import { MongoClient, ServerApiVersion } from 'mongodb';

const loadTodoFromDB = async () => {
	const uri = import.meta.env.VITE_DATABASE_URL;
	const client = new MongoClient(uri, {
		serverApi: ServerApiVersion.v1
	});

	await client.connect();

	console.log('Connected correctly to db server');
	const todosDB = client.db('todos');
	const todos = await todosDB.collection('todos').find({}).toArray();
	console.log({ todos });
};

export const load: PageServerLoad = async () => {
	await loadTodoFromDB();

	return {
		todos: [...new Array(10)].map((_, index) => {
			const rangeStart = 1 + index * 100;
			const rangeEnd = rangeStart + 100 - 1;
			return { id: index, name: `XYZ単語帳の${rangeStart}~${rangeEnd}`, count: index + 3 };
		})
	};
};
