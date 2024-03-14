
  import { useState } from "react";
import AppBar from "../components/AppBar"
  import Balance from "../components/Balance"
  import Users from "../components/Users"

  const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    
    return (
      <div>
        <AppBar/>
        <div className="m-8">
          <Balance value={balance}/>
            <Users/>
        </div>
      </div>
    )
  }

  export default Dashboard
