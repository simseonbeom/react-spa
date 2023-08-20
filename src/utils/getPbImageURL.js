

export const getPbImageURL = (item, fileName = 'photo') => 
  `https://kindtiger.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`