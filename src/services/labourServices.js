import axios from "axios";

const getLabour = async ({ params, setLoading }) => {
  setLoading(true);
  let promise = await axios.get("/api/search", { params });
  setLoading(false);
  return promise;
};

export { getLabour };
