
$('#table').bootstrapTable({
  method: 'GET', //请求的方式，
  contentType: "application/json",
  url:"http://localhost:3000/users/get",//要请求数据的文件路径，这是我们服务端给的接口，待会用服务端通过这个接口将要显示内容的数据返回到table进行显示
  pagination:false,
  columns: [{
    field: 'url',
    title: '接口'
  }, {
    field: 'fail',
    title: '失败率'
  }, {
    field: 'maxTime',
    title: '最大耗时'
  }, {
    field: 'argv',
    title: '平均耗时'
  }, {
    field: 'count',
    title: '上报次数'
  }]
});