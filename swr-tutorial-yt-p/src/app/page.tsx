"use client";

import { ChangeEvent, useState } from "react";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Formik } from "formik";
import { schema } from "./Schemas/schema";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, Terminal } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const UpdateUser = async (url: string, { arg }: { arg: { name: string } }) => {
  return fetch(url, { method: "POST", body: JSON.stringify(arg) }).then((res) =>
    res.json()
  );
};
const DeleteUser = async (url: string, { arg }: { arg: { id: string } }) => {
  return fetch(url + "/" + arg.id, {
    method: "DELETE",
  }).then((res) => res.json());
};

export default function Home() {
  const url = "http://localhost:8000/users";

  const { data, isLoading, isValidating, error } = useSWR(url, fetcher);
  const { trigger, isMutating } = useSWRMutation(url, UpdateUser);
  const { trigger: deleteUser } = useSWRMutation(url, DeleteUser);

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  // if (isValidating) return <h1>Validating...</h1>;
  // if (isMutating) return <h1>Adicionando</h1>;

  const handleDeleteUser = (id: string) => {
    deleteUser(
      { id: id },
      { optimisticData: data.filter((data: any) => data.id != id) }
    );
  };

  return (
    <div className="">
      <Table>
        <TableCaption>Lista de nomes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any, key: any) => (
            <TableRow key={key}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Button
                  variant={"destructive"}
                  onClick={() => handleDeleteUser(item.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Formik
        initialValues={{ name: "" }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          trigger(
            { name: values.name },
            {
              optimisticData: [
                ...data,
                { id: "Requisitando ID", name: values.name },
              ],
            }
          );

          resetForm();
        }}
      >
        {({ values, handleSubmit, handleChange, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <Input
                name="name"
                type="text"
                placeholder="Name"
                className="w-52"
                value={values.name}
                onChange={handleChange}
              />
              <Button disabled={isMutating} variant={"default"} type="submit">
                {!isMutating ? "Add" : "Carregando..."}{" "}
              </Button>
            </div>
            <p className="text-red-600">
              {errors.name && touched.name && errors.name}
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
}
