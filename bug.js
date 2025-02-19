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
    $unwind: "$orders"
  }
];

db.users.aggregate(pipeline);
```