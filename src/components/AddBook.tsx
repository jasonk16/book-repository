import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { useModalToggle } from '../components/ModalBox';
import { addBookToList } from '../functions/redux/actions';

const { TextArea } = Input;

const AddBook: React.FC = () => {
  const toggleModal = useModalToggle();
  const dispatch = useDispatch();

  const onFormFinish = (values: any) => {
    dispatch(addBookToList(values));
    toggleModal();
  };

  return (
    <AddBookContainer>
      <h2>Add a book</h2>
      <Form
        layout="vertical"
        name="addBooks"
        initialValues={{ bookName: '', genre: '', isbn: '', summary: '' }}
        size="large"
        onFinish={onFormFinish}
      >
        <FormGroup
          label={<FormLabel>Book Name</FormLabel>}
          name="bookName"
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
          rules={[{ required: true, message: 'Book name is required' }]}
        >
          <Input placeholder="Enter book name" />
        </FormGroup>
        <FormGroup
          label={<FormLabel>Summary</FormLabel>}
          name="summary"
          rules={[{ required: true, message: 'Book name is required' }]}
        >
          <TextArea rows={4} placeholder="Enter brief summary" />
        </FormGroup>
        <div className="d-flex justify-content-end mt-4">
          <Button
            danger
            shape="round"
            size="large"
            className="d-flex align-items-center mx-2"
            onClick={() => toggleModal()}
          >
            CANCEL
          </Button>
          <FormGroup>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              size="large"
              className="d-flex align-items-center mx-2"
            >
              SUBMIT
            </Button>
          </FormGroup>
        </div>
      </Form>
    </AddBookContainer>
  );
};

const AddBookContainer = styled.div`
  width: 50vw;
`;
const FormGroup = styled(Form.Item)`
  margin-bottom: 1rem;
`;
const FormLabel = styled.p`
  margin-bottom: 0px;
`;

export default AddBook;
