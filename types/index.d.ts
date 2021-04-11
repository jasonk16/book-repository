//common used types to be declared globally

type BookListProps = {
  title: string;
  isbn: string;
  genre: string;
  summary: string;
};

type ReducerProps = {
  type: string;
  payload: any;
};
