```javascript
const pipeline = [
  {
    $match: { user_id: 123 }
  },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "user_id",
      as: "orders"
    }
  },
  {
    $unwind: {
      path: "$orders",
      preserveNullAndEmptyArrays: true
    }
  }
];

db.users.aggregate(pipeline);
```

**Explanation of the fix:**

The solution uses the `preserveNullAndEmptyArrays` option in `$unwind`. This option ensures that documents without matching orders are not modified, and are instead included in the output with the `orders` field set to an empty array. This accurately reflects the initial state of the documents and resolves the unexpected behavior.