import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const Home = () => {

  const { user } = useContext( UserContext )

  return (
    <>
      <h1>Welcome to the Home Screen!</h1>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Tech</th>
              <th scope="col">Email</th>
              <th scope="col">YouTube</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{user.name}</th>
              <td>{user.tech}</td>
              <td>{user.email}</td>
              <td>{user.youtube}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}
