"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView, lightDefaultTheme, Theme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

const lightRedTheme = {
  colors: {
    editor: {
      text: "#222222",
      background: "#ffeeee",
    },
    menu: {
      text: "#ffffff",
      background: "#263238",
    },
    tooltip: {
      text: "#ffffff",
      background: "#263238",
    },
    hovered: {
      text: "#ffffff",
      background: "#263238",
    },
    selected: {
      text: "#ffffff",
      background: "#263238",
    },
    disabled: {
      text: "#ffffff",
      background: "#263238",
    },
    shadow: "#455A64",
    border: "#263238",
    sideMenu: "#bababa",
    highlights: lightDefaultTheme.colors!.highlights,
  },
  borderRadius: 4,
  fontFamily: "Helvetica Neue, sans-serif",
} satisfies Theme;

const redTheme = {
  light: lightRedTheme,
  dark: lightRedTheme,
};

export default function Editor({
  initialContent = "",
  onEditorChange,
}: {
  initialContent?: any;
  onEditorChange: (data: any) => void;
}) {
  const editor = useCreateBlockNote({
    initialContent: initialContent,
  });

  const toHTML = async (document: any) => {
    const html = await editor.blocksToHTMLLossy(document);
    return html;
  };

  return (
    <BlockNoteView
      editor={editor}
      theme={redTheme}
      onChange={(editor) => {
        onEditorChange(toHTML(editor.document));
      }}
    />
  );
}
