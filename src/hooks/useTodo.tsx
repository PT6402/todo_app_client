import { useState } from "react";
import http from "../utils/http";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { Todo } from "../types/TodoType";
import { useDispatch } from "react-redux";
import {
  addTodoStore,
  removeTodoStore,
  setCurrentTodoEditStore,
  setTodoStore,
  updateTodoStore,
} from "../contexts/todo.slice";
import { toast } from "react-toastify";

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
      const formData = new FormData();
      formData.append("title", newTitle);
      const res = await http.post("/api/todo", formData);
      if (res.status == HttpStatusCode.Ok) {
        dispatch(addTodoStore(res.data));
        result = res.data;
        toast.success(`add "${res.data.title}" success`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } catch (err) {
      const errors = err as AxiosError<Error>;
      if (axios.isAxiosError(err)) {
        toast.error(`${errors.response?.data}`, {
          position: "top-right",
          autoClose: 1000,
        });
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

  const removeTodo = async (id: number): Promise<Todo | null> => {
    setLoading(true);
    let result: Todo | null = null;
    try {
      const res = await http.delete<Todo>(`/api/todo/${id}`);
      if (res.status == HttpStatusCode.Ok) {
        dispatch(removeTodoStore(id));
        result = res.data;
        toast.success(`remove "${res.data.title}" success`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } catch (err) {
      const errors = err as AxiosError<Error>;
      if (axios.isAxiosError(err)) {
        toast.error(`${errors.response?.data}`, {
          position: "top-right",
          autoClose: 1000,
        });
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
  const updateTitleTodo = async (
    id: number,
    newTitle: string
  ): Promise<Todo | null> => {
    setLoading(true);
    let result: Todo | null = null;
    try {
      const res = await http.put<Todo>(`/api/todo/${id}`, {
        title: newTitle,
      });
      if (res.status == HttpStatusCode.Ok) {
        dispatch(updateTodoStore(res.data));
        dispatch(setCurrentTodoEditStore(-1));
        result = res.data;
        toast.success(`update "${res.data.title}" success`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } catch (err) {
      const errors = err as AxiosError<Error>;
      if (axios.isAxiosError(err)) {
        toast.error(`${errors.response?.data}`, {
          position: "top-right",
          autoClose: 1000,
        });
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
  const updateCompletedTodo = async (
    id: number,
    isCompleted: boolean
  ): Promise<Todo | null> => {
    setLoading(true);
    let result: Todo | null = null;
    try {
      const res = await http.put<Todo>(`/api/todo/${id}`, {
        isCompleted,
      });
      if (res.status == HttpStatusCode.Ok) {
        dispatch(updateTodoStore(res.data));
        dispatch(setCurrentTodoEditStore(-1));
        result = res.data;
        toast.success(`update "${res.data.title}" success`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } catch (err) {
      const errors = err as AxiosError<Error>;
      if (axios.isAxiosError(err)) {
        toast.error(`${errors.response?.data}`, {
          position: "top-right",
          autoClose: 1000,
        });
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

  const clearAllTodo = async () => {
    setLoading(true);
    try {
      const res = await http.delete<string>("/api/todo/clear-all");
      if (res.status == HttpStatusCode.Ok) {
        dispatch(setTodoStore([]));
        toast.success(`clear all success`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } catch (err) {
      const errors = err as AxiosError<Error>;
      if (axios.isAxiosError(err)) {
        toast.error(`${errors.response?.data}`, {
          position: "top-right",
          autoClose: 1000,
        });
        console.log("axios error", errors.response?.data);
        setError(errors.response?.data);
      } else {
        console.log("error", err);
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    isError,
    isLoading,
    getAllTodo,
    addTodo,
    removeTodo,
    updateTitleTodo,
    updateCompletedTodo,
    clearAllTodo,
  };
};
