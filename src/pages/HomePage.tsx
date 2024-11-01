import {
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
import { useEffect, useState } from "react";
import { Todo } from "../types/TodoType";
import { useSelector } from "react-redux";
import { RootState } from "../contexts/store";

export default function HomePage() {
  const { getAllTodo, clearAllTodo } = useTodo();
  const { todos } = useSelector((state: RootState) => state.todo);
  const [list, setList] = useState<Todo[]>(todos);
  const [currentTab, setCurrentTab] = useState<string>("all");
  useEffect(() => {
    getAllTodo();
  }, []);
  const handleChangeTab = () => {
    switch (currentTab) {
      case "all":
        return setList(todos);
      case "pedding":
        return setList(todos.filter(({ isCompleted }: Todo) => !isCompleted));
      case "completed":
        return setList(todos.filter(({ isCompleted }: Todo) => isCompleted));
    }
  };
  useEffect(() => {
    handleChangeTab();
  }, [currentTab, todos]);
  return (
    <div className="flex justify-center mx-3 ">
      <Card className="mt-10 max-w-[50rem] min-w-[35rem]">
        <CardHeader className="flex justify-between p-3 items-center">
          <Typography variant="h5" color="blue-gray" className="pl-3">
            Todo app
          </Typography>
        </CardHeader>
        <CardBody>
          <InputTodo />
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex justify-between items-center">
            <TabTypeTodo
              handleGetCurrentTab={(value) => setCurrentTab(value)}
            />
            <Button variant="filled" className="px-2" onClick={clearAllTodo}>
              Clear all
            </Button>
          </div>
          <ListTodo todos={list} />
        </CardFooter>
      </Card>
    </div>
  );
}
