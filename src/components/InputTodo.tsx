import { PencilSquareIcon } from "@heroicons/react/16/solid";

export default function InputTodo() {
  return (
    <div className="flex  items-center">
      <PencilSquareIcon className="w-10 self-end relative top-1" />
      <input
        type="text"
        className="py-3 px-4 block w-full  rounded-lg text-xl  disabled:opacity-50 disabled:pointer-events-none -mb-3 border border-transparent ring ring-transparent outline outline-transparent"
        placeholder="task + enter"
      />
    </div>
  );
}
