import axios from "axios";

const useAxios = () => {
  //https://lit-dawn-11195.herokuapp.com/
  const client = axios.create({
    baseURL: "https://lit-dawn-11195.herokuapp.com/",
  });
  const admin = axios.create({
    baseURL: "https://lit-dawn-11195.herokuapp.com/admin/",
  });
  return { client, admin };
};

export default useAxios;
