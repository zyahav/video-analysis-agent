import { createMachine } from 'xstate';

export const testMachine = createMachine({
	id: 'test',
	initial: 'idle',
	states: {
		idle: {
			on: {
				START: 'running',
			},
		},
		running: {
			after: {
				1000: 'done', // 1-second delay
			},
		},
		done: {
			type: 'final',
		},
	},
});
