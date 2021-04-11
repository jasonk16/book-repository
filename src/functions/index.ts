//creates object based on genre, given array. Other sort criterias may be introduced in the future.
export const sortBooksByGenre = (arrayList: BookListProps[]) => {
  let group = arrayList.reduce((a: any, b: any) => {
    a[b.genre] = [...(a[b.genre] || []), b];
    return a;
  }, {});
  return group;
};
