export default function AdminFooter() {
    return (
        <footer className="h-14 bg-background border-t fixed left-64 right-0 bottom-0 flex items-center justify-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MetaBee - Portal Administrativo
        </footer>
    );
}
