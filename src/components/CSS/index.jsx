import {useEffect, useState} from "react"
import hljs from "highlight.js/lib/index"

export default function CSS({code}) {
    const [formatted, setFormatted] = useState("")
    const cleanStr = (str) => {
        while (str.indexOf("\t") > -1) {
            str = str.replace("\t", " ");
        }
        while (str.indexOf("  ") > -1) {
            str = str.replace("  ", " ");
        }
        return str;
    }
    useEffect(() => {
        setFormatted(cleanStr(code))
    }, [code]);
    useEffect( () => {
        hljs.highlightAll();
    }, [formatted])
    return (
        <div>
            <h3>CSS</h3>
            <pre>
            <code contentEditable={"true"} className="css"
                  onKeyUp={ e  => setFormatted(e.target.textContent)}>
                {formatted}
        </code>
        </pre>
        </div>
    )
}