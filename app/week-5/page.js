import ItemList from "./item-list"

const Page = () => {
    return (
        <main className="h-screen">
            <h1 className="text-4xl font-bold mb-4">shopping list</h1>
            <ItemList />
        </main>
    );
};

export default Page;