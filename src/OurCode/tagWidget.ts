/* eslint-disable */
import { WidgetType } from '@codemirror/view';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WidgetWrapper } from './WidgetWrapper';
import MyWidget from './ExampleWidget';

export const TagWidget = (props: any) => {  //@dotun This is an example of rendering the tagWidget Creator - 
    // a function that gets props and returns a new Mywidget Wrapper in widget wrapper 
    return new WidgetWrapper( MyWidget,  props)
};