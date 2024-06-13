import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown1() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Accounts
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/adminhomepage/addbus">Add Bus</Dropdown.Item>
        <Dropdown.Item href="/adminhomepage/viewbus">Buses List</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Edit Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown1;