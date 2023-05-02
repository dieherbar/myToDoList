
export default function CustomMain(props) {
    return (
        <>
        <main>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.children}
        </main>
        </>
    )
}