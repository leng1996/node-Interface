let express = require("express");
let router = express.Router();
let mgdb = require("../../utils/mgdb");

router.get("/",(req,res,next)=>{

    let {user_id} = req.query
    console.log("123",user_id)
    //res.send("123",user_id);
    mgdb({
        dbName: 'luke',
        collectionName: 'buycar'
        }, ({ collection, client, ObjectId }) => {
        collection.find({
            user_id
        },{
            projection:{}
        }).toArray((err,result)=>{
            console.log(result)
            res.send({err:0, mess:'成功', data:result})
            client.close();
            
        })
        })
    
})

// router.get("/:id",(req,res,next)=>{
//     let id = req.params.id
//     if(!id) res.send({err:1,mess:'ID为必传参数'});
//     //执行函数
//     getById(res,id)
// })

// function getById(res,id){
//    console.log("lianjie")
//    mgdb({
//     dbName: 'luke',
//     collectionName: 'list'
//   }, ({ collection, client, ObjectId }) => {
//     collection.find({
//       _id:ObjectId(id)
//     },{
//       projection:{_id:0}
//     }).toArray((err,result)=>{
//       if(!err){
//         if(result.length>0){
           
//           res.send({err:0, mess:'成功', data:result[0]})
//         }else{
//           res.send({err:1,mess:'数据不存在'})
//         }
//         client.close();
//       }else{
        
//         res.send({err:1,mess:'库链接错误'})
//         client.close();
//       }
      
//     })
// //  })
//}
// router.get("/",(req,res,next)=>{
//     let {_page,_limit,q,_sort,id} = req.query

   
//     mgdb({
//         dbName: 'luke',
//         collectionName: 'list'
//         }, ({ collection, client, ObjectId }) => {
//         collection.find(
//             q ? {title: eval('/' + q +'/g') } : {}  
//         ,{
//             skip: _page * _limit,
//             limit: _limit,
//             sort: { [_sort]: -1 },
//             projection:{}
//         }).toArray((err,result)=>{
//             //console.log(result)
//             res.send({err:0, mess:'成功', data:result})
//             client.close();
            
//         })
//     })
    
// })
module.exports = router;