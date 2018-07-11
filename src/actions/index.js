//step 1. make sure clicking on a book will actually trigger an action creator
//-define action creator and call it when a book is clicked
//make sure this action creator is wired up to redux

export function selectBook(book) {
  //selectBook is an action creator that needs to return an action
  //an object with a type property(purpose of action)
  return {
    type: 'BOOK_SELECTED',
    PAYLOAD: book
  }
}
