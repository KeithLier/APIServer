
$("#table").bootstrapTable({
  // method: 'get', //请求的方式，
  // contentType: "application/json",
  url:"http://127.0.0.1:3000/",//要请求数据的文件路径，这是我们服务端给的接口，待会用服务端通过这个接口将要显示内容的数据返回到table进行显示
  pageNumber: 1, //初始化加载第一页，默认第一页
  pagination:false,//是否分页
  queryParams:queryParams,//请求服务器时所传的参数，服务端分页的时候一定要有这个函数，这个函数的返回值相当于查询要显示内容数据的参数，表格内容数据的获取取决于这个方法
  sidePagination:'server',//指定服务器端分页
  pageSize:5,//单页记录数
  pageList:[5,10,20],//分页步进值
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

function queryParams(params){
    return {
      pageSize : params.limit, //每一页的数据行数，默认是上面设置的5(pageSize)
      pageIndex : params.offset/params.limit+1, //当前页面,默认是上面设置的1(pageNumber)
    }
  }