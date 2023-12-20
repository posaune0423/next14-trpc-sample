"use client";

import { api } from "@/lib/trpc";
import { useEffect } from "react";

const ClientTest = () => {
  const { data } = api.userById.useQuery(1);
  useEffect(() => {
    console.log("client");
    console.log({ data });
  }, [data]);
  return <></>;
};

export default ClientTest;
