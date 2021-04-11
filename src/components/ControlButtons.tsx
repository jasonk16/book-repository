import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'antd/es/button';
import { PlusOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons';

type ControlButtonsProps = {
  action: (action: string) => void;
  deleteMode: boolean;
};

const ControlButtons: React.FC<ControlButtonsProps> = ({ action, deleteMode }) => {
  return (
    <ControlButtonsContainer className="d-flex justify-content-end">
      {deleteMode ? (
        <>
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            shape="round"
            size="large"
            className="d-flex align-items-center mx-2"
            danger
            onClick={() => action('confirmDelete')}
          >
            CONFIRM
          </Button>
          <Button
            icon={<CloseOutlined />}
            shape="round"
            size="large"
            className="d-flex align-items-center mx-2"
            danger
            onClick={() => action('cancel')}
          >
            CANCEL
          </Button>
        </>
      ) : (
        <>
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            shape="round"
            size="large"
            className="d-flex align-items-center mx-2"
            danger
            onClick={() => action('delete')}
          >
            <div className="d-none d-md-block ml-2">DELETE</div>
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            shape="round"
            size="large"
            className="d-flex align-items-center mx-2"
            onClick={() => action('add')}
          >
            <div className="d-none d-md-block ml-2">ADD BOOK</div>
          </Button>
        </>
      )}
    </ControlButtonsContainer>
  );
};

const ControlButtonsContainer = styled.div`
  position: sticky;
  top: 10px;
  z-index: 999;
`;

export default ControlButtons;
