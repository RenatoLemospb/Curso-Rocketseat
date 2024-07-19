import http from 'node:http'
import {Transform} from 'node:stream'

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback){
        const Transformed = Number(chunk.toString()) * -1

        console.log(Transformed)

        callback(null, Buffer.from(String(Transformed)))
    }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async(req,res)=>{
 const Buffers = []  
 
 for await(const chunk of req){
    Buffers.push(chunk)
 }
const fullStreamContent = Buffer.concat(Buffers).toString()

console.log(fullStreamContent)

return res.end(fullStreamContent)

// return  req
// .pipe(new InverseNumberStream())
// .pipe(res)
})

server.listen(3334)