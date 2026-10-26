export const getData = async () => {
  const res = await fetch("http://localhost:5000/users");
  if (!res.ok) {
    throw new Error("failed to fetched");
  }
  const data = await res.json();
  return data;
};
// Get single user by ID
export const getDataById = async (userId) => {
  const res = await fetch(
    `http://localhost:5000/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await res.json();
  return data;
};
