/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tw7j3nf0f8cuoe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v0uyrsxe",
    "name": "photo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 52428800,
      "mimeTypes": [
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/webp",
        "image/avif"
      ],
      "thumbs": [
        "200x440"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tw7j3nf0f8cuoe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v0uyrsxe",
    "name": "photo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/webp",
        "image/avif"
      ],
      "thumbs": [
        "200x440"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
