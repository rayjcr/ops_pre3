import { Navigate } from 'react-router-dom';
import { DashboardOutlined, UserOutlined, TeamOutlined, UserAddOutlined, ShopOutlined, FileProtectOutlined, SearchOutlined, PlusOutlined, TrademarkCircleOutlined, FileTextOutlined, FileAddOutlined, PlusSquareOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { RequireAuth } from './Auth';
import Layout from '../layout';
import Landing from '../views/Landing';
import Login from '../views/Login';
import NotFound from '../views/NotFound';

import User from '../views/User';
import AddUser from '../views/AddUser';
import MerchantSearch from '../views/MerchantSearch';
import Merchant from '../views/Merchant';

const routes = [
    {
        path: '/',
        element: <Navigate to='landing' />
    },
    {
        path: '/login',
        title: 'login',
        element: <Login />,
        isMenu: false,
    },
    {
        path: '/',
        title: '/',
        element: <RequireAuth><Layout /></RequireAuth>,
        isMenu: false,
        rootMenu: true,
        children: [
            {
                path: 'landing',
                title: 'Landing',
                key: 'landing',
                icon: <DashboardOutlined />,
                element: <Landing />
            },
            {
                path: 'userManage',
                title: 'User Manage',
                key: 'userManage',
                icon: <UserOutlined />,
                children: [
                    {
                        path: 'users',
                        title: 'Users',
                        key: 'users',
                        icon: <TeamOutlined />,
                        element: <User />
                    },
                    {
                        path: 'new',
                        title: 'Add New User',
                        key: 'add_new_user',
                        icon: <UserAddOutlined />,
                        element: <AddUser />
                    },
                ]
            },
            {
                path: 'merchantManage',
                title: 'Merchant Manage',
                key: 'merchantManage',
                icon: <ShopOutlined />,
                children: [
                    {
                        path: 'kyc',
                        title: 'Merchant Underwriting',
                        key: 'merchantUnderwriting',
                        icon: <FileProtectOutlined />,
                    },
                    {
                        path: 'search',
                        title: 'Search Merchant',
                        key: 'serachMerchant',
                        icon: <SearchOutlined />,
                        element: <MerchantSearch />,
                    },
                    {
                        path: 'newMerchant',
                        title: 'Add New Merchant',
                        key: 'addNewMerchant',
                        icon: <PlusOutlined />,
                        element: <Merchant />,
                    },
                    {
                        path: 'vendorKey',
                        title: 'Add New Vendor Key',
                        key: 'addNewVendorKey',
                        icon: <PlusOutlined />,
                    },
                    {
                        path: 'addCompany',
                        title: 'Add Parent Company/Brand',
                        key: 'addParentCompany',
                        icon: <TrademarkCircleOutlined />,
                    },
                    {
                        path: 'partnerBoarding',
                        title: 'Manage Partner Boarding',
                        key: 'managePartnerBoarding',
                        icon: <FileTextOutlined />,
                    }
                ]
            },
            {
                path: 'batch',
                title: 'Batch Merchant',
                key: 'bacthMerchant',
                icon: <FileAddOutlined />,
                children: [
                    {
                        path: 'new',
                        title: 'Batch Onboarding',
                        key: 'newBacthOnboarding',
                        icon: <PlusSquareOutlined />,
                    },
                    {
                        path: 'update',
                        title: 'Batch Update Merchants',
                        key: 'newBacthUpdateMerchants',
                        icon: <PlusSquareOutlined />,
                    }
                ]
            },
            {
                path: 'disputemanage',
                title: 'Dispute Management',
                key: 'disputemanage',
                icon: <SearchOutlined />,
            },
            {
                path: 'changePassword',
                title: 'Change Password',
                key: 'changePassword',
                icon: <SettingOutlined />,
            },
            {
                path: 'logOut',
                title: 'Log Out',
                key: 'logOut',
                icon: <LogoutOutlined />,
            }
        ]
    },
    {
        path: '*',
        title: 'NotFound',
        element: <NotFound />,
        isMenu: false,
    },
]

const onRouteBefore = ({ pathname, meta }) => {
    console.log(pathname, 'pathname');
    console.log(meta, 'meta');
}

export {
    routes,
    onRouteBefore,
}