import React from 'react';
import { shallow } from 'enzyme';

import Content from './Content';

describe('<Content> component', ()=>{
  const contentWrapper = shallow(<Content />);

  it('renders correctly', () => {
    expect(contentWrapper).toHaveLength(1);
  });

  it('render <h1>', ()=>{
    const contentSectionH1 = contentWrapper.find('h1');
    expect(contentSectionH1).toHaveLength(1);
  })

  it('renders an <ul>', () => {
    const contentUl = contentWrapper.find('ul');
    expect(contentUl).toHaveLength(1);
  });


  // STATE TEST, LENGTH INITIAL STATE
  it('have tasks state which consists of three items', () => {
   const kanbansState = contentWrapper.state('kanbans');
   expect(kanbansState).toHaveLength(3);
  });

 //EVENT TEST
  it('add new atask to the kanbans state when addTask function called', ()=>{
    const newTask = {
      id:5,
      task:'learn TDD',
      value:'todo',
    };

    contentWrapper.instance().addTask(newTask);
    const kanbansState = contentWrapper.state('kanbans');
    expect(kanbansState).toHaveLength(4);
  })

  it('delete a task when deleteTask function called', ()=>{
    const taskDeleteId = 1
    contentWrapper.instance().deleteTask(taskDeleteId);
    const kanbansState = contentWrapper.state('kanbans');
    expect(kanbansState).toHaveLength(3);
  })

  it('deletes a task when DELETE button clicked', () => {
    // mencari button delete yang pertama
    const buttonDeleteClick = contentWrapper.find('.delete-btn').at(0);

    // fungsi click button
    buttonDeleteClick.simulate('click');
    const kanbansState = contentWrapper.state('kanbans');
    expect(kanbansState).toHaveLength(2);
  });


})
