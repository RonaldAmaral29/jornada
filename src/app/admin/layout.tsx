import AdminSidebar from "@/components/Admin/AdminSidebar";
import AdminHeader from "@/components/Admin/AdminHeader";
import AdminFooter from "@/components/Admin/AdminFooter";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-muted/20">
            <AdminSidebar />
            <AdminHeader />

            <main className="pt-20 pb-16 ml-64 px-6">
                {children}
            </main>

            <AdminFooter />
        </div>
    );
}
