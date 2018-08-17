
# Project jsxmlparser

Syncronously

```javascript
  const obj = toObject('<div style="Jepa">Hello World!!!</div>')
  console.log(obj)
```

Step by Step

```javascript
  const parser = new XMLParser(['<div style="Jepa">Hello World!!!</div>'])
  let max_cnt = 100000
  while(!parser.eof) {
    parser.parse({
      beginNode( name:string, buffer_index?:number ) {
        console.log('Begin ', name)
      },
      setAttribute( name:string, value:bufferType, buffer_index?:number) {
        console.log('attr ', name, '=', value)
      },
      addTextNode( value:string, buffer_index?:number ) {
        console.log('test: ', value)
      },
      closeNode( name:string, buffer_index?:number ) {
        console.log('closed: ', name)
      }        
    })
    if(max_cnt-- < 0 ) break
  }
```


