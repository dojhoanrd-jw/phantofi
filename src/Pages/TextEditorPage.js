import React, { useState } from 'react';
import styled from 'styled-components';
import { EditorState } from 'draft-js';
import ToolboxText from '../Components/TextEditorComponent/ToolboxText';
import TextArea from '../Components/TextEditorComponent/TextArea';

const TextEditorPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  return (
    <PageContainer>
      <TextAreaContainer>
        <TextArea editorState={editorState} onChange={handleEditorChange} />
      </TextAreaContainer>
      <ToolBoxContainer>
        <ToolboxText editorState={editorState} onChange={handleEditorChange} />
      </ToolBoxContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh; /* Asegúrate de usar vh en lugar de % para la altura completa de la vista */
  border: 1px solid #ddd; /* Opcional: Añade un borde para ver los límites del contenedor */
  margin: 20px;
  background-color: #f8f9fa; /* Color de fondo de la página */
`;

const TextAreaContainer = styled.div`
  flex: 1;
  overflow-y: auto; /* Permite el desplazamiento vertical */
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ToolBoxContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  z-index: 1000;
`;

export default TextEditorPage;
