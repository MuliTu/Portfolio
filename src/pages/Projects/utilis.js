export const getImage = (skill, list) => {
   return list.find(item => item.name === skill).img;

};
