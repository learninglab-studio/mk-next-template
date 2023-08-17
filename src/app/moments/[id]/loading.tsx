export default function Page ({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>loading</h1>
            <pre>the data for {{params.id}}</pre>
        </div>
    )
}

