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
// Class: FileFilter
module Shumway.AVM2.AS.flash.net {
  import notImplemented = Shumway.Debug.notImplemented;
  import dummyConstructor = Shumway.Debug.dummyConstructor;
  import asCoerceString = Shumway.AVM2.Runtime.asCoerceString;

  export class FileFilter extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // [];
    
    constructor (description: string, extension: string, macType: string = null) {
      false && super();
      dummyConstructor("public flash.net.FileFilter");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    
    private _description: string;
    private _extension: string;
    private _macType: string;
    get description(): string {
      return this._description;
    }
    set description(value: string) {
      this._description = asCoerceString(value);
    }
    get extension(): string {
      return this._extension;
    }
    set extension(value: string) {
      this._extension = asCoerceString(value);
    }
    get macType(): string {
      return this._macType;
    }
    set macType(value: string) {
      this._macType = asCoerceString(value);
    }
  }
}
