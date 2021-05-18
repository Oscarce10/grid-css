import {useEffect, useState} from "react"
import hljs from "highlight.js/lib/index"

export default function HTML({code}) {
    const [formatted, setFormatted] = useState("")
    const format = (node, level) => {
        let indentBefore = new Array(level++ + 1).join('  '),
            indentAfter  = new Array(level - 1).join('  '),
            textNode;
        for (let i = 0; i < node.children.length; i++) {
            textNode = document.createTextNode('\n' + indentBefore);
            node.insertBefore(textNode, node.children[i]);
            format(node.children[i], level);
            if (node.lastElementChild === node.children[i]) {
                textNode = document.createTextNode('\n' + indentAfter);
                node.appendChild(textNode);
            }
        }
        return node;
    }
    useEffect(() => {
        setFormatted(format(code, 0).innerHTML)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        hljs.highlightAll();
    }, [formatted]);
    return (
        <div>
            <h3>HTML</h3>
            <pre>
            <code className="html">
                {formatted}
        </code>
        </pre>
        </div>
    )
}