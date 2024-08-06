import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/apps_page/Header';
import Footer from './components/apps_page/Footer';
import Home from './components/apps_page/Home';
import ClassAddProduct from './components/class/ClassViewProducts/ClassAddProduct';
import ClassUpdateProduct from './components/class/ClassViewProducts/ClassUpdateProduct';
import ClassViewProduct from './components/class/ClassViewProducts/ClassViewProduct';
import ClassContext from './components/class/ClassContext';
import ClassHOC from './components/class/ClassHOC';
import ClassImgUpload from './components/class/ClassImgUpload';
import ClassProps from './components/class/ClassProps';
import ClassPropsDrilling from './components/class/ClassPropsDrilling';
import ClassStudents from './components/class/ClassStudents';
import ClassSignUp from './components/class/ClassSignUp';
import ClassLogin from './components/class/ClassSignUp/ClassLogin';
import ClassReset from './components/class/ClassSignUp/ClassReset';
import ClassViewProducts from './components/class/ClassViewProducts';
import Contact from './components/apps_page/Contact';
import FunctionAddProduct from './components/function/FunctionViewProducts/FunctionAddProduct';
import FunctionUpdateProduct from './components/function/FunctionViewProducts/FunctionUpdateProduct';
import FunctionContext from './components/function/FunctionContext';
import FunctionHOC from './components/function/FunctionHOC';
import FunctionImgUpload from './components/function/FunctionImgUpload';
import FunctionProps from './components/function/FunctionProps';
import FunctionPropsDrilling from './components/function/FunctionPropsDrilling';
import FunctionStudents from './components/function/FunctionStudents';
import FunctionSignUp from './components/function/FunctionSignUp';
import FunctionLogin from './components/function/FunctionSignUp/FunctionLogin';
import FunctionViewProducts from './components/function/FunctionViewProducts';
import FunctionViewProduct from './components/function/FunctionViewProducts/FunctionViewProduct';
import PageNotFound from './components/apps_page/PageNotFound';
import FunctionReset from './components/function/FunctionSignUp/FunctionReset';

let Layout = () => (

    <React.Fragment>
        <Header />
        <div className="web-div">
            <div className="app-div">
                <Outlet />
            </div>
        </div>
        <Footer />
    </React.Fragment>
);

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, 
                element: <Navigate to="/home" replace />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "class-add-product",
                element: <ClassAddProduct />
            },
            {
                path: "class-context-api",
                element: <ClassContext />
            },
            {
                path: "class-hoc",
                element: <ClassHOC />
            },
            {
                path: "class-image-upload",
                element: <ClassImgUpload />
            },
            {
                path: "class-props",
                element: <ClassProps />
            },
            {
                path: "class-props-drilling",
                element: <ClassPropsDrilling />
            },
            {
                path: "class-students-list",
                element: <ClassStudents />
            },
            {
                path: "class-signup-form",
                element: <ClassSignUp />
            },
            {
                path: "class-login-form",
                element: <ClassLogin />
            },
            {
                path: "class-reset-form",
                element: <ClassReset />
            },
            {
                path: "class-update-product/:id",
                element: <ClassUpdateProduct />
            },
            {
                path: "class-view-products",
                element: <ClassViewProducts />
            },
            {
                path: "class-view-product/:id",
                element: <ClassViewProduct />
            },
            {
                path: "contact-us",
                element: <Contact />
            },
            {
                path: "function-add-product",
                element: <FunctionAddProduct />
            },
            {
                path: "function-context-api",
                element: <FunctionContext />
            },
            {
                path: "function-hoc",
                element: <FunctionHOC />
            },
            {
                path: "function-image-upload",
                element: <FunctionImgUpload />
            },
            {
                path: "function-props",
                element: <FunctionProps />
            },
            {
                path: "function-props-drilling",
                element: <FunctionPropsDrilling />
            },
            {
                path: "function-students-list",
                element: <FunctionStudents />
            },
            {
                path: "function-signup-form",
                element: <FunctionSignUp />
            },
            {
                path: "function-login-form",
                element: <FunctionLogin />
            },
            {
                path: "function-reset-form",
                element: <FunctionReset />
            },
            {
                path: "function-view-products",
                element: <FunctionViewProducts />
            },
            {
                path: "function-update-product/:id",
                element: <FunctionUpdateProduct />
            },
            {
                path: "function-view-product/:id",
                element: <FunctionViewProduct />
            },
        ]
    },
    {
        path: "*",
        element: <PageNotFound />
    }
]);

const App = () => {

    return (

        <>
            <ToastContainer className='pro-toast' position="top-center" transition={Bounce} />
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App;