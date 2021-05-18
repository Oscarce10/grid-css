export default function Snippet({title, src}) {
    return (
        <iframe height="380" width="100%" scrolling="no" title={title}
                src={src}
                frameBorder="no">
        </iframe>
    )
}