const UserData = ({users}) => {
  return (
      <>
          {
              users.map((curUser) => {
                  const {id, name, email,phone,website} = curUser;
                  const {street, city, zipcode} = curUser.address;
                  {/* const {lat, lng} = curUser.geo; */}

                  return (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{email}</td>
                          <td>{street}, {city}, {" "}, {zipcode}</td>
                          <td>{phone}</td>
                          <th>{website}</th>  
                          {/* <th>{lat}, {lng}</th> */}
                      
                      </tr>
                  )
              })

          }
      </>
  )
}
export default UserData;