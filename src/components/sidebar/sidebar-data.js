import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LogoutIcon from '@mui/icons-material/Logout';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';


const SidebarList=[
    {
        icon:<DashboardIcon />,
        text:"Dashboard",
        link:''

    },
    {
        icon:<CategoryIcon/>,
        text:"Products",
        link:'products'
    },
    {
        icon:<CorporateFareIcon/>,
        text:"Rates",
        link:'rates'
    },
    {
        icon:<FormatListNumberedIcon/>,
        text:"Orders",
        link:''
    },
    {
        icon:<LocalShippingIcon/>,
        text:"Delivery",
        link:'delivery'
    },
    {
        icon:<AccountBalanceIcon/>,
        text:"Transactions",
        link:'transactions'
    },
    {
        icon:<InventoryIcon/>,
        text:"Inventory",
        link:''
    },
    {
        icon:<LogoutIcon/>,
        text:"Logout"
    }
]

export default SidebarList