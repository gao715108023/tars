$import("js.util.HashIterator","BootstrapClassLoader"),Class.forName({name:"class js.util.KeyIterator extends js.util.HashIterator",next:function(){try{var t=this._element._table[this._element._hashArray[this._cursor]];return this._lastRet=this._cursor++,t.getKey()}catch(e){throw new js.lang.IndexOutOfBoundsException("Index: "+this._cursor+", Size: "+this._element.size()+",Message:"+e.getMessage())}}});