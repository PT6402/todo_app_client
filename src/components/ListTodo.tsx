import { List } from "@material-tailwind/react";
import ItemTodo from "./ItemTodo";
import { Todo } from "../types/TodoType";

interface Props {
  todos: Todo[];
}
export default function ListTodo({ todos }: Props) {
  return (
    <div className="mt-2 border-t-2 pt-2 ">
      <List className="max-h-[calc(100vh-18rem)] overflow-auto">
        {todos.length == 0 && <>Task is empty.</>}
        {todos.map((item) => (
          <ItemTodo key={item.id} todo={item} />
        ))}
      </List>
    </div>
  );
}
