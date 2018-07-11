//step 1. make sure clicking on a book will actually trigger an action creator
//-define action creator and call it when a book is clicked
//make sure this action creator is wired up to redux

export function selectBook(book) {
  console.log('a book has been selected:', book.title);
}
