
import express from 'express';
import '.database';

const app = express ();

app.use(express.json());

app.get('/', (request, response) => response.json({message: 'ola sistema'}));

app.listen(3333);  