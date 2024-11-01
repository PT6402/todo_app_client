import { useState } from "react";
import http from "../utils/http";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { Todo } from "../types/TodoType";
import { useDispatch } from "react-redux";
import { addTodoStore, setTodoStore } from "../contexts/todo.slice";

export const useTodo = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>();
  const [isError, setError] = useState<string | null | Error>();
  const getAllTodo = async (): Promise<Todo[]> => {
    setLoading(true);
    setError(null);
    let listTodo: Todo[] = [];
    try {
      const res = await http.get<Todo[]>("/api/todo");
      if (res.status == HttpStatusCode.Ok) {
        listTodo = res.data;
        dispatch(setTodoStore(res.data));
      }
    } catch (err) {
      const errors = err as AxiosError<Error>;
      if (axios.isAxiosError(err)) {
        console.log("axios error", errors.response?.data);
        setError(errors.response?.data);
      } else {
        console.log("error", err);
      }
    } finally {
      setLoading(false);
    }
    return listTodo;
  };

  const addTodo = async (newTitle: string): Promise<Todo | null> => {
    setLoading(true);
    let result: Todo | null = null;
    try {
      const res = await http.post("/api/todo", {
        title: newTitle,
      });
      if (res.status == HttpStatusCode.Ok) {
        dispatch(addTodoStore(res.data));
        result = res.data;
      }
    } catch (err) {
      const errors = err as AxiosError<Error>;
      if (axios.isAxiosError(err)) {
        console.log("axios error", errors.response?.data);
        setError(errors.response?.data);
      } else {
        console.log("error", err);
      }
    } finally {
      setLoading(false);
    }
    return result;
  };
  return {
    isError,
    isLoading,
    getAllTodo,
    addTodo,
  };
};
