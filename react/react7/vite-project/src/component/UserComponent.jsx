import { useFetch } from "../hooks/useFetch";

export const UserComponent = () => {
  //llama hook
  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      <h1>Lista de usuario</h1>
      {isLoading ? (
        <h4>Cargando....</h4>
      ) : errors ? (
        <p>Ha ocurrido un error</p>
      ) : (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((user) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
};
