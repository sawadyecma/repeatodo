import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		todos: [...new Array(10)].map((_, index) => {
			const rangeStart = 1 + index * 100;
			const rangeEnd = rangeStart + 100 - 1;
			return { id: index, name: `XYZ単語帳の${rangeStart}~${rangeEnd}`, count: index + 3 };
		})
	};
};
