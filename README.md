# MongoDB Aggregation Bug: Unexpected $unwind Behavior

This repository demonstrates an uncommon bug encountered when using the `$lookup` and `$unwind` stages together in MongoDB aggregation pipelines. The issue involves unexpected modification of documents by `$unwind`, even when the documents shouldn't be unwound based on the pipeline's logic.

## Bug Description
The aggregation pipeline uses `$lookup` to join `users` and `orders` collections, then `$unwind` to process each order individually.  However, the `$unwind` stage modifies documents that did not have a match from the `$lookup` stage, producing an incorrect output.  The expected behavior is that only documents with matching orders should be unwound.  The actual behavior is unexpected and causes data inconsistency.

## Reproduction
To reproduce the bug, you'll need a MongoDB instance and two collections (`users` and `orders`) structured as follows:

**users:**
```
{"_id": 123, "name": "John Doe"}
{"_id": 456, "name": "Jane Doe"}
```

**orders:**
```
{"_id": 789, "user_id": 123, "item": "Shirt"}
```

Run the provided `bug.js` code. The output will show unexpected changes that affect the data.