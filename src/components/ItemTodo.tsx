import {
  EllipsisHorizontalCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSuffix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Todo } from "../types/TodoType";
import { useTodo } from "../hooks/useTodo";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTodoEditStore } from "../contexts/todo.slice";
import { RootState } from "../contexts/store";

interface Props {
  todo: Todo;
}
export default function ItemTodo({ todo }: Props) {
  const dispatch = useDispatch();
  const { currentTodoEdit } = useSelector((state: RootState) => state.todo);
  const { removeTodo, updateCompletedTodo } = useTodo();
  const { isCompleted: statusCompleted, id, title } = todo;
  const [isCompleted, setIsCompleted] = useState(statusCompleted);
  const handleChangeStatus = () => {
    setIsCompleted((prev) => {
      updateCompletedTodo(id, !prev);
      return !prev;
    });
  };
  const handleEdit = (id: number, e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(setCurrentTodoEditStore(id));
  };
  const handleRemove = (id: number, e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    removeTodo(id);
  };
  return (
    <ListItem
      ripple={false}
      className="py-1 pr-1 pl-1"
      onClick={handleChangeStatus}
      selected={currentTodoEdit != undefined && currentTodoEdit.id == id}
    >
      <Checkbox
        checked={isCompleted}
        crossOrigin={undefined}
        onChange={(e) => e.currentTarget}
      />
      <Typography
        className={`text-wrap w-96 ${isCompleted ? "line-through" : ""}`}
      >
        {title}
      </Typography>
      <Menu placement="right-start">
        <MenuHandler>
          <ListItemSuffix>
            <IconButton variant="text" color="blue-gray">
              <EllipsisHorizontalCircleIcon className="w-5 h-5" />
            </IconButton>
          </ListItemSuffix>
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="flex items-center gap-2"
            onClick={(e) => handleEdit(id, e)}
          >
            <PencilIcon className="w-5 h-5" />
            <Typography variant="small" className="font-medium">
              Edit
            </Typography>
          </MenuItem>
          <MenuItem
            className="flex items-center gap-2"
            onClick={(e) => handleRemove(id, e)}
          >
            <TrashIcon className="w-5 h-5 text-red-500" />
            <Typography variant="small" className="font-medium">
              Remove
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </ListItem>
  );
}
