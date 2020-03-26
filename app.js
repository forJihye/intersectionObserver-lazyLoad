// 명령어 node app
// fs = file system
const sqip = require('sqip');
const fs = require('fs')

fs.readdirSync('./image').forEach((name) => { // readdirSync 파일 읽음
  const result = sqip({
      filename: './image/'+name,
      numberOfPrimitives: 10
  });
  
  fs.writeFileSync('./image-sqip/'+ name.slice(0, -4) + '.svg', result.final_svg) // 파일 생성
})


