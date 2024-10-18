export default function Header({ title }: { title: string }) {
    return (
        <div className="bg-blue-600 py-4 px-6 shadow-md rounded-lg mb-4">
            <h1 className="text-3xl font-bold text-white text-center">{title}</h1>
        </div>
    )
}
