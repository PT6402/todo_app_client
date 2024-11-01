import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useTodo } from "../hooks/useTodo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../contexts/store";
import { setCurrentTodoEditStore } from "../contexts/todo.slice";

export default function InputTodo() {
  const dispatch = useDispatch();
  const todoInputRef = useRef<HTMLInputElement>(null);
  const { currentTodoEdit } = useSelector((state: RootState) => state.todo);
  const { addTodo, updateTitleTodo } = useTodo();
  const [inputTodo, setInputTodo] = useState<string>("");
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInputTodo(e.target.value);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentTodoEdit != undefined) {
      updateTitleTodo(currentTodoEdit.id, inputTodo);
    } else {
      addTodo(inputTodo);
      setInputTodo("");
    }
  };
  const handleEdit = () => {
    if (currentTodoEdit != undefined) {
      setInputTodo(currentTodoEdit.title);
    } else {
      setInputTodo("");
    }
    todoInputRef.current?.focus();
  };
  useEffect(() => {
    handleEdit();
  }, [currentTodoEdit]);
  return (
    <div className="flex  items-center">
      {currentTodoEdit != undefined ? (
        <XCircleIcon
          className="w-10 self-end relative top-1 cursor-pointer"
          onClick={() => dispatch(setCurrentTodoEditStore(-1))}
        />
      ) : (
        <PencilSquareIcon className="w-10 self-end relative top-1" />
      )}

      <form onSubmit={handleSubmit} className="flex-1">
        <input
          type="text"
          className="py-3 px-4 block w-full  rounded-lg text-xl  disabled:opacity-50 disabled:pointer-events-none -mb-3 border border-transparent ring ring-transparent outline outline-transparent"
          placeholder="task + enter"
          ref={todoInputRef}
          value={inputTodo}
          onChange={handleChangeInput}
        />
        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
}
