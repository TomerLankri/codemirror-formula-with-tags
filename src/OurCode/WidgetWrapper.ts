/* eslint-disable */
import { WidgetType } from '@codemirror/view';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
 //@dotun this is the translator between Widget and DOm since codemirror only accepts DOM
export class WidgetWrapper extends WidgetType {
  constructor(readonly component: any, readonly props: any) {
    super();
  }

  toDOM() {
    const container = document.createElement('div');
    ReactDOM.render(React.createElement(this.component, this.props), container);
    return container;
  }

  ignoreEvent() {
    return false;
  }
}
