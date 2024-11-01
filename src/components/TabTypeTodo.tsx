import {
  Chip,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

export default function TabTypeTodo() {
  const data = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Pedding",
      value: "pedding",
    },
    {
      label: "Completed",
      value: "completed",
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
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="w-fit">
            <div className="flex justify-between gap-1">
              <Typography>{label}</Typography>
              <Chip value="5" variant="ghost" />
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
