import {Component} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  Editor = ClassicEditor;
  editorData: string;
  finalData: string;

  // update local variable on every keystroke
  onChange(event: ChangeEvent) {
    this.editorData = event.editor.getData();
  }

  // get text from editor and show it in UI
  getText() {
    this.finalData = this.editorData;
  }
}
