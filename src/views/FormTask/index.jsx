import React from 'react';
import {Formik} from 'formik';
import View from '../../components/View';
import TextInput from '../../components/TextInput';
import Select from '../../components/Select';
import {reminderOptions, repeatOptions} from '../../utils/constants';
import * as Validation from '../../utils/validation';
import {Content, ScrollView, Button, DateTimePicker} from './Styled';

const fromSchema = Validation.object().shape({
  title: Validation.string().required('Required'),
  deadline: Validation.date().required('Required'),
  startTime: Validation.date().required('Required'),
  endTime: Validation.date().required('Required'),
  remind: Validation.object().required('Required'),
  repeat: Validation.object().required('Required'),
});

const FormTask = ({onSubmit}) => (
  <Formik initialValues={{}} onSubmit={onSubmit} validationSchema={fromSchema}>
    {({handleChange, errors, handleSubmit, values}) => (
      <ScrollView>
        <Content>
          <TextInput
            field="Title"
            placeholder="My task title"
            onChangeText={handleChange('title')}
            value={values.title}
            error={errors.title}
          />
          <View flexDirection="row">
            <DateTimePicker
              field="Deadline"
              format="yyyy-MM-dd"
              mode="date"
              onChange={handleChange('deadline')}
              value={values.deadline}
              error={errors.deadline}
            />
          </View>
          <View flexDirection="row">
            <DateTimePicker
              field="Start time"
              format="p"
              mode="time"
              onChange={handleChange('startTime')}
              value={values.startTime}
              error={errors.startTime}
            />
            <DateTimePicker
              field="End time"
              format="p"
              mode="time"
              onChange={handleChange('endTime')}
              value={values.endTime}
              error={errors.endTime}
            />
          </View>
          <Select
            field="Remind"
            items={reminderOptions}
            onChange={handleChange('remind')}
            value={values.remind}
            error={errors.remind}
            placeholder="10 minutes early"
          />
          <Select
            field="Repeat"
            items={repeatOptions}
            onChange={handleChange('repeat')}
            value={values.repeat}
            error={errors.repeat}
            placeholder="Weekly"
          />
          <Button onPress={handleSubmit} title="Add a task" />
        </Content>
      </ScrollView>
    )}
  </Formik>
);

export default FormTask;
