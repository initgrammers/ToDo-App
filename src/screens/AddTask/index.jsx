import React from 'react';
import View from '../../components/View';
import TextInput from '../../components/TextInput';
import DateTimePicker from '../../components/DateTimePicker';
import Select from '../../components/Select';

const AddTask = () => (
  <View background="white" style={{flex: 1}}>
    <TextInput
      field="Title"
      placeholder="My task title"
      onChangeText={text => {}}
    />
    <DateTimePicker
      field="Deadline"
      format="yyyy-MM-dd"
      mode="date"
      onChange={() => {}}
    />

    <View flexDirection="row">
      <DateTimePicker
        field="Start time"
        format="p"
        mode="time"
        onChange={() => {}}
        style={{flex: 1}}
      />
      <DateTimePicker
        field="End time"
        format="p"
        mode="time"
        onChange={a => alert(a)}
        style={{flex: 1}}
      />
    </View>

    <Select
      field="Remind"
      items={[
        {
          Name: '10 minutes early',
          Id: 1,
        },
        {
          Name: '30 minutes early',
          Id: 2,
        },
        {
          Name: '1 hour early',
          Id: 3,
        },
        {
          Name: '1 day early',
          Id: 4,
        },
      ]}
      onChange={() => {}}
    />
    <Select
      field="Repeat"
      items={[
        {
          Name: 'Daily',
          Id: 1,
        },
        {
          Name: 'Weekly',
          Id: 1,
        },
      ]}
      onChange={() => {}}
    />
  </View>
);

export default AddTask;
