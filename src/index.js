import { Hono } from 'hono';

// Import agent.json as a static asset or use import assertion (Node 20+ and ESM)
import agentInfo from '../agent.json' assert { type: 'json' };
import { testMachine } from './machine.js';
import { createActor } from 'xstate';

const app = new Hono();

app.get('/agent-info', (c) => {
	return c.json(agentInfo);
});

app.get('/test-machine', (c) => {
	const actor = createActor(testMachine);
	actor.start();
	actor.send({ type: 'START' });
	// Immediately return the current state (likely 'running')
	return c.json({ state: actor.getSnapshot().value });
});

// Add more routes as needed

export default app;
