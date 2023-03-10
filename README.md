# aws-marshaller-cli

A command line tool to marshall and unmarshall json to AWS DynamoDB Document.

# Usage

## Marshall

```shell
yarn
node marshall.js myfile.json
cat myfile.json | node marshall.js -
node marshall.js -
```

## Unmarshall

```shell
yarn
node unmarshall.js myMarshalledFile.json
cat myMarshalledFile.json | node marshall.js -
node marshall.js -
```
