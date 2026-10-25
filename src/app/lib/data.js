export const getData = async () => {
  const res = await fetch("http://localhost:5000/users");
  if (!res.ok) {
    throw new Error("failed to fetched");
  }
  const data = await res.json();
  return data;
};
