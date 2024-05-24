import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar';

const Dashboard = () => {
    return ( 
        <div className="content_container_blank_admin" > 
            

            <SideBar/>
            <div className="dashboard_content">
                <Outlet/>
            </div>

        </div>
     );
}
 
export default Dashboard;