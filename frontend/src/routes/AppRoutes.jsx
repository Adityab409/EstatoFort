import { Routes, Route } from "react-router-dom";


import Home from "../pages/public/Home";
import Properties from "../pages/public/Properties";
import PropertyDetails from "../pages/public/PropertyDetails";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import AdminDashboard from "../pages/admin/AdminDashboard";
import PropertiesManagement from "../pages/admin/PropertiesManagement";
import LeadManagement from "../pages/admin/LeadManagement";
import UsersManagement from "../pages/admin/UsersManagement";
import Settings from "../pages/admin/Settings";
import AddProperty from "../pages/admin/AddProperty";



import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/properties" element={<MainLayout><Properties /></MainLayout>} />
            <Route path="/property/:id" element={<MainLayout><PropertyDetails /></MainLayout>} />
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/properties-management" element={<PropertiesManagement />} />
            <Route path="/admin/lead-management" element={<LeadManagement />} />
            <Route path="/admin/users-management" element={<UsersManagement />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/add-property" element={<AddProperty />} />

        </Routes>
    );
}

export default AppRoutes;