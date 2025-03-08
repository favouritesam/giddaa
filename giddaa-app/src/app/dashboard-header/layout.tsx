import DashboardHeader from "@/components/containers/dashboardlayout/dashboard-header";


const  DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardHeader>
            {children}
        </DashboardHeader>
    );
}
export default DashboardLayout