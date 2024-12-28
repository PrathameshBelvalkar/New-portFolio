// BlogDetails.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
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
import EditorjsList from "@editorjs/list";
import Hyperlink from "editorjs-hyperlink";

export default function BlogDetails() {
    const { title } = useParams(); // Retrieve the blog title from the URL
    const ejInstance = useRef(null);
    const undoInstance = useRef(null);
    const [blogData, setBlogData] = useState(null);
    const [error, setError] = useState(null);

    // Function to map blog titles to JSON file paths
    const getBlogFilePath = (title) => {
        switch (title) {
            case "Forget ChatGPT & Claude: Here Are 6 (New & Free) AI Tools That Will Blow Your Mind":
                return "/NewAiTools.json";
            case "ChatGPT: Changing the Landscape of Coding Standards":
                return "/ChatGPTChangingtheLandscapeofCodingStandards.json";
            case "The Future of Quantum Computing: A Tomorrow’s Technology":
                return "/QuantumComputing.json";
            case "Why Linux and Not Windows":
                return "/LinuxvsWindows.json";
            case "Introducing OpenAi Whisper":
                return "/WhisperAi.json";
            case "Sending Email with Laravel 10 and Gmail":
                return "/Laravel10Mail.json";
            case "TanStack Query v5: A Guide to Installation and Basic Fetch Example":
                return "/Tanstack.json";
            case "17 Mindblowing Github Repositories You Never Knew Existed":
                return "/TopRepository.json";
            case "PHP8.4 is Here: Discover What's New with Examples!":
                return "/NewPhp.json";
            case "A Comprehensive Guide to FFmpeg: Installation and Basic Commands":
                return "/FFmpegSolution.json";
            default:
                return null; // Handle cases where no match is found
        }
    };

    // Function to fetch blog data based on the title
    const fetchBlogData = async () => {
        const filePath = getBlogFilePath(title);
        if (!filePath) {
            console.error("Blog file path not found for title:", title);
            setError("Blog not found.");
            return;
        }

        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error("Blog data not found");
            }
            const data = await response.json();
            setBlogData(data);
        } catch (err) {
            console.error("Error fetching blog data:", err);
            setError("Failed to load blog content.");
        }
    };

    // Function to initialize EditorJS with fetched data
    const initEditor = (data) => {
        if (ejInstance.current) {
            // If an instance already exists, destroy it before creating a new one
            ejInstance.current.destroy();
            ejInstance.current = null;
        }

        const editor = new EditorJS({
            holder: "editorjs",
            data: data,
            autofocus: false,
            readOnly: true, // Set to true if you want the editor to be read-only
            onReady: () => {
                ejInstance.current = editor;

                // Initialize Undo plugin after editor is ready
                undoInstance.current = new Undo({
                    editor,
                });

                // Initialize Drag-and-drop plugin
                new DragDrop(editor);
            },
            onChange: async () => {
                try {
                    const content = await editor.save();
                    console.log(content);
                } catch (err) {
                    console.error("Error saving content:", err);
                }
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
                        placeholder: "Paste image URL",
                    },
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
                        defaultStyle: "unordered",
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
                marker: {
                    class: Marker,
                },
                hyperlink: {
                    class: Hyperlink,
                    config: {
                        shortcut: "CMD+L",
                        target: "_blank",
                        rel: "nofollow",
                        availableTargets: ["_blank", "_self"],
                        availableRels: ["author", "noreferrer"],
                        validate: false,
                    },
                },
                inlineCode: {
                    class: InlineCode,
                    shortcut: "CMD+SHIFT+M",
                },
            },
        });
    };

    // Fetch blog data when the component mounts or when the title changes
    useEffect(() => {
        fetchBlogData();
    }, [title]);

    // Initialize EditorJS when blogData is available
    useEffect(() => {
        if (blogData) {
            initEditor(blogData);
        }

        // Cleanup EditorJS instance on component unmount or before re-initializing
        return () => {
            ejInstance.current?.destroy();
            ejInstance.current = null;
        };
    }, [blogData]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return <div id="editorjs"></div>;
}