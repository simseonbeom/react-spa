/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0tw7j3nf0f8cuoe",
    "created": "2023-08-18 01:13:44.655Z",
    "updated": "2023-08-18 01:13:44.655Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "fexd4hv2",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0tw7j3nf0f8cuoe");

  return dao.deleteCollection(collection);
})
