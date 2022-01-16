import React, {useState, useCallback} from 'react'
import './css/textTest.scss'

import { createEditor,  Editor, Transforms } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

function TextTest() {
    // Create a Slate editor object that won't change across renders.

    const [editor] = useState(() => withReact(createEditor()))
    const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ])
    const CodeElement = props => {
      return (
        <pre {...props.attributes}>
          <code>{props.children}</code>
        </pre>
      )
    }
    const DefaultElement = props => {
      return <p {...props.attributes}>{props.children}</p>
    }
    const renderElement = useCallback(props => {
      switch (props.element.type) {
        case 'code':
          return <CodeElement {...props} />
        default:
          return <DefaultElement {...props} />
      }
    }, [])
    const renderLeaf = useCallback(props => {
      return <Leaf {...props} />
    }, [])

    const Leaf = props => {
      return (
        <span
          {...props.attributes}
          style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
        >
          {props.children}
        </span>
      )
    }
    return (
        <div className="testComponent">
            <h1> hi </h1>
            <Slate editor={editor} value={value} onChange={value => setValue(value)}>
          <Editable
            renderElement={renderElement}
            // Pass in the `renderLeaf` function.
            renderLeaf={renderLeaf}
            onKeyDown={event => {
              if (!event.ctrlKey) {
                return
              }

              switch (event.key) {
                case '`': {
                  event.preventDefault()
                  const [match] = Editor.nodes(editor, {
                    match: n => n.type === 'code',
                  })
                  Transforms.setNodes(
                    editor,
                    { type: match ? null : 'code' },
                    { match: n => Editor.isBlock(editor, n) }
                  )
                  break
                }

                case 'b': {
                  event.preventDefault()
                  Transforms.setNodes(
                    editor,
                    { bold: true },
                    { match: n => Text?.isText(n), split: true }
                  )
                  break
                }
              }
            }}
          />
        </Slate>
        </div>
    )
}

export default TextTest
