import Instance from "../dependencies/AxiosInstance";

export const getTableList = async () => {
  const res = await Instance.get("/business");
  return res;
};
