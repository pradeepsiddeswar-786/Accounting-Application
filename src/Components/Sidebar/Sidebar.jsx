import "./Sidebar.css";
import ReportIcon from '@mui/icons-material/Report';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import MediaQuery from 'react-responsive';




const Sidebar = () => {
    return (
        <div className="container" style={{
            '@media (max-width: 500px)': {
                display: 'none',
              },
        }}>
                

               {/* <input type="checkbox" id="toggle" />
            <label className="side-toggle"
                for="toggle"><span className="fas fa-bars"></span>
            </label> */}
           
            <div className="sidebar">
                <ul className="sidebar-menu">
                    <a href="Dashboard" className="active">
                        <li>
                            <DashboardIcon/>
                            <div className="title"> Dashboard  </div>
                        </li>
                    </a>
                    <a href="AddNew" className="active">
                        <li>
                            <i className="fas fa-address-card"></i>
                            <div className="title">Profile </div>
                        </li>
                    </a>
                    <li>
                        <i className="fas fa-user"></i>
                        <div className="title"> AddNew </div>
                    </li>
                    <li>
                        <i className="fas fa-puzzle-piece"></i>
                        <div className="title"> FilingStatus </div>
                    </li>
                    <li>
                        {/* <i className="fas fa-request"></i> */}

                        <RequestPageIcon />
                     <div className="title">Request </div>
                    </li>
                    <li>
                        <i className="fas fa-question"></i>
                        <div className="title"> Compliances </div>
                    </li>
                    <li>
                        <ReportIcon />
                        <div className="title"> Report</div>

                    </li>
                </ul>
            </div>
            

        </div>
    )
}

export default Sidebar;