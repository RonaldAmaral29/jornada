export default function AdminDashboard() {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <p className="text-muted-foreground">
                Bem-vindo ao painel administrativo da MetaBee!
                Aqui você controla os alunos, cursos e configurações da plataforma.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-xl shadow-sm bg-card">
                    <h3 className="text-xl font-semibold mb-2">Total de Alunos</h3>
                    <p className="text-4xl font-bold text-yellow-500">0</p>
                </div>

                <div className="p-6 border rounded-xl shadow-sm bg-card">
                    <h3 className="text-xl font-semibold mb-2">Cursos Ativos</h3>
                    <p className="text-4xl font-bold text-yellow-500">0</p>
                </div>

                <div className="p-6 border rounded-xl shadow-sm bg-card">
                    <h3 className="text-xl font-semibold mb-2">Matrículas</h3>
                    <p className="text-4xl font-bold text-yellow-500">0</p>
                </div>
            </div>
        </div>
    );
}
