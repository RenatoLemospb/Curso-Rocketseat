//netflix & spotfy

//importação de clientes via CVS(Excell)
// 1gb - 1.000.00
// post /upload import.csv

// 10mb/s - 100s

// 100s > inserçoesno banco de dados

// 10mb/s > 10.000

// Readable Streams / Writable Streams

//Process.stdin
 //   .pipe(Process.stdout)

 import {Readable, Writable, Transform} from 'node:stream'

 class OneToHundredStream extends Readable{
    index = 1

     _read(){
         const i = this.index++

         setTimeout(()=>{

         if (i > 100){
             this.push(null)
         } else {
             const buf = Buffer.from(String(i))

             this.push(buf)
         }
     }, 1000)
     }
  }

// class OneToHundredStream extends Readable {

// }
class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback){
        const Transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(Transformed)))
    }
}

class MultiplyByTenStream extends Writable{
    _write(chunk,encoding, callback){
        console.log(Number(chunk.toString())*10)
        callback()
    }

}

 new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())
