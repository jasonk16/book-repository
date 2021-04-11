import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { CloseOutlined, SaveOutlined } from '@ant-design/icons';

import { useModalToggle } from '../components/ModalBox';
import { addBookToList } from '../functions/redux/actions';

const { TextArea } = Input;

//component to add book, to be shown in modal box.
const AddBook: React.FC = () => {
  const toggleModal = useModalToggle();
  const dispatch = useDispatch();

  const onFormFinish = (values: BookListProps) => {
    dispatch(addBookToList(values));
    toggleModal();
  };

  return (
    <AddBookContainer>
      <h2>Add a book</h2>
      <Form
        layout="vertical"
        name="addBooks"
        initialValues={{ title: '', genre: '', isbn: '', summary: '' }}
        size="large"
        onFinish={onFormFinish}
      >
        <FormGroup
          label={<FormLabel>Book Name</FormLabel>}
          name="title"
          rules={[{ required: true, message: 'Book name is required' }]}
        >
          <Input placeholder="Enter book name" />
        </FormGroup>
        <FormGroup
          label={<FormLabel>Genre</FormLabel>}
          name="genre"
          rules={[{ required: true, message: 'Book genre is required' }]}
        >
          <Input placeholder="Fiction / Non-fiction" />
        </FormGroup>
        <FormGroup
          label={<FormLabel>ISBN</FormLabel>}
          name="isbn"
          rules={[{ required: true, message: 'ISBN is required' }]}
        >
          <Input placeholder="Enter book name" />
        </FormGroup>
        <FormGroup
          label={<FormLabel>Summary</FormLabel>}
          name="summary"
          rules={[{ required: true, message: 'Summary is required' }]}
        >
          <TextArea rows={4} placeholder="Enter brief summary" />
        </FormGroup>
        <div className="d-flex justify-content-end mt-4">
          <Button
            danger
            icon={<CloseOutlined />}
            shape="round"
            size="large"
            className="d-flex align-items-center mx-2"
            onClick={() => toggleModal()}
          >
            <div className="d-none d-md-block ml-2">CANCEL</div>
          </Button>
          <FormGroup>
            <Button
              type="primary"
              icon={<SaveOutlined />}
              htmlType="submit"
              shape="round"
              size="large"
              className="d-flex align-items-center mx-2"
            >
              SAVE
            </Button>
          </FormGroup>
        </div>
      </Form>
    </AddBookContainer>
  );
};

const AddBookContainer = styled.div`
  width: 50vw;
  ${(props) => props.theme.media.mobileTablet} {
    width: 70vw;
  }
`;
const FormGroup = styled(Form.Item)`
  margin-bottom: 1rem;
`;
const FormLabel = styled.p`
  margin-bottom: 0px;
`;

export default AddBook;
