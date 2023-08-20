/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tw7j3nf0f8cuoe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ljtp1heu",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybzzdpw3",
    "name": "capacity",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tw7j3nf0f8cuoe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ljtp1heu",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybzzdpw3",
    "name": "color",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
