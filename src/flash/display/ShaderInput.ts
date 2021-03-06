/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: ShaderInput
module Shumway.AVM2.AS.flash.display {
  import notImplemented = Shumway.Debug.notImplemented;
  import dummyConstructor = Shumway.Debug.dummyConstructor;
  import asCoerceString = Shumway.AVM2.Runtime.asCoerceString;
  export class ShaderInput extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // [];
    
    constructor () {
      false && super();
      dummyConstructor("public flash.display.ShaderInput");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    
    // _input: ASObject;
    // _width: number /*int*/;
    // _height: number /*int*/;
    // _channels: number /*int*/;
    // _index: number /*int*/;
    get input(): ASObject {
      notImplemented("public flash.display.ShaderInput::get input"); return;
      // return this._input;
    }
    set input(input: ASObject) {
      input = input;
      notImplemented("public flash.display.ShaderInput::set input"); return;
      // this._input = input;
    }
    get width(): number /*int*/ {
      notImplemented("public flash.display.ShaderInput::get width"); return;
      // return this._width;
    }
    set width(value: number /*int*/) {
      value = value | 0;
      notImplemented("public flash.display.ShaderInput::set width"); return;
      // this._width = value;
    }
    get height(): number /*int*/ {
      notImplemented("public flash.display.ShaderInput::get height"); return;
      // return this._height;
    }
    set height(value: number /*int*/) {
      value = value | 0;
      notImplemented("public flash.display.ShaderInput::set height"); return;
      // this._height = value;
    }
    get channels(): number /*int*/ {
      notImplemented("public flash.display.ShaderInput::get channels"); return;
      // return this._channels;
    }
    get index(): number /*int*/ {
      notImplemented("public flash.display.ShaderInput::get index"); return;
      // return this._index;
    }
  }
}
