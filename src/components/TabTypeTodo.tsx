import {
  Chip,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { RootState } from "../contexts/store";
import { Todo } from "../types/TodoType";

interface Props {
  handleGetCurrentTab: (valueTab: string) => void;
}
export default function TabTypeTodo({ handleGetCurrentTab }: Props) {
  const { todos } = useSelector((state: RootState) => state.todo);
  const data = [
    {
      label: "All",
      value: "all",
      quantity: todos.length,
    },
    {
      label: "Pedding",
      value: "pedding",
      quantity: todos.filter(({ isCompleted }: Todo) => !isCompleted).length,
    },
    {
      label: "Completed",
      value: "completed",
      quantity: todos.filter(({ isCompleted }: Todo) => isCompleted).length,
    },
  ];

  return (
    <Tabs value="all" className="max-w-[40rem]">
      <TabsHeader
        className="bg-transparent  flex gap-3"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {data.map(({ label, value, quantity }) => (
          <Tab
            key={value}
            value={value}
            className="w-fit"
            onClick={() => handleGetCurrentTab(value)}
          >
            <div className="flex justify-between gap-1">
              <Typography>{label}</Typography>
              <Chip value={quantity} variant="ghost" />
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
