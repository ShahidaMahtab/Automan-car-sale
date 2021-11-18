import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useService = () => {
  const { client } = useAxios();
  const [services, setServices] = useState([]);
  useEffect(() => {
    client.get(`/services`).then((response) => {
      setServices(response.data);
    });
  }, []);

  return [services];
};

export default useService;
