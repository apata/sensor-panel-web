import generateData from "./generateData";

const createDataLocally = async () => {
  try {
    const response = await fetch("/api/sink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(generateData()),
    });
    if (!response.ok) {
      const body = await response.json();
      throw new Error(JSON.stringify(body));
    }
  } catch (e) {
    console.log("Error posting data: ", e);
  }
};

export default createDataLocally;
