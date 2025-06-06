import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = process.env.PORT || 8787;

const server = http.createServer(async (req, res) => {
	if (req.url === '/agent-info' && req.method === 'GET') {
		try {
			const agentInfo = await fs.readFile(
				path.join(process.cwd(), 'agent.json'),
				'utf-8'
			);
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(agentInfo);
		} catch (err) {
			res.writeHead(500, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ error: 'Could not read agent.json' }));
		}
		return;
	}
	// Placeholder for other endpoints (e.g., workflow logic)
	res.writeHead(404, { 'Content-Type': 'text/plain' });
	res.end('Not found');
});

server.listen(PORT, () => {
	console.log(`Agent listening on http://localhost:${PORT}`);
});
