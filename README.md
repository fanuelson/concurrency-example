### Setup
`npm i`

### Start api
`npx tsx index.ts`

### Call in order

1. GET `localhost:8000/setup-price` - price is 5
2. GET `localhost:8000/change-name` - stuck for 20s
3. GET `localhost:8000/change-price` - change price to 7
4. The second call finish and override price to 5