
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs';
import timersPromises from 'node:timers/promises';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

const filePath = "./db.json";

const getProduct = () => {
    const product = fs.readFileSync("./db.json", {encoding: "utf-8"});
    return JSON.parse(product);
}

app.get('/setup-product', (req: Request, res: Response) => {
    const product = {name: "Product A", price: 5};
    fs.writeFileSync(filePath, JSON.stringify(product));
    res.send(product);
});

app.get('/change-name', async (req: Request, res: Response) => {
    const product = getProduct();
    product.name = "Product B";

    await timersPromises.setTimeout(10000);
    fs.writeFileSync(filePath, JSON.stringify(product));
    res.send(product);
});

app.get('/change-price', (req: Request, res: Response) => {
    const product = getProduct();
    product.price = 7;
    fs.writeFileSync(filePath, JSON.stringify(product));
    res.send(product);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});