import ListItem from "./ListItem";

export default function List() {
  const lists = [
    {
      id: 1,
      name: "Shopping list"
    },
    {
      id: 2,
      name: "Rent"
    },
    {
      id: 3,
      name: "Insurance"
    }
  ];
  return (
    <ul>
      {lists?.map((list) => (
        <ListItem key={list.id} {...list} />
      ))}
    </ul>
  );
}
