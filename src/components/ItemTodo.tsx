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

interface Props {
  todo: Todo;
}
export default function ItemTodo({ todo }: Props) {
  const { isCompleted: statusCompleted, id, title } = todo;
  const [isCompleted, setIsCompleted] = useState(statusCompleted);
  const handleChangeStatus = () => {
    setIsCompleted((prev) => !prev);
  };
  const handleEdit = (id: number) => {
    console.log(id);
  };
  const handleRemove = (id: number) => {
    console.log(id);
  };
  return (
    <ListItem
      ripple={false}
      className="py-1 pr-1 pl-1"
      onClick={handleChangeStatus}
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
            onClick={() => handleEdit(id)}
          >
            <PencilIcon className="w-5 h-5" />
            <Typography variant="small" className="font-medium">
              Edit
            </Typography>
          </MenuItem>
          <MenuItem
            className="flex items-center gap-2"
            onClick={() => handleRemove(id)}
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
