import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Game, PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { DataTableCustom } from "@/Components/DataTableCustom";
import { column } from "./column";
import Create from "./Create";

interface DashboardProps {
    games: Game[];
}
export default function Dashboard({ games }: DashboardProps) {
    return (
        <>
            <Tabs defaultValue="table" className="w-full">
                <TabsList>
                    <TabsTrigger value="table">Data Game</TabsTrigger>
                    <TabsTrigger value="add">Tambah Game</TabsTrigger>
                </TabsList>
                <TabsContent value="table">
                    <DataTableCustom data={games} columns={column} />
                </TabsContent>
                <TabsContent value="add">
                    <Create />
                </TabsContent>
            </Tabs>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajemen Game"
        description="Game Admin Control Panel"
        head="admin"
        children={page}
    />
);