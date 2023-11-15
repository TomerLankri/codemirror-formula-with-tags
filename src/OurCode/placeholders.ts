/* eslint-disable */


import { EditorView, ViewUpdate, ViewPlugin } from '@codemirror/view';
import { RangeSet, StateEffect, StateField } from '@codemirror/state';
import { Decoration } from '@codemirror/view';
import { TagWidget } from './tagWidget';

function tagDecoration(doc:any) {
 //@dotun this file is where the regex is created for each type of widget we want to add. And it renders the tagWidget
  let decorations = [];
  const range = doc.toString();
  const regex = /\[\[(.+?)\]\]/g; // Updated regex
  let match;
  while ((match = regex.exec(range))) {
    const start = match.index;
    const end = start + match[0].length;
    console.log(match[1]);
    decorations.push(Decoration.replace({ widget: TagWidget(match[1]) }).range(start, end));
  }
  return Decoration.set(decorations);
}

export const tagExtension = StateField.define({
  create(view) {
    return tagDecoration(view.doc);
  },

  update(decorations, tr) {
    if (tr.docChanged) {
      return tagDecoration(tr.state.doc);
    }
    return decorations;
  },

  provide: field => EditorView.decorations.from(field)
});
