export const fetchData = async (endPoint) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endPoint}`
    ); // Add your API endpoint or URL here
    const data = await response.json();
    return {
      data,
      isLoading: false,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
