import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Undo from "editorjs-undo";
import DragDrop from "editorjs-drag-drop";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Alert from "editorjs-alert";
import Table from "@editorjs/table";
import CodeTool from "@editorjs/code";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Embed from "@editorjs/embed";
import SimpleImage from "@editorjs/simple-image";
import EditorjsList from '@editorjs/list';
const DEFAULT_INITIAL_DATA = {
    "time": 1735367070123,
    "blocks": [
        {
            "id": "xrMqUFXGfQ",
            "type": "header",
            "data": {
                "text": "<b>Sending Email with Laravel 10 and Gmail</b>",
                "level": 1
            }
        },
    ],
    "version": "2.30.7"
};

export default function EditBlog() {
    const ejInstance = useRef();
    const [isReadOnly, setIsReadOnly] = useState(false);
    const undoInstance = useRef();

    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                ejInstance.current = editor;

                // Initialize Undo plugin after editor is ready
                undoInstance.current = new Undo({
                    editor,
                });

                // Initialize Drag-and-drop plugin
                new DragDrop(editor); // Pass the editor instance to the DragDrop plugin
            },
            autofocus: false,
            data: DEFAULT_INITIAL_DATA,
            readOnly: false,
            onChange: async () => {
                let content = await editor.saver.save();
                console.log(content);
            },
            inlineToolbar: true,
            tools: {
                header: { class: Header, inlineToolbar: true },
                paragraph: { class: Paragraph, inlineToolbar: true },
                alert: {
                    class: Alert,
                    inlineToolbar: true,
                    shortcut: "CMD+SHIFT+A",
                    config: {
                        alertTypes: [
                            "primary",
                            "secondary",
                            "info",
                            "success",
                            "warning",
                            "danger",
                            "light",
                            "dark",
                        ],
                        defaultType: "primary",
                        messagePlaceholder: "Enter something",
                    },
                },
                image: {
                    class: SimpleImage,
                    inlineToolbar: true,
                    config: {
                        placeholder: 'Paste image URL'
                    }
                },
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3,
                        maxRows: 5,
                        maxCols: 5,
                    },
                },
                list: {
                    class: EditorjsList,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    },
                },
                code: { class: CodeTool, inlineToolbar: true },
                embed: {
                    class: Embed,
                    config: {
                        services: {
                            youtube: true,
                            coub: true,
                            codepen: {
                                regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                                embedUrl:
                                    "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
                                html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                                height: 300,
                                width: 600,
                                id: (groups) => groups.join("/embed/"),
                            },
                        },
                    },
                },
                Marker: {
                    class: Marker,
                },
                inlineCode: {
                    class: InlineCode,
                    shortcut: "CMD+SHIFT+M",
                },
            },
        });
    };

    const toggleReadOnly = () => {
        setIsReadOnly((prevReadOnly) => !prevReadOnly); // Toggle the state
        ejInstance.current.readOnly.toggle(); // Toggle readOnly in EditorJS instance
    };

    const logEditorData = async () => {
        if (ejInstance.current) {
            const savedData = await ejInstance.current.saver.save(); // Save current editor data
            console.log(savedData); // Log the saved data
        }
    };

    const undo = () => {
        if (undoInstance.current) {
            undoInstance.current.undo();
        }
    };

    const redo = () => {
        if (undoInstance.current) {
            undoInstance.current.redo();
        }
    };

    // This will run only once
    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);
    return (
        <div id="editorjs"></div>
    )
}
