import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import styled from 'styled-components';

const TextArea = ({ editorState, onChange }) => {
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <EditorContainer>
      <Editor
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
        placeholder="Start typing..."
        customStyleMap={customStyleMap}
      />
    </EditorContainer>
  );
};

const customStyleMap = {
  HIGHLIGHT: {
    backgroundColor: '#fff3bf',
  },
  BOLD: {
    fontWeight: 'bold',
    color: '#212529',
  },
  ITALIC: {
    fontStyle: 'italic',
    color: '#212529',
  },
  UNDERLINE: {
    textDecoration: 'underline',
    textDecorationColor: '#4dabf7',
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through',
    textDecorationColor: '#868e96',
  },
};

const EditorContainer = styled.div`
  min-height: 300px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: #ffffff;
  color: #212529;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .public-DraftEditor-content {
    color: #212529;
    font-size: 1rem;
    line-height: 1.5;
  }

  .public-DraftEditorPlaceholder-root {
    color: #868e96;
  }

  &:focus-within {
    border-color: #4dabf7;
    box-shadow: 0 0 0 0.2rem rgba(77, 171, 247, 0.25);
  }
`;

export default TextArea;