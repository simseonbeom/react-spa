/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4mpq5jpa0slmtyj",
    "created": "2023-08-18 00:42:00.890Z",
    "updated": "2023-08-18 00:42:00.890Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "10ssrdez",
        "name": "doit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ucnanjlp",
        "name": "done",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4mpq5jpa0slmtyj");

  return dao.deleteCollection(collection);
})
