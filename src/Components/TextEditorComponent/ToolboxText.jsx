import React from 'react';
import { EditorState, RichUtils } from 'draft-js';
import styled from 'styled-components';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaArrowLeft } from 'react-icons/fa';

const ToolboxText = ({ editorState, onChange }) => {
  const toggleInlineStyle = (style) => {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleBackClick = () => {
    // Aquí puedes definir la acción para regresar a la página anterior
    window.history.back();
  };

  return (
    <ToolBoxContainer>
      <BackButton onClick={handleBackClick}>
        <FaArrowLeft size={20} />
      </BackButton>
      <ToolButtonsContainer>
        <ToolButton onClick={() => toggleInlineStyle('BOLD')}><FaBold size={20} /></ToolButton>
        <ToolButton onClick={() => toggleInlineStyle('ITALIC')}><FaItalic size={20} /></ToolButton>
        <ToolButton onClick={() => toggleInlineStyle('UNDERLINE')}><FaUnderline size={20} /></ToolButton>
        <ToolButton onClick={() => toggleInlineStyle('STRIKETHROUGH')}><FaStrikethrough size={20} /></ToolButton>
        {/* Agrega más botones según sea necesario */}
      </ToolButtonsContainer>
    </ToolBoxContainer>
  );
};

const ToolBoxContainer = styled.div`
  display: flex;
  align-items: center; /* Alinea los elementos verticalmente en el centro */
  padding: 0.5rem;
  background-color: #ffffff; /* Fondo blanco */
  border-top: 1px solid #e9ecef; /* Línea superior de separación en gris claro */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra más ligera para destacar el contenedor */
`;

const ToolButtonsContainer = styled.div`
  display: flex;
  justify-content: center; /* Centra los botones horizontalmente */
  flex: 1; /* Ocupa el espacio restante */
`;

const ToolButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 0.5rem;
  color: #4dabf7; /* Color de íconos por defecto en azul */
  transition: color 0.3s ease; /* Transición suave para el cambio de color */

  &:hover {
    color: #3b8fd8; /* Color de íconos al pasar el ratón por encima en un tono más oscuro */
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem; /* Espacio entre el botón de regresar y los botones de herramientas */
  color: #4dabf7; /* Color del ícono de regreso en azul */

  &:hover {
    color: #3b8fd8; /* Color del ícono de regreso al pasar el ratón por encima en un tono más oscuro */
  }
`;

export default ToolboxText;
