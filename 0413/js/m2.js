/*
 * @Author: Quinn
 * @Date:   2015-12-25 09:53:49
 * @Last Modified by:   Quinn
 */

define(function(require,exports,module){
  var $ = require('jquery');
  var vue = require('modules/vue');
  var validationPlugin = require('jquery.validate');
  var additionalMethods = require('additional-methods');
  var checkAddrNew = require('modules/checkAddrNew');

  exports.test = function(root){
    // $("#form1").validate({
    //   // debug:true,
    //   rules:{
    //     'user.loginName':{
    //       required:true,
    //       minlength:6,
    //       maxlength:18,
    //       success:function(label){
    //         $.ajax({
    //           url:root+'/custom/checkUserName?userLoginName='+$("#userLoginName").val(),
    //           type:'post',
    //           success:function(result){
    //           if(result.info=="1"){
    //             $("#userLoginName").next().text('用户名已经存在');
    //               return false;
    //           }
    //           },
    //           error:function(){

    //           }
    //         });
    //       }
    //     },
    //     'user.email':{
    //       required:true,
    //       email:true
    //     },
    //     'user.password':{
    //       required:true,
    //       minlength:6,
    //       maxlength:18
    //     },
    //     'repassword':{
    //       required:true,
    //       equalTo:'#password'
    //     },
    //     'payPassword':{
    //       required:true,
    //       minlength:6,
    //       maxlength:18
    //     },
    //     'repayPassword':{
    //       required:true,
    //       equalTo:'#payPassword'
    //     },
    //     'user.phone':{
    //       required:true,
    //       minlength:11,
    //       isMobile:true
    //     }
    //   },
    //   messages:{
    //     'user.loginName':{
    //       required:'请输入用户名',
    //       minlength:'用户名长度不能小于6位',
    //       maxlength:'用户名不能大于18位'
    //     },
    //     'user.email':{
    //       required:'请输入邮箱',
    //       email:"邮箱地址不正确"
    //     },
    //     'user.password':{
    //       required:'请输入密码',
    //       minlength:'密码长度不能小于6位',
    //       maxlength:'密码长度不能大于18位'
    //     },
    //     'repassword':{
    //       required:'请再次输入密码',
    //       equalTo:'两次输入的密码不同'
    //     },
    //     'payPassword':{
    //       required:'请输入支付密码',
    //       minlength:'密码长度不能小于6位',
    //       maxlength:'密码长度不能小于6位',
    //     },
    //     'repayPassword':{
    //       required:'请再次输入支付密码',
    //       equalTo:'两次输入的支付密码不同'
    //     },
    //     'user.phone':{
    //       required:'请输入手机号',
    //       minlength:'手机号长度为11位',
    //       isMobile:'请输入正确的手机号'
    //     }
    //   },
    //   errorClass:"validateError",
    //   submitHandler:function(form){
    //     alert("submitted");
    //     form.submit();
    //   }
    // });
  };

  //检测支付密码
  function checkPayPassword(par){
    $("#payPassword").on('checkPayPassword',function(){
      if( $(this).val().length > 0 ){
        // 检测支付密码是否正确
        $.ajax({
          url:par.rootPath+'/accounts/checkAccountsPassword?payPassword=' + $('#payPassword').val(),
          type:'post',
          data:$("#payPassword").val(),
          timeout:5000,
          dataType:'json',
          success:function(result){
            if(result.info == 'fail'){
              //密码错误
              alert('支付密码错误！请重新输入！');
              $("#payPassword").val('').focus().parent().parent().addClass('error');
              $("#submitBtn").removeClass('disabled');
            }else{

              // 开启二次确认
              // 0:流量单;1:交易单;2:快递单;3:全托单
              if( par.orderType==0 || par.orderType==1 || par.orderType==2 || par.orderType==3 ){
                // 临时
                $('div.ui.fullscreen.modal').modal('show');
                $('div.ui.fullscreen.modal .ok').off('click');  // 先卸载所有 click 事件，防止重复提交！
                $('div.ui.fullscreen.modal .ok').one('click',function(){
                  // 提交订单
                  $("form").submit();
                });
                $("#submitBtn").removeClass('disabled');
                return false;
                // 临时
              }else{
                //密码验证正确，提交
                $("form").submit();
              }
            }
          },
          error:function(){}
        });
      }
    });
  }

  //检测余额
  function getAccountsBalance(par){
    if(par.transactionRecordID){

    }else{
      par.transactionRecordID = ''
    }
    $.ajax({
      url:par.rootPath+'/accounts/getAccountsBalance?transactionRecordID='+par.transactionRecordID,
      type:'get',
      dataType:'json',
      success:function(result){
        if(!result.success){
          if(result.msg == '没有登录'){
            alert(result.msg);
            location.href =  par.rootPath+'/login'
            return false;
          }
        }
        result.accountBalance = result.accountBalance.toFixed(2);

        // 判断是全托单还是普通单子。
        if( $("#totalNursePrice").length>0 ){
          var dvalue = result.accountBalance - $("#totalNursePrice").text();  // 全托单总价
        }else{
          var dvalue = result.accountBalance - $(".total_price_span").text(); // 普通单总价
        }

        console.log(dvalue);
        if( dvalue >= 0 ){
          //余额充足
          $("#payPassword").trigger('checkPayPassword');
        }else if( dvalue < 0 ){
          //余额不足，请充值
          var diff = $(".total_price_span").text() - result.accountBalance;
          $("#hasNoEnoughMoney").removeClass('hidden').html('没有足够的余额，请前往充值页面充值后再回来重新点击下单付款。<a class="ui teal button" href="../accounts/payment" target="_blank">立即充值</a><br>当前余额：￥'+result.accountBalance+'<br>该订单价格：￥'+$(".total_price_span").text()+'<br>还需充值：￥'+diff.toFixed(2));
          $("#submitBtn").removeClass('disabled');
        }else if( result.success == false ){
          alert('您还没有登陆，点击确定后跳转到登陆页面！');
          location.href = par.rootPath+'/login';
        }
      },
      error:function(){}
    });
  }

  // 序列号表单并转换为JSON.
  $.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  exports.addPageView = function(par){
    //新增流量-表单验证
    par.orderType = 0;
    $('input').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        return false;
      }
    });

    $("input").focus(function(event) {
      $(this).parent().parent().removeClass('error');
      $(this).parent().parent().parent().removeClass('error');
      $("#errorMessage").addClass('hidden');
    });

    //检测支付密码
    checkPayPassword(par);

    var fullScreenModal = new Vue({
      el:"#fullScreenModal",
      data:{
        detail:null
      }
    });

    $("#submitBtn").on('click',function(e){

      // 临时
      var obj = $("#vuePage").serializeObject();
      fullScreenModal.detail = obj;
      // 临时

      $("#hasNoEnoughMoney").addClass('hidden');
      if(checkForm()){
        $(this).addClass('disabled');
        // 检测余额是否充足
        getAccountsBalance(par);
      }else{
        $("#errorMessage").removeClass('hidden');
        return false;
      }
    });

    function checkForm(){
      if( $("#startDate").val() == '' ){
        $("#startDate").parent().parent().addClass('error');
        var startDate = false;
      }else{
        var startDate = true;
      }
      var strRegex = "^((https|http):\/\/)?"
          + "(((([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5])[.]{1}){3}([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5]))" // IP>形式的URL- 199.194.52.184
          + "|"
          + "([0-9a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D-]+[.]{1})+[a-zA-Z-]+)" // DOMAIN（域名）形式的URL
          + "(:[0-9]{1,4})?" // 端口- :80
          + "((/?)|(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?){1}";
      var reg = new RegExp(strRegex);
      if( !reg.test($("#linkAddress").val()) ){
        $("#linkAddress").parent().parent().addClass('error');
        var linkAddress = false;
      }else {
        var linkAddress = true;
      }
      if( $("#goodsTitle").val() == '' ){
        $("#goodsTitle").parent().parent().addClass('error');
        var goodsTitle = false;
      }else{
        var goodsTitle = true;
      }
      if( $("input[name=useKeyword]").eq(1).is(':checked') ){
        if( $("#tags-input_tagsinput").find('span.tag').length < 1  ){
          $("#tags-input_tagsinput").parent().addClass('error');
          var keyword = false;
        }else if( ($("#tags-input_tagsinput").find('span.tag').length < 30) && ($('input[name$=keywordType]:checked').val() == 1) ){
          $("#tags-input_tagsinput").parent().addClass('error');
          alert('当您选择使用自选关键词时，请至少填写30个关键词，建议您使用系统筛选关键词。');
          var keyword = false;
        }else{
          var keyword = true;
        }
      }else{
        var keyword = true;
      }
      if( $("#payPassword").val() == '' || $("#payPassword").val() == undefined ||$("#payPassword").val().length<6 ){
        $("#payPassword").parent().parent().addClass('error');
        var payPassword = false;
      }else{
        var payPassword = true;
      }

      if(startDate && linkAddress && goodsTitle && keyword && payPassword){
        return true;
      }
      else {
        return false;
      }
    }
  }
  exports.addTransaction = function(par){
    //新增交易-表单验证
    par.orderType = 1;
    $('input').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        return false;
      }
    });

    //检测支付密码
    checkPayPassword(par);

    var fullScreenModal = new Vue({
      el:"#fullScreenModal",
      data:{
        detail:null
      }
    });

    $("#submitBtn").on('click',function(){

      // 临时
      var obj = $("#vuePage").serializeObject();
      fullScreenModal.detail = obj;
      // 临时

      if(checkForm()){
        $(this).addClass('disabled');
        // 检测余额是否充足
        getAccountsBalance(par);
      }else{
        $("#errorMessage").show();
        return false;
      }
    });

    $("input").focus(function(event) {
      $("#errorMessage").hide();
      $(this).parent().parent().parent().removeClass('error');
      $(this).parent().parent().removeClass('error');
      $(this).parent().removeClass('error');
    });

    function checkForm(){
      var strRegex = "^((https|http):\/\/)?"
          + "(((([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5])[.]{1}){3}([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5]))" // IP>形式的URL- 199.194.52.184
          + "|"
          + "([0-9a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D-]+[.]{1})+[a-zA-Z-]+)" // DOMAIN（域名）形式的URL
          + "(:[0-9]{1,4})?" // 端口- :80
          + "((/?)|(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?){1}";
      var reg = new RegExp(strRegex);
      var transactionTypeRadio = $("input[name=transactionTypeRadio]:checked").val();

      // 公共验证部分 开始
      if( $("#tags-input1_tagsinput").find('span.tag').length < 1  ){
        $("#tags-input1_tagsinput").parent().addClass('error');
        var keyword1 = false;
      }else{
        var keyword1 = true;
      }
      if( $("input[name$=enterType]:checked").val() == 2 ){
        if( !reg.test($("#enterTypeLink").val()) ){
          $("#enterTypeLink").parent().addClass('error');
          var enterTypeLink = false;
        }else{
          var enterTypeLink = true;
        }
      }else{
        var enterTypeLink = true;
      }

      if( $("#payPassword").val() == '' || $("#payPassword").val() == undefined ||$("#payPassword").val().length<6 ){
        $("#payPassword").parent().parent().addClass('error');
        var payPassword = false;
      }else{
        var payPassword = true;
      }

      if( $("#shop").val() == '' || $("#shop").val() == undefined ){
        $("#shop").parent().parent().addClass('error');
        var shop = false;
      }else{
        var shop = true;
      }

      if( $("#customAliimNumber").val() == ''||$("#customAliimNumber").val()==undefined ){
        $("#customAliimNumber").parent().parent().addClass('error');
        var customAliimNumber = false;
      }else{
        var customAliimNumber = true;
      }
      // 公共验证部分 结束

      if( transactionTypeRadio == 1 ){
        // 购物车下单
        if( $("#tags-input2_tagsinput").find('span.tag').length < 1  ){
          $("#tags-input2_tagsinput").parent().addClass('error');
          var keyword2 = false;
        }else{
          var keyword2 = true;
        }

        if(keyword1 && keyword2 && payPassword && enterTypeLink &&shop&&customAliimNumber){
          return true;
        }else{
          return false;
        }
      }else if( transactionTypeRadio == 2 ){
        // 套餐下单

        if( !reg.test($("#packageLink").val()) ){
          $("#packageLink").parent().parent().addClass('error');
          var packageLink = false;
        }else{
          var packageLink = true;
        }

        if(keyword1 && packageLink && payPassword && enterTypeLink&&shop&&customAliimNumber){
          return true;
        }else {
          return false;
        }
      }else if( transactionTypeRadio == 3 ){
        // 直拍单
        if( $("#tags-input2_tagsinput").find('span.tag').length < 1  ){
          $("#tags-input2_tagsinput").parent().addClass('error');
          var keyword6 = false;
        }else{
          var keyword6 = true;
        }

        if(keyword1 && keyword6 && payPassword && enterTypeLink&&shop&&customAliimNumber){
          return true;
        }else{
          return false;
        }
      }

    }
  }
  // 以下方法已弃用
  exports.addExpressOrder = function(par){
    par.orderType = 2;
    var vue = require('modules/vue');
    // var checkAddr = require('modules/checkAddr');
    var box = new Vue({
      el:"#form",
      data:{
        validateForm:false,
        consigneeInfo:'',
        delimiter:'',
        addressList:[]
      },
      computed:{
        name:function(){
          return this.consigneeInfo.split(this.delimiter)[0];
        },
        province:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ')[0];
        },
        city:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ')[1];
        },
        county:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ')[2];
        },
        street:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ')[3];
        },
        address:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ').slice(4).join(' ');
        },
        zipCode:function(){
          return this.consigneeInfo.split(this.delimiter)[3];
        },
        phone:function(){
          return this.consigneeInfo.split(this.delimiter)[1];
        },
      },
      methods:{
        addNewConsignee:function(str){
          var expressID = $("#selectedExpress select").val();
          if(this.checkFormat(str)){
            var data = {
              name:this.name,
              phone:this.phone,
              province:this.province,
              city:this.city,
              county:this.county,
              addressArea:this.province+' '+this.city+' '+this.county,
              street:this.street,
              address:this.address,
              zipCode:this.zipCode,
              fullAddress:this.consigneeInfo,
              expressID:expressID,
              rootPath:par.rootPath,
              c:par.c
            };
            // var checkAddrObj = checkAddr(data);
            this.jsonCheckAddr(data,function(res){
              if(res.info == 'success'){
                box.addressList.push(data);
                box.consigneeInfo = '';

                // 重新计算价格
                box.recomputedPrice();
              }else{
                $("#addressWarn").slideDown();
              }
            });
          }else{

          }
        },
        jsonCheckAddr:function(data,callback){
          var strJSON = {
            expressID:$("#selectedExpress select").val(),
            address:box.consigneeInfo.split(this.delimiter)[2]
          };
          $.ajax({
            url:data.rootPath+'/basedata/checkTownship',
            type:'post',
            data:JSON.stringify(strJSON),
            success:function(result){
              callback(result);
            },
            error:function(){
              alert('出错了，请稍后再试！');
            }
          });
          return {
            isOk:true,
            isZxs:false
          }
        },
        checkFormat:function(str){
          //检测收货人信息格式是否正确
          if(this.checkStr(str)){

            // 检测地址
            if( str.split(this.delimiter)[2].split(' ').length < 4 ){
              this.validateForm = true;
              return false;
            }
            // 检测邮编
            if( !/^[0-9]*$/.test(str.split(this.delimiter)[3]) ){
              // 不符合
              this.validateForm = true;
              return false;
            }
            if( (str.split(this.delimiter)[3].length != 6) ){
              // 不符合
              this.validateForm = true;
              return false;
            }

            this.validateForm = false;
            return true;
          }else{
            this.validateForm = true;
            return false;
          }
        },
        //检测收货人信息是否符合格式
        checkStr:function(str){
          if( (str.split('，').length == 4)||(str.split(',').length == 4) ){
            if( str.split('，').length == 4 ){
              this.delimiter = '，';
            }else{
              this.delimiter = ',';
            }
            return true;
          }else{
            return false;
          }
        },
        //清空收货人信息
        clearForm:function(){
          this.consigneeInfo = '';
        },
        //删除一行收货人信息
        deleLi:function(ind){
          if( confirm("确认删除吗？") ){
            this.addressList.splice(ind, 1);
            this.recomputedPrice();
          }
        },
        //重新计算价格
        recomputedPrice:function(){
          // 重新计算价格
          var selectedOption = $("#selectedExpress select option:selected");
          var price = selectedOption.attr('price');
          var addressListLength = box.addressList.length;
          $("#formulas").html(' = '+price+' * '+addressListLength);
          $("#total_price_span3").text( (price*addressListLength).toFixed(2) );
          $("input[name$=totalPrice]").val( (price*addressListLength).toFixed(2) );
        }
      }
    });

    $('input').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        return false;
      }
    });

    $("#consigneeInfo").focus(function(event) {
      $("#addressWarn").slideUp();
    });

    $("#payPassword").focus(function(){
      $(this).parent().parent().removeClass('error');
    });

    //检测支付密码
    checkPayPassword(par);

    $("#submitBtn").on('click',function(){
      if(checkForm()){
        $(this).addClass('disabled');
        // 检测余额是否充足
        getAccountsBalance(par);
      }else{
        $("#errorMessage").removeClass('hidden');
        return false;
      }
    });

    function checkForm(){
      if( $("#selectedUserStartAddress option").length > 0 ){
        var selectedUserStartAddress = true;
      }else{
        $(".error.message").text('请先增加起运地址').show();
        var selectedUserStartAddress = false;
      }
      if( $("#addressList tr").length < 1 ){
        $(".error.message").text('请先添加收货人').show();
        var addressList = false;
      }else{
        var addressList = true;
      }

      if( $("#payPassword").val() == '' || $("#payPassword").val() == undefined ||$("#payPassword").val().length<6 ){
        $("#payPassword").parent().parent().addClass('error');
        var payPassword = false;
      }else{
        var payPassword = true;
      }

      if(selectedUserStartAddress&&addressList&&payPassword){
        return true;
      }else{
        return false;
      }
    }
  }
  exports.addExpressOrderTest = function(par){
    par.orderType = 2;

    var box = new Vue({
      el:"#vuePage",
      data:{
        userInputAddress:'',// 用户输入的原始数据 code: 0
        arrayUserInputAddress:[], // 数组化后的数据 code: 1
        formatSuccessAddress:[],  // 格式化成功后的数据 code: 2
        formatFailAddress:[],  // 格式检测失败的数据 code: 3
        successAddress:[],  // 成功通过检测的数据 code: 4
        dataFailAddress:[],  // 省市区检测失败的数据 code: 5
        successAddressObj:[],  // 成功通过检测的数据转换为对象后的 code: 6
        feedbackInfo:'',  // 反馈信息
      },
      computed:{},
      methods:{
        checkAddressBtn:function(){

          if( this.userInputAddress =='' || this.userInputAddress == undefined ){
            alert('请填写地址！');
            return false;
          }
          var regStr = /\n/ig;  // 正则换行符
          var sArr = this.userInputAddress.split(/\n/ig);

          // 清除数组中的空元素和 undefined
          for(var i = 0 ;i<sArr.length;i++){
            if(sArr[i] == "" || typeof(sArr[i]) == "undefined"){
              sArr.splice(i,1);
              i= i-1;
            }
          }

          // 数组化后复制给 arrayUserInputAddress
          this.arrayUserInputAddress = sArr;

          // 校验格式是否正确
          for(var j=0;j<this.arrayUserInputAddress.length;j++){
            if( this.checkAddressFormat(this.arrayUserInputAddress[j]) == 3 ){
              this.formatFailAddress.push(this.arrayUserInputAddress[j]);
            }else if( this.checkAddressFormat(this.arrayUserInputAddress[j]) == 4 ){
              this.successAddress.push(this.arrayUserInputAddress[j]);
            }else if( this.checkAddressFormat(this.arrayUserInputAddress[j]) == 5 ){
              this.dataFailAddress.push(this.arrayUserInputAddress[j]);
            }
          }

          var tipInfo = '已成功添加： <strong>'+this.successAddress.length
              +'</strong> 条 ; 格式检测失败 <strong>'
              +this.formatFailAddress.length
              +'</strong> 条; 省市区检测失败的 <strong>'
              +this.dataFailAddress.length
              +'</strong> 条;请修改后继续检测提交！';
          this.feedbackInfo = tipInfo;
          // alert(tipInfo+'\n'+'请修改后继续检测提交！');
          if( (this.formatFailAddress.length + this.dataFailAddress.length) < 1 ){
            $("#feedbackInfo").removeClass('hidden red').addClass('');
          }else{
            $("#feedbackInfo").removeClass('hidden red').addClass('red');
          }

          // 重置用户输入区域
          if( this.formatFailAddress.length<1 ){
            this.userInputAddress = this.dataFailAddress.join('\n');
          }else if( this.dataFailAddress.length<1 ){
            this.userInputAddress = this.formatFailAddress.join('\n');
          }else {
            this.userInputAddress = this.formatFailAddress.join('\n')+'\n'+this.dataFailAddress.join('\n');
          }
          this.successAddressObj = this.arrayToObject(this.successAddress);

          // 重置后清除临时区域
          this.formatFailAddress = [];
          this.dataFailAddress = [];

          // 重新计算价格
          this.recomputedPrice();

        },
        arrayToObject:function(arr){
          // 把地址从字符串转为对象
          var obj = [];
          for(var i=0;i<arr.length;i++){
            if ( arr[i].split('，').length == 4 ){
              var delimiter = '，';
            }else if( arr[i].split(',').length == 4 ){
              var delimiter = ',';
            }
            obj.push({
              langAddress:arr[i],
              name:arr[i].split(delimiter)[0],
              phone:arr[i].split(delimiter)[1],
              addressArea:arr[i].split(delimiter)[2].split(' ')[0]+arr[i].split(delimiter)[2].split(' ')[1]+arr[i].split(delimiter)[2].split(' ')[2],
              province:arr[i].split(delimiter)[2].split(' ')[0],
              city:arr[i].split(delimiter)[2].split(' ')[1],
              county:arr[i].split(delimiter)[2].split(' ')[2],
              street:arr[i].split(delimiter)[2].split(' ')[3],
              address:arr[i].split(delimiter)[2].split(' ')[4],
              zipCode:arr[i].split(delimiter)[3]
            });
          }
          return obj;
        },
        checkAddressFormat:function(address){

          // 判断长度是否符合
          if ( address.split('，').length == 4 ){
            var delimiter = '，';
          }else if( address.split(',').length == 4 ){
            var delimiter = ',';
          }else {
            console.log('长度不正确：%s',address);
            return 3;
          }

          // 数据过滤空格
          var userName = $.trim(address.split(delimiter)[0]);
          var userPhone = $.trim(address.split(delimiter)[1]);
          var userAddress = $.trim(address.split(delimiter)[2]);
          var userPostcode = $.trim(address.split(delimiter)[3]);

          // 判断地址格式是否符合
          if( userAddress.split(' ').length < 4 ){
            console.log('地址格式不正确：%s',address);
            return 3;
          }

          // 判断邮编是否符合
          if( !/^[0-9]*$/.test( userPostcode ) ){
            console.log('邮编为纯数字：%s',address);
            return 3;
          }
          // else if(userPostcode.length != 6){
          //   console.log('邮编为六位数');
          //   return 3;
          // }

          // 判断省市区是否对应
          var province = userAddress.split(' ')[0];
          var city = userAddress.split(' ')[1];
          var area = userAddress.split(' ')[2];
          if( checkAddrNew({province:province,city:city,area:area}) ){
            return 4;
          }else{
            console.log('省市区检测失败：%s',address);
            return 5;
          }

        },
        recomputedPrice:function(){
          // 重新计算价格
          var selectedOption = $("#selectedExpress select option:selected");
          var price = selectedOption.attr('price');
          var addressListLength = this.successAddressObj.length;
          $("#formulas").html(' = '+price+' * '+addressListLength);
          $("#total_price_span3").text( (price*addressListLength).toFixed(2) );
          $("input[name$=totalPrice]").val( (price*addressListLength).toFixed(2) );
        },
        deleLi:function(ind){
          // 删除一条记录
          if( confirm("确认删除吗？") ){
            this.successAddressObj.splice(ind,1);
            this.successAddress.splice(ind,1);
            // 重新计算价格
            this.recomputedPrice();
          }
        }
      }
    });

    $('input,textarea').focus(function(event) {
      $(".error.message").hide();
    });

    $("#payPassword").focus(function(){
      $(this).parent().parent().removeClass('error');
    });

    //检测支付密码
    checkPayPassword(par);

    var fullScreenModal = new Vue({
      el:"#fullScreenModal",
      data:{
        detail:null
      },
      computed:{
        startAddressName:function(){
          return $("select[name$=startAddressID]").find('option:selected').text();
        },
        expressName:function(){
          return $("select[name$=expressID]").find('option:selected').text();
        }
      }
    });

    $("#submitBtn").on('click',function(){

      // 临时
      var obj = $("#vuePage").serializeObject();
      fullScreenModal.detail = obj;
      // 临时

      if(checkForm()){
        $(this).addClass('disabled');
        // 检测余额是否充足
        getAccountsBalance(par);
      }else{
        $("#errorMessage").removeClass('hidden');
        return false;
      }
    });

    function checkForm(){
      if( $("#selectedUserStartAddress option").length > 0 ){
        var selectedUserStartAddress = true;
      }else{
        $(".error.message").text('请先增加起运地址').show();
        var selectedUserStartAddress = false;
      }
      if( $("#addressList tr").length < 1 ){
        $(".error.message").text('请先添加收货人').show();
        var addressList = false;
      }else{
        var addressList = true;
      }

      if( $("#payPassword").val() == '' || $("#payPassword").val() == undefined ||$("#payPassword").val().length<6 ){
        $("#payPassword").parent().parent().addClass('error');
        var payPassword = false;
      }else{
        var payPassword = true;
      }

      if(selectedUserStartAddress&&addressList&&payPassword){
        return true;
      }else{
        return false;
      }
    }

  }
  exports.editExpressOrder = function(data,par){
    par.orderType = 2;
    var vue = require('modules/vue');
    // var checkAddr = require('modules/checkAddr');
    var box = new Vue({
      el:"#form",
      data:{
        validateForm:false,
        consigneeInfo:'',
        delimiter:'',
        addressList:data
      },
      computed:{
        name:function(){
          return this.consigneeInfo.split(this.delimiter)[0];
        },
        province:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ')[0];
        },
        city:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ')[1];
        },
        county:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ')[2];
        },
        street:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ')[3];
        },
        address:function(){
          return this.consigneeInfo.split(this.delimiter)[2].split(' ').slice(4).join(' ');
        },
        zipCode:function(){
          return this.consigneeInfo.split(this.delimiter)[3];
        },
        phone:function(){
          return this.consigneeInfo.split(this.delimiter)[1];
        },
      },
      methods:{
        addNewConsignee:function(str){
          if(this.checkFormat(str)){
            var data = {
              name:this.name,
              phone:this.phone,
              province:this.province,
              city:this.city,
              county:this.county,
              addressArea:this.province+' '+this.city+' '+this.county,
              street:this.street,
              address:this.address,
              zipCode:this.zipCode
            };
            // var checkAddrObj = checkAddr(data);
            if(checkAddrObj.isOk){
              if( checkAddrObj.isZxs ){
                console.log(data);
                var newData = {
                  name:this.name,
                  phone:this.phone,
                  province:this.province,
                  city:this.province,
                  county:this.city,
                  addressArea:this.province+' '+this.province+' '+this.city,
                  street:this.street,
                  address:this.address,
                  zipCode:this.zipCode,
                };
                console.log(data);
                this.addressList.push(newData);
              }else{
                this.addressList.push(data);
              }
              this.consigneeInfo = '';
            }else{
              $("#addressWarn").slideDown();
            }
          }else{

          }
        },
        checkFormat:function(str){
          //检测收货人信息格式是否正确
          if(this.checkStr(str)){

            // 检测地址
            if( str.split(this.delimiter)[2].split(' ').length < 4 ){
              this.validateForm = true;
              return false;
            }
            // 检测邮编
            if( !/^[0-9]*$/.test(str.split(this.delimiter)[3]) ){
              // 不符合
              this.validateForm = true;
              return false;
            }
            if( (str.split(this.delimiter)[3].length != 6) ){
              // 不符合
              this.validateForm = true;
              return false;
            }

            this.validateForm = false;
            return true;
          }else{
            this.validateForm = true;
            return false;
          }
        },
        //检测收货人信息是否符合格式
        checkStr:function(str){
          if( (str.split('，').length == 4)||(str.split(',').length == 4) ){
            if( str.split('，').length == 4 ){
              this.delimiter = '，';
            }else{
              this.delimiter = ',';
            }
            return true;
          }else{
            return false;
          }
        },
        //清空收货人信息
        clearForm:function(){
          this.consigneeInfo = '';
        },
        //删除一行收货人信息
        deleLi:function(ind){
          if( confirm("确认删除吗？") ){
            this.addressList.splice(ind, 1);
          }
        }
      }
    });

    $('input').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        return false;
      }
    });

    $("#consigneeInfo").focus(function(event) {
      $("#addressWarn").slideUp();
    });

    $("#payPassword").focus(function(){
      $(this).parent().parent().removeClass('error');
    });

    //检测支付密码
    checkPayPassword(par);

    $("#submitBtn").on('click',function(){
      if(checkForm()){
        $(this).addClass('disabled');
        // 检测余额是否充足
        getAccountsBalance(par);
      }else{
        $("#errorMessage").removeClass('hidden');
        return false;
      }
    });

    function checkForm(){
      if( $("#selectedUserStartAddress option").length > 0 ){
        var selectedUserStartAddress = true;
      }else{
        $(".error.message").text('请先增加起运地址').show();
        var selectedUserStartAddress = false;
      }
      if( $("#addressList tr").length < 1 ){
        $(".error.message").text('请先添加收货人').show();
        var addressList = false;
      }else{
        var addressList = true;
      }

      if( $("#payPassword").val() == '' || $("#payPassword").val() == undefined ||$("#payPassword").val().length<6 ){
        $("#payPassword").parent().parent().addClass('error');
        var payPassword = false;
      }else{
        var payPassword = true;
      }

      if(selectedUserStartAddress&&addressList&&payPassword){
        return true;
      }else{
        return false;
      }
    }
  }
  exports.addStartAddress = function(){
    //新增地址-表单验证
    $('input').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        return false;
      }
    });

    $("input").focus(function(event) {
      $('.error').removeClass('error');
      $(".errorMessage").addClass('hidden');
    });

    $("#submit").on('click',function(){
      if(checkForm()){
        //验证通过
        return true;
      }else{
        //不通过
        $(this).siblings(".errorMessage").removeClass('hidden');
        return false;
      }
    });

    function checkForm(){
      // if( $("#select-addr-input").val() == '' ){
      //   $("#select-addr-input").parent().parent().addClass('error');
      //   var selectAddrInput = false;
      // }else{
      //   var selectAddrInput = true;
      // }

      if( $("#a1").val() == '' ){
        alert('请选择省');
        // $("#selectAddressPro").addClass('error');
        var selectAddrInput = false;
        return false;
      }else{
        var selectAddrInput = true;
      }
      if( $("#a2").val() == '' ){
        alert('请选择市');
        // $("#selectAddressCity").addClass('error');
        return false;
        var selectAddrInput = false;
      }else{
        var selectAddrInput = true;
      }
      if( $("#a3").val() == '' ){
        alert('请选择区');
        // $("#selectAddressCounty").addClass('error');
        return false;
        var selectAddrInput = false;
      }else{
        var selectAddrInput = true;
      }

      if( $("#fullAddress").val() == '' ){
        $("#fullAddress").parent().parent().addClass('error');
        var fullAddress = false;
      }else{
        var fullAddress = true;
      }

      if( $("#shipper").val() == '' ){
        $("#shipper").parent().parent().addClass('error');
        var shipper = false;
      }else{
        var shipper = true;
      }

      if( $("#shipperPhone").val() == '' ){
        $("#shipperPhone").parent().parent().addClass('error');
        var shipperPhone = false;
      }else{
        var shipperPhone = true;
      }

      if(selectAddrInput&&fullAddress&&shipper&&shipperPhone){
        return true;
      }else{
        return false;
      }

    }
  }
  exports.signup = function(root){
    $("input").focus(function(event) {
      $(this).parent().parent().removeClass('error');
      $(this).parent().parent().find('.ui.message').remove();
    });

    $("#submit").on('click',function(){
      if(checkForm()){
        //可以提交
        console.log('ok');
        $('#form1').submit();
      }else{
        //不可提交
        console.log('no');
        return false;
      }
    });

    //检测用户名是否存在
    $("#userLoginName").blur(function(){
      if( !/^[a-z0-9_-]{6,16}$/.test($("#userLoginName").val()) ){
        return false;
      }else{
        $.ajax({
          url:root+'/custom/checkUserName?userLoginName='+$("#userLoginName").val(),
          type:'post',
          success:function(result){
            if(result.info=="1"){
              $(".ui.red.message").remove();
              $("#userLoginName").parent().parent().addClass('').append('<div class="ui red message">用户名已存在</div>');
              return false;
            }
          },
          error:function(){

          }
        });
      }
    });

    //检测邮箱是否存在
    $("#userEmail").blur(function(){
      if( !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($("#userEmail").val()) ){
        return false;
      }else{
        $.ajax({
          url:root+'/custom/checkUserEmail?userEmail='+$("#userEmail").val(),
          type:'post',
          success:function(result){
            if(result.info=="1"){
              $(".ui.red.message").remove();
              $("#userEmail").parent().parent().addClass('').append('<div class="ui red message">邮箱已存在</div>');
              return false;
            }
          },
          error:function(){

          }
        });
      }
    });

    //检测手机号是否存在
    $("#userPhone").on('keyup blur',function(){
      $(this).parent().parent().find('.ui.red.message').remove();
      if( !/^1[3|4|5|7|8][0-9]\d{8}$/.test( $("#userPhone").val() ) ){
        $("#getVerificationCode").addClass('disabled');
        return false;
      }else{
        $.ajax({
          url:root+'/custom/checkUserPhone?userPhone='+$("#userPhone").val(),
          type:'post',
          success:function(result){
            if(result.info=="1"){
              $(".ui.red.message").remove();
              $("#userPhone").parent().parent().addClass('').append('<div class="ui red message">手机号已存在</div>');
              $("#getVerificationCode").addClass('disabled');
              return false;
            }else{
              $("#getVerificationCode").removeClass('disabled');
            }
          },
          error:function(){

          }
        });
      }
    });

    //获取验证码
    $("#getVerificationCode").on('click',function(){
      $(".ui.red.message").remove();
      if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test( $("#userPhone").val() )){
        $("#userPhone").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的手机号</div>');
      }else if( $("#checkCodeBox").hasClass('hidden') ){
        $("#checkCodeBox").removeClass('hidden').find('input').focus();
      }else{
        if( true ){
          $.ajax({
            url:root+'/custom/getCheckcode?userPhone='+$("#userPhone").val()+'&inputRandomCode='+$("#inputRandomCode").val(),
            before:function(){
              $("#getVerificationCode").text(html).addClass(' disabled');
            },
            type:'post',
            success:function(result){
              if(result.success == 'fail'){
                alert(result.info);
              }else if(result.success != 'success'){
                $("#inputRandomCode").parent().parent().addClass('').append('<div class="ui red message">请填写正确的验证码</div>');
              }else{
                // $("#getVerificationCode").off('click');
                var t = 60;
                var timer = setInterval(function(){
                  var html = '剩余'+t+'秒';
                  $("#getVerificationCode").text(html).addClass(' disabled');
                  if(t == 0){
                    clearInterval(timer);
                    $("#getVerificationCode").text('获取验证码').removeClass(' disabled');
                  }
                  t--;
                },1000);
              }
            },
            error:function(){}
          });
        }
      }
    });

    // 检测验证码是否输入正确
    $("#verificationCode").on('blur',function(){
      $(this).parent().parent().find('.ui.red.message,.ui.green.message').remove();
      // if( !/^[0-9]\d{5,}$/.test( $("#verificationCode").val() ) ){
      if( false ){
        // $("#getVerificationCode").addClass('disabled');
        return false;
      }else{
        $.ajax({
          url:root+'/custom/checkCheckcode?userPhone='+$("#userPhone").val()+'&checkCode='+$("#verificationCode").val(),
          type:'post',
          success:function(result){
            if(result.info == "success"){
              $(".ui.red.message").remove();
              $(".vcodeIsOk").remove();
              $("#verificationCode").parent().parent().addClass('').append('<div class="ui green message vcodeIsOk">验证码正确！</div>');
              $("#submit").removeClass('disabled');
              return true;
            }else{
              $(".ui.red.message").remove();
              $("#verificationCode").parent().parent().addClass('').append('<div class="ui red message">验证码不正确，请重新输入！</div>');
              return false;
            }
          },
          error:function(){
            return false;
          }
        });
      }
    });

    function checkForm(){
      $(".ui.red.message").remove();
      if( !/^[a-z0-9_-]{6,16}$/.test($("#userLoginName").val())){
        $("#userLoginName").parent().parent().addClass('').append('<div class="ui red message">不少于6位字符，字母数字组合，不能使用中文</div>');
        var userLoginName = false;
      }else{
        var userLoginName = true;
      }
      if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($("#userEmail").val())){
        $("#userEmail").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的邮箱</div>');
        var userEmail = false;
      }else{
        var userEmail = true;
      }
      if($("#password").val() == '' || $("#password").val().length < 6){
        $("#password").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的密码</div>');
        var password = false;
      }else{
        var password = true;
      }
      if($("#repassword").val() == '' || $("#repassword").val().length < 6 ){
        $("#repassword").parent().parent().addClass('').append('<div class="ui red message">请再次填写正确格式的密码</div>');
        var repassword = false;
      }else{
        var repassword = true;
      }
      if( ( $("#password").val() != $("#repassword").val() ) && ( $("#password").val().length >= 6 ) && ( $("#repassword").val().length >= 6 ) ){
        $("#repassword").parent().parent().addClass('').append('<div class="ui red message">两次输入的密码不同</div>');
        var againPassword = false;
      }else{
        var againPassword = true;
      }

      if($("#payPassword").val() == '' || $("#payPassword").val().length < 6){
        $("#payPassword").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的密码</div>');
        var password = false;
      }else{
        var password = true;
      }
      if($("#repayPassword").val() == '' || $("#repayPassword").val().length < 6 ){
        $("#repayPassword").parent().parent().addClass('').append('<div class="ui red message">请再次填写正确格式的密码</div>');
        var repassword = false;
      }else{
        var repassword = true;
      }
      if( ( $("#payPassword").val() != $("#repayPassword").val() ) && ( $("#payPassword").val().length >= 6 ) && ( $("#repayPassword").val().length >= 6 ) ){
        $("#repayPassword").parent().parent().addClass('').append('<div class="ui red message">两次输入的密码不同</div>');
        var againPassword = false;
      }else{
        var againPassword = true;
      }

      if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test( $("#userPhone").val() )){
        $("#userPhone").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的手机号</div>');
        var userPhone = false;
      }else{
        var userPhone = true;
      }
      if($("#verificationCode").val() == ''){
        $("#verificationCode").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的手机验证码</div>');
        var verificationCode = false;
      }else{
        var verificationCode = true;
      }
      $("#userLoginName").trigger('blur');
      $("#userEmail").trigger('blur');
      $("#userPhone").trigger('blur');

      if(userLoginName&&userEmail&&password&&repassword&&againPassword&&userPhone&&verificationCode){
        return true;
      }else{
        return false;
      }
    }
  }
  exports.editUserPassword = function(){
    $("#form1").validate({
      rules:{
        'user.password':{
          required:true,
          minlength:6
        },
        'newPassword':{
          required:true,
          minlength:6
        },
        'newPasswordAgain':{
          required:true,
          minlength:6,
          equalTo:'#newPassword'
        }
      },
      messages:{
        'user.password':{
          required:'请输入密码',
          minlength:'至少六位字符'
        },
        'newPassword':{
          required:'请输入新密码',
          minlength:'至少六位字符'
        },
        'newPasswordAgain':{
          required:'请再次输入新密码',
          minlength:'至少六位字符',
          equalTo:'两次输入的密码不同'
        }
      },
      errorClass:"validateError"
    });
  }
  exports.editPayPassword = function(){
    $("#form2").validate({
      rules:{
        'oldPassword':{
          required:true,
          minlength:6
        },
        'newPassword':{
          required:true,
          minlength:6
        },
        'newPasswordAgain':{
          required:true,
          minlength:6,
          equalTo:'#newPayPassword'
        }
      },
      messages:{
        'oldPassword':{
          required:'请输入原支付密码',
          minlength:'至少六位字符'
        },
        'newPassword':{
          required:'请输入新支付密码',
          minlength:'至少六位字符'
        },
        'newPasswordAgain':{
          required:'请再次输入新支付密码',
          minlength:'至少六位字符',
          equalTo:'两次输入的密码不同'
        }
      },
      errorClass:"validateError"
    });
  }
  exports.addTotalNurse = function(par){
    par.orderType = 3;

    if(par){
      var data = par;
    }else{
      var data = [];
    }

    var vue = require('modules/vue');
    var box = new Vue({
      el:"#form",
      data:{
        validateForm:false,
        consigneeInfo:'',
        addressList:data
      },
      computed:{
        province:function(){
          return this.consigneeInfo.split('，')[2].split(' ')[0];
        },
        city:function(){
          return this.consigneeInfo.split('，')[2].split(' ')[1];
        },
        county:function(){
          return this.consigneeInfo.split('，')[2].split(' ')[2];
        },
        street:function(){
          return this.consigneeInfo.split('，')[2].split(' ')[3];
        },
        address:function(){
          return this.consigneeInfo.split('，')[2].split(' ')[4];
        },
        zipCode:function(){
          return this.consigneeInfo.split('，')[3];
        },
        phone:function(){
          return this.consigneeInfo.split('，')[1];
        },
      },
      methods:{
        addNewConsignee:function(str){
          if(this.checkFormat(str)){
            this.addressList.push({
              name:this.consigneeInfo.split('，')[0],
              phone:this.phone,
              province:this.province,
              city:this.city,
              county:this.county,
              addressArea:this.province+' '+this.city+' '+this.county,
              street:this.consigneeInfo.split('，')[2].split(' ')[3],
              address:this.consigneeInfo.split('，')[2].split(' ')[4],
              zipCode:this.zipCode
            });
            this.consigneeInfo = '';
          }else{

          }
        },
        checkFormat:function(str){
          //检测收货人信息格式是否正确
          if(this.checkStr(str)){
            this.validateForm = false;
            return true;
          }else{
            this.validateForm = true;
            return false;
          }
        },
        //检测收货人信息是否符合格式
        checkStr:function(str){
          if(str.split('，').length == 4){
            return true;
          }else{
            return false;
          }
        },
        //清空收货人信息
        clearForm:function(){
          this.consigneeInfo = '';
        },
        //删除一行收货人信息
        deleLi:function(ind){
          this.addressList.splice(ind, 1);
        }
      }
    });

    //检测支付密码
    checkPayPassword(par);

    var fullScreenModal = new Vue({
      el:"#fullScreenModal",
      data:{
        detail:null
      },
      computed:{
        startAddressName:function(){
          return $("select[name$=startAddressID]").find('option:selected').text();
        },
        expressName:function(){
          return $("select[name$=expressID]").find('option:selected').text();
        }
      }
    });

    $("#submitBtn").on('click',function(e){

      // 临时
      var obj = $("#vuePage").serializeObject();
      fullScreenModal.detail = obj;
      // 临时

      $("#hasNoEnoughMoney").addClass('hidden');
      // if(true){ // 临时
      if(checkForm()){

        $(this).addClass('disabled');
        // 检测余额是否充足
        getAccountsBalance(par);

      }else{
        $("#errorMessage").removeClass('hidden');
        return false;
      }
    });

    $("input").focus(function(event) {
      $("#errorMessage").hide();
      $(this).parent().parent().parent().removeClass('error');
      $(this).parent().parent().removeClass('error');
    });

    function checkForm(){
      var form1Check = true;
      var form2Check = true;
      var form3Check = true;
      if( $(".totalNurseHd").eq(0).hasClass('checked') ){
        if( $("#startDate").val() == '' ){
          $("#startDate").parent().parent().addClass('error');
          var startDate = false;
        }else{
          var startDate = true;
        }
        var strRegex = "^((https|http):\/\/)?"
            + "(((([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5])[.]{1}){3}([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5]))" // IP>形式的URL- 199.194.52.184
            + "|"
            + "([0-9a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D-]+[.]{1})+[a-zA-Z-]+)" // DOMAIN（域名）形式的URL
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?){1}";
        var reg = new RegExp(strRegex);
        if( !reg.test($("#linkAddress").val()) ){
          $("#linkAddress").parent().parent().addClass('error');
          var linkAddress = false;
        }else {
          var linkAddress = true;
        }
        if( $("#goodsTitle").val() == '' ){
          $("#goodsTitle").parent().parent().addClass('error');
          var goodsTitle = false;
        }else{
          var goodsTitle = true;
        }
        if( $("input[name=useKeyword]").eq(1).is(':checked') ){
          if( $("#tags-input_tagsinput").find('span.tag').length < 1  ){
            $("#tags-input_tagsinput").parent().addClass('error');
            var keyword = false;
          }else if( ($("#tags-input_tagsinput").find('span.tag').length < 30) && ($('input[name$=keywordType]:checked').val() == 1) ){
            $("#tags-input_tagsinput").parent().addClass('error');
            alert('当您选择使用自选关键词时，请至少填写30个关键词，建议您使用系统筛选关键词。');
            var keyword = false;
          }else{
            var keyword = true;
          }
        }else{
          var keyword = true;
        }
        if( $("#payPassword").val() == '' || $("#payPassword").val() == undefined ||$("#payPassword").val().length<6 ){
          $("#payPassword").parent().parent().addClass('error');
          var payPassword = false;
        }else{
          var payPassword = true;
        }

        if( startDate&&linkAddress&&goodsTitle&&keyword&&payPassword ){
          form1Check = true;
        }
        else {
          form1Check =  false;
        }
      }

      if( $(".totalNurseHd").eq(1).hasClass('checked') ){
        var strRegex = "^((https|http):\/\/)?"
            + "(((([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5])[.]{1}){3}([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5]))" // IP>形式的URL- 199.194.52.184
            + "|"
            + "([0-9a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D-]+[.]{1})+[a-zA-Z-]+)" // DOMAIN（域名）形式的URL
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?){1}";
        var reg = new RegExp(strRegex);
        var transactionTypeRadio = $("input[name=transactionTypeRadio]:checked").val();

        // 公共验证部分 开始
        if( $("#tags-input1_tagsinput").find('span.tag').length < 1  ){
          $("#tags-input1_tagsinput").parent().addClass('error');
          var keyword1 = false;
        }else{
          var keyword1 = true;
        }
        if( $("input[name$=enterType]:checked").val() == 2 ){
          if( !reg.test($("#enterTypeLink").val()) ){
            $("#enterTypeLink").parent().addClass('error');
            var enterTypeLink = false;
          }else{
            var enterTypeLink = true;
          }
        }else{
          var enterTypeLink = true;
        }

        if( $("#payPassword").val() == '' || $("#payPassword").val() == undefined ||$("#payPassword").val().length<6 ){
          $("#payPassword").parent().parent().addClass('error');
          var payPassword = false;
        }else{
          var payPassword = true;
        }

        if( $("#shop").val() == '' || $("#shop").val() == undefined ){
          $("#shop").parent().parent().addClass('error');
          var shop = false;
        }else{
          var shop = true;
        }

        if( $("#customAliimNumber").val() == ''||$("#customAliimNumber").val()==undefined ){
          $("#customAliimNumber").parent().parent().addClass('error');
          var customAliimNumber = false;
        }else{
          var customAliimNumber = true;
        }
        // 公共验证部分 结束

        if( transactionTypeRadio == 1 ){
          // 购物车下单
          if( $("#tags-input2_tagsinput").find('span.tag').length < 1  ){
            $("#tags-input2_tagsinput").parent().addClass('error');
            var keyword2 = false;
          }else{
            var keyword2 = true;
          }

          if(keyword1 && keyword2 && payPassword && enterTypeLink &&shop&&customAliimNumber){
            form2Check = true;
          }else{
            form2Check = false;
          }
        }else if( transactionTypeRadio == 2 ){
          // 套餐下单

          if( !reg.test($("#packageLink").val()) ){
            $("#packageLink").parent().parent().addClass('error');
            var packageLink = false;
          }else{
            var packageLink = true;
          }

          if(keyword1 && packageLink && payPassword && enterTypeLink&&shop&&customAliimNumber){
            form2Check = true;
          }else {
            form2Check = false;
          }
        }else if( transactionTypeRadio == 3 ){
          // 直拍单
          if( $("#tags-input2_tagsinput").find('span.tag').length < 1  ){
            $("#tags-input2_tagsinput").parent().addClass('error');
            var keyword6 = false;
          }else{
            var keyword6 = true;
          }

          if(keyword1 && keyword6 && payPassword && enterTypeLink&&shop&&customAliimNumber){
            form2Check = true;
          }else{
            form2Check = false;
          }
        }
      }

      if( $(".totalNurseHd").eq(2).hasClass('checked') ){

        if( $("#selectedUserStartAddress option").length > 0 ){
          var selectedUserStartAddress = true;
        }else{
          $(".error.message").text('请先增加起运地址').show();
          var selectedUserStartAddress = false;
        }

        if(selectedUserStartAddress&&payPassword){
          form3Check = true;
        }else{
          form3Check = false;
        }

      }

      if( !$(".totalNurseHd").eq(0).hasClass('checked') && !$(".totalNurseHd").eq(1).hasClass('checked') && !$(".totalNurseHd").eq(2).hasClass('checked') ){
        alert('请至少选择一种类型！');
        return false;
      }

      if(form1Check && form2Check && form3Check){
        return true;
      }else{
        $("#errorMessage").show();
        return false;
      }
    }
  }
  exports.editTotalNurse = function(data){
    this.addTotalNurse(data);
  }
  exports.payment = function(){

  }
  exports.editUser = function(){
    $("#form").validate({
      rules:{
        'user.email':{
          required:true,
          email:true
        },
        'user.qq':{
          required:false,
          number:true
        },
        'user.cardNumber':{
          required:false,
          number:true,
          minlength:18
        }
      },
      messages:{
        'user.email':{
          required:'请输入邮箱',
          email:'格式不正确'
        },
        'user.qq':{
          number:'必须为数字'
        },
        'user.cardNumber':{
          number:'请输入数字',
          minlength:'18位数字'
        }
      },
      errorClass:"validateError"
    });
  }
  exports.forgetPassword = function(root){
    $("input").focus(function(event) {
      $(this).parent().parent().removeClass('error');
      $(this).parent().parent().find('.ui.message').remove();
    });

    $("#submit").on('click',function(){
      if(checkForm()){
        //可以提交
        // console.log('ok');
        $('#form1').submit();
      }else{
        //不可提交
        // console.log('no');
        return false;
      }
    });

    // 检测手机号是否存在
    $("#userPhone").on('keyup blur',function(){
      $(this).parent().parent().find('.ui.red.message').remove();
      if( !/^1[3|4|5|7|8][0-9]\d{8}$/.test( $("#userPhone").val() ) ){
        $("#getVerificationCode").addClass('disabled');
        return false;
      }else{
        $.ajax({
          url:root+'/custom/checkUserPhone?userPhone='+$("#userPhone").val(),
          type:'post',
          success:function(result){
            if(result.info=="0"){
              $(".ui.red.message").remove();
              $("#userPhone").parent().parent().addClass('').append('<div class="ui red message">该手机号不存在！</div>');
              $("#getVerificationCode").addClass('disabled');
              return false;
            }else{
              $("#getVerificationCode").removeClass('disabled');
            }
          },
          error:function(){

          }
        });
      }
    });

    // 获取验证码
    $("#getVerificationCode").on('click',function(){
      $(".ui.red.message").remove();
      if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test( $("#userPhone").val() )){
        $("#userPhone").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的手机号</div>');
      }else if( $("#checkCodeBox").hasClass('hidden') ){
        $("#checkCodeBox").removeClass('hidden').find('input').focus();
      }else{
        if( true ){
          $.ajax({
            url:root+'/custom/getForgetPasswordCheckcode?userPhone='+$("#userPhone").val()+'&inputRandomCode='+$("#inputRandomCode").val(),
            before:function(){
              $("#getVerificationCode").text(html).addClass(' disabled');
            },
            type:'post',
            success:function(result){
              if(result.success == 'fail'){
                alert(result.info);
              }else if(result.success != 'success'){
                $("#inputRandomCode").parent().parent().addClass('').append('<div class="ui red message">请填写正确的验证码</div>');
              }else{
                // $("#getVerificationCode").off('click');
                var t = 60;
                var timer = setInterval(function(){
                  var html = '剩余'+t+'秒';
                  $("#getVerificationCode").text(html).addClass(' disabled');
                  if(t == 0){
                    clearInterval(timer);
                    $("#getVerificationCode").text('获取验证码').removeClass(' disabled');
                  }
                  t--;
                },1000);
              }
            },
            error:function(){}
          });
        }
      }
    });

    // 检测验证码是否输入正确
    $("#verificationCode").on('blur',function(){
      $(this).parent().parent().find('.ui.red.message,.ui.green.message').remove();
      // if( !/^[0-9]\d{5,}$/.test( $("#verificationCode").val() ) ){
      if( false ){
        // $("#getVerificationCode").addClass('disabled');
        return false;
      }else{
        $.ajax({
          url:root+'/custom/checkCheckcode?userPhone='+$("#userPhone").val()+'&checkCode='+$("#verificationCode").val(),
          type:'post',
          success:function(result){
            if(result.info == "success"){
              $(".ui.red.message").remove();
              $(".vcodeIsOk").remove();
              $("#verificationCode").parent().parent().addClass('').append('<div class="ui green message vcodeIsOk">验证码正确！</div>');
              $("#submit").removeClass('disabled');
              return true;
            }else{
              $(".ui.red.message").remove();
              $("#verificationCode").parent().parent().addClass('').append('<div class="ui red message">验证码不正确，请重新输入！</div>');
              return false;
            }
          },
          error:function(){
            return false;
          }
        });
      }
    });

    function checkForm(){
      $(".ui.red.message").remove();

      if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test( $("#userPhone").val() )){
        $("#userPhone").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的手机号</div>');
        var userPhone = false;
      }else{
        var userPhone = true;
      }

      if($("#verificationCode").val() == ''){
        $("#verificationCode").parent().parent().addClass('').append('<div class="ui red message">请填写正确格式的手机验证码</div>');
        var verificationCode = false;
      }else{
        var verificationCode = true;
      }

      if(($("#password").val() == '') || ($("#password").val().length < 6)){
        $("#password").parent().parent().addClass('').append('<div class="ui red message">请填写不小于6位正确格式的密码</div>');
        var password = false;
      }else {
        var password = true;
      }

      if(($("#againPassword").val() == '') || ($("#againPassword").val().length < 6)){
        $("#againPassword").parent().parent().addClass('').append('<div class="ui red message">请再次填写不小于6位正确格式的密码</div>');
        var againPassword = false;
      }else {
        var againPassword = true;
      }

      $("#againPassword").trigger('blur');

      if(userPhone&&verificationCode&&password&&againPassword){
        return true;
      }else{
        return false;
      }
    }
  }
});
