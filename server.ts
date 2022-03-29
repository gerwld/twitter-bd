import express from 'express';

const app = express();

app.get('/hello', (req: express.Request, res: express.Response) => {
  res.send("Hello text");
  console.log(req.headers);
});

app.get('/users');

app.listen(8888, () => {

console.log("Server running");

});