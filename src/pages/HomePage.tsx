import { useSelector } from "react-redux";
import { RootState } from "../contexts/store";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import TabTypeTodo from "../components/TabTypeTodo";
import ListTodo from "../components/ListTodo";
import InputTodo from "../components/InputTodo";
import { useTodo } from "../hooks/useTodo";
import { useEffect } from "react";

export default function HomePage() {
  const { getAllTodo } = useTodo();
  const { todos } = useSelector((state: RootState) => state.todo);
  useEffect(() => {
    getAllTodo();
  }, []);
  return (
    <div className="flex justify-center mx-3 ">
      <Card className="mt-10 max-w-[50rem]">
        <CardHeader className="flex justify-between p-3 items-center">
          <Typography variant="h5" color="blue-gray" className="pl-3">
            Todo app
          </Typography>
          <div className="flex items-center gap-2">
            <Typography>user</Typography>
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              variant="rounded"
            />
          </div>
        </CardHeader>
        <CardBody>
          <InputTodo />
        </CardBody>

        <CardFooter className="pt-0">
          <div className="flex justify-between items-center">
            <TabTypeTodo />
            <Button variant="filled" className="px-2">
              Clear all
            </Button>
          </div>
          <ListTodo todos={todos} />
        </CardFooter>
      </Card>
    </div>
  );
}
