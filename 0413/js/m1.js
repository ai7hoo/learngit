/*
 * @Author: Quinn
 * @Date:   2015-12-25 08:36:44
 * @Last Modified by:   Quinn
 * @Last Modified time: 2016-03-10 22:03:56
 */

define(function(require,exports,module){
  var $ = require('jquery');

  exports.addPageView = function(data){
    //流量单价格计算

    resetPrice();


    $("select[name$=pageViewNumber]").change(function() {
      resetPrice();
      $('#price').val($(this).find('option:selected').attr('price'));
    });

    $("input[name$=duration]").change(function() {
      resetPrice();
      $('#discount').val($(this).attr('remark'));
    });

    function resetPrice(){
      var price = $("select[name$=pageViewNumber]").find('option:selected').attr('price');
      var duration = $("input[name$=duration]:checked").val();
      var operator = $("input[name$=duration]:checked").attr('operator');
      var discount = $("input[name$=duration]:checked").attr('discount');// 获取到的值大于0小于等于10

      var totalPrice = price*duration;
      if(operator == 1){
        totalPrice = totalPrice - discount;
        $("#formulas").html(' = '+price+' * '+duration+' - '+discount);
        $("#totalPageViewPrice").html(' = '+price+' * '+duration+' - '+discount);
      }else if(operator == 2){
        totalPrice = totalPrice*(discount/10);
        $("#formulas").html(' = '+price+' * '+duration+' * '+(discount/10));
        $("#totalPageViewPrice").html(' = '+price+' * '+duration+' * '+(discount/10));
      }else if(operator == 0){
        totalPrice = totalPrice - discount;
        $("#formulas").html(' = '+price+' * '+duration+' - '+discount);
        $("#totalPageViewPrice").html(' = '+price+' * '+duration+' - '+discount);
      }
      $('#price').val(price);
      $("#discount").val(discount);
      $('#totalPrice').val(totalPrice.toFixed(2));
      $('#total_price_span').html(totalPrice.toFixed(2));

      return totalPrice;
    }
  }

  exports.addTransaction = function(){
    //交易单价格计算

    //计算商品总价
    setInterval(function(){
      var a = ( $("input[name$=singlePrice]").val()-$("#favouredPrice").val() ) * $("input[name$=buyNum]").val();
      $("#tPrice").val(a.toFixed(2));
    },500);

    setInterval(function(){
      var transactionTypeRadio = $("input[name=transactionTypeRadio]:checked").val();
      var aliimRankPrice = $("#aliimRankSelect").find('option:selected').attr('price');//旺旺等级价格
      $("#aliimRankSelect").change(function(event) {
        aliimRankPrice = $(this).find('option:selected').attr('price');//旺旺等级价格
      });
      var intervalTimePrice =$("#intervalTimeSelect").find('option:selected').attr('price');//间隔时间价格
      $("#intervalTimeSelect").change(function(event) {
        intervalTimePrice = $(this).find('option:selected').attr('price');//间隔时间价格
      });
      var totalPrice = $("#tPrice").val();//商品总价
      var transactionNum = $("input[name$=transactionNum]").val();//交易笔数
      var commissionIDPrice = getPriceByCommissionID(transactionTypeRadio,totalPrice);

      var allPrice = ((+aliimRankPrice)+(+intervalTimePrice)+(+totalPrice)+(+commissionIDPrice))*(+transactionNum);
      $("#formulas").html( ' = ( '+aliimRankPrice+' + '+intervalTimePrice+' + '+totalPrice+' + '+commissionIDPrice+' ) * '+transactionNum );
      $("#totalTransactionPrice").html( ' = ( '+aliimRankPrice+' + '+intervalTimePrice+' + '+totalPrice+' + '+commissionIDPrice+' ) * '+transactionNum );
      $("#total_price_span2").html(allPrice.toFixed(2));
      $("input[name$=allPrice]").val(allPrice.toFixed(2));
    },500)

    // 计算价格区间佣金
    function getPriceByCommissionID(type,price){
      var commissionID = $("input[name=commission]");
      for(var i=0;i<commissionID.length;i++){
        var startprice = commissionID.eq(i).attr('startprice');
        var endprice = commissionID.eq(i).attr('endprice');
        if(((+price) >= (+startprice)) && ((+price) <= (+endprice))){
          if(type == 1){
            return commissionID.eq(i).attr('cartcommission');
          }else if(type == 2){
            return commissionID.eq(i).attr('mealcommission');
          }else if(type == 3){
            return commissionID.eq(i).attr('pencommission');
          }
        }else if( i == commissionID.length-1 ){

          if(type == 1){
            return commissionID.eq(i).attr('cartcommission');
          }else if(type == 2){
            return commissionID.eq(i).attr('mealcommission');
          }else if(type == 3){
            return commissionID.eq(i).attr('pencommission');
          }

        }
      }
    }
  }

  exports.addExpressOrder = function(){
    //快递单价格计算
    $("#selectedExpress select").change(function(event) {
      var selectedOption = $("#selectedExpress select option:selected");
      var expressName = selectedOption.text();
      var price = selectedOption.attr('price');
      $("#unitPrice").val(price);

      $("#expressDescription").html('所选快递：' + expressName + '&nbsp;&nbsp;&nbsp;&nbsp;价格：'+price);
      var addressListLength = $("#addressListLength").text();

      $("#formulas").html(' = '+price+' * '+addressListLength);
      $("#total_price_span3").text( (price*addressListLength).toFixed(2) );
      $(".expressClass input[name$=totalPrice]").val( (price*addressListLength).toFixed(2) );
    });
    $("#selectedExpress select").trigger('change');
  }

  exports.addTotalNurse = function(){
    //全托单价格计算
    //加载流量的价格计算。
    this.addPageView({isTotalNurse:true});
    //加载交易单价格计算
    this.addTransaction();
    //加载快递单价格计算
    this.addExpressOrder();

    setInterval(function(){
      var p1 = parseFloat($("#total_price_span").text());
      var p2 = parseFloat($("#total_price_span2").text());
      var p3 = 0;

      var ap = 0;
      var addStr = ' = ';

      if( $(".totalNurseHd").eq(0).hasClass('checked') ){
        ap += p1;
        addStr += p1;
      }else{
        addStr += '0';
      }

      if( $(".totalNurseHd").eq(1).hasClass('checked') ){
        ap += p2;
        addStr += ' + '+p2;
      }else{
        addStr += ' + 0';
      }

      if( $(".totalNurseHd").eq(2).hasClass('checked') ){
        ap += p3;
        // addStr += ' + '+p3;
      }else{
        // addStr += ' + 0';
      }

      $("#totalFormulas").html(addStr);
      $("#totalNursePrice").text(ap.toFixed(2));
      $("#totalNurseRealPrice").val(ap.toFixed(2));
    },500);
  }
});
